import { motion } from 'motion/react';
import { ArrowLeft, Wifi, Zap, TrendingDown, Plug, Check, Lightbulb, Gauge } from 'lucide-react';
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

export function ShellyPage() {
  const features = [
    {
      icon: Wifi,
      title: 'Large Gamme Compatible',
      description: 'Intégrez tous les types de modules Shelly : relais, dimmers, RGBW, compteurs énergie, capteurs'
    },
    {
      icon: Zap,
      title: 'Contrôle et Supervision',
      description: 'Pilotez relais, volets, dimmers et RGB. Supervisez la consommation en temps réel'
    },
    {
      icon: TrendingDown,
      title: 'Cas d\'Usage Économiques',
      description: 'Retrofit sans refaire le câblage, extension zones secondaires à moindre coût'
    },
    {
      icon: Gauge,
      title: 'Intégration Avancée',
      description: 'Feedback bidirectionnel, scénarios mixtes, mesure énergie vers Emergy\'nX'
    }
  ];

  const modules = [
    {
      name: 'Shelly 1/1PM/Plus 1PM',
      description: 'Relais simple avec mesure de puissance optionnelle',
      category: 'Relais'
    },
    {
      name: 'Shelly 2.5/Plus 2PM',
      description: 'Double relais ou contrôle volets roulants',
      category: 'Relais/Volets'
    },
    {
      name: 'Shelly Dimmer 2 / Dimmer 0-10V',
      description: 'Variation d\'intensité pour éclairage',
      category: 'Éclairage'
    },
    {
      name: 'Shelly RGBW2 / Plus RGBW',
      description: 'Contrôle LED couleur et effets',
      category: 'RGB'
    },
    {
      name: 'Shelly EM / 3EM',
      description: 'Compteurs énergie 1 ou 3 phases',
      category: 'Énergie'
    },
    {
      name: 'Shelly H&T / Plus H&T',
      description: 'Capteurs température et humidité',
      category: 'Capteurs'
    },
    {
      name: 'Shelly Door/Window 2',
      description: 'Contacts de porte magnétiques',
      category: 'Sécurité'
    },
    {
      name: 'Shelly Plug / Plug S',
      description: 'Prises connectées avec mesure',
      category: 'Prises'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Ajout de la licence',
      description: 'Ajoutez la licence Link\'nX IoT à votre compte Kloud\'nX pour activer les capacités d\'intégration avec les modules Shelly'
    },
    {
      step: '2',
      title: 'Configuration réseau Shelly',
      description: 'Connectez vos modules Shelly à votre réseau WiFi local via l\'application Shelly Cloud. Assurez-vous qu\'ils sont accessibles sur le même réseau que Kloud\'nX'
    },
    {
      step: '3',
      title: 'Activation de l\'API locale',
      description: 'Dans les paramètres de chaque module Shelly (via interface web ou app), activez l\'API HTTP locale'
    },
    {
      step: '4',
      title: 'Découverte automatique',
      description: 'Kloud\'nX peut découvrir automatiquement les modules Shelly sur votre réseau. Vous pouvez aussi les ajouter manuellement'
    },
    {
      step: '5',
      title: 'Mapping KNX',
      description: 'Associez chaque relais/sortie Shelly à des objets KNX. Créez des scénarios combinant modules Shelly et équipements KNX'
    }
  ];

  const useCases = [
    {
      title: 'Retrofit Économique',
      items: [
        'Ajout de contrôle sans refaire le câblage',
        'Extension zones secondaires (garage, annexe, cave)',
        'Remplacement d\'actionneurs KNX onéreux',
        'Solution pour projets à budget limité'
      ]
    },
    {
      title: 'Monitoring Énergétique',
      items: [
        'Shelly EM pour mesure par circuit',
        'Intégration avec Emergy\'nX',
        'Supervision consommation totale et historique',
        'Optimisation tarifaire'
      ]
    },
    {
      title: 'Contrôle Avancé',
      items: [
        'Volets roulants avec positionnement précis',
        'Éclairage RGB avec effets',
        'Chauffage électrique économique',
        'Prises connectées pour gestion charges'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Pourquoi utiliser Shelly avec KNX plutôt que du 100% KNX ?',
      answer: 'Shelly offre un excellent rapport qualité-prix pour certaines applications. Un Shelly 1PM coûte ~15€ contre 100-200€ pour un actionneur KNX. C\'est idéal pour les zones secondaires, le retrofit, ou les projets à budget limité, tout en conservant l\'intégration et le contrôle centralisé via Kloud\'nX.'
    },
    {
      question: 'Les modules Shelly Gen2/Plus sont-ils mieux que Gen1 pour l\'intégration KNX ?',
      answer: 'Les modules Gen2 (Shelly Plus) offrent des avantages : meilleure stabilité WiFi, scripts personnalisés, Bluetooth, API plus riche. Cependant, les Gen1 fonctionnent parfaitement avec Can-nX. Les deux générations sont compatibles, choisissez selon vos besoins et budget.'
    },
    {
      question: 'Puis-je utiliser Shelly sans le cloud Shelly ?',
      answer: 'Oui ! L\'intégration Can-nX utilise l\'API locale HTTP/CoAP de Shelly. Vous pouvez désactiver totalement le cloud Shelly si souhaité. Les modules fonctionneront uniquement en local via Kloud\'nX. Idéal pour la confidentialité et la fiabilité (pas de dépendance Internet).'
    },
    {
      question: 'Comment intégrer les mesures d\'énergie Shelly dans Emergy\'nX ?',
      answer: 'Les modules Shelly PM (Power Monitoring) et EM (Energy Meter) remontent leur consommation à Kloud\'nX, qui peut les transférer vers Emergy\'nX. Vous obtenez ainsi un monitoring énergétique complet : production solaire, consommation par circuit, optimisation tarifaire, graphiques historiques.'
    },
    {
      question: 'Puis-je utiliser Shelly pour piloter mes volets roulants existants ?',
      answer: 'Oui, Shelly 2.5 ou Plus 2PM se câblent directement sur les moteurs de volets roulants (montée/descente). Via Kloud\'nX, vous les intégrez au KNX : contrôle depuis boutons KNX, écrans tactiles, scénarios (fermeture automatique au coucher du soleil...), et même le positionnement précis (%) est possible.'
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
              { label: 'Shelly' }
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

              <Badge className="mb-4 bg-blue-600">
                <Wifi className="w-4 h-4 mr-2" />
                Modules WiFi
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Shelly
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez vos modules WiFi Shelly dans votre installation KNX pour une domotique flexible et économique. Retrofit et extension à moindre coût.
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
                  Documentation Shelly
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">~15€</div>
                  <div className="text-sm text-gray-600">Prix module</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">WiFi</div>
                  <div className="text-sm text-gray-600">Sans câblage</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">100%</div>
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Modules Shelly WiFi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Plug className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Installation</div>
                    <div className="text-xs text-gray-500">Plug & Play</div>
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
              Pourquoi Intégrer Shelly avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une solution économique et flexible pour étendre votre installation KNX
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
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Compatible */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Modules Shelly Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Large gamme de modules pour tous vos besoins domotiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {module.category}
                  </Badge>
                  <h3 className="text-base mb-2">{module.name}</h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
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
              Configurez vos modules Shelly en quelques étapes simples
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Shelly-KNX
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
                  <h3 className="text-xl mb-4 text-green-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Shelly avec KNX
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Shelly avec KNX ?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Kloud'nX facilite l'intégration de vos modules Shelly avec votre installation KNX pour une domotique flexible et économique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-green-600 hover:bg-gray-100"
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
