import { SEOProps } from '../components/SEOHead';

const SITE_URL = 'https://can-nx.com';

// Organization Schema (à utiliser sur toutes les pages)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Can-nX',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Fabricant de solutions KNX et IoT pour le bâtiment connecté',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['French', 'English', 'German'],
  },
  sameAs: [
    'https://www.linkedin.com/company/can-nx',
    'https://www.youtube.com/@can-nx',
    // Ajoutez vos autres réseaux sociaux
  ],
};

// SEO Configuration for all pages
export const seoConfig: Record<string, SEOProps> = {
  home: {
    title: 'Can-nX - Solutions KNX & IoT pour Smart Building',
    description: 'Can-nX est fabricant de solutions KNX et IoT professionnelles pour le bâtiment connecté. Découvrez Kloud\'nX, Pool\'nX, Emergy\'nX, Infini KNX, Speak\'nX et Mod\'nX.',
    canonical: SITE_URL,
    keywords: ['KNX', 'IoT', 'domotique', 'building automation', 'bâtiment intelligent', 'smart building', 'Can-nX', 'automatisation', 'KNX France'],
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: 'Can-nX',
          description: 'Solutions KNX & IoT pour le bâtiment intelligent',
          publisher: {
            '@id': `${SITE_URL}/#organization`,
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/?s={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
      ],
    },
  },

  // Product Pages
  kloudnx: {
    title: 'Kloud\'nX - Routeur KNX-IoT Cloud & VPN Sécurisé',
    description: 'Routeur KNX-IoT permettant un accès distant sécurisé, intégration IoT via Node-Red, monitoring cloud et jusqu\'à 12 connexions tunneling simultanées.',
    canonical: `${SITE_URL}/#kloudnx`,
    ogType: 'product',
    keywords: ['Kloud\'nX', 'routeur KNX', 'KNX IoT', 'accès distant KNX', 'VPN KNX', 'Node-Red KNX', 'monitoring KNX', 'cloud KNX'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Kloud\'nX',
      description: 'Routeur KNX-IoT avec accès distant sécurisé et intégration cloud',
      brand: {
        '@type': 'Brand',
        name: 'Can-nX',
      },
      manufacturer: organizationSchema,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'EUR',
        url: `${SITE_URL}/#kloudnx`,
        seller: organizationSchema,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127',
      },
    },
  },

  poolnx: {
    title: 'Pool\'nX - Passerelle KNX pour Piscine Connectée',
    description: 'Passerelle KNX pour intégration de systèmes de piscine connectée PoolCop et Klereo. Contrôlez votre piscine depuis votre installation domotique KNX.',
    canonical: `${SITE_URL}/#poolnx`,
    ogType: 'product',
    keywords: ['Pool\'nX', 'piscine KNX', 'PoolCop KNX', 'Klereo KNX', 'domotique piscine', 'smart pool', 'automatisation piscine'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Pool\'nX',
      description: 'Passerelle KNX pour piscine connectée PoolCop et Klereo',
      brand: {
        '@type': 'Brand',
        name: 'Can-nX',
      },
      manufacturer: organizationSchema,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'EUR',
        url: `${SITE_URL}/#poolnx`,
        seller: organizationSchema,
      },
    },
  },

  emergynx: {
    title: 'Emergy\'nX - Système HEMS KNX de Gestion d\'Énergie',
    description: 'Solution HEMS KNX pour optimiser la production, consommation et stockage d\'énergie. Gestion intelligente de l\'énergie pour bâtiments connectés.',
    canonical: `${SITE_URL}/#emergynx`,
    ogType: 'product',
    keywords: ['Emergy\'nX', 'HEMS KNX', 'gestion énergie KNX', 'photovoltaïque KNX', 'stockage énergie', 'optimisation énergétique', 'smart energy'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Emergy\'nX',
      description: 'Système HEMS KNX pour optimiser la production et consommation d\'énergie',
      brand: {
        '@type': 'Brand',
        name: 'Can-nX',
      },
      manufacturer: organizationSchema,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'EUR',
        url: `${SITE_URL}/#emergynx`,
        seller: organizationSchema,
      },
    },
  },

  infinix: {
    title: 'Infini KNX - Bouton Rotatif KNX Personnalisable',
    description: 'Bouton rotatif KNX avec 4 boutons poussoirs rotatifs et 4 entrées/sorties LED. Entièrement personnalisable via notre configurateur en ligne.',
    canonical: `${SITE_URL}/#infinix`,
    ogType: 'product',
    keywords: ['Infini KNX', 'bouton KNX', 'commande rotative KNX', 'interface KNX', 'personnalisable', 'configurateur KNX'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Infini KNX',
      description: 'Bouton rotatif KNX avec 4 boutons poussoirs et 4 LED personnalisables',
      brand: {
        '@type': 'Brand',
        name: 'Can-nX',
      },
      manufacturer: organizationSchema,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'EUR',
        url: `${SITE_URL}/#infinix`,
        seller: organizationSchema,
      },
    },
  },

  speaknx: {
    title: 'Speak\'nX - Diffuseur Audio & Visuel KNX',
    description: 'Diffuseur sonore et visuel avec interface KNX-TP, Bluetooth et WiFi. Intégration de capteurs et sondes pour bâtiments intelligents.',
    canonical: `${SITE_URL}/#speaknx`,
    ogType: 'product',
    keywords: ['Speak\'nX', 'audio KNX', 'diffuseur KNX', 'Bluetooth KNX', 'WiFi KNX', 'capteurs KNX', 'multiroom audio'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Speak\'nX',
      description: 'Diffuseur sonore et visuel avec interface KNX-TP, Bluetooth et WiFi',
      brand: {
        '@type': 'Brand',
        name: 'Can-nX',
      },
      manufacturer: organizationSchema,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'EUR',
        url: `${SITE_URL}/#speaknx`,
        seller: organizationSchema,
      },
    },
  },

  modnx: {
    title: 'Mod\'nX - Module d\'Entrées KNX Compact et Connecté',
    description: 'Module d\'entrées KNX compact pour intégration de multiples entrées dans vos installations domotiques. Solution flexible et évolutive.',
    canonical: `${SITE_URL}/#modnx`,
    ogType: 'product',
    keywords: ['Mod\'nX', 'module entrées KNX', 'interface KNX', 'compact KNX', 'module KNX'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Mod\'nX',
      description: 'Module d\'entrées KNX compact et connecté',
      brand: {
        '@type': 'Brand',
        name: 'Can-nX',
      },
      manufacturer: organizationSchema,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'EUR',
        url: `${SITE_URL}/#modnx`,
        seller: organizationSchema,
      },
    },
  },

  chartnx: {
    title: 'Chart\'nX - Visualisation et Analyse de Données KNX',
    description: 'Solution de visualisation et d\'analyse de données pour installations KNX. Tableaux de bord personnalisables et rapports détaillés.',
    canonical: `${SITE_URL}/#chartnx`,
    ogType: 'product',
    keywords: ['Chart\'nX', 'visualisation KNX', 'analyse données KNX', 'dashboard KNX', 'monitoring KNX'],
  },

  bossnx: {
    title: 'Boss\'nX - Gestion Centralisée d\'Installations KNX',
    description: 'Plateforme de gestion centralisée pour installations KNX multisites. Supervision et contrôle à distance de vos projets.',
    canonical: `${SITE_URL}/#bossnx`,
    ogType: 'product',
    keywords: ['Boss\'nX', 'gestion KNX', 'supervision KNX', 'multisite KNX', 'plateforme KNX'],
  },

  // Integration Pages
  'integration-2n': {
    title: 'Intégration 2N avec KNX - Interphonie & Accès',
    description: 'Intégrez vos systèmes d\'interphonie 2N avec votre installation KNX via Kloud\'nX. Contrôle d\'accès et vidéo-surveillance unifiés.',
    canonical: `${SITE_URL}/#integration-2n`,
    keywords: ['2N KNX', 'interphonie KNX', '2N integration', 'contrôle accès KNX', 'vidéo-portier KNX'],
  },

  'integration-doorbird': {
    title: 'Intégration DoorBird avec KNX - Portier Vidéo IP',
    description: 'Connectez vos portiers vidéo DoorBird à votre système KNX. Intégration native pour notifications et contrôle d\'accès.',
    canonical: `${SITE_URL}/#integration-doorbird`,
    keywords: ['DoorBird KNX', 'portier vidéo KNX', 'DoorBird integration', 'sonnette connectée KNX'],
  },

  'integration-poolcop': {
    title: 'Intégration PoolCop avec KNX - Piscine Connectée',
    description: 'Intégration complète de votre système PoolCop avec KNX via Pool\'nX. Contrôlez filtration, chauffage et chimie depuis votre domotique.',
    canonical: `${SITE_URL}/#integration-poolcop`,
    keywords: ['PoolCop KNX', 'piscine connectée', 'automatisation piscine', 'PoolCop integration'],
  },

  'integration-klereo': {
    title: 'Intégration Klereo avec KNX - Gestion Piscine',
    description: 'Connectez votre système Klereo à KNX via Pool\'nX. Gestion automatisée de votre piscine dans votre installation domotique.',
    canonical: `${SITE_URL}/#integration-klereo`,
    keywords: ['Klereo KNX', 'piscine KNX', 'Klereo integration', 'smart pool'],
  },

  'integration-modbus': {
    title: 'Intégration Modbus avec KNX - Protocole Industriel',
    description: 'Passerelle Modbus-KNX pour intégrer vos équipements industriels. Compatible Modbus RTU et Modbus TCP.',
    canonical: `${SITE_URL}/#integration-modbus`,
    keywords: ['Modbus KNX', 'passerelle Modbus', 'protocole industriel', 'Modbus RTU', 'Modbus TCP'],
  },

  'integration-sonos': {
    title: 'Intégration Sonos avec KNX - Audio Multiroom',
    description: 'Contrôlez vos enceintes Sonos depuis votre installation KNX. Audio multiroom intégré à votre domotique.',
    canonical: `${SITE_URL}/#integration-sonos`,
    keywords: ['Sonos KNX', 'audio multiroom KNX', 'Sonos integration', 'musique KNX'],
  },

  'integration-crestron': {
    title: 'Intégration Crestron avec KNX - Systèmes AV Pro',
    description: 'Intégrez vos systèmes audio-visuels Crestron avec KNX. Contrôle unifié de vos installations AV et domotique.',
    canonical: `${SITE_URL}/#integration-crestron`,
    keywords: ['Crestron KNX', 'AV KNX', 'Crestron integration', 'audio-visuel KNX'],
  },

  'integration-hikvision': {
    title: 'Intégration Hikvision KNX - Vidéosurveillance IP',
    description: 'Connectez vos caméras et systèmes Hikvision à KNX. Vidéo-surveillance intégrée dans votre domotique.',
    canonical: `${SITE_URL}/#integration-hikvision`,
    keywords: ['Hikvision KNX', 'caméra KNX', 'vidéo-surveillance KNX', 'Hikvision integration'],
  },

  'integration-nuki': {
    title: 'Intégration Nuki avec KNX - Serrures Connectées',
    description: 'Intégrez vos serrures connectées Nuki avec KNX. Contrôle d\'accès intelligent et sécurisé.',
    canonical: `${SITE_URL}/#integration-nuki`,
    keywords: ['Nuki KNX', 'serrure connectée KNX', 'Nuki integration', 'smart lock KNX'],
  },

  'integration-shelly': {
    title: 'Intégration Shelly avec KNX - Modules Domotique WiFi',
    description: 'Connectez vos modules Shelly à KNX via Kloud\'nX. Intégration simple et économique de vos équipements WiFi.',
    canonical: `${SITE_URL}/#integration-shelly`,
    keywords: ['Shelly KNX', 'WiFi KNX', 'Shelly integration', 'modules KNX'],
  },

  'integration-gude': {
    title: 'Intégration Gude avec KNX - Mesure Électrique',
    description: 'Intégrez les systèmes de mesure Gude avec KNX. Monitoring énergétique professionnel pour bâtiments intelligents.',
    canonical: `${SITE_URL}/#integration-gude`,
    keywords: ['Gude KNX', 'mesure énergie KNX', 'Gude integration', 'monitoring électrique'],
  },

  'integration-airzone': {
    title: 'Intégration Airzone avec KNX - Climatisation CVC',
    description: 'Intégration complète des systèmes Airzone et Aidoo avec KNX. Contrôle de climatisation zoné et intelligent.',
    canonical: `${SITE_URL}/#integration-airzone`,
    keywords: ['Airzone KNX', 'Aidoo KNX', 'climatisation KNX', 'CVC KNX', 'HVAC KNX'],
  },

  'integration-lektrico': {
    title: 'Intégration Lektrico KNX - Bornes de Recharge EV',
    description: 'Connectez vos bornes de recharge Lektrico à KNX. Gestion intelligente de la recharge de véhicules électriques.',
    canonical: `${SITE_URL}/#integration-lektrico`,
    keywords: ['Lektrico KNX', 'borne recharge KNX', 'EV charging KNX', 'véhicule électrique KNX'],
  },

  'integration-terraac': {
    title: 'Intégration ABB Terra AC avec KNX - Recharge EV',
    description: 'Intégrez vos chargeurs TerraAC avec KNX. Solution de recharge intelligente pour véhicules électriques.',
    canonical: `${SITE_URL}/#integration-terraac`,
    keywords: ['TerraAC KNX', 'chargeur EV KNX', 'TerraAC integration', 'smart charging'],
  },

  'integration-evlinkpro': {
    title: 'Intégration EVlink Pro KNX - Schneider Electric',
    description: 'Connectez les bornes EVlink Pro de Schneider Electric à KNX. Recharge professionnelle pour flottes électriques.',
    canonical: `${SITE_URL}/#integration-evlinkpro`,
    keywords: ['EVlink Pro KNX', 'Schneider KNX', 'borne professionnelle KNX', 'EVlink integration'],
  },

  'integration-pushover': {
    title: 'Intégration Pushover avec KNX - Notifications Push',
    description: 'Recevez des notifications push instantanées de votre installation KNX via Pushover. Alertes en temps réel.',
    canonical: `${SITE_URL}/#integration-pushover`,
    keywords: ['Pushover KNX', 'notifications KNX', 'alertes KNX', 'Pushover integration'],
  },

  'integration-homekit': {
    title: 'Intégration HomeKit KNX - Apple Home & Domotique',
    description: 'Contrôlez votre installation KNX via Apple HomeKit et Siri. Intégration native pour utilisateurs Apple.',
    canonical: `${SITE_URL}/#integration-homekit`,
    keywords: ['HomeKit KNX', 'Apple Home KNX', 'Siri KNX', 'HomeKit integration'],
  },

  'integration-knx': {
    title: 'Standard KNX - Protocole pour Bâtiments Intelligents',
    description: 'Découvrez le standard KNX, protocole mondial pour la domotique et l\'automatisation de bâtiments. Interopérabilité et fiabilité.',
    canonical: `${SITE_URL}/#integration-knx`,
    keywords: ['KNX', 'standard KNX', 'protocole KNX', 'domotique KNX', 'building automation'],
  },

  blog: {
    title: 'Blog Can-nX - Actualités KNX, IoT & Smart Building',
    description: 'Découvrez nos articles, guides et actualités sur le KNX, l\'IoT et l\'automatisation de bâtiments. Conseils d\'experts et tutoriels.',
    canonical: `${SITE_URL}/#blog`,
    ogType: 'website',
    keywords: ['blog KNX', 'actualités domotique', 'guides KNX', 'tutoriels building automation'],
  },
};

// Helper function to get SEO config by page ID
export function getSEOConfig(pageId: string): SEOProps {
  return seoConfig[pageId] || seoConfig.home;
}
