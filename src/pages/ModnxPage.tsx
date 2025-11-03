import { motion } from 'motion/react';
import { Boxes, Network, Cloud, Check, FileText, ShoppingCart, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { FAQ } from '../components/FAQ';
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

export function ModnxPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mod'nX
          </motion.h1>
          
          <motion.p
            className="text-2xl sm:text-3xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Module d'entrées KNX<br />Rail din, compact & connecté
          </motion.p>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={modnxProduct}
                alt="Mod'nX - Module d'entrées KNX Rail DIN"
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
                <Boxes className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl mb-4">Universel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Module de 4 entrées binaires KNX qui prend un seul module rail DIN. Récupérer facilement (OF / SD / TA / TS)* dans un encombrement réduit avec un minimum de câblage.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Chaque entrée NO ou NF peut émettre périodiquement une présence ou absence d'alarme, permettant d'assurer un fonctionnement garanti du système ainsi composé.
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
                <Network className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl mb-4">Eco-Système autonome…</h3>
                <p className="text-gray-600 leading-relaxed">
                  Associé à d'autres produits de notre gamme, vous pouvez composer un véritable système d'alarmes techniques décentralisées. Facile à déployer et intuitif à utiliser.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Celui-ci peut fonctionner en autonomie ou connecté. Les alarmes sont visuelles via un affichage par voyants LED, et sonores avec message personnalisé pour chaque alarme via un haut-parleur.
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
                <Cloud className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-2xl mb-4">…Ou Connecté</h3>
                <p className="text-gray-600 leading-relaxed">
                  Associé à la Kloud'nX, vous pouvez monitorer ou être notifié des alarmes connectées à Mod'nX depuis votre smartphone et conserver un historique des alarmes.
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
            <h2 className="text-4xl sm:text-5xl mb-6">Pourquoi Mod'nX ?</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                C'est le seul module de 4 entrées binaires KNX qui prend un seul module rail DIN. Économique, il permet de récupérer facilement (OF / SD / TA / TS)* dans un encombrement réduit avec un minimum de câblage.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Associé aux produits de la gamme Can'nX, l'ensemble devient un véritable système d'alarmes techniques autonome ou intégré, avec des fonctions avancées et connectées : push, notification, diffusion d'alarmes sonores et visuelles.
              </p>
            </motion.div>
          </div>
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
              className="space-y-6"
            >
              <Card className="p-6">
                <h3 className="text-2xl mb-4">Autonome ou Connecté</h3>
                <p className="text-gray-600 leading-relaxed">
                  Il est important aujourd'hui que certaines alarmes techniques soient traitées immédiatement par le système domotique et que le client en soit averti. Disjoncteur baissé, différentiel déclenché, niveau haut d'un bac, incendie, Inondation…tout autant d'informations essentielles pour la sérénité de votre client. Vous pouvez proposer systématiquement notre bundle Sécu'nX connecté à votre domotique ou tout simplement préprogrammé pour le rendre autonome.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl mb-4">Monitoring & Notifications</h3>
                <p className="text-gray-600 leading-relaxed">
                  À travers votre interface cloud, vous pourrez très facilement créer des graphes pour monitorer et notifier des alertes sur smartphone, mais aussi historiser certaines alertes.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domain of Application */}
      <section className="py-20 bg-white">
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
              <AccordionItem value="residential" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-xl text-left hover:no-underline">
                  En résidentiel pour surveiller les installations techniques :
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Déclenchement ou coupure de disjoncteur</li>
                    <li>• Alarmes techniques : haut niveau, pompe en défaut, alarme vol/incendie…</li>
                    <li>• Transmettre vos alarmes sur votre domotique ou smartphone</li>
                    <li>• Historiser vos alarmes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tertiary" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-xl text-left hover:no-underline">
                  En tertiaire pour remonter sur la GTB :
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Déployer une architecture répartie et universelle pour GTB</li>
                    <li>• Remonter les états TA (télé alarme) / TS (télésignalisation) / OF (position du disjoncteur ouvert / fermé / SD (etat du disjoncteur sur déclenchement ou sur défaut)</li>
                    <li>• Pour réduire l'espace dans les tableaux (1 module Rail Din pour 4 entrées)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Caractéristiques</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl mb-6">+++ Caractéristiques des entrées</h3>
              <ul className="space-y-3 text-lg text-gray-700 mb-8">
                <li>Tension du signal: fourni par l'interface pour poussoir. approx. 29 Vcc (tension du bus) lorsque le contact est ouvert</li>
                <li>Courant du signal: lorsque le contact est fermé: 0.2 mA cc par canal au moment de la fermeture: impulsion de 0.1 A</li>
                <li>Délai du signal: 50 ms inclus temps de rebond</li>
                <li>Durée du signal d'entrée: min. 50 ms</li>
              </ul>

              <h3 className="text-2xl mb-6">+++ Caractéristiques des sorties</h3>
              <ul className="space-y-3 text-lg text-gray-700 mb-8">
                <li>Tension du signal: fourni par l'interface pour poussoir. approx. 4.7Vcc, résistance 1.9kOhm (intégrée)</li>
                <li>Courant: Lorsque la sortie est court-circuitée, le courant est d'environ 2,5mA</li>
              </ul>

              <h3 className="text-2xl mb-6">+++ Caractéristiques techniques</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Encombrement réduit 1 module Rail DIN soit 13,58mm</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />KNX TP, S-Mode (ETS), 30V, 5mA, tous les canaux comme entrée : 6mA, tous les canaux comme sortie : 14mA</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Alimentation : Tension du bus : via le ligne de bus KNX/EIB</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Température de fonctionnement : – 5 – + 45 °C</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Dimensions : 90 x 11mm, profondeur 57mm</li>
                <li><Check className="inline w-5 h-5 text-green-500 mr-2" />Garantie 2 ans</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={modnxFAQItems} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-sm mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={modnxProduct}
                alt="Mod'nX"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl mb-8">Prêt à découvrir Mod'nX ?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-indigo-600 hover:bg-gray-100">
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
