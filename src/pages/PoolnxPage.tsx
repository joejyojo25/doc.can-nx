import { motion } from 'motion/react';
import { Hand, Sun, Waves, Check, FileText, ShoppingCart, Share2, Zap, Globe, Plug, TrendingUp, Award, Droplets, Thermometer } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
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
import poolnxProduct from 'figma:asset/6b039210627c783e16b5de6f2c223b0fa9c5ae6c.png';

const poolnxFAQItems = [
  {
    question: "Qu'est-ce que Pool'nX ?",
    answer: "Pool'nX est une passerelle KNX qui permet d'interfacer les équipements de piscine connectée (PoolCop ou Klereo) avec votre système domotique KNX, rendant votre piscine compatible avec tous les standards domotiques du marché."
  },
  {
    question: "Quels systèmes de piscine sont compatibles ?",
    answer: "Pool'nX est compatible avec les systèmes PoolCop et Klereo, les deux principaux systèmes de gestion de piscine connectée du marché."
  },
  {
    question: "Puis-je intégrer ma piscine dans ma domotique existante ?",
    answer: "Oui, Pool'nX permet d'intégrer votre piscine dans les principaux systèmes domotiques : Crestron, Domovéa, Savant, Homelynk, Control4, etc. grâce à sa compatibilité KNX."
  },
  {
    question: "Quelles sont les fonctions automatiques disponibles ?",
    answer: "Pool'nX permet de gérer automatiquement la régulation du pH, Redox, température, durée de filtration, nettoyage de filtre, protection des équipements selon la température, et contrôle du niveau d'eau."
  },
  {
    question: "Est-ce adapté pour les installations professionnelles ?",
    answer: "Oui, Pool'nX est particulièrement recommandé pour l'hôtellerie et les espaces de bien-être pour intégrer les équipements piscine dans la GTB (Gestion Technique du Bâtiment)."
  },
];

const features = [
  {
    icon: Hand,
    title: "Nouvelle passerelle KNX",
    description:
      "Offre la seule solution d'intégration entre KNX et le monde de la piscine connectée",
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sun,
    title: 'Fonctions Sur Mesure Autour De La Piscine',
    description:
      "Permet d'élargir vos champs de prestations entre le bâtiment intelligent et la piscine connectée",
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Waves,
    title: 'Integration Des Systemes De Gestion De Piscine',
    description:
      "Intègre les équipements piscine dans un système domotique ou dans une gestion technique bâtiment connecté",
    color: 'from-cyan-500 to-blue-600',
  },
];

const technicalSpecs = [
  { icon: Zap, label: 'KNX TP, S-Mode (ETS)', value: '30V, 5mA' },
  { icon: Globe, label: 'Ethernet', value: '10/100 Mbps' },
  { icon: Plug, label: 'Alimentation', value: '9-30V DC, 2W' },
  { icon: TrendingUp, label: 'Température', value: '-25°/+55°C' },
  { icon: Award, label: 'Dimensions', value: 'Rail DIN - 2 Modules - 35mm' },
  { icon: Globe, label: 'Fabrication', value: 'Fabriqué en Europe' },
  { icon: Droplets, label: 'Compatibilité', value: 'PoolCop & Klereo' },
  { icon: Check, label: 'Garantie', value: '2 ans' },
];

const partners = [
  { name: 'Klereo', logo: 'https://can-nx.com/wp-content/uploads/2021/11/Klereo-Piscine-connectee-1024x236.png' },
  { name: 'PoolCop', logo: 'https://can-nx.com/wp-content/uploads/2021/11/Logo-PoolCop.png' },
  { name: 'Crestron', logo: 'https://can-nx.com/wp-content/uploads/2023/04/Crestron_logo_PNG3-e1682506031893-1024x143.png' },
];

