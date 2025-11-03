import { motion } from 'motion/react';
import { Boxes, Network, Cloud, Check, FileText, ShoppingCart, Share2, Zap, Globe, Plug, Award, TrendingUp, Activity } from 'lucide-react';
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
import { ProductConfigurator } from '../components/ProductConfigurator';
import { CompatibilityChecker } from '../components/CompatibilityChecker';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { TechnicalDocumentation } from '../components/TechnicalDocumentation';
import { DistributorLocator } from '../components/DistributorLocator';
import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import modnxProduct from 'figma:asset/18b368059fa728d4fc03cce97562509be61e621e.png';

const modnxFAQItems = [
  {
    question: "Qu'est-ce que Mod'nX ?",
    answer: "Mod'nX est un module KNX de 4 entrées binaires qui prend un seul module rail DIN. C'est la solution la plus compacte pour récupérer facilement les alarmes techniques (OF / SD / TA / TS) dans un encombrement réduit avec un minimum de câblage."
  },
  {
    question: "Comment fonctionne le système d'alarmes autonome ?",
    answer: "Associé à d'autres produits Can'nX comme Speak'nX, Mod'nX peut créer un véritable système d'alarmes techniques décentralisées avec affichage visuel par LED et sonore avec messages personnalisés pour chaque alarme."
  },
  {
    question: "Peut-on connecter Mod'nX au cloud ?",
    answer: "Oui, associé à Kloud'nX, vous pouvez monitorer ou être notifié des alarmes connectées à Mod'nX depuis votre smartphone et conserver un historique des alarmes via l'interface cloud."
  },
  {
    question: "Quelles sont les applications typiques en résidentiel ?",
    answer: "En résidentiel, Mod'nX permet de surveiller les déclenchements de disjoncteurs, les alarmes techniques (haut niveau, pompe en défaut, alarmes vol/incendie), transmettre les alarmes sur votre domotique ou smartphone, et historiser vos alarmes."
  },
  {
    question: "Est-ce adapté pour le tertiaire et la GTB ?",
    answer: "Oui, Mod'nX est parfait pour déployer une architecture répartie et universelle pour GTB, remonter les états TA/TS/OF/SD, et réduire l'espace dans les tableaux (1 module Rail Din pour 4 entrées)."
  },
];

const features = [
  {
    icon: Boxes,
    title: "Module compact",
    description: "4 entrées binaires dans un seul module rail DIN. La solution la plus compacte pour récupérer facilement les alarmes techniques (OF / SD / TA / TS) dans un encombrement réduit avec un minimum de câblage.",
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Network,
    title: 'Système d\'alarmes autonome',
    description: "Associé à d'autres produits Can'nX comme Speak'nX, Mod'nX peut créer un véritable système d'alarmes techniques décentralisées avec affichage visuel par LED et sonore avec messages personnalisés pour chaque alarme.",
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'Connexion cloud',
    description: "Associé à Kloud'nX, vous pouvez monitorer ou être notifié des alarmes connectées à Mod'nX depuis votre smartphone et conserver un historique des alarmes via l'interface cloud Can'nX.",
    color: 'from-blue-500 to-cyan-500',
  },
];

const technicalSpecs = [
  { icon: Zap, label: 'KNX TP, S-Mode (ETS)', value: '30V, 5mA' },
  { icon: Activity, label: 'Entrées binaires', value: '4 entrées' },
  { icon: Plug, label: 'Alimentation', value: '9-30V DC, 2W' },
  { icon: TrendingUp, label: 'Température', value: '-25°/+55°C' },
  { icon: Award, label: 'Dimensions', value: 'Rail DIN - 1 Module' },
  { icon: Globe, label: 'Fabrication', value: 'Fabriqué en Europe' },
  { icon: Network, label: 'Connectivité', value: 'Bus KNX' },
  { icon: Check, label: 'Garantie', value: '2 ans' },
];

const galleryImages = [
  { src: modnxProduct, alt: "Mod'nX - Vue d'ensemble", caption: 'Module KNX ultra-compact Rail DIN' },
  { src: 'https://images.unsplash.com/photo-1612365510981-57aade17a558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwYnVpbGRpbmclMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2MjE3ODg3OXww&ixlib=rb-4.1.0&q=80&w=1080', alt: "Mod'nX - Installation modulaire", caption: 'Architecture modulaire et flexible' },
  { src: modnxProduct, alt: "Mod'nX - Connectivité", caption: '4 entrées binaires compactes' },
];

const navItems = [
  { id: 'features', label: 'Caractéristiques' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'applications', label: 'Applications' },
  { id: 'specs', label: 'Spécifications' },
  { id: 'configurator', label: 'Configurateur' },
  { id: 'compatibility', label: 'Compatibilité' },
  { id: 'testimonials', label: 'Témoignages' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'distributors', label: 'Distributeurs' },
  { id: 'faq', label: 'FAQ' },
];

const modStats = [
  { icon: Network, label: 'Installations GTB', value: 2400, suffix: '+' },
  { icon: Boxes, label: 'Gain d\'espace', value: 75, suffix: '%' },
  { icon: TrendingUp, label: 'Fiabilité', value: 99.5, suffix: '%' },
  { icon: Activity, label: 'Entrées binaires', value: 4, suffix: '' },
];

export function ModnxPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductStickyNav items={navItems} />
      <StickyCTA 
        productName="Mod'nX - Module compact" 
        shopUrl="https://can-nx.shop/fr/66-produit-cannx"
        docsUrl="https://doc.can-nx.com/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <ProductBreadcrumb productName="Mod'nX" className="relative" />

        <div className="relative flex-1 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Mod'nX
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-800">
              Module KNX compact - 4 entrées binaires
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
                src={modnxProduct}
                alt="Mod'nX - Module KNX compact"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <LiveStats stats={modStats} />
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
            <h2 className="text-4xl sm:text-5xl mb-4">Galerie Mod'nX</h2>
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

      {/* Applications */}
      <section id="applications" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Domaine d'application</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="residential" className="border rounded-lg px-6 bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-xl hover:no-underline">
                  Résidentiel
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-600 mt-4">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Surveiller les déclenchements de disjoncteurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Alarmes techniques (haut niveau, pompe en défaut, alarmes vol/incendie)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Transmettre les alarmes sur votre domotique ou smartphone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Historiser vos alarmes</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="commercial" className="border rounded-lg px-6 bg-white/80 backdrop-blur-sm">
                <AccordionTrigger className="text-xl hover:no-underline">
                  Tertiaire et GTB
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-600 mt-4">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Déployer une architecture répartie et universelle pour GTB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Remonter les états TA/TS/OF/SD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Réduire l'espace dans les tableaux (1 module Rail Din pour 4 entrées)</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4"
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
          <ProductConfigurator productName="Mod'nX" basePrice={149} />
        </div>
      </section>

      {/* Compatibility */}
      <section id="compatibility" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibilityChecker 
            productName="Mod'nX"
            compatibleSystems={['KNX', "Kloud'nX", "Speak'nX", 'GTB', 'Crestron', 'Control4']}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CustomerTestimonials productName="Mod'nX" />
        </div>
      </section>

      {/* Documentation */}
      <section id="documentation" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TechnicalDocumentation 
            productName="Mod'nX"
            docs={[
              { title: 'Guide Mod\'nX', url: 'https://doc.can-nx.com/' },
            ]}
          />
        </div>
      </section>

      {/* Distributors */}
      <section id="distributors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <DistributorLocator productName="Mod'nX" />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ items={modnxFAQItems} />
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-8">Prêt à optimiser votre GTB ?</h2>
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
