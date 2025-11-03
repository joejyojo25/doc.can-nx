import { motion } from 'motion/react';
import { useState } from 'react';
import { BarChart3, Euro, Home, FileText, ShoppingCart, Share2, ExternalLink, Check, Zap, Sun, Car, Droplets, Thermometer, Plug2, ChevronRight, Globe, Award, TrendingUp, Plug } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FAQ } from '../components/FAQ';
import { ScrollProgress } from '../components/ScrollProgress';
import { StickyCTA } from '../components/StickyCTA';
import { LiveStats, defaultProductStats } from '../components/LiveStats';
import { CertificationBadges } from '../components/CertificationBadges';
import { InteractiveGallery } from '../components/InteractiveGallery';
import { ProductStickyNav } from '../components/ProductStickyNav';
import { VolumePricing } from '../components/VolumePricing';
import { ProductConfigurator } from '../components/ProductConfigurator';
import { CompatibilityChecker } from '../components/CompatibilityChecker';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { TechnicalDocumentation } from '../components/TechnicalDocumentation';
import { DistributorLocator } from '../components/DistributorLocator';
import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import emergynxProduct from 'figma:asset/dca0fdeb28cc7c96bb88e49f32acb378db2249c0.png';
import ecosystemImage from 'figma:asset/64ee7119b2148f6e394f5074a9c9aef0c6ac1e0c.png';

const emergynxFAQItems = [
  {
    question: "Qu'est-ce que Emergy'nX ?",
    answer: "Emergy'nX est une solution HEMS (Home Energy Management System) KNX qui optimise la production, la consommation et le stockage d'énergie. Elle propose une visualisation claire et des actions pour réduire votre consommation énergétique."
  },
  {
    question: "Comment Chart'nX m'aide à économiser de l'énergie ?",
    answer: "Chart'nX analyse vos données de consommation pour identifier les tendances et domaines d'amélioration. Il vous permet de repérer les gros consommateurs, vérifier le bon fonctionnement des équipements et optimiser votre abonnement électrique."
  },
  {
    question: "Quels types de consommation peuvent être monitorés ?",
    answer: "Chart'nX peut monitorer la consommation totale, le chauffage, la climatisation, l'eau chaude sanitaire, la piscine, la recharge de véhicules électriques, la production photovoltaïque et le stockage d'énergie."
  },
  {
    question: "Est-ce compatible avec mon système domotique ?",
    answer: "Oui, Emergy'nX est compatible avec les écrans domotiques type Crestron, Control4, et autres systèmes KNX. Les données peuvent être visualisées directement depuis votre interface domotique."
  },
  {
    question: "Qui peut bénéficier de cette solution ?",
    answer: "Emergy'nX s'adresse aux particuliers comme aux entreprises - maisons individuelles, immeubles de logements, entreprises industrielles - toute installation cherchant à optimiser sa consommation énergétique."
  },
];

const features = [
  {
    icon: BarChart3,
    title: "Comprendre vos consommations",
    description:
      "Comprendre comment votre installation consomme, c'est comprendre sa facture d'énergies élevée. En visualisant votre historique cela permet d'agir en temps réel et d'ajuster ses actions, vérifier le bon fonctionnement des équipements…",
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Euro,
    title: 'Economiser',
    description:
      "Économiser votre argent, préserver les ressources naturelles… le moniteur d'énergies vous aide à prendre conscience de vos gestes au quotidien sans action intrusive. Il vous permet de repérer les gros consommateurs ou équipements qui ne sont pas bien réglés.",
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Home,
    title: 'Garder le contrôle de votre énergie',
    description:
      "Vous souhaitez faire prendre en main votre impact écologique, être producteur de votre énergie, ou être moins dépendant du prix de l'énergie, Chart'nX met à disposition toutes les informations à votre système domotique pour prendre les décisions en temps réel afin d'être plus efficient tout en conservant votre confort.",
    color: 'from-blue-500 to-cyan-500',
  },
];

const ecosystemCategories = [
  {
    id: 'solar',
    title: 'Onduleurs photovoltaïques',
    icon: Sun,
    color: 'from-yellow-500 to-orange-500',
    brands: ['Huawei', 'Fronius', 'SolarEdge', 'SMA'],
    description: 'Optimisez votre production solaire et votre autoconsommation'
  },
  {
    id: 'ev',
    title: 'Chargeurs VE',
    icon: Car,
    color: 'from-blue-500 to-cyan-500',
    brands: ['ABB', 'Schneider Electric', 'LEKTRICO'],
    description: 'Rechargez intelligemment votre véhicule électrique'
  },
  {
    id: 'heating',
    title: 'Chauffage / Climatisation',
    icon: Thermometer,
    color: 'from-red-500 to-pink-500',
    brands: ['Daikin', 'Mitsubishi Electric', 'LG', 'Haier', 'Fujitsu', 'Bosch', 'Hitachi', 'Hisense', 'Zennio'],
    description: 'Gérez efficacement votre confort thermique'
  },
  {
    id: 'water',
    title: 'Eau chaude sanitaire',
    icon: Droplets,
    color: 'from-cyan-500 to-blue-500',
    brands: ['Siemens', 'Daikin', 'Danfoss', 'Viessmann'],
    description: 'Optimisez la production d\'eau chaude'
  },
  {
    id: 'pool',
    title: 'Systèmes de piscine',
    icon: Droplets,
    color: 'from-teal-500 to-cyan-500',
    brands: ['PoolCop', 'Klereo', 'Astralpool'],
    description: 'Contrôlez et économisez l\'énergie de votre piscine'
  },
  {
    id: 'meters',
    title: 'Compteurs',
    icon: Plug2,
    color: 'from-purple-500 to-pink-500',
    brands: ['Legrand', 'ABB', 'Hager', 'Shelly'],
    description: 'Mesurez précisément votre consommation'
  },
];

