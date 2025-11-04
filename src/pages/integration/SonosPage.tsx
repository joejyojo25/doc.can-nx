import { motion } from 'motion/react';
import { ArrowLeft, Music, Volume2, Radio, Check, Waves, Speaker } from 'lucide-react';
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

export function SonosPage() {
  const features = [
    {
      icon: Music,
      title: 'Contrôle Audio Complet',
      description: 'Pilotez tous vos enceintes Sonos depuis votre système KNX : lecture, pause, volume, sources'
    },
    {
      icon: Volume2,
      title: 'Multi-Room Audio',
      description: 'Gérez l\'audio multi-pièces avec synchronisation parfaite et contrôle indépendant'
    },
    {
      icon: Radio,
      title: 'Intégration Scénarios',
      description: 'Lancez automatiquement musique et playlists selon vos scénarios domotiques'
    },
    {
      icon: Waves,
      title: 'Streaming Universel',
      description: 'Accédez à tous les services de streaming : Spotify, Apple Music, TuneIn, etc.'
    }
  ];

  const sonosDevices = [
    {
      name: 'Sonos One / Era 100',
      description: 'Enceinte compacte avec Alexa intégré',
      category: 'Enceintes'
    },
    {
      name: 'Sonos Era 300',
      description: 'Audio spatial Dolby Atmos',
      category: 'Enceintes Premium'
    },
    {
      name: 'Sonos Move',
      description: 'Enceinte portable WiFi/Bluetooth',
      category: 'Portable'
    },
    {
      name: 'Sonos Arc / Beam',
      description: 'Barres de son home cinema',
      category: 'Home Cinema'
    },
    {
      name: 'Sonos Sub',
      description: 'Caisson de basses sans fil',
      category: 'Subwoofer'
    },
    {
      name: 'Sonos Amp',
      description: 'Amplificateur pour enceintes passives',
      category: 'Amplificateur'
    },
    {
      name: 'Sonos Port',
      description: 'Adaptateur pour système audio existant',
      category: 'Adaptateur'
    },
    {
      name: 'Sonos Play:5',
      description: 'Enceinte haute fidélité premium',
      category: 'Hi-Fi'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Configuration Sonos',
      description: 'Configurez vos enceintes Sonos via l\'application Sonos officielle. Assurez-vous qu\'elles sont sur le même réseau que Kloud\'nX'
    },
    {
      step: '2',
      title: 'Activation Speak\'nX',
      description: 'Activez le module Speak\'nX sur votre Kloud\'nX pour permettre l\'intégration audio multiroom'
    },
    {
      step: '3',
      title: 'Découverte automatique',
      description: 'Speak\'nX découvre automatiquement toutes les enceintes Sonos présentes sur votre réseau'
    },
    {
      step: '4',
      title: 'Association KNX',
      description: 'Associez chaque enceinte ou groupe Sonos à des objets KNX pour le contrôle : play/pause, volume, sélection source'
    },
    {
      step: '5',
      title: 'Création de scénarios',
      description: 'Intégrez Sonos dans vos scénarios : réveil en musique, ambiance dîner, home cinema automatique, etc.'
    }
  ];

  const useCases = [
    {
      title: 'Scénarios Audio',
      items: [
        'Réveil progressif en musique douce',
        'Ambiance musicale automatique selon l\'heure',
        'Radio news au petit-déjeuner',
        'Musique de fond pour réceptions'
      ]
    },
    {
      title: 'Home Cinema',
      items: [
        'Mode cinéma avec Arc/Beam + Sub',
        'Synchronisation éclairage et son',
        'Baisse automatique des volets',
        'Volume optimal selon scène'
      ]
    },
    {
      title: 'Multi-Room',
      items: [
        'Musique synchronisée dans toutes les pièces',
        'Contrôle indépendant par zone',
        'Playlists par ambiance',
        'Groupement dynamique des zones'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Quelles enceintes Sonos sont compatibles avec Can-nX ?',
      answer: 'Toutes les enceintes Sonos récentes sont compatibles : One, Era 100/300, Move, Roam, Arc, Beam, Amp, Port, Play:5, Sub, etc. Speak\'nX utilise l\'API Sonos officielle pour un contrôle complet et fiable.'
    },
    {
      question: 'Puis-je contrôler Sonos depuis mes boutons KNX ?',
      answer: 'Oui ! Via Speak\'nX, vous associez des objets KNX à vos enceintes Sonos. Vous pouvez contrôler play/pause, volume +/-, sélection de source, et même lancer des playlists favorites depuis vos boutons ou écrans tactiles KNX.'
    },
    {
      question: 'Comment intégrer Sonos dans mes scénarios domotiques ?',
      answer: 'Speak\'nX permet d\'inclure Sonos dans tous vos scénarios : réveil progressif (allumage lumière + musique douce), mode cinéma (volets fermés + lumières tamisées + Arc), mode réception (éclairage festif + playlist), etc. Le tout piloté automatiquement ou via boutons KNX.'
    },
    {
      question: 'Puis-je toujours utiliser l\'application Sonos normale ?',
      answer: 'Absolument ! L\'intégration Can-nX/Speak\'nX est transparente. Vous pouvez continuer à utiliser l\'app Sonos pour choisir vos musiques, créer des playlists, etc. Les deux modes de contrôle coexistent parfaitement.'
    },
    {
      question: 'Speak\'nX fonctionne-t-il avec d\'autres systèmes audio ?',
      answer: 'Speak\'nX est notre module audio universel. En plus de Sonos, il supporte d\'autres systèmes multiroom et peut même piloter des amplificateurs via IR ou RS-232. C\'est une solution audio complète pour votre installation KNX.'
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
              { label: 'Sonos' }
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

              <Badge className="mb-4 bg-purple-600">
                <Music className="w-4 h-4 mr-2" />
                Audio Multi-Room
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Sonos
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez vos enceintes Sonos dans votre système KNX pour un contrôle audio professionnel multi-pièces. Musique, podcasts et streaming pilotés par votre domotique.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                  onClick={() => window.location.hash = 'speaknx'}
                >
                  Découvrir Speak'nX
                </Button>
                <Button size="lg" variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50">
                  Documentation Sonos
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">
                    <Music className="w-8 h-8" />
                  </div>
                  <div className="text-sm text-gray-600">Multi-Room</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Services audio</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">KNX</div>
                  <div className="text-sm text-gray-600">Compatible</div>
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
                  src="https://images.unsplash.com/photo-1594419015530-4676f41c4bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb25vcyUyMHNwZWFrZXIlMjBhdWRpbyUyMHN5c3RlbXxlbnwxfHx8fDE3NjIxNjk4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Enceintes Sonos système audio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <Speaker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Qualité Audio</div>
                    <div className="text-xs text-gray-500">Hi-Fi Premium</div>
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
              Pourquoi Intégrer Sonos avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              L'excellence audio Sonos pilotée par votre système domotique
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
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sonos Devices */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Enceintes Sonos Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Toute la gamme Sonos s'intègre parfaitement avec Speak'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {sonosDevices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {device.category}
                  </Badge>
                  <h3 className="text-base mb-2">{device.name}</h3>
                  <p className="text-sm text-gray-600">{device.description}</p>
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
              Configurez Sonos avec Speak'nX en quelques minutes
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Sonos-KNX
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
                  <h3 className="text-xl mb-4 text-purple-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Sonos avec KNX
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Sonos avec KNX ?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Speak'nX transforme votre système Sonos en solution audio professionnelle pilotée par KNX
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => window.location.hash = 'speaknx'}
              >
                Découvrir Speak'nX
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
