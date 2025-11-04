import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ShoppingCart, Search, Cloud, Cpu, Zap, Droplet, BarChart3, MessageSquare, Cog, Home, Plug, Wifi, DoorOpen, Shield, Camera, Music, Phone, Server, Lock, Waves, Radio, Headphones, FileText, Video, HelpCircle, Network, Bell, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SearchDialog } from './SearchDialog';
import kloudnxProductImage from 'figma:asset/f4e7e08a8f77640a41e6d024869598c4050d7f0d.png';
import poolnxProductImage from 'figma:asset/6b039210627c783e16b5de6f2c223b0fa9c5ae6c.png';
import emergynxProductImage from 'figma:asset/dca0fdeb28cc7c96bb88e49f32acb378db2249c0.png';
import infiniKnxProductImage from 'figma:asset/6710d8b072ed209d48084fa9c9d51566122aedd8.png';
import speaknxProductImage from 'figma:asset/5745f25880afe1bc24c217e68bbc5b290ffbbe5f.png';
import modnxProductImage from 'figma:asset/18b368059fa728d4fc03cce97562509be61e621e.png';

const products = [
  {
    name: "Kloud'nX",
    href: '#kloudnx',
    icon: Cloud,
    description: 'Plateforme cloud KNX complète',
    features: ['Accès distant', 'Visualisation', 'Automatisation'],
    image: kloudnxProductImage
  },
  {
    name: "Pool'nX",
    href: '#poolnx',
    icon: Droplet,
    description: 'Gestion intelligente de piscine',
    features: ['Monitoring', 'Contrôle pH', 'Économie d\'énergie'],
    image: poolnxProductImage
  },
  {
    name: "Emergy'nX",
    href: '#emergynx',
    icon: BarChart3,
    description: 'Optimisation énergétique avancée',
    features: ['Analyse temps réel', 'Prédiction', 'Réduction conso'],
    image: emergynxProductImage
  },
  {
    name: 'Infini KNX',
    href: '#infinix',
    icon: Cpu,
    description: 'Module de contrôle rotatif KNX',
    features: ['4 canaux', 'Rotatif', 'Intuitif'],
    image: infiniKnxProductImage
  },
  {
    name: "Speak'nX",
    href: '#speaknx',
    icon: MessageSquare,
    description: 'Haut-parleur KNX',
    features: ['Audio intégré', 'Sonorisation', 'Qualité audio'],
    image: speaknxProductImage
  },
  {
    name: "Mod'nX",
    href: '#modnx',
    icon: Cog,
    description: 'Modules KNX personnalisables',
    features: ['Modulaire', 'Flexible', 'Évolutif'],
    image: modnxProductImage
  },
];

const integrations = [
  {
    category: 'Contrôle d\'accès & Sécurité',
    items: [
      { name: '2N', href: '#integration-2n', icon: Phone, description: 'Interphones IP' },
      { name: 'DoorBird', href: '#integration-doorbird', icon: DoorOpen, description: 'Portiers vidéo' },
      { name: 'Hikvision', href: '#integration-hikvision', icon: Camera, description: 'Vidéosurveillance' },
      { name: 'Nuki', href: '#integration-nuki', icon: Lock, description: 'Serrures connectées' },
    ]
  },
  {
    category: 'Climatisation',
    items: [
      { name: 'Airzone', href: '#integration-airzone', icon: Wifi, description: 'Climatisation zonée + Aidoo' },
    ]
  },
  {
    category: 'Gestion de Piscine',
    items: [
      { name: 'PoolCop', href: '#integration-poolcop', icon: Waves, description: 'Régulation piscine' },
      { name: 'Klereo', href: '#integration-klereo', icon: Waves, description: 'Régulation piscine' },
    ]
  },
  {
    category: 'Audio & Multimédia',
    items: [
      { name: 'Crestron', href: '#integration-crestron', icon: Headphones, description: 'Automatisation premium' },
      { name: 'Sonos', href: '#integration-sonos', icon: Music, description: 'Audio multiroom' },
    ]
  },
  {
    category: 'Bornes de Recharge VE',
    items: [
      { name: 'ABB Terra AC', href: '#integration-terraac', icon: Zap, description: 'Borne AC ABB' },
      { name: 'Evlink Pro', href: '#integration-evlinkpro', icon: Zap, description: 'Schneider Electric' },
      { name: 'Lektrico', href: '#integration-lektrico', icon: Zap, description: 'Charge intelligente' },
    ]
  },
  {
    category: 'IoT & Protocoles',
    items: [
      { name: 'KNX', href: '#integration-knx', icon: Network, description: 'Standard mondial' },
      { name: 'HomeKit', href: '#integration-homekit', icon: Home, description: 'Apple HomeKit' },
      { name: 'Pushover', href: '#integration-pushover', icon: MessageSquare, description: 'Notifications push' },
      { name: 'Shelly', href: '#integration-shelly', icon: Zap, description: 'Appareils IoT' },
      { name: 'Modbus TCP/RTU', href: '#integration-modbus', icon: Server, description: 'Protocole industriel' },
      { name: 'Gude', href: '#integration-gude', icon: Plug, description: 'PDU intelligents' },
    ]
  },
];

