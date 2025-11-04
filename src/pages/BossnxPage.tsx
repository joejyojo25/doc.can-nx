import { motion } from 'motion/react';
import { Building2, Cloud, Zap, Droplets, Bell, Star, Network, BarChart3, Smartphone, Globe, Shield, Check, ArrowRight, Settings, Eye, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FAQ } from '../components/FAQ';
import { ScrollProgress } from '../components/ScrollProgress';
import { StickyCTA } from '../components/StickyCTA';
import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import { ProductStickyNav } from '../components/ProductStickyNav';

const navItems = [
  { id: 'overview', label: 'Vue d\'ensemble' },
  { id: 'supervision', label: 'Supervision Cloud' },
  { id: 'connectivity', label: 'Connectivité' },
  { id: 'control', label: 'Contrôle' },
  { id: 'features', label: 'Fonctionnalités' },
  { id: 'faq', label: 'FAQ' },
];

const supervisionFeatures = [
  {
    icon: Settings,
    title: 'Configuration rapide',
    description: 'Installation simplifiée sans matériel supplémentaire, prêt en quelques minutes'
  },
  {
    icon: Building2,
    title: 'Vue bâtiment simplifiée',
    description: 'Interface intuitive pour visualiser tous les systèmes de votre bâtiment'
  },
  {
    icon: Zap,
    title: 'Suivi Énergie',
    description: 'Surveillance en temps réel de vos consommations électriques'
  },
  {
    icon: Droplets,
    title: 'Suivi Eau',
    description: 'Monitoring précis de vos consommations d\'eau'
  },
  {
    icon: Bell,
    title: 'Gestion des alarmes',
    description: 'Alertes techniques en temps réel pour intervention rapide'
  },
  {
    icon: Star,
    title: 'Favoris optimisés',
    description: 'Accès rapide à vos équipements et zones les plus utilisés'
  },
  {
    icon: Eye,
    title: 'Hypervision',
    description: 'Synthèse et supervision multi-bâtiments depuis une seule interface'
  },
  {
    icon: Cloud,
    title: 'Cloud natif',
    description: 'Accès sécurisé depuis n\'importe où, sur n\'importe quel appareil'
  }
];

const connectivityFeatures = [
  {
    icon: Network,
    title: 'Intégration KNX',
    description: 'Automatisation complète des bâtiments via le protocole KNX standard'
  },
  {
    icon: BarChart3,
    title: 'Comptage KNX/Modbus',
    description: 'Lecture et analyse des données de compteurs via KNX et Modbus'
  },
  {
    icon: Globe,
    title: 'API ouverte',
    description: 'Intégration avec vos services tiers : caméras, contrôle d\'accès, réservation de salles, etc.'
  }
];

const controlFeatures = [
  {
    icon: Settings,
    title: 'Widgets personnalisables',
    description: 'Widgets prédéfinis ou sur mesure par zone, équipement, bâtiment ou parc'
  },
  {
    icon: Smartphone,
    title: 'Accès mobile/QR Code',
    description: 'Contrôle de zone instantané via smartphone avec scan QR Code'
  },
  {
    icon: Building2,
    title: 'Hypervision multi-sites',
    description: 'Gestion centralisée de tous vos bâtiments depuis une interface unique'
  },
  {
    icon: BarChart3,
    title: 'Tableau de bord énergétique',
    description: 'Présentation claire et analyse avancée de vos consommations'
  }
];

const benefits = [
  'Configuration sans matériel supplémentaire',
  'Interface unifiée pour tous les systèmes',
  'Économies d\'énergie significatives',
  'Maintenance prédictive',
  'Alertes en temps réel',
  'Accès distant sécurisé',
  'Évolutivité illimitée',
  'Intégration avec systèmes tiers',
  'Rapports détaillés',
  'Contrôle multi-niveau',
  'API RESTful complète',
  'Mises à jour automatiques'
];

