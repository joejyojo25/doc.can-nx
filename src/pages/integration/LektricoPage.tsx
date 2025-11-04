import { motion } from 'motion/react';
import { ArrowLeft, BatteryCharging, Zap, Sun, Check, Gauge, Leaf } from 'lucide-react';
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

export function LektricoPage() {
  const features = [
    {
      icon: BatteryCharging,
      title: 'Recharge Intelligente',
      description: 'Pilotage complet de votre borne : démarrage, arrêt, puissance, planning de recharge'
    },
    {
      icon: Sun,
      title: 'Mode 100% Solaire',
      description: 'Chargez uniquement avec votre surplus solaire grâce à l\'intégration Emergy\'nX'
    },
    {
      icon: Zap,
      title: 'Optimisation Tarifaire',
      description: 'Recharge automatique pendant les heures creuses pour minimiser les coûts'
    },
    {
      icon: Leaf,
      title: 'Éco-responsable',
      description: 'Maximisez l\'autoconsommation solaire et réduisez votre empreinte carbone'
    }
  ];

  const lektricoModels = [
    {
      name: 'Lektrico 1P7K',
      description: 'Borne monophasée 7,4 kW avec RFID',
      category: 'Monophasé'
    },
    {
      name: 'Lektrico 3P22K',
      description: 'Borne triphasée 22 kW haute puissance',
      category: 'Triphasé'
    },
    {
      name: 'Lektrico Cube',
      description: 'Solution portable avec protection IP54',
      category: 'Portable'
    },
    {
      name: 'Lektrico 1P11K',
      description: 'Borne monophasée renforcée 11 kW',
      category: 'Monophasé'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation borne Lektrico',
      description: 'Installez votre borne Lektrico et connectez-la à votre réseau WiFi/Ethernet. Assurez-vous qu\'elle est accessible sur le même réseau que Kloud\'nX'
    },
    {
      step: '2',
      title: 'Configuration Lektrico',
      description: 'Via l\'application Lektrico, configurez votre borne : identité, RFID, puissance maximale, et activez l\'API locale (OCPP ou HTTP)'
    },
    {
      step: '3',
      title: 'Intégration Kloud\'nX',
      description: 'Dans Kloud\'nX, ajoutez votre borne Lektrico en renseignant son adresse IP et protocole (OCPP 1.6 recommandé pour fonctionnalités complètes)'
    },
    {
      step: '4',
      title: 'Configuration Emergy\'nX (optionnel)',
      description: 'Pour la recharge 100% solaire, connectez Emergy\'nX pour qu\'il pilote la puissance de charge selon la production photovoltaïque'
    },
    {
      step: '5',
      title: 'Automatisations KNX',
      description: 'Créez des scénarios : recharge heures creuses, mode solaire automatique, notification fin de charge, intégration avec détection présence véhicule'
    }
  ];

  const useCases = [
    {
      title: 'Recharge Solaire',
      items: [
        'Mode 100% surplus solaire (0€)',
        'Mode hybride solaire + réseau',
        'Priorité autoconsommation maximale',
        'Stockage énergie solaire dans VE'
      ]
    },
    {
      title: 'Optimisation Économique',
      items: [
        'Recharge heures creuses automatique',
        'Limitation puissance pour éviter dépassement',
        'Calcul coût de recharge en temps réel',
        'Comparaison avec tarif plein'
      ]
    },
    {
      title: 'Contrôle Intelligent',
      items: [
        'Démarrage/arrêt depuis KNX',
        'Réglage puissance dynamique',
        'Planning hebdomadaire de recharge',
        'Notification fin de charge'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Comment fonctionne la recharge 100% solaire avec Lektrico ?',
      answer: 'Via Emergy\'nX, Kloud\'nX pilote la puissance de charge de votre borne Lektrico en temps réel selon votre surplus solaire. Si le soleil produit 8 kW et que votre maison consomme 2 kW, Emergy\'nX demandera à la borne de charger à 6 kW. Si un nuage passe, la puissance s\'adapte immédiatement. Vous chargez gratuitement avec votre propre énergie !'
    },
    {
      question: 'Puis-je forcer une recharge même sans soleil ?',
      answer: 'Oui, bien sûr ! Vous avez plusieurs modes : 100% solaire (attend le surplus), hybride (solaire + complément réseau si besoin), ou forcé (charge à pleine puissance depuis le réseau). Vous pouvez changer de mode à tout moment depuis KNX, l\'app Kloud\'nX, ou par automatisation (ex: mode forcé si batterie < 20%).'
    },
    {
      question: 'Lektrico est-il compatible avec tous les véhicules électriques ?',
      answer: 'Oui, Lektrico est une borne standard Type 2 (norme européenne) compatible avec tous les VE : Tesla, Renault Zoe, Peugeot e-208, VW ID.3/4, BMW i3, Hyundai Kona, Nissan Leaf, etc. La communication OCPP 1.6 permet un contrôle avancé (démarrage, arrêt, puissance) avec tous les VE modernes.'
    },
    {
      question: 'Puis-je suivre ma consommation de recharge dans le temps ?',
      answer: 'Oui ! Kloud\'nX enregistre tous les événements de recharge : date, heure, énergie consommée, puissance moyenne, coût (selon votre tarif), et part solaire vs réseau. Emergy\'nX génère des graphiques et statistiques mensuelles : kWh chargés, coût, économies grâce au solaire, équivalence km parcourus, CO2 évité.'
    },
    {
      question: 'Peut-on gérer plusieurs bornes Lektrico (copropriété, entreprise) ?',
      answer: 'Oui, Kloud\'nX peut piloter plusieurs bornes Lektrico simultanément. C\'est idéal pour copropriétés ou entreprises. Vous pouvez gérer la répartition de puissance (load balancing) pour ne pas dépasser la puissance souscrite, attribuer des bornes/RFID par utilisateur, et même facturer l\'énergie consommée par personne.'
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
              { label: 'Lektrico' }
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

              <Badge className="mb-4 bg-emerald-600">
                <BatteryCharging className="w-4 h-4 mr-2" />
                Recharge Intelligente
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Lektrico
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez votre borne de recharge Lektrico dans votre installation KNX pour une recharge intelligente, économique et 100% solaire. Maximisez votre autoconsommation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                  onClick={() => window.location.hash = 'emergynx'}
                >
                  Découvrir Emergy'nX
                </Button>
                <Button size="lg" variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50">
                  Documentation Lektrico
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Solaire</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">22kW</div>
                  <div className="text-sm text-gray-600">Max power</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Type 2</div>
                  <div className="text-sm text-gray-600">Universel</div>
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
                  src="https://images.unsplash.com/photo-1751553512991-7ae218946be9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldiUyMGNoYXJnZXIlMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzYyMTY5ODczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Lektrico borne recharge véhicule électrique"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Recharge</div>
                    <div className="text-xs text-gray-500">100% Solaire</div>
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
              Pourquoi Intégrer Lektrico avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La recharge intelligente et éco-responsable pour votre véhicule électrique
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
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lektrico Models */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Bornes Lektrico Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Toute la gamme Lektrico s'intègre avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {lektricoModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {model.category}
                  </Badge>
                  <h3 className="text-base mb-2">{model.name}</h3>
                  <p className="text-sm text-gray-600">{model.description}</p>
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
              Connectez Lektrico à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Lektrico-KNX
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
                  <h3 className="text-xl mb-4 text-emerald-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Lektrico avec KNX
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Lektrico avec KNX ?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Emergy'nX et Kloud'nX transforment votre borne Lektrico en solution de recharge intelligente 100% solaire
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-emerald-600 hover:bg-gray-100"
                onClick={() => window.location.hash = 'emergynx'}
              >
                Découvrir Emergy'nX
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
