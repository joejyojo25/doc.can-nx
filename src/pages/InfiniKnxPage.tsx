import { motion } from 'motion/react';
import { Hand, Radio, ArrowUpDown, Check, FileText, ShoppingCart, Share2, Palette } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FAQ } from '../components/FAQ';
import infiniKnxProduct from 'figma:asset/6710d8b072ed209d48084fa9c9d51566122aedd8.png';

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

export function InfiniKnxPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Infini KNX
          </motion.h1>
          
          <motion.p
            className="text-2xl sm:text-3xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Le premier bouton rotatif et variateur KNX
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={infiniKnxProduct}
                alt="Infini KNX - Module et boutons rotatifs"
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
                <Hand className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl mb-4">Fonctions bouton poussoir</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Télérupteur M/A</li>
                  <li>• Variation : M/A 1 bit, variation 4 bits</li>
                  <li>• Store : Montée / Descente, Stop</li>
                  <li>• Envoi objet 1 octet, 2 octet</li>
                  <li>• Scènes : appel + enregistrement</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                <Radio className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-2xl mb-4">Fonctions bouton rotatif</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Télérupteur M/A</li>
                  <li>• Variation : M/A 1 bit, variation 4 bits</li>
                  <li>• Store : Montée / Descente, Stop</li>
                  <li>• Envoi objet 1 octet, 2 octets</li>
                  <li>• Scènes : appel + enregistrement</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                <ArrowUpDown className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl mb-4">Fonctions entrées / sorties binaires</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Télérupteur M/A</li>
                  <li>• Sortie LED 4V -2,5mA</li>
                  <li>• Variation : M/A 1 bit, variation 4 bits</li>
                  <li>• Store : Montée / Descente, Stop</li>
                  <li>• Envoi objet 1 octet, 2 octets</li>
                  <li>• Scènes : appel + enregistrement</li>
                </ul>
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
            <h2 className="text-4xl sm:text-5xl mb-6">Pourquoi Infini KNX ?</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                "Retour vers le futur" avec le contrôle d'éclairage à partir de boutons rotatifs. Il est facile de proposer une gestion d'éclairage simple et intuitive. Le bouton rotatif KNX, Infini de chez Can'nX offre une connectivité rapide et évolutive, permettant jusqu'à quatre boutons rotatifs par module.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Notre collaboration avec des marques de renom garantit une finition métallique et raffinée : Fabrication raffinée à la Française !
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl mb-4">Finitions disponibles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Infini KNX se décline en plusieurs finitions haut de gamme fabriquées par des marques renommées. 
              Choisissez la finition qui s'harmonise parfaitement avec votre intérieur.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 text-center">
                      <Palette className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-500">Finition {index}</p>
                      <p className="text-xs text-gray-400 mt-1">Disponible prochainement</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="text-center text-sm text-gray-700">Marque Premium</h4>
                    <p className="text-center text-xs text-gray-500 mt-1">Format 55×55 / 80×80</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-6">
              Finitions disponibles en format standard 55×55 ou avec plaque métallique haut de gamme 80×80
            </p>
            <Button variant="outline" size="lg" className="border-purple-500 text-purple-600 hover:bg-purple-50">
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

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Le bouton rotatif KNX offre une gamme polyvalente de fonctionnalités pour diverses fonctions :
              </p>
              <ul className="text-lg text-gray-600 space-y-3 mb-6">
                <li>4 Boutons poussoirs rotatifs : pour gestion d'éclairage, volume…</li>
                <li>4 Entrées ou sorties LEDs : entrée pour bouton poussoir classique ou retour d'état par LED</li>
              </ul>
              <p className="text-xl text-gray-600 leading-relaxed">
                La solution est intégrable chez n'importe quel fabricant d'appareillage qui souhaite intégrer un style simple et rétro.
              </p>
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
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />KNX TP.256, S-Mode (ETS), 30V, 5mA</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Alimentation : 30DC, 5mA</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Alimentation : format 55×55 ou plaque de finition métallique 80×80, Boîte standard</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Profondeur : 40mm</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Fabriqué en Europe</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Garantie 2 ans</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={infiniKnxFAQItems} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={infiniKnxProduct}
                alt="Infini KNX"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl mb-8">Prêt à découvrir Infini KNX ?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
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
