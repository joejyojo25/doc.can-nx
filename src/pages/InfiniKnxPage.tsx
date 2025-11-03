import { motion } from 'motion/react';
import { Hand, Radio, ArrowUpDown, Check, FileText, ShoppingCart, Share2, Palette, Zap, Globe, Plug, Award, TrendingUp, RotateCw, Lightbulb, Settings } from 'lucide-react';
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
import { ProductConfigurator } from '../components/ProductConfigurator';
import { CompatibilityChecker } from '../components/CompatibilityChecker';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { TechnicalDocumentation } from '../components/TechnicalDocumentation';
import { DistributorLocator } from '../components/DistributorLocator';
import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import infiniKnxProduct from 'figma:asset/6710d8b072ed209d48084fa9c9d51566122aedd8.png';
import infiniKnxConfigurator from 'figma:asset/f24f5ae84b036dfe368297427a74b33b4e3e826d.png';

const infiniKnxFAQItems = [
  {
    question: "Qu'est-ce que Infini KNX ?",
    answer: "Infini KNX est le premier bouton rotatif et variateur KNX offrant une connectivité rapide et évolutive, permettant jusqu'à quatre boutons rotatifs par module. Il offre un contrôle d'éclairage simple et intuitif avec une finition métallique raffinée."
  },
  {
    question: "Quelles sont les fonctions disponibles pour le bouton rotatif ?",
    answer: "Le bouton rotatif offre plusieurs fonctions : Télérupteur M/A, Variation (M/A 1 bit, variation 4 bits), Store (Montée/Descente, Stop), Envoi d'objets 1 ou 2 octets, et gestion de scènes (appel + enregistrement)."
  },
  {
    question: "Peut-on utiliser Infini KNX comme entrée binaire ?",
    answer: "Oui, Infini KNX dispose de 4 entrées/sorties binaires pouvant servir d'entrée pour bouton poussoir classique ou de retour d'état par LED (4V-2,5mA)."
  },
  {
    question: "Quelles sont les finitions disponibles ?",
    answer: "Infini KNX se décline en finitions standard (format 55×55) ou haut de gamme avec plaque métallique 80×80. Notre collaboration avec des marques de renom garantit une finition raffinée à la Française."
  },
  {
    question: "Quelle est la profondeur d'encastrement requise ?",
    answer: "Le module nécessite une boîte standard avec une profondeur de 40mm. Les dimensions sont de 90 x 11mm pour le format 55×55."
  },
];

const features = [
  {
    icon: Hand,
    title: "Contrôle tactile intuitif",
    description: "Le premier bouton rotatif et variateur KNX offrant une connectivité rapide et évolutive, permettant jusqu'à quatre boutons rotatifs par module. Contrôle d'éclairage simple et intuitif.",
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Radio,
    title: 'Connectivité rapide et évolutive',
    description: "Installation simplifiée avec jusqu'à 4 boutons rotatifs par module. Système évolutif qui s'adapte à vos besoins. Configuration flexible pour tous types de projets.",
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Finitions premium',
    description: "Se décline en finitions standard (format 55×55) ou haut de gamme avec plaque métallique 80×80. Collaboration avec des marques de renom pour une finition raffinée à la Française.",
    color: 'from-blue-500 to-cyan-500',
  },
];

const technicalSpecs = [
  { icon: Zap, label: 'KNX TP', value: 'Bus KNX intégré' },
  { icon: RotateCw, label: 'Boutons rotatifs', value: 'Jusqu\'à 4 par module' },
  { icon: Lightbulb, label: 'LED', value: '4 entrées/sorties' },
  { icon: Plug, label: 'Entrées binaires', value: '4 entrées' },
  { icon: Award, label: 'Format', value: '55×55 ou 80×80 mm' },
  { icon: TrendingUp, label: 'Profondeur', value: '40mm (boîte standard)' },
  { icon: Globe, label: 'Fabrication', value: 'Finition Française' },
  { icon: Check, label: 'Garantie', value: '2 ans' },
];

