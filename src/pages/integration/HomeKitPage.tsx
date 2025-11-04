import { motion } from 'motion/react';
import { ArrowLeft, Smartphone, Home, Mic, Check, Apple, Shield } from 'lucide-react';
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

export function HomeKitPage() {
  const features = [
    {
      icon: Home,
      title: 'Pont KNX-HomeKit',
      description: 'Exposez vos appareils KNX dans Apple Home pour contrôle depuis iPhone, iPad, Mac'
    },
    {
      icon: Mic,
      title: 'Contrôle Vocal Siri',
      description: '"Dis Siri, allume le salon" - Commande vocale naturelle de votre installation KNX'
    },
    {
      icon: Apple,
      title: 'Écosystème Apple',
      description: 'Intégration native avec Apple Watch, HomePod, Apple TV, CarPlay'
    },
    {
      icon: Shield,
      title: 'Sécurité & Confidentialité',
      description: 'Chiffrement de bout en bout, pas de cloud tiers, contrôle local via Apple TV/HomePod'
    }
  ];

  const homekitTypes = [
    {
      name: 'Lumières & Variateurs',
      description: 'Marche/Arrêt, variation, couleur RGB',
      category: 'Éclairage'
    },
    {
      name: 'Stores & Volets',
      description: 'Ouverture, fermeture, position %',
      category: 'Stores'
    },
    {
      name: 'Thermostats',
      description: 'Température, mode chauffage/clim',
      category: 'Chauffage'
    },
    {
      name: 'Prises & Interrupteurs',
      description: 'Alimentation ON/OFF',
      category: 'Prises'
    },
    {
      name: 'Capteurs',
      description: 'Température, mouvement, contact',
      category: 'Capteurs'
    },
    {
      name: 'Sécurité',
      description: 'Alarme, caméras, serrures',
      category: 'Sécurité'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Hub Apple HomeKit',
      description: 'Configurez un hub HomeKit : Apple TV (4K ou HD), HomePod, ou iPad en mode maison. Nécessaire pour accès à distance et automatisations'
    },
    {
      step: '2',
      title: 'Installation Kloud\'nX Bridge',
      description: 'Activez le module HomeKit Bridge dans Kloud\'nX. Il agit comme pont entre KNX et HomeKit, exposant les appareils KNX choisis'
    },
    {
      step: '3',
      title: 'Appairage HomeKit',
      description: 'Scannez le code QR HomeKit fourni par Kloud\'nX avec votre iPhone/iPad (app Maison). Le pont s\'ajoute comme accessoire HomeKit'
    },
    {
      step: '4',
      title: 'Configuration appareils',
      description: 'Sélectionnez dans Kloud\'nX quels appareils KNX exposer dans HomeKit : lumières, stores, thermostats, capteurs, etc.'
    },
    {
      step: '5',
      title: 'Automatisations Siri',
      description: 'Créez automatisations et scènes HomeKit combinant KNX et autres accessoires HomeKit. Contrôlez par commande vocale Siri'
    }
  ];

  const useCases = [
    {
      title: 'Contrôle Vocal',
      items: [
        '"Dis Siri, allume le salon"',
        '"Ferme les volets de la chambre"',
        '"Mets le chauffage à 21°"',
        '"Active le mode soirée"'
      ]
    },
    {
      title: 'Famille Apple',
      items: [
        'Contrôle depuis Apple Watch',
        'Automatisations iPhone (géofencing)',
        'CarPlay en rentrant chez soi',
        'HomePod comme hub central'
      ]
    },
    {
      title: 'Scènes & Automatisations',
      items: [
        'Scènes HomeKit multi-appareils',
        'Automatisations heure/localisation',
        'Raccourcis Siri personnalisés',
        'Intégration avec autres HomeKit'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Ai-je besoin d\'un hub Apple pour utiliser HomeKit avec KNX ?',
      answer: 'Oui, pour accès à distance et automatisations. Apple TV 4K/HD, HomePod, ou iPad en résidence peuvent servir de hub HomeKit. Le hub reste chez vous et permet de contrôler votre installation KNX même quand vous n\'êtes pas là, via 4G/5G. Sans hub, HomeKit fonctionne uniquement en local (même WiFi).'
    },
    {
      question: 'Puis-je contrôler tous mes appareils KNX via Siri et HomeKit ?',
      answer: 'Oui, Kloud\'nX expose vos appareils KNX dans HomeKit : lumières (avec variation), stores/volets (position %), thermostats (température, mode), prises, capteurs (température, mouvement, contact), alarme, serrures. Vous choisissez quels appareils exposer. Ensuite, contrôle vocal Siri : "Dis Siri, allume la cuisine", "Ferme tous les volets", "Quel température il fait dans le salon ?", etc.'
    },
    {
      question: 'L\'intégration HomeKit fonctionne-t-elle sans cloud externe ?',
      answer: 'Oui ! C\'est un avantage majeur d\'HomeKit. Kloud\'nX fait le pont en local entre KNX et HomeKit. Aucune donnée ne transite par serveur cloud externe. Votre iPhone communique directement avec le hub HomeKit (Apple TV/HomePod) qui communique avec Kloud\'nX sur votre réseau local. Confidentialité et rapidité garanties. Même si Internet tombe, tout fonctionne en local.'
    },
    {
      question: 'Puis-je créer des automatisations combinant KNX et autres appareils HomeKit ?',
      answer: 'Oui ! C\'est l\'intérêt principal. Exemple : "Si capteur mouvement KNX détecte présence ET luminosité < 100 lux ALORS allumer lumières Philips Hue + lampes KNX". Ou : "Si je quitte la maison (géofencing iPhone) ALORS activer alarme KNX + éteindre tout KNX + fermer serrure Nuki HomeKit". Vous combinez librement KNX et autres marques HomeKit dans des scénarios unifiés.'
    },
    {
      question: 'HomeKit est-il aussi rapide et fiable que contrôle KNX direct ?',
      answer: 'Pour contrôle vocal et mobile, oui ! HomeKit est très réactif (< 1 seconde généralement). MAIS pour contrôle critique (boutons muraux, détecteurs mouvement instantanés), KNX reste plus rapide et fiable car 100% local et câblé. Conseil : gardez fonctions critiques en KNX pur, et utilisez HomeKit comme interface complémentaire confort (vocal, mobile, automatisations géolocalisées).'
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
              { label: 'Apple HomeKit' }
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

              <Badge className="mb-4 bg-gray-900">
                <Apple className="w-4 h-4 mr-2" />
                Apple HomeKit
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration HomeKit
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez votre installation KNX dans l'écosystème Apple HomeKit. Contrôle vocal Siri, app Maison iOS, automatisations iPhone, Apple Watch et HomePod.
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
                  Documentation Apple
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">Siri</div>
                  <div className="text-sm text-gray-600">Vocal</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">iOS</div>
                  <div className="text-sm text-gray-600">Natif</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Local</div>
                  <div className="text-sm text-gray-600">Sécurisé</div>
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
                  src="https://images.unsplash.com/photo-1583259033924-50bba7deea82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGhvbWVraXQlMjBzbWFydCUyMGhvbWV8ZW58MXx8fHwxNzYyMTcwNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Apple HomeKit smart home"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Contrôle</div>
                    <div className="text-xs text-gray-500">iPhone</div>
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
              Pourquoi Intégrer KNX avec HomeKit ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              L'écosystème Apple au service de votre domotique KNX professionnelle
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
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HomeKit Types */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Appareils KNX Exposés dans HomeKit
            </h2>
            <p className="text-lg text-gray-600">
              Toute votre installation KNX accessible depuis l'app Maison iOS
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {homekitTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {type.category}
                  </Badge>
                  <h3 className="text-base mb-2">{type.name}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
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
              Connectez KNX à HomeKit facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration KNX-HomeKit
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
                  <h3 className="text-xl mb-4 text-gray-900">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration KNX avec HomeKit
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
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer KNX avec HomeKit ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Kloud'nX connecte votre installation KNX à l'écosystème Apple pour un contrôle vocal naturel et des automatisations intelligentes
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-gray-900 hover:bg-gray-100"
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