const technicalSpecs = [
  { icon: Zap, label: 'KNX TP, S-Mode (ETS)', value: '30V, 5mA' },
  { icon: Globe, label: 'Ethernet', value: '10/100Mbps' },
  { icon: Plug, label: 'Alimentation', value: '9-30V DC, 2W' },
  { icon: TrendingUp, label: 'Température', value: '-25°/+55°C' },
  { icon: Award, label: 'Dimensions', value: 'Rail DIN - 2 Modules - 35mm' },
  { icon: Globe, label: 'Fabrication', value: 'Fabriqué en Europe' },
  { icon: Zap, label: 'Connexions', value: "Jusqu'à 12 tunneling" },
  { icon: Check, label: 'Garantie', value: '2 ans' },
];

const galleryImages = [
  { src: emergynxProduct, alt: "Emergy'nX - Vue d'ensemble", caption: 'Module KNX Rail DIN pour gestion énergétique' },
  { src: 'https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZW5lcmd5fGVufDF8fHx8MTc2MjEzNjA4Mnww&ixlib=rb-4.1.0&q=80&w=1080', alt: "Emergy'nX - Production solaire", caption: 'Optimisation production photovoltaïque' },
  { src: 'https://images.unsplash.com/photo-1745393753678-c376bf8664d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc2MjE3ODcyM3ww&ixlib=rb-4.1.0&q=80&w=1080', alt: "Emergy'nX - Système de gestion", caption: 'Gestion énergétique intelligente' },
];

const navItems = [
  { id: 'features', label: 'Caractéristiques' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'ecosystem', label: 'Écosystème' },
  { id: 'why-emergynx', label: 'Pourquoi Emergy\'nX' },
  { id: 'advantages', label: 'Avantages' },
  { id: 'applications', label: 'Applications' },
  { id: 'specs', label: 'Spécifications' },
  { id: 'configurator', label: 'Configurateur' },
  { id: 'compatibility', label: 'Compatibilité' },
  { id: 'testimonials', label: 'Témoignages' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'distributors', label: 'Distributeurs' },
  { id: 'faq', label: 'FAQ' },
];

const energyStats = [
  { icon: Zap, label: 'Installations Actives', value: 1250, suffix: '+' },
  { icon: Euro, label: 'Économie Moyenne', value: 35, suffix: '%' },
  { icon: TrendingUp, label: 'Disponibilité', value: 99.8, suffix: '%' },
  { icon: Award, label: 'Marques', value: 40, suffix: '+' },
];

