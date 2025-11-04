import { motion } from 'motion/react';
import { ArrowLeft, Tv, Volume2, Lightbulb, Check, Maximize2, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

export function CrestronPage() {
  const features = [
    {
      icon: Tv,
      title: 'Contrôle AV Professionnel',
      description: 'Intégration complète systèmes audio-vidéo Crestron dans interface KNX unifiée'
    },
    {
      icon: Maximize2,
      title: 'Salles de Conférence',
      description: 'Contrôle projecteurs, écrans, visio, éclairage depuis boutons et écrans KNX'
    },
    {
      icon: Volume2,
      title: 'Distribution Audio',
      description: 'Pilotage matrices audio Crestron multi-zones intégrées à domotique'
    },
    {
      icon: Settings,
      title: 'Scénarios Unifiés',
      description: 'Scénarios combinant KNX et Crestron : cinéma maison, présentation, fête'
    }
  ];

  const crestronProducts = [
    {
      name: 'Processeurs 3/4-Series',
      description: 'Contrôleurs programmables haut de gamme',
      category: 'Processeur'
    },
    {
      name: 'DM NVX',
      description: 'Distribution AV sur IP 4K/8K',
      category: 'AV-over-IP'
    },
    {
      name: 'TSW Touch Screens',
      description: 'Écrans tactiles muraux et mobiles',
      category: 'Interface'
    },
    {
      name: 'Digital Media',
      description: 'Switchers, matrices AV professionnels',
      category: 'Switching'
    },
    {
      name: 'AirMedia',
      description: 'Présentation sans fil BYOD',
      category: 'Wireless'
    },
    {
      name: 'DigitalMedia 8G+',
      description: 'Distribution HDMI/HDBaseT',
      category: 'Distribution'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation Crestron',
      description: 'Installation système Crestron par intégrateur certifié : processeur, interfaces, switchers AV, écrans tactiles'
    },
    {
      step: '2',
      title: 'Programmation Crestron',
      description: 'Programmation Crestron avec SIMPL Windows/Simpl Sharp : logique AV, interfaces utilisateur, scénarios'
    },
    {
      step: '3',
      title: 'Activation protocoles',
      description: 'Activez les protocoles de communication Crestron : TCP/IP, UDP, RS-232 selon équipements. Notez les ports et commandes'
    },
    {
      step: '4',
      title: 'Intégration Kloud\'nX',
      description: 'Ajoutez système Crestron dans Kloud\'nX en mode TCP/IP ou API. Kloud\'nX dialogue avec processeur Crestron pour contrôle bidirectionnel'
    },
    {
      step: '5',
      title: 'Scénarios hybrides',
      description: 'Créez scénarios combinant KNX et Crestron : "Cinéma" (stores KNX + AV Crestron), "Présentation" (éclairage KNX + visio Crestron)'
    }
  ];

  const useCases = [
    {
      title: 'Home Cinéma',
      items: [
        'Scénario "Film" : stores, lumières, AV',
        'Sélection source audio/vidéo depuis KNX',
        'Contrôle volume ampli Crestron',
        'Tout depuis boutons muraux KNX'
      ]
    },
    {
      title: 'Salle Conférence',
      items: [
        'Scénario "Présentation" complet',
        'Contrôle projecteur/écran/visio',
        'Gestion éclairage adaptatif',
        'Interface unifiée utilisateur'
      ]
    },
    {
      title: 'Multi-Room Audio',
      items: [
        'Distribution audio multi-zones',
        'Contrôle depuis écrans KNX',
        'Synchronisation zones',
        'Intégration avec Sonos'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Pourquoi intégrer Crestron avec KNX plutôt que tout en Crestron ?',
      answer: 'Crestron excelle en audio-vidéo professionnel mais KNX est plus adapté et économique pour éclairage, stores, chauffage. Beaucoup de projets haut de gamme combinent les deux : KNX pour domotique classique, Crestron pour AV complexe. L\'intégration Can-nX permet de contrôler tout depuis une interface unifiée et de créer des scénarios combinant les deux mondes.'
    },
    {
      question: 'Puis-je contrôler mon système Crestron depuis mes écrans tactiles KNX ?',
      answer: 'Oui ! Via Kloud\'nX, vous exposez des commandes Crestron dans KNX : sélection source AV, volume ampli, play/pause, next/previous. Ces commandes apparaissent sur vos écrans tactiles KNX comme n\'importe quel objet KNX. Vous pouvez aussi les associer à des boutons muraux KNX (ex: bouton "TV" allume écran + ampli + sélectionne source).'
    },
    {
      question: 'L\'intégration permet-elle des scénarios combinant KNX et Crestron ?',
      answer: 'Oui, c\'est justement l\'intérêt ! Exemple scénario "Cinéma Maison" : 1 bouton KNX déclenche : fermeture stores KNX, extinction lumières KNX sauf LED ambiance à 10%, allumage TV+ampli Crestron, sélection source Blu-ray, volume 75%. Ou scénario "Présentation" : éclairage KNX adapté, projecteur+écran Crestron, ouverture micro visio. Tout orchestré par Kloud\'nX.'
    },
    {
      question: 'Crestron est-il réservé aux projets très haut de gamme ?',
      answer: 'Crestron est effectivement positionné premium et nécessite un intégrateur certifié Crestron. Pour résidentiel standard, des alternatives comme Sonos (audio) ou Control4 peuvent suffire. Mais pour home cinéma sophistiqué, salles de conférence professionnelles, ou distribution AV multi-zones complexe, Crestron reste la référence qualité. L\'intégration Can-nX valorise cet investissement.'
    },
    {
      question: 'L\'intégration fonctionne-t-elle avec les anciens systèmes Crestron (2-Series) ?',
      answer: 'Oui, même les processeurs Crestron 2-Series (anciens) peuvent être intégrés via TCP/IP ou RS-232. Les protocoles Crestron sont stables et rétro-compatibles. Cependant, les processeurs récents (3-Series, 4-Series) offrent plus de flexibilité, de puissance, et supportent mieux les protocoles modernes (REST API, etc.). Mais techniquement, Can-nX peut parler avec quasiment n\'importe quel système Crestron.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '#home' },
              { label: 'Intégrations', href: '#integrations' },
              { label: 'Crestron' }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <a
                href="#integrations"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour aux intégrations
              </a>

              <Badge className="mb-4 bg-indigo-600">
                <Tv className="w-4 h-4 mr-2" />
                Audio-Vidéo Pro
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Crestron
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez vos systèmes audio-vidéo Crestron professionnels dans votre installation KNX. Contrôle unifié, scénarios hybrides, home cinéma et salles de conférence intelligentes.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                  onClick={() => window.location.hash = 'kloudnx'}
                >
                  Découvrir Kloud'nX
                </Button>
                <Button size="lg" variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50">
                  Documentation Crestron
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">Pro</div>
                  <div className="text-sm text-gray-600">Qualité</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">8K</div>
                  <div className="text-sm text-gray-600">Résolution</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Multi</div>
                  <div className="text-sm text-gray-600">Zones</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603417405991-4fd97e52ccea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVzdHJvbiUyMGNvbnRyb2wlMjBzeXN0ZW18ZW58MXx8fHwxNzYyMTcwNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Crestron système contrôle AV"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Contrôle</div>
                    <div className="text-xs text-gray-500">Professionnel</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Pourquoi Intégrer Crestron avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le meilleur des deux mondes : domotique KNX et AV professionnel Crestron
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crestron Products */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Produits Crestron Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Toute la gamme Crestron professionnelle s'intègre avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {crestronProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="text-base mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Étapes d'Intégration
            </h2>
            <p className="text-lg text-gray-600">
              Connectez Crestron à KNX pour contrôle unifié
            </p>
          </motion.div>

          <div className="space-y-6">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center text-white text-xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Cas d'Usage
            </h2>
            <p className="text-lg text-gray-600">
              Exploitez tout le potentiel de l'intégration Crestron-KNX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl mb-4 text-indigo-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Tout savoir sur l'intégration Crestron avec KNX
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Crestron avec KNX ?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Kloud'nX unifie vos systèmes KNX et Crestron pour une expérience de contrôle inégalée
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-indigo-600 hover:bg-gray-100"
                onClick={() => window.location.hash = 'kloudnx'}
              >
                Découvrir Kloud'nX
              </Button>
              <Button 
                size="lg" 
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={() => window.location.hash = 'contact'}
              >
                Contacter un expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
