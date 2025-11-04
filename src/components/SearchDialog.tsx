import { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, Cloud, Droplet, BarChart3, Cpu, MessageSquare, Cog, Home, Plug, Wifi, DoorOpen, Shield, Camera, Music, Phone, Server, Lock, Waves, Radio, Headphones, FileText, Video, HelpCircle, Network, Bell, Building2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'Produits' | 'Intégrations' | 'Services' | 'Support';
  href: string;
  icon?: any;
  image?: string;
  keywords?: string[];
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Import product images
import kloudnxProductImage from 'figma:asset/f4e7e08a8f77640a41e6d024869598c4050d7f0d.png';
import poolnxProductImage from 'figma:asset/6b039210627c783e16b5de6f2c223b0fa9c5ae6c.png';
import emergynxProductImage from 'figma:asset/dca0fdeb28cc7c96bb88e49f32acb378db2249c0.png';
import infiniKnxProductImage from 'figma:asset/6710d8b072ed209d48084fa9c9d51566122aedd8.png';
import speaknxProductImage from 'figma:asset/5745f25880afe1bc24c217e68bbc5b290ffbbe5f.png';
import modnxProductImage from 'figma:asset/18b368059fa728d4fc03cce97562509be61e621e.png';

const searchableItems: SearchItem[] = [
  // Produits
  {
    id: 'kloudnx',
    title: "Kloud'nX",
    description: 'Plateforme cloud KNX complète avec accès distant, visualisation et automatisation',
    category: 'Produits',
    href: '#kloudnx',
    icon: Cloud,
    image: kloudnxProductImage,
    keywords: ['cloud', 'knx', 'plateforme', 'accès distant', 'visualisation', 'automatisation', 'domotique']
  },
  {
    id: 'poolnx',
    title: "Pool'nX",
    description: 'Gestion intelligente de piscine avec monitoring, contrôle pH et économie d\'énergie',
    category: 'Produits',
    href: '#poolnx',
    icon: Droplet,
    image: poolnxProductImage,
    keywords: ['piscine', 'pool', 'monitoring', 'ph', 'énergie', 'eau', 'gestion']
  },
  {
    id: 'emergynx',
    title: "Emergy'nX",
    description: 'Optimisation énergétique avancée avec analyse temps réel et prédiction',
    category: 'Produits',
    href: '#emergynx',
    icon: BarChart3,
    image: emergynxProductImage,
    keywords: ['énergie', 'optimisation', 'analyse', 'prédiction', 'consommation', 'économie']
  },
  {
    id: 'infiniknx',
    title: 'Infini KNX',
    description: 'Module de contrôle rotatif KNX avec 4 canaux intuitifs',
    category: 'Produits',
    href: '#infinix',
    icon: Cpu,
    image: infiniKnxProductImage,
    keywords: ['infini', 'knx', 'rotatif', 'contrôle', 'module', '4 canaux', 'interface']
  },
  {
    id: 'speaknx',
    title: "Speak'nX",
    description: 'Haut-parleur KNX avec audio intégré et qualité sonore premium',
    category: 'Produits',
    href: '#speaknx',
    icon: MessageSquare,
    image: speaknxProductImage,
    keywords: ['audio', 'speaker', 'haut-parleur', 'son', 'sonorisation', 'knx']
  },
  {
    id: 'modnx',
    title: "Mod'nX",
    description: 'Modules KNX personnalisables, modulaires et évolutifs',
    category: 'Produits',
    href: '#modnx',
    icon: Cog,
    image: modnxProductImage,
    keywords: ['module', 'modulaire', 'personnalisable', 'flexible', 'knx']
  },
  // Intégrations - Contrôle d'accès & Sécurité
  {
    id: '2n',
    title: '2N',
    description: 'Intégration avec interphones IP et systèmes de contrôle d\'accès',
    category: 'Intégrations',
    href: '#integration-2n',
    icon: Phone,
    keywords: ['2n', 'interphone', 'ip', 'contrôle', 'accès', 'sécurité']
  },
  {
    id: 'doorbird',
    title: 'DoorBird',
    description: 'Portiers vidéo intelligents pour sécurité et contrôle d\'accès',
    category: 'Intégrations',
    href: '#integration-doorbird',
    icon: DoorOpen,
    keywords: ['doorbird', 'portier', 'vidéo', 'sécurité', 'sonnette', 'accès']
  },
  {
    id: 'hikvision',
    title: 'Hikvision',
    description: 'Systèmes de vidéosurveillance professionnels',
    category: 'Intégrations',
    href: '#integration-hikvision',
    icon: Camera,
    keywords: ['hikvision', 'vidéosurveillance', 'caméra', 'surveillance', 'sécurité']
  },
  {
    id: 'nuki',
    title: 'Nuki',
    description: 'Serrures connectées intelligentes',
    category: 'Intégrations',
    href: '#integration-nuki',
    icon: Lock,
    keywords: ['nuki', 'serrure', 'connectée', 'smart lock', 'sécurité', 'accès']
  },
  // Intégrations - Climatisation
  {
    id: 'airzone',
    title: 'Airzone',
    description: 'Climatisation zonée intelligente avec passerelle Aidoo',
    category: 'Intégrations',
    href: '#integration-airzone',
    icon: Wifi,
    keywords: ['airzone', 'climatisation', 'aidoo', 'hvac', 'chauffage', 'clim']
  },
  // Intégrations - Piscine
  {
    id: 'poolcop',
    title: 'PoolCop',
    description: 'Régulation automatique de piscine',
    category: 'Intégrations',
    href: '#integration-poolcop',
    icon: Waves,
    keywords: ['poolcop', 'piscine', 'régulation', 'pool', 'ph', 'chlore']
  },
  {
    id: 'klereo',
    title: 'Klereo',
    description: 'Système de régulation de piscine intelligent',
    category: 'Intégrations',
    href: '#integration-klereo',
    icon: Waves,
    keywords: ['klereo', 'piscine', 'régulation', 'pool', 'traitement']
  },
  // Intégrations - Audio & Multimédia
  {
    id: 'crestron',
    title: 'Crestron',
    description: 'Automatisation premium et contrôle multimédia',
    category: 'Intégrations',
    href: '#integration-crestron',
    icon: Headphones,
    keywords: ['crestron', 'automatisation', 'audio', 'multimédia', 'premium']
  },
  {
    id: 'sonos',
    title: 'Sonos',
    description: 'Systèmes audio multiroom',
    category: 'Intégrations',
    href: '#integration-sonos',
    icon: Music,
    keywords: ['sonos', 'audio', 'multiroom', 'musique', 'enceinte']
  },
  // Intégrations - Bornes VE
  {
    id: 'terraac',
    title: 'ABB Terra AC',
    description: 'Bornes de recharge AC pour véhicules électriques',
    category: 'Intégrations',
    href: '#integration-terraac',
    icon: Zap,
    keywords: ['abb', 'terra', 'borne', 'recharge', 'véhicule électrique', 've', 'ev']
  },
  {
    id: 'evlinkpro',
    title: 'Evlink Pro',
    description: 'Bornes de recharge Schneider Electric',
    category: 'Intégrations',
    href: '#integration-evlinkpro',
    icon: Zap,
    keywords: ['evlink', 'schneider', 'borne', 'recharge', 'véhicule électrique', 've']
  },
  {
    id: 'lektrico',
    title: 'Lektrico',
    description: 'Charge intelligente pour véhicules électriques',
    category: 'Intégrations',
    href: '#integration-lektrico',
    icon: Zap,
    keywords: ['lektrico', 'borne', 'recharge', 'charge', 'véhicule électrique', 'smart']
  },
  // Intégrations - IoT & Protocoles
  {
    id: 'knx',
    title: 'KNX',
    description: 'Standard mondial pour automatisation de bâtiments',
    category: 'Intégrations',
    href: '#integration-knx',
    icon: Network,
    keywords: ['knx', 'protocole', 'standard', 'domotique', 'automatisation', 'bus']
  },
  {
    id: 'homekit',
    title: 'HomeKit',
    description: 'Intégration Apple HomeKit',
    category: 'Intégrations',
    href: '#integration-homekit',
    icon: Home,
    keywords: ['homekit', 'apple', 'ios', 'siri', 'maison connectée']
  },
  {
    id: 'pushover',
    title: 'Pushover',
    description: 'Notifications push instantanées',
    category: 'Intégrations',
    href: '#integration-pushover',
    icon: Bell,
    keywords: ['pushover', 'notification', 'push', 'alerte', 'message']
  },
  {
    id: 'shelly',
    title: 'Shelly',
    description: 'Appareils IoT intelligents',
    category: 'Intégrations',
    href: '#integration-shelly',
    icon: Zap,
    keywords: ['shelly', 'iot', 'wifi', 'smart', 'relais', 'interrupteur']
  },
  {
    id: 'modbus',
    title: 'Modbus TCP/RTU',
    description: 'Protocole industriel pour communication machine',
    category: 'Intégrations',
    href: '#integration-modbus',
    icon: Server,
    keywords: ['modbus', 'tcp', 'rtu', 'protocole', 'industriel', 'communication']
  },
  {
    id: 'gude',
    title: 'Gude',
    description: 'PDU intelligents et monitoring énergie',
    category: 'Intégrations',
    href: '#integration-gude',
    icon: Plug,
    keywords: ['gude', 'pdu', 'énergie', 'monitoring', 'alimentation']
  },
  // Services
  {
    id: 'kloudnx-subscription',
    title: "Kloud'nX Abonnements",
    description: 'Abonnements cloud mensuels et annuels',
    category: 'Services',
    href: '#kloudnx-subscription',
    icon: Cloud,
    keywords: ['abonnement', 'cloud', 'licence', 'mensuel', 'annuel', 'kloudnx']
  },
  {
    id: 'chartnx',
    title: "Chart'nX",
    description: 'Supervision énergétique intuitive',
    category: 'Services',
    href: '#chartnx',
    icon: BarChart3,
    keywords: ['chart', 'supervision', 'énergie', 'graphique', 'analyse', 'licence']
  },
  {
    id: 'bossnx',
    title: "Boss'nX",
    description: 'Building Operating Smart System',
    category: 'Services',
    href: '#bossnx',
    icon: Building2,
    keywords: ['boss', 'building', 'gestion', 'bâtiment', 'smart', 'licence', 'premium']
  },
  // Support
  {
    id: 'blog',
    title: 'Blog',
    description: 'Actualités, tutoriels et articles techniques',
    category: 'Support',
    href: '#blog',
    icon: FileText,
    keywords: ['blog', 'actualités', 'articles', 'news', 'tutoriels']
  },
  {
    id: 'documentation',
    title: 'Documentation',
    description: 'Guides techniques et documentation produits',
    category: 'Support',
    href: 'https://doc.can-nx.com',
    icon: HelpCircle,
    keywords: ['documentation', 'doc', 'guide', 'manuel', 'aide', 'technique']
  },
  {
    id: 'video-guide',
    title: 'Guide vidéo',
    description: 'Tutoriels vidéo et démonstrations',
    category: 'Support',
    href: 'https://www.youtube.com/@cannx7140/videos',
    icon: Video,
    keywords: ['vidéo', 'tutoriel', 'youtube', 'démo', 'guide']
  },
];

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter results based on search query
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    return searchableItems.filter((item) => {
      const searchableText = [
        item.title.toLowerCase(),
        item.description.toLowerCase(),
        item.category.toLowerCase(),
        ...(item.keywords || [])
      ].join(' ');

      return searchableText.includes(query);
    });
  }, [searchQuery]);

  // Group results by category
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    filteredResults.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredResults]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  // Clear search when dialog closes
  useEffect(() => {
    if (!open) {
      setSearchQuery('');
      setSelectedIndex(0);
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < filteredResults.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredResults[selectedIndex]) {
            handleItemClick(filteredResults[selectedIndex]);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, filteredResults, selectedIndex]);

  const handleItemClick = (item: SearchItem) => {
    // If external link, open in new tab
    if (item.href.startsWith('http')) {
      window.open(item.href, '_blank', 'noopener noreferrer');
    } else {
      window.location.href = item.href;
    }
    onOpenChange(false);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Produits':
        return <Cpu className="w-4 h-4" />;
      case 'Intégrations':
        return <Plug className="w-4 h-4" />;
      case 'Services':
        return <Cloud className="w-4 h-4" />;
      case 'Support':
        return <HelpCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 gap-0 overflow-hidden">
        {/* Search Input */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center gap-3 px-4 py-4">
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Rechercher des produits, intégrations, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-900 placeholder:text-gray-400"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto max-h-[60vh]">
          {!searchQuery.trim() ? (
            <div className="px-4 py-12 text-center">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                Commencez à taper pour rechercher...
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Produits • Intégrations • Services • Support
              </p>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="px-4 py-12 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-900 mb-2">Aucun résultat trouvé</p>
              <p className="text-sm text-gray-500">
                Essayez avec d'autres mots-clés
              </p>
            </div>
          ) : (
            <div className="px-2 py-3">
              {Object.entries(groupedResults).map(([category, items]) => (
                <div key={category} className="mb-6 last:mb-0">
                  {/* Category Header */}
                  <div className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500 uppercase tracking-wider">
                    {getCategoryIcon(category)}
                    <span>{category}</span>
                    <span className="text-gray-400">({items.length})</span>
                  </div>

                  {/* Category Items */}
                  <div className="space-y-1">
                    {items.map((item, itemIndex) => {
                      const globalIndex = filteredResults.indexOf(item);
                      const isSelected = globalIndex === selectedIndex;
                      const Icon = item.icon;

                      return (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.03 }}
                          onClick={() => handleItemClick(item)}
                          className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#0CB14B]/10 to-[#cd2653]/10 border border-[#0CB14B]/20'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          {/* Icon or Image */}
                          <div className="flex-shrink-0">
                            {item.image ? (
                              <ImageWithFallback
                                src={item.image}
                                alt={item.title}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                            ) : Icon ? (
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-[#0CB14B]" />
                              </div>
                            ) : null}
                          </div>

                          {/* Content */}
                          <div className="flex-1 text-left min-w-0">
                            <div className={`text-gray-900 ${isSelected ? 'font-medium' : ''}`}>
                              {item.title}
                            </div>
                            <p className="text-sm text-gray-500 line-clamp-1">
                              {item.description}
                            </p>
                          </div>

                          {/* Arrow */}
                          <ArrowRight
                            className={`w-5 h-5 flex-shrink-0 transition-all ${
                              isSelected ? 'text-[#0CB14B] translate-x-1' : 'text-gray-400'
                            }`}
                          />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Hint */}
        {filteredResults.length > 0 && (
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">↑</kbd>
                  <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">↓</kbd>
                  <span className="ml-1">Naviguer</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">↵</kbd>
                  <span className="ml-1">Sélectionner</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Esc</kbd>
                  <span className="ml-1">Fermer</span>
                </span>
              </div>
              <span>{filteredResults.length} résultat{filteredResults.length > 1 ? 's' : ''}</span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