const galleryImages = [
  { src: infiniKnxProduct, alt: "Infini KNX - Vue d'ensemble", caption: 'Bouton rotatif KNX premium' },
  { src: 'https://images.unsplash.com/photo-1760799264637-1a14143af390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjIxNzg4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: "Infini KNX - Infrastructure", caption: 'Connectivité et infrastructure' },
  { src: infiniKnxProduct, alt: "Infini KNX - Finitions", caption: 'Finitions métalliques premium' },
];

const navItems = [
  { id: 'features', label: 'Caractéristiques' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'functions', label: 'Fonctions' },
  { id: 'specs', label: 'Spécifications' },
  { id: 'configurator', label: 'Configurateur' },
  { id: 'compatibility', label: 'Compatibilité' },
  { id: 'testimonials', label: 'Témoignages' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'distributors', label: 'Distributeurs' },
  { id: 'faq', label: 'FAQ' },
];

const infiniStats = [
  { icon: Hand, label: 'Installations Premium', value: 1800, suffix: '+' },
  { icon: RotateCw, label: 'Boutons Rotatifs Max', value: 4, suffix: '' },
  { icon: Award, label: 'Satisfaction', value: 98, suffix: '%' },
  { icon: Palette, label: 'Finitions Haut Gamme', value: 2, suffix: '' },
];

export function InfiniKnxPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductStickyNav items={navItems} />
      <StickyCTA 
        productName="Infini KNX - Bouton rotatif" 
        shopUrl="https://can-nx.shop/fr/66-produit-cannx"
        docsUrl="https://doc.can-nx.com/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"
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

        <ProductBreadcrumb productName="Infini KNX" className="relative" />

        <div className="relative flex-1 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Infini KNX
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-800">
              Le premier bouton rotatif et variateur KNX
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
                src={infiniKnxProduct}
                alt="Infini KNX - Bouton rotatif premium"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <LiveStats stats={infiniStats} />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Caractéristiques principales</h2>
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

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Galerie Infini KNX</h2>
          </motion.div>
          <InteractiveGallery images={galleryImages} />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CertificationBadges />
        </div>
      </section>

      {/* Functions */}
      <section id="functions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Fonctions du bouton rotatif</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-xl mb-4">Télérupteur M/A</h3>
                <p className="text-gray-600">Contrôle simple marche/arrêt pour vos équipements.</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-xl mb-4">Variation (M/A 1 bit, variation 4 bits)</h3>
                <p className="text-gray-600">Contrôle précis de l'intensité lumineuse.</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-xl mb-4">Store (Montée/Descente, Stop)</h3>
                <p className="text-gray-600">Gestion intuitive de vos volets et stores.</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-xl mb-4">Gestion de scènes</h3>
                <p className="text-gray-600">Appel et enregistrement de scènes personnalisées.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
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
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-4"
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

      {/* Configurator */}
      <section id="configurator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Configurateur personnalisé</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Créez votre bouton rotatif Infini KNX sur mesure avec gravures personnalisées
            </p>
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl mb-4">Configurez votre Infini KNX</h3>
                  <p className="text-gray-600 mb-6">
                    Utilisez notre configurateur interactif pour personnaliser votre bouton rotatif : 
                    choisissez la finition, le nombre de modules, les gravures et générez un PDF 
                    de configuration prêt pour la production.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Jusqu'à 4 modules configurables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Gravures personnalisées pour chaque bouton</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Aperçu en temps réel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Génération PDF de configuration</span>
                    </li>
                  </ul>
                  <Button 
                    size="lg" 
                    className="bg-indigo-600 hover:bg-indigo-700"
                    asChild
                  >
                    <a href="#infinix-configurator">
                      <Settings className="w-5 h-5 mr-2" />
                      Ouvrir le configurateur
                    </a>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full max-w-sm"
                  >
                    <ImageWithFallback
                      src={infiniKnxConfigurator}
                      alt="Infini KNX avec gravures personnalisées - SPOTS, CEILING, SCONCES"
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Compatibility */}
      <section id="compatibility" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibilityChecker 
            productName="Infini KNX"
            compatibleSystems={['KNX', 'ETS', 'Boîte standard 40mm', 'Finitions 55×55', 'Finitions 80×80']}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CustomerTestimonials productName="Infini KNX" />
        </div>
      </section>

      {/* Documentation */}
      <section id="documentation" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TechnicalDocumentation 
            productName="Infini KNX"
            docs={[
              { title: 'Guide Infini KNX', url: 'https://doc.can-nx.com/' },
            ]}
          />
        </div>
      </section>

      {/* Distributors */}
      <section id="distributors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <DistributorLocator productName="Infini KNX" />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ items={infiniKnxFAQItems} />
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-8">Prêt à contrôler votre éclairage avec élégance ?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Acheter
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
