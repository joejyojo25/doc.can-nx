import { motion } from 'motion/react';
import { Volume2, Wifi, Wrench, Check, FileText, ShoppingCart, Share2, Palette, Zap, Globe, Plug, Award, TrendingUp, Mic, Speaker } from 'lucide-react';
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
import speaknxProduct from 'figma:asset/5745f25880afe1bc24c217e68bbc5b290ffbbe5f.png';

const speaknxFAQItems = [
  {
    question: "Qu'est-ce que Speak'nX ?",
    answer: "Speak'nX est un diffuseur sonore KNX personnalisable qui intègre une puce WiFi et Bluetooth pour s'ouvrir vers le monde de l'IoT. Il permet la diffusion de sons ou messages personnalisables et s'intègre dans une boîte standard connectée au bus KNX."
  },
  {
    question: "Quelles sont les applications possibles ?",
    answer: "Speak'nX peut servir de sonnette connectée avec mélodies personnalisables, diffuseur d'alarmes, messages personnalisés multilingues, et intègre des sondes de température et hygrométrie."
  },
  {
    question: "Peut-on personnaliser les sons et mélodies ?",
    answer: "Oui, vous pouvez créer vos propres pistes sonores personnalisées. Le module dispose d'un lecteur MP3 avec carte micro SD pour stocker vos fichiers audio."
  },
  {
    question: "Quelles finitions sont disponibles ?",
    answer: "Speak'nX se décline en plusieurs finitions : du standard (format 55×55) au haut de gamme avec les finitions Meljac, Art Epure, et Orsteelswitch pour s'intégrer parfaitement à votre appareillage."
  },
  {
    question: "Est-ce compatible avec les systèmes domotiques existants ?",
    answer: "Oui, Speak'nX fonctionne de façon autonome sur bus KNX ou à travers des systèmes domotiques tels que Crestron, Lutron, MyHome, et Niko. Il peut aussi intégrer des carillons IP avec 2N et Doorbird."
  },
];

const features = [
  {
    icon: Volume2,
    title: "Produit KNX",
    description: "Speak'nX est un produit KNX qui intègre les fonctions de diffusion de sons ou de messages déclenchables par télégramme KNX. Il intègre aussi des sondes de Température et d'hygrométrie, deux entrées et un voyant RGBW.",
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Wifi,
    title: 'Connectivité WiFi/Bluetooth',
    description: "Il intègre une puce WiFi, ainsi qu'une fonction Bluetooth pour s'ouvrir vers le monde de l'IoT. Speak'nX peut donc être utilisé en tant que lecteur de flux audio comme Spotify ou en tant qu'émetteur Bluetooth pour un casque audio.",
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Finitions sur mesure',
    description: "Speak'nX est disponible en standard 55×55 en blanc mat ou noir mat. Mais Speak'nX existe aussi dans les finitions Meljac, Art Epure et Orsteelswitch afin de s'adapter à la finition de votre appareillage.",
    color: 'from-pink-500 to-rose-500',
  },
];

const technicalSpecs = [
  { icon: Zap, label: 'KNX TP', value: 'Bus KNX intégré' },
  { icon: Wifi, label: 'WiFi/Bluetooth', value: 'Connectivité IoT' },
  { icon: Speaker, label: 'Audio', value: 'Lecteur MP3, micro SD' },
  { icon: Mic, label: 'Température', value: 'Sondes intégrées' },
  { icon: Award, label: 'Format', value: '55×55 mm' },
  { icon: Palette, label: 'Finitions', value: '4 gammes disponibles' },
  { icon: Globe, label: 'Fabrication', value: 'Fabriqué en Europe' },
  { icon: Check, label: 'Garantie', value: '2 ans' },
];

const galleryImages = [
  { src: speaknxProduct, alt: "Speak'nX - 4 finitions", caption: 'Quatre finitions haut de gamme' },
  { src: 'https://images.unsplash.com/photo-1752955471067-294a5de5bf48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMGNvbnRyb2wlMjBzbWFydCUyMGhvbWV8ZW58MXx8fHwxNzYyMTc4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: "Speak'nX - Contrôle vocal", caption: 'Contrôle sonore intelligent' },
  { src: speaknxProduct, alt: "Speak'nX - Installation", caption: 'Installation simple et élégante' },
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

const speakStats = [
  { icon: Speaker, label: 'Installations', value: 650, suffix: '+' },
  { icon: Award, label: 'Satisfaction', value: 97, suffix: '%' },
  { icon: Palette, label: 'Finitions Premium', value: 4, suffix: '' },
  { icon: Wifi, label: 'Connectivité', value: 100, suffix: '%' },
];

export function SpeaknxPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductStickyNav items={navItems} />
      <StickyCTA 
        productName="Speak'nX - Diffuseur sonore" 
        shopUrl="https://can-nx.shop/fr/66-produit-cannx"
        docsUrl="https://doc.can-nx.com/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <ProductBreadcrumb productName="Speak'nX" className="relative" />

        <div className="relative flex-1 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Speak'nX
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-800">
              Diffuseur sonore personnalisable
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl">
              <ImageWithFallback
                src={speaknxProduct}
                alt="Speak'nX - 4 finitions disponibles"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <LiveStats stats={speakStats} />
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
            <h2 className="text-4xl sm:text-5xl mb-4">Galerie Speak'nX</h2>
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
            <h2 className="text-4xl sm:text-5xl mb-6">Applications</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl mb-4">Sonnette connectée avec mélodies personnalisables</h3>
                <p className="text-gray-600">
                  Transformez votre entrée avec des mélodies uniques et personnalisées.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl mb-4">Diffusion d'alarmes et messages multilingues</h3>
                <p className="text-gray-600">
                  Diffusez des alertes et messages personnalisés dans plusieurs langues.
                </p>
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
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4"
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
          <ProductConfigurator productName="Speak'nX" basePrice={249} />
        </div>
      </section>

      {/* Compatibility */}
      <section id="compatibility" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibilityChecker 
            productName="Speak'nX"
            compatibleSystems={['KNX', 'Crestron', 'Lutron', 'MyHome', 'Niko', '2N', 'Doorbird']}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CustomerTestimonials productName="Speak'nX" />
        </div>
      </section>

      {/* Documentation */}
      <section id="documentation" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TechnicalDocumentation 
            productName="Speak'nX"
            docs={[
              { title: 'Guide Speak\'nX', url: 'https://doc.can-nx.com/' },
            ]}
          />
        </div>
      </section>

      {/* Distributors */}
      <section id="distributors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <DistributorLocator productName="Speak'nX" />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ items={speaknxFAQItems} />
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-8">Prêt à personnaliser votre expérience sonore ?</h2>
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
