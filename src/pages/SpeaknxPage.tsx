import { motion } from 'motion/react';
import { Volume2, Wifi, Wrench, Check, FileText, ShoppingCart, Share2, Palette } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FAQ } from '../components/FAQ';
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

export function SpeaknxPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-pink-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Speak'nX
          </motion.h1>
          
          <motion.p
            className="text-2xl sm:text-3xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Diffuseur sonore personnalisable
          </motion.p>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={speaknxProduct}
                alt="Speak'nX - 4 finitions disponibles"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                <Volume2 className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl mb-4">Produit KNX</h3>
                <p className="text-gray-600 leading-relaxed">
                  Speak'nX est un produit KNX qui intègre les fonctions de diffusion de sons ou de messages déclenchables par télégramme KNX. Il intègre aussi des sondes de Température et d'hygrométrie, deux entrées et un voyant RGBW. Tout est paramétrable pour diffuser la bonne information au bon moment.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                <Wifi className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-2xl mb-4">IOT Ready</h3>
                <p className="text-gray-600 leading-relaxed">
                  Directement ou associé à la Kloud'nX, Le Speak'nX intègre une puce Wifi et Bluetooth permettant de s'ouvrir vers le monde de l'IoT… et créer des fonctions de toute sorte.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                <Wrench className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl mb-4">Sur Mesure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personnalisable par les fonctions et les usages, personnalisable par les pistes sonores que vous pouvez créer, personnalisable par ses finitions, standard ou haut de gamme suivant les marques de renom Meljac, Legrand Art Epure, Orsteelswitch, Modelec… tout est une histoire de choix pour une configuration sur mesure.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Pourquoi Speak'nX ?</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Diffuseur de sons et messages, sonnette sur mesure et connectée KNX / WIFI
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Speak'nX est une solution unique pour répondre haut-parleur multi-fonctionnel et complet. Il fonctionne par impulsion depuis des commandes KNX pour diffuser des effets sonores variés.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Ainsi, ce produit est unique, car il n'existe aucune solution de sonnette connectée KNX / IOT personnalisable (mélodie et finition) incluant configuration de carillons IP avec <a href="https://www.2n.cz/fr_FR/produits" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">2N</a> et <a href="https://www.doorbird.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Doorbird</a>.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                En conclusion, le Speak'nX s'intègre facilement dans toute installation domotique standard ou haut de gamme par sa finition et les fonctions sur mesure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Finishes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-6">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl mb-4">Finitions disponibles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Speak'nX se décline en plusieurs finitions premium pour s'harmoniser parfaitement avec votre intérieur. 
              Du classique au contemporain, trouvez la finition idéale pour votre projet.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-yellow-600 to-yellow-700 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-3/4 h-1 bg-black/40" />
                      ))}
                    </div>
                  </div>
                  <Volume2 className="w-12 h-12 text-black/30 relative z-10" />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-center">Laiton brossé</h4>
                  <p className="text-center text-xs text-gray-500 mt-1">Finition Or classique</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full grid grid-cols-12 gap-1 p-4">
                      {[...Array(144)].map((_, i) => (
                        <div key={i} className="w-full aspect-square bg-white/20 rounded-full" />
                      ))}
                    </div>
                  </div>
                  <Volume2 className="w-12 h-12 text-white/20 relative z-10" />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-center">Noir mat</h4>
                  <p className="text-center text-xs text-gray-500 mt-1">Grille points moderne</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="w-3/4 h-3/4 border-2 border-white/20 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-0 grid grid-cols-10 gap-1 p-3">
                      {[...Array(100)].map((_, i) => (
                        <div key={i} className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-white/20" />
                      ))}
                    </div>
                  </div>
                  <Volume2 className="w-12 h-12 text-white/10 absolute" />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-center">Noir cadre</h4>
                  <p className="text-center text-xs text-gray-500 mt-1">Design minimaliste</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="w-3/4 h-3/4 border-2 border-gray-600/30 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-0 grid grid-cols-10 gap-1 p-3">
                      {[...Array(100)].map((_, i) => (
                        <div key={i} className="w-full aspect-square bg-gray-700/30 rounded-full" />
                      ))}
                    </div>
                  </div>
                  <Volume2 className="w-12 h-12 text-gray-700/10 absolute" />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-center">Blanc/Gris clair</h4>
                  <p className="text-center text-xs text-gray-500 mt-1">Élégance contemporaine</p>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">
              Compatible avec les finitions Meljac, Legrand Art Epure, Orsteelswitch et Modelec
            </p>
            <p className="text-gray-600 mb-6">
              Format standard 55×55 ou plaque de finition métallique haut de gamme 80×80
            </p>
            <Button variant="outline" size="lg" className="border-red-500 text-red-600 hover:bg-red-50">
              <FileText className="w-5 h-5 mr-2" />
              Télécharger le catalogue des finitions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
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
              <Card className="p-6">
                <h3 className="text-2xl mb-4">Utilise toute technologie audio sur-mesure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pour commencer, ce diffuseur connecté permet la diffusion de sons ou de messages complètement personnalisables. Il s'intègre dans une boîte standard, connecté au bus KNX.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-2xl mb-4">Possède de multiples applications et fonctions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Il peut avant tout s'utiliser comme :
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sonnette connectée avec mélodies personnalisables</li>
                  <li>• Diffuseur d'alarmes</li>
                  <li>• Messages personnalisés multilingues</li>
                  <li>• Intègre sonde de température et hygrométrie</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-2xl mb-4">Intègre avec style une technologie domotique audio</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Le Speak'nx se décline ainsi en plusieurs finitions, du plus standard (format 55) au plus haut de gamme afin de se fondre à votre appareillage. Il reprend d'ailleurs avec style les finitions Meljac, Art Epure, Orsteelswitch.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Par conséquent, il peut fonctionner de façon autonome sur bus KNX ou à travers des systèmes domotiques tels que : <a href="https://www.crestron.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Crestron</a>, <a href="https://www.lutron.com/en-US/pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lutron</a>, MyHome, Niko.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Caractéristiques techniques</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <ul className="space-y-3 text-lg text-gray-700">
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />KNX TP</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />WiFi 2.4GHz 802.11 b/g/n/e/I</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Bluetooth 2.4GHz, classique, BLE, v4.2</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Alimentation Auxiliaire 5… 36VDC</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Lecteur MP3, lecteur de carte micro SD</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Haut-parleur 2W</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />LED RGB</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Format 55×55 ou plaque de finition métallique 80×80</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Boîte standard profondeur : 50 mm</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={speaknxFAQItems} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={speaknxProduct}
                alt="Speak'nX - Toutes les finitions"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl mb-8">Prêt à découvrir Speak'nX ?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
                <FileText className="mr-2 h-5 w-5" />
                Documentation
              </Button>
              <Button size="lg" className="bg-[#0CB14B] hover:bg-[#0a9841] text-white">
                <ShoppingCart className="mr-2 h-5 w-5" />
                En savoir plus et acheter
              </Button>
            </div>

            <div className="mt-12">
              <p className="text-white/80 mb-4">Partager</p>
              <div className="flex justify-center gap-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20"
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
                  className="bg-white/10 hover:bg-white/20"
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
                  className="bg-white/10 hover:bg-white/20"
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