const services = [
  { 
    name: "Kloud'nX Abonnements", 
    href: '#kloudnx-subscription', 
    description: 'Abonnements cloud mensuels et annuels',
    icon: Cloud
  },
  { 
    name: "Kloud'nX Licences", 
    description: 'Licences logicielles pour Kloud\'nX',
    icon: Shield,
    subItems: [
      {
        name: "Chart'nX",
        href: '#chartnx',
        description: 'Supervision énergétique intuitive',
        icon: BarChart3,
        color: 'emerald'
      },
      {
        name: "Boss'nX",
        href: '#bossnx',
        description: 'Building Operating Smart System',
        icon: Building2,
        color: 'blue',
        badge: 'Premium'
      }
    ]
  },
];

const support = [
  { name: 'Blog', href: '#blog', icon: FileText, description: 'Actualités et articles' },
  { name: 'Documentation', href: 'https://doc.can-nx.com', external: true, icon: HelpCircle, description: 'Guides techniques' },
  { name: 'Guide vidéo', href: 'https://www.youtube.com/@cannx7140/videos', external: true, icon: Video, description: 'Tutoriels vidéo' },
];

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [integrationsMenuOpen, setIntegrationsMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (integrationsMenuOpen) closeIntegrationsMenu();
        if (productsMenuOpen) closeProductsMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [integrationsMenuOpen, productsMenuOpen]);

  // Global search keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (integrationsMenuOpen || productsMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [integrationsMenuOpen, productsMenuOpen]);

  const toggleDropdown = (name: string) => {
    if (name === 'integrations') {
      setIntegrationsMenuOpen(true);
    } else if (name === 'produits') {
      setProductsMenuOpen(true);
    } else {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  const closeIntegrationsMenu = () => {
    setIntegrationsMenuOpen(false);
  };

  const closeProductsMenu = () => {
    setProductsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <Logo className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8" ref={dropdownRef}>
            {/* Accueil */}
            <a
              href="#home"
              className="text-gray-700 hover:text-[#0CB14B] transition-colors"
            >
              Accueil
            </a>

            {/* Produits - Full Screen Menu */}
            <button
              onClick={() => toggleDropdown('produits')}
              className="flex items-center gap-1 text-gray-700 hover:text-[#0CB14B] transition-colors"
            >
              Produits
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Intégrations - Full Screen Menu */}
            <button
              onClick={() => toggleDropdown('integrations')}
              className="flex items-center gap-1 text-gray-700 hover:text-[#0CB14B] transition-colors"
            >
              Intégrations
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center gap-1 text-gray-700 hover:text-[#0CB14B] transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-4 space-y-2">
                    {services.map((service) => (
                      <div key={service.name}>
                        {service.href ? (
                          // Service avec lien direct
                          <a
                            href={service.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {service.icon && (
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 flex items-center justify-center flex-shrink-0">
                                <service.icon className="w-5 h-5 text-[#0CB14B]" />
                              </div>
                            )}
                            <div>
                              <div className="text-gray-900 hover:text-[#0CB14B] transition-colors">
                                {service.name}
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                            </div>
                          </a>
                        ) : (
                          // Service avec sous-items (Licences)
                          <div className="space-y-2">
                            <div className="flex items-start gap-3 p-3">
                              {service.icon && (
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                                  <service.icon className="w-5 h-5 text-indigo-600" />
                                </div>
                              )}
                              <div>
                                <div className="text-gray-900 font-medium">
                                  {service.name}
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                              </div>
                            </div>
                            
                            {/* Sub-items */}
                            {service.subItems && (
                              <div className="ml-4 pl-4 border-l-2 border-gray-200 space-y-1">
                                {service.subItems.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`group flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-br transition-all ${
                                      subItem.color === 'emerald' 
                                        ? 'hover:from-emerald-50 hover:to-teal-50 hover:border-emerald-200' 
                                        : 'hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200'
                                    } border border-transparent`}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0 ${
                                      subItem.color === 'emerald'
                                        ? 'from-emerald-500 to-teal-600'
                                        : 'from-blue-500 to-indigo-600'
                                    }`}>
                                      <subItem.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <span className={`text-gray-900 group-hover:transition-colors ${
                                          subItem.color === 'emerald' ? 'group-hover:text-emerald-600' : 'group-hover:text-blue-600'
                                        }`}>
                                          {subItem.name}
                                        </span>
                                      </div>
                                      <p className="text-xs text-gray-500 mt-0.5">{subItem.description}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('support')}
                className="flex items-center gap-1 text-gray-700 hover:text-[#0CB14B] transition-colors"
              >
                Support
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'support' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'support' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-4">
                    {support.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 hover:text-[#0CB14B] transition-colors">
                            {item.name}
                          </div>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Connexion Cloud */}
            <a
              href="https://can-nx.cloud/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#0CB14B] transition-colors"
            >
              Connexion Cloud
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#0CB14B] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group"
              title="Rechercher (Cmd+K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline">Rechercher</span>
              <kbd className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-white border border-gray-300 rounded">
                <span>⌘</span>K
              </kbd>
            </button>

            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('https://can-nx.shop', '_blank')}
            >
              <ShoppingCart className="w-4 h-4" />
              Shop
            </Button>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLanguage(lang)}
                  className={`text-xl transition-opacity ${
                    currentLanguage.code === lang.code ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#0CB14B] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto">
            <div className="space-y-2">
              {/* Accueil */}
              <a
                href="#home"
                className="block px-4 py-2 text-gray-700 hover:text-[#0CB14B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </a>

              {/* Produits */}
              <div>
                <div className="px-4 py-2 font-medium text-gray-900">Produits</div>
                <div className="pl-8 space-y-2">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2 text-gray-600 hover:text-[#0CB14B]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Intégrations */}
              <div>
                <div className="px-4 py-2 font-medium text-gray-900">Intégrations</div>
                <div className="pl-8 space-y-2">
                  {integrations.flatMap(cat => cat.items).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-600 hover:text-[#0CB14B]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="px-4 py-2 font-medium text-gray-900">Services</div>
                <div className="pl-8 space-y-2">
                  {services.map((service) => (
                    <div key={service.name}>
                      {service.href ? (
                        // Service avec lien direct
                        <a
                          href={service.href}
                          className="block px-4 py-2 text-gray-600 hover:text-[#0CB14B]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </a>
                      ) : (
                        // Service avec sous-items (Licences)
                        <div>
                          <div className="px-4 py-2 text-gray-700 font-medium">
                            {service.name}
                          </div>
                          {service.subItems && (
                            <div className="pl-8 space-y-1">
                              {service.subItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`flex items-center gap-2 px-4 py-2 text-gray-600 hover:${
                                    subItem.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                                  }`}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <subItem.icon className="w-4 h-4" />
                                  <span>{subItem.name}</span>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div>
                <div className="px-4 py-2 font-medium text-gray-900">Support</div>
                <div className="pl-8 space-y-2">
                  {support.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-2 text-gray-600 hover:text-[#0CB14B]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Connexion Cloud */}
              <a
                href="https://can-nx.cloud/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-700 hover:text-[#0CB14B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion Cloud
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="block px-4 py-2 text-gray-700 hover:text-[#0CB14B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>

              {/* Mobile Search Button */}
              <div className="px-4 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 w-full"
                  onClick={() => {
                    setSearchOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Search className="w-4 h-4" />
                  Rechercher
                </Button>
              </div>

              {/* Mobile Shop Button */}
              <div className="px-4 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 w-full"
                  onClick={() => {
                    window.open('https://can-nx.shop', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Shop
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Full Screen Integrations Menu */}
      <AnimatePresence>
        {integrationsMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={closeIntegrationsMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-0 top-0 z-[70] bg-white shadow-2xl"
              style={{ maxHeight: '100vh', overflowY: 'auto' }}
            >
              {/* Menu Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-4">
                      <Logo className="h-10 w-auto" />
                      <div>
                        <h2 className="text-2xl text-gray-900">Intégrations</h2>
                        <p className="text-sm text-gray-500">50+ Systèmes & Protocoles</p>
                      </div>
                    </div>
                    <button
                      onClick={closeIntegrationsMenu}
                      className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Menu Content */}
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {integrations.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                    >
                      <div className="mb-6">
                        <h3 className="text-lg text-gray-900 pb-3 border-b-2 border-gradient-to-r from-[#0CB14B] to-[#cd2653]">
                          {category.category}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05, duration: 0.3 }}
                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 border border-transparent hover:border-gray-200 transition-all"
                            onClick={closeIntegrationsMenu}
                          >
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#0CB14B] group-hover:to-[#cd2653] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md">
                              <item.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-gray-900 group-hover:text-[#0CB14B] transition-colors">
                                {item.name}
                              </div>
                              <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-16 pt-8 border-t border-gray-200 text-center"
                >
                  <p className="text-gray-600 mb-4">
                    Vous ne trouvez pas votre système ? Contactez-nous pour une intégration personnalisée.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      onClick={() => {
                        closeIntegrationsMenu();
                        window.location.hash = 'integrations';
                      }}
                      className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                    >
                      Voir toutes les intégrations
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        closeIntegrationsMenu();
                        window.location.hash = 'contact';
                      }}
                    >
                      Nous contacter
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full Screen Products Menu */}
      <AnimatePresence>
        {productsMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={closeProductsMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-0 top-0 z-[70] bg-white shadow-2xl"
              style={{ maxHeight: '100vh', overflowY: 'auto' }}
            >
              {/* Menu Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-4">
                      <Logo className="h-10 w-auto" />
                      <div>
                        <h2 className="text-2xl text-gray-900">Produits Can-nX</h2>
                        <p className="text-sm text-gray-500">Solutions d'automatisation KNX & IoT</p>
                      </div>
                    </div>
                    <button
                      onClick={closeProductsMenu}
                      className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Menu Content */}
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {products.map((product, index) => (
                    <motion.a
                      key={product.name}
                      href={product.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      onClick={closeProductsMenu}
                    >
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0CB14B]/5 to-[#cd2653]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content - Vertical Layout */}
                      <div className="relative z-10 flex flex-col">
                        {/* Product Image - Top */}
                        <div className="mb-6 h-48 flex items-center justify-center bg-white/50 rounded-xl p-4 group-hover:bg-white transition-colors">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Name & Badge */}
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="text-xl text-gray-900 group-hover:text-[#0CB14B] transition-colors">
                            {product.name}
                          </h3>
                          <div className="text-sm px-3 py-1 bg-[#0CB14B]/10 text-[#0CB14B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            En savoir plus →
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4">
                          {product.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#0CB14B] rounded-full group-hover:scale-150 transition-transform" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Featured Section - Kloud'nX Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="mt-12 p-8 bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 rounded-2xl border-2 border-[#0CB14B]/20"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[#0CB14B] text-white text-sm rounded-full mb-4">
                        ⭐ Produit Vedette
                      </div>
                      <h3 className="text-2xl text-gray-900 mb-2">Kloud'nX</h3>
                      <p className="text-gray-600 mb-6">
                        Notre plateforme cloud KNX la plus complète pour un contrôle total de votre installation.
                      </p>
                      <div className="flex gap-3">
                        <Button
                          onClick={() => {
                            closeProductsMenu();
                            window.location.hash = 'kloudnx';
                          }}
                          className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                        >
                          Découvrir Kloud'nX
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            closeProductsMenu();
                            window.location.hash = 'kloudnx-subscription';
                          }}
                        >
                          Voir les abonnements
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ImageWithFallback
                        src={kloudnxProductImage}
                        alt="Kloud'nX"
                        className="w-full max-w-sm h-auto object-contain"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Footer CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="mt-12 pt-8 border-t border-gray-200 text-center"
                >
                  <p className="text-gray-600 mb-4">
                    Besoin d'aide pour choisir ? Notre équipe est là pour vous guider.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      onClick={() => {
                        closeProductsMenu();
                        window.location.hash = 'products';
                      }}
                      className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                    >
                      Voir tous les produits
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        closeProductsMenu();
                        window.location.hash = 'contact';
                      }}
                    >
                      Nous contacter
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