const bossNxFAQItems = [
  {
    question: "Qu'est-ce que Boss'nX ?",
    answer: "Boss'nX (Building Operating Smart System) est une licence premium pour Kloud'nX qui transforme votre installation en une supervision intelligente complète. Elle permet de connecter, superviser et contrôler tous vos systèmes de bâtiment depuis une interface cloud unique."
  },
  {
    question: "Quelle est la différence entre Boss'nX et Chart'nX ?",
    answer: "Boss'nX offre une supervision globale du bâtiment incluant l'énergie, l'eau, les alarmes, le contrôle de tous les systèmes et l'hypervision multi-sites, tandis que Chart'nX est spécialisé uniquement dans la supervision énergétique avec tableaux de bord et analyses de consommation."
  },
  {
    question: "Ai-je besoin de matériel supplémentaire pour Boss'nX ?",
    answer: "Non, Boss'nX est une licence logicielle qui s'installe sur votre système Kloud'nX existant. Aucun matériel additionnel n'est requis, ce qui simplifie le déploiement et réduit les coûts."
  },
  {
    question: "Puis-je gérer plusieurs bâtiments avec Boss'nX ?",
    answer: "Oui, Boss'nX inclut la fonction d'hypervision multi-bâtiments qui permet de superviser et gérer un parc entier de bâtiments depuis une interface unique. Vous pouvez visualiser une synthèse globale ou accéder aux détails de chaque site."
  },
  {
    question: "Comment fonctionne le contrôle par QR Code ?",
    answer: "Boss'nX génère des QR Codes pour chaque zone ou équipement. En scannant le code avec un smartphone, vous accédez instantanément aux commandes de la zone sans avoir à naviguer dans l'interface. Idéal pour le personnel sur site."
  },
  {
    question: "Quels systèmes tiers puis-je intégrer avec Boss'nX ?",
    answer: "Boss'nX dispose d'une API RESTful complète permettant d'intégrer une large gamme de systèmes : caméras de surveillance, contrôle d'accès, systèmes de réservation de salles, GTB, ascenseurs, parking, et bien plus. Les possibilités sont pratiquement illimitées."
  },
  {
    question: "Boss'nX est-il sécurisé ?",
    answer: "Oui, Boss'nX utilise les protocoles de sécurité les plus avancés : chiffrement TLS/SSL, authentification multi-facteurs disponible, contrôle d'accès par rôles, et hébergement cloud certifié. Vos données et votre infrastructure sont protégées."
  }
];

export function BossnxPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductStickyNav items={navItems} />
      <StickyCTA 
        productName="Boss'nX - Supervision intelligente" 
        shopUrl="https://can-nx.shop/"
        docsUrl="https://doc.can-nx.com/"
      />
      
      <ProductBreadcrumb productName="Boss'nX" className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

      {/* Hero Section */}
      <section id="overview" className="relative min-h-[80vh] flex flex-col overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex-1 flex flex-col justify-center">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-900">Licence Kloud'nX Premium</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Boss'nX
            </h1>
            
            <p className="text-2xl sm:text-3xl text-gray-700 mb-8">
              Building Operating Smart System
            </p>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              La licence qui transforme Kloud'nX en supervision intelligente. Connectez, supervisez et contrôlez tous vos systèmes de bâtiment depuis une interface unique.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <ArrowRight className="w-5 h-5 mr-2" />
                Découvrir Boss'nX
              </Button>
              <Button size="lg" variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50">
                <Settings className="w-5 h-5 mr-2" />
                Documentation
              </Button>
            </div>

            <motion.div
              className="mt-12 flex flex-wrap gap-6 justify-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="w-5 h-5 text-blue-600" />
                Configuration rapide
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="w-5 h-5 text-blue-600" />
                Sans matériel supplémentaire
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Check className="w-5 h-5 text-blue-600" />
                Hypervision multi-sites
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Supervision Cloud Section */}
      <section id="supervision" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
              <Cloud className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-900">Supervision Cloud</span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6">Supervision complète depuis le cloud</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Surveillez et gérez tous vos systèmes de bâtiment en temps réel, depuis n'importe où
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {supervisionFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section id="connectivity" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 mb-4">
              <Network className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-900">Connectivité</span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6">Connectivité et ouverture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intégrez tous vos systèmes existants et futurs grâce à une architecture ouverte
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {connectivityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 h-full text-center bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-indigo-200">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Section */}
      <section id="control" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-4">
              <Settings className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-900">Contrôle</span>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6">Contrôle global ou individuel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilotez vos équipements à tous les niveaux : zone, bâtiment ou parc entier
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {controlFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50/30">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-6">Boss'nX : La pièce maîtresse de vos projets Smart Building</h2>
              <p className="text-xl text-gray-600">
                Plus de simplicité. Plus de puissance. Plus de liberté.
              </p>
            </div>

            <Card className="p-8 lg:p-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Building2 className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl sm:text-5xl mb-6">
              Transformez vos bâtiments en Smart Buildings
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Boss'nX + Kloud'nX : la solution complète pour la supervision intelligente de vos installations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Demander une présentation
              </Button>
              <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                Voir les tarifs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ items={bossNxFAQItems} />
      </section>
    </div>
  );
}