const galleryImages = [
  { src: poolnxProduct, alt: "Pool'nX - Vue d'ensemble", caption: 'Module KNX Rail DIN compact pour piscine' },
  { src: 'https://images.unsplash.com/photo-1758530273582-2fa239a7feca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBhdXRvbWF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2MjE3ODU4OHww&ixlib=rb-4.1.0&q=80&w=1080', alt: "Pool'nX - Système automatisé", caption: 'Système de gestion de piscine automatisé' },
  { src: 'https://images.unsplash.com/photo-1758530273222-440d6a8b0eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwd2F0ZXIlMjBxdWFsaXR5fGVufDF8fHx8MTc2MjE3ODU4OHww&ixlib=rb-4.1.0&q=80&w=1080', alt: "Pool'nX - Qualité de l'eau", caption: 'Contrôle de qualité automatique' },
];

const navItems = [
  { id: 'features', label: 'Caractéristiques' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'why-connected-pool', label: 'Piscine connectée' },
  { id: 'why-poolnx', label: 'Pourquoi Pool\'nX' },
  { id: 'advantages', label: 'Avantages' },
  { id: 'schema', label: 'Schéma' },
  { id: 'applications', label: 'Applications' },
  { id: 'specs', label: 'Spécifications' },
  { id: 'configurator', label: 'Configurateur' },
  { id: 'compatibility', label: 'Compatibilité' },
  { id: 'testimonials', label: 'Témoignages' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'distributors', label: 'Distributeurs' },
  { id: 'faq', label: 'FAQ' },
];

const poolStats = [
  { icon: Droplets, label: 'Piscines Connectées', value: 850, suffix: '+' },
  { icon: Award, label: 'Satisfaction Client', value: 98, suffix: '%' },
  { icon: TrendingUp, label: 'Disponibilité', value: 99.9, suffix: '%' },
  { icon: Check, label: 'Garantie', value: 2, suffix: ' ans' },
];