export function EmergynxPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductStickyNav items={navItems} />
      <StickyCTA 
        productName="Emergy'nX - Energy Manager" 
        shopUrl="https://can-nx.shop/fr/66-produit-cannx"
        docsUrl="https://doc.can-nx.com/"
      />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-[80vh] flex flex-col overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-yellow-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Breadcrumb at top */}
        <ProductBreadcrumb productName="Emergy'nX" className="relative" />

        {/* Hero Content */}
        <div className="relative flex-1 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Emergy'nX
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-800">
              Energy Manager - Optimisez votre énergie
            </h2>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
              <ImageWithFallback
                src={emergynxProduct}
                alt="Emergy'nX Energy Manager"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Live Stats */}
          <LiveStats stats={energyStats} />
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Caractéristiques principales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border border-gray-200/50">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Galerie Emergy'nX</h2>
          </motion.div>
          <InteractiveGallery images={galleryImages} />
        </div>
      </section>

      {/* Certification Badges */}
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CertificationBadges />
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl mb-4">Écosystème d'intégrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emergy'nX s'intègre avec les plus grandes marques pour une gestion énergétique complète et optimale
            </p>
          </motion.div>

          {/* Ecosystem Circular Diagram */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Card className="p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <ImageWithFallback
                  src={ecosystemImage}
                  alt="Écosystème Can-nX - Toutes les intégrations"
                  className="w-full h-auto rounded-lg"
                />
              </Card>
              
              {/* Animated pulse center */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/20 rounded-full pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Interactive Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setActiveCategory(category.id)}
                onHoverEnd={() => setActiveCategory(null)}
              >
                <Card 
                  className={`p-6 cursor-pointer transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-200/50 ${
                    activeCategory === category.id 
                      ? 'shadow-2xl scale-105 border-2 border-green-500' 
                      : 'hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeCategory === category.id ? 'auto' : 0,
                      opacity: activeCategory === category.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                      {category.brands.map((brand) => (
                        <div key={brand} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{brand}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <div className="mt-4 flex items-center text-green-600 text-sm">
                    <span className="mr-1">{category.brands.length} marques compatibles</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">40+</div>
              <div className="text-gray-600">Marques partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">6</div>
              <div className="text-gray-600">Catégories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">100%</div>
              <div className="text-gray-600">Interopérable</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">KNX</div>
              <div className="text-gray-600">Standard ouvert</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Emergy'nX */}
      <section id="why-emergynx" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Pourquoi Emergy'nX ?</h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
              <div className="text-gray-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  Chart'nX est une solution de gestion de l'énergie en tant que "as a service". Nous proposons depuis un espace personnel une visualisation claire de la consommation d'énergie totale, ainsi que la répartition des grands consommateurs. Nous prenons également en compte la production et le stockage d'énergie. Nous analysons tous les paramètres et mettons ensuite en place des actions pour optimiser la consommation d'énergie.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Avantages</h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
              <div className="text-gray-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  Chart'nX est une solution de gestion de l'énergie qui propose trois fonctionnalités clés pour aider les particuliers et les entreprises à optimiser leur consommation d'énergie. La fonctionnalité de surveillance propose aux clients différents packs de compteurs pour suivre leur consommation d'énergie dans divers domaines, tels que la consommation d'énergie totale, le chauffage, la climatisation, l'eau chaude sanitaire, la piscine, la recharge de véhicules électriques, la production photovoltaïque et le stockage. La fonction d'analyse évalue ensuite les données de consommation d'énergie du client pour identifier les tendances et les domaines d'amélioration, tels que le dimensionnement de l'abonnement d'énergie électrique du client, la consommation d'équipements pendant les différentes saisons et les pics de puissance. Enfin, la fonction d'actions met en œuvre un algorithme de gestion de l'énergie basé sur l'analyse pour aider le client à optimiser sa consommation d'énergie et recevoir des alertes si nécessaire.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Domaine d'application - Recommandation</h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
              <div className="text-gray-600">
                <p className="text-xl leading-relaxed">
                  Le domaine d'application de Emergy'nX est très large, allant des particuliers aux entreprises. Que ce soit pour une maison individuelle, un immeuble de logements ou une entreprise industrielle, Chart'nX peut aider à optimiser la consommation d'énergie. En fournissant une visualisation claire de la consommation d'énergie, Chart'nX permet aux clients de mieux comprendre leur consommation d'énergie et de prendre des décisions pour la réduire. En analysant les paramètres de consommation d'énergie, Chart'nX peut recommander des actions concrètes pour réduire la consommation, telles que la modification des habitudes de consommation d'énergie, l'optimisation des équipements existants ou l'installation de nouveaux équipements plus économes en énergie. De plus, Chart'nX peut également fournir des alertes en cas de pics de consommation d'énergie, permettant aux clients de prendre rapidement des mesures pour réduire la consommation d'énergie.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Caractéristiques techniques</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <spec.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-sm text-gray-500 mb-1">{spec.label}</h3>
                  <p className="text-gray-900">{spec.value}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Configurator */}
      <section id="configurator" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductConfigurator productName="Emergy'nX" basePrice={399} />
        </div>
      </section>

      {/* Compatibility Checker */}
      <section id="compatibility" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibilityChecker 
            productName="Emergy'nX"
            compatibleSystems={['KNX', 'Crestron', 'Control4', 'Huawei', 'Fronius', 'SolarEdge', 'ABB', 'Daikin', 'Shelly']}
          />
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CustomerTestimonials productName="Emergy'nX" />
        </div>
      </section>

      {/* Technical Documentation */}
      <section id="documentation" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TechnicalDocumentation 
            productName="Emergy'nX"
            docs={[
              { title: 'Guide Emergy\'nX', url: 'https://doc.can-nx.com/' },
            ]}
          />
        </div>
      </section>

      {/* Distributor Locator */}
      <section id="distributors" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <DistributorLocator productName="Emergy'nX" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQ items={emergynxFAQItems} />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <ImageWithFallback
                src={emergynxProduct}
                alt="Emergy'nX"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <h2 className="text-4xl mb-8">Prêt à optimiser votre énergie ?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-gray-900 hover:bg-gray-100"
                asChild
              >
                <a href="https://doc.can-nx.com/" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Documentation
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-[#0CB14B] text-white hover:bg-[#0a9841]"
                asChild
              >
                <a href="https://can-nx.shop/fr/66-produit-cannx" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  En savoir plus et acheter
                </a>
              </Button>
            </div>

            <div className="mt-12">
              <p className="text-white/80 mb-4">Partager</p>
              <div className="flex justify-center gap-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