export function PoolnxPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductStickyNav items={navItems} />
      <StickyCTA 
        productName="Pool'nX - Passerelle KNX piscine" 
        shopUrl="https://can-nx.shop/fr/66-produit-cannx"
        docsUrl="https://doc.can-nx.com/poolnx-poolcop/"
      />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-[80vh] flex flex-col overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Breadcrumb at top */}
        <ProductBreadcrumb productName="Pool'nX" className="relative" />

        {/* Hero Content */}
        <div className="relative flex-1 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Pool'nX
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-800">
              Passerelle KNX pour piscine connectée avec les systèmes PoolCop ou Klereo
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
                src={poolnxProduct}
                alt="Pool'nX - Passerelle KNX pour piscine connectée"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Live Stats */}
          <LiveStats stats={poolStats} />
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
            <h2 className="text-4xl sm:text-5xl mb-4">Galerie Pool'nX</h2>
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

      {/* Why Connected Pool */}
      <section id="why-connected-pool" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Pourquoi une piscine connectée ?</h2>
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
                <p>
                  Les systèmes de piscines connectées présents sur le marché vous permettent d'acquérir une qualité d'eau sans effort comparé à une piscine traditionnelle.
                </p>
                <p>
                  Le traitement et la maintenance de votre piscine connectée seront donc plus facile à gérer grâce aux contrôles automatiques suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Régulation du pH et Redox</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Contrôle de la température</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Durée de filtration adaptée</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage de filtre automatique</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Protection des équipements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Niveau d'eau contrôlé</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Pool'nX */}
      <section id="why-poolnx" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Pourquoi Pool'nX ?</h2>
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
                <p>
                  Pool'nX est une solution permettant d'interfacer les équipements de piscine connectée qui ne sont pas compatibles avec les standards domotiques et GTB du marché.
                </p>
                <p>
                  La Pool'nX permet de traduire les informations et commande de la piscine dans le protocole KNX afin d'être interopérable avec tous les fabricants de supervision ou domotique.
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

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl mb-4">Votre piscine intégrée dans le système domotique</h3>
                <div className="text-gray-600 space-y-4">
                  <p>
                    La Piscine est un nouvel espace de la maison, comme une pièce, elle profite des mêmes fonctions : Éclairage, Sonorisation, Gestion d'éclairage, Chauffage, Wifi, contrôle d'accès… Ces systèmes sont hétérogènes et demandent à être intégrés dans une seule interface de contrôle.
                  </p>
                  <p>
                    Pool'nX à travers sa compatibilité KNX vous permet de l'intégrer aux principaux systèmes domotiques du marché : Crestron, Domovéa, Savant, Homelynk, Lifedomus, Vantage, Control4…
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl mb-4">La piscine intégrée dans une GTB</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">De la même façon, afin de superviser les différents paramètres de votre piscine au sein de votre ERP, l'intégration du système dans votre GTB vous permet de gérer sans effort les paramètres de votre piscine.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Visualisation, commande et pilotage de votre piscine depuis n'importe quel logiciel de supervision</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <section id="schema" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">
              Synoptique général d'une installation communicante
            </h2>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50">
              <ImageWithFallback
                src="https://can-nx.com/wp-content/uploads/2021/10/Poolnx-Passerelle KNX -Poolcop au Klereo -can-nx-1024x434.png"
                alt="Schema pour Pool'nX"
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Domaine d'application - Recommandation</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="residential" className="border rounded-lg px-6 bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-xl hover:no-underline">
                  En résidentiel pour intégrer les systèmes (filtration, pompe, chauffage, éclairage, qualité de l'eau)
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-600 mt-4">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Autour de la piscine dans une seule application domotique ou sur un écran tactile</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="commercial" className="border rounded-lg px-6 bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-xl hover:no-underline">
                  Particulièrement pour l'hôtellerie et tout espace de bien-être
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-600 mt-4">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Pour intégrer les équipements autour de la piscine dans la GTB (gestion technique du bâtiment), afin de centraliser les informations et surveiller les équipements et la qualité de l'eau</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-20 bg-white">
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
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4"
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
      <section id="configurator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductConfigurator productName="Pool'nX" basePrice={299} />
        </div>
      </section>

      {/* Compatibility Checker */}
      <section id="compatibility" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibilityChecker 
            productName="Pool'nX"
            compatibleSystems={['KNX', 'PoolCop', 'Klereo', 'Crestron', 'Domovéa', 'Savant', 'HomeLynk', 'Control4']}
          />
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CustomerTestimonials productName="Pool'nX" />
        </div>
      </section>

      {/* Technical Documentation */}
      <section id="documentation" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TechnicalDocumentation 
            productName="Pool'nX"
            docs={[
              { title: 'Guide Pool\'nX PoolCop', url: 'https://doc.can-nx.com/poolnx-poolcop/' },
              { title: 'Guide Pool\'nX Klereo', url: 'https://doc.can-nx.com/poolnx-klereo/' },
            ]}
          />
        </div>
      </section>

      {/* Distributor Locator */}
      <section id="distributors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <DistributorLocator productName="Pool'nX" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQ items={poolnxFAQItems} />
      </section>

      {/* Crestron Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <a href="https://applicationmarket.crestron.com/poolnx_poolcop-v1-0/" target="_blank" rel="noopener noreferrer">
                <ImageWithFallback
                  src="https://can-nx.com/wp-content/uploads/2023/04/Crestron_logo_PNG3-e1682506031893-1024x143.png"
                  alt="Crestron"
                  className="max-w-md mx-auto h-auto"
                />
              </a>
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6">Télécharger le module Pool'nX pour Crestron</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.slice(0, 2).map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <a
                  href={partner.name === 'Klereo' ? 'https://applicationmarket.crestron.com/poolnx_klereo-v1-0/' : 'https://applicationmarket.crestron.com/poolnx_poolcop-v1-0/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-auto max-h-24 object-contain"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <ImageWithFallback
                src={poolnxProduct}
                alt="Pool'nX"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <h2 className="text-4xl mb-8">Prêt à connecter votre piscine ?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-gray-900 hover:bg-gray-100"
                asChild
              >
                <a href="https://doc.can-nx.com/poolnx-klereo/" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Documentation Klereo
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-gray-900 hover:bg-gray-100"
                asChild
              >
                <a href="https://doc.can-nx.com/poolnx-poolcop/" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Documentation Poolcop
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
