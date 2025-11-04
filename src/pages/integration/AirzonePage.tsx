import { motion } from 'motion/react';
import { ArrowLeft, Wind, Thermometer, Gauge, Check, Snowflake, Zap } from 'lucide-react';
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

export function AirzonePage() {
  const features = [
    {
      icon: Wind,
      title: 'Contrôle Multi-Zones',
      description: 'Pilotez chaque zone de climatisation individuellement : ON/OFF, mode, consigne, ventilation'
    },
    {
      icon: Thermometer,
      title: 'Gestion Température',
      description: 'Réglage précis de la température par zone avec lecture température ambiante réelle'
    },
    {
      icon: Gauge,
      title: 'Modes Avancés',
      description: 'Auto, Froid, Chaud, Ventilation, Déshumidification, Eco, Turbo, Sleep'
    },
    {
      icon: Zap,
      title: 'Économies d\'Énergie',
      description: 'Automatisations intelligentes pour réduire la consommation jusqu\'à 30%'
    }
  ];

  const airzoneModels = [
    {
      name: 'Airzone Acuazone Pro6',
      description: 'Centrale multi-marques universelle jusqu\'à 6 zones',
      category: 'Centrale'
    },
    {
      name: 'Airzone Dkn Box',
      description: 'Spécifique pour systèmes Daikin',
      category: 'Centrale'
    },
    {
      name: 'Airzone Innobus',
      description: 'Protocole propriétaire haute performance',
      category: 'Centrale'
    },
    {
      name: 'Aidoo Pro',
      description: 'Contrôle IR universel pour tous climatiseurs',
      category: 'Contrôleur'
    },
    {
      name: 'Airzone Easyzone',
      description: 'Pour climatisation gainable résidentielle',
      category: 'Centrale'
    },
    {
      name: 'Airzone Cloud Webserver',
      description: 'Passerelle cloud et API locale',
      category: 'Gateway'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Ajout de la licence',
      description: 'Ajoutez la licence Link\'nX HVAC à votre compte Kloud\'nX pour activer les capacités d\'intégration avec les systèmes de climatisation zonale Airzone'
    },
    {
      step: '2',
      title: 'Identification du système',
      description: 'Identifiez votre système Airzone : modèle de centrale, nombre de zones, et type de communication disponible (Modbus RTU/TCP, API Cloud Webserver)'
    },
    {
      step: '3',
      title: 'Configuration communication',
      description: 'Pour Modbus : connectez le câble RS485 ou Ethernet. Pour Airzone Cloud Webserver : activez l\'API locale et notez le token d\'accès'
    },
    {
      step: '4',
      title: 'Configuration Kloud\'nX',
      description: 'Dans Kloud\'nX, déclarez votre système Airzone en sélectionnant le protocole, renseignez les paramètres de connexion, et configurez les zones'
    },
    {
      step: '5',
      title: 'Mapping zones et automatisations',
      description: 'Associez chaque zone Airzone aux objets KNX correspondants. Créez des scénarios intelligents combinant climatisation et domotique'
    }
  ];

  const useCases = [
    {
      title: 'Confort Optimisé',
      items: [
        'Température différente par pièce',
        'Préchauffage/refroidissement avant arrivée',
        'Adaptation auto selon présence',
        'Mode nuit avec température réduite'
      ]
    },
    {
      title: 'Économies d\'Énergie',
      items: [
        'Arrêt auto si fenêtres ouvertes',
        'Réduction température si absence',
        'Intégration avec Emergy\'nX',
        'Adaptation selon tarif électrique'
      ]
    },
    {
      title: 'Scénarios Avancés',
      items: [
        'Mode vacances (température maintien)',
        'Scénario "Quitter maison" (arrêt clim)',
        'Mode été/hiver automatique',
        'Synchronisation avec stores/volets'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Quels systèmes Airzone sont compatibles avec Can-nX ?',
      answer: 'Can-nX est compatible avec toute la gamme Airzone professionnelle : Acuazone Pro6, Dkn Box, Innobus, Aidoo Pro, Easyzone, Flexa, et Lite. L\'intégration se fait soit via Modbus (RTU ou TCP selon le modèle), soit via l\'API Airzone Cloud Webserver. Les deux protocoles sont supportés par Kloud\'nX.'
    },
    {
      question: 'Puis-je contrôler chaque zone de climatisation indépendamment ?',
      answer: 'Oui, totalement ! Kloud\'nX récupère toutes les zones configurées dans votre système Airzone. Vous pouvez piloter chaque zone indépendamment : ON/OFF, mode (chaud/froid/auto/ventilation), température de consigne, vitesse ventilateur, orientation lames. Tout est accessible depuis KNX, boutons, écrans tactiles ou application.'
    },
    {
      question: 'Comment intégrer Airzone dans mes scénarios domotiques ?',
      answer: 'Via Kloud\'nX, vous créez des automatisations puissantes : arrêt clim si détection fenêtre ouverte (contact KNX), préchauffage 30 min avant réveil, mode économie si absence (détection présence KNX), synchronisation température avec stores solaires pour optimiser le confort et les économies. Les possibilités sont infinies.'
    },
    {
      question: 'L\'intégration Airzone permet-elle de faire des économies d\'énergie ?',
      answer: 'Oui, l\'intégration intelligente avec KNX permet des économies de 20-30% : arrêt auto si pièce inoccupée, température réduite la nuit, adaptation selon météo (avec station météo KNX), optimisation avec Emergy\'nX pour privilégier les heures creuses, et gestion fine zone par zone pour ne chauffer/refroidir que les pièces utilisées.'
    },
    {
      question: 'Puis-je visualiser la consommation de ma climatisation Airzone ?',
      answer: 'Avec l\'intégration Emergy\'nX, oui ! Vous pouvez mesurer la consommation de votre climatisation Airzone et l\'analyser dans le temps. Emergy\'nX calcule le coût, compare avec la production solaire éventuelle, et permet d\'optimiser les horaires de fonctionnement pour maximiser l\'autoconsommation et minimiser les coûts.'
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
              { label: 'Airzone' }
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

              <Badge className="mb-4 bg-cyan-600">
                <Snowflake className="w-4 h-4 mr-2" />
                Climatisation Zonale
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Airzone
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez votre système de climatisation zonale Airzone dans votre installation KNX pour un confort optimal et des économies d'énergie substantielles. Contrôle multi-zones intelligent.
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
                  Documentation Airzone
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">30%</div>
                  <div className="text-sm text-gray-600">Économies</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Multi</div>
                  <div className="text-sm text-gray-600">Zones</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">0.5°C</div>
                  <div className="text-sm text-gray-600">Précision</div>
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
                  src="https://images.unsplash.com/photo-1596394183255-728c265e24aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjBodmFjfGVufDF8fHx8MTc2MjE2OTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Airzone climatisation zonale HVAC"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center">
                    <Wind className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Contrôle</div>
                    <div className="text-xs text-gray-500">Par zone</div>
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
              Pourquoi Intégrer Airzone avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le confort climatique intelligent au service de votre domotique
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
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Airzone Models */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Systèmes Airzone Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Toute la gamme Airzone professionnelle s'intègre avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {airzoneModels.map((model, index) => (
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
              Connectez Airzone à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Airzone-KNX
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
                  <h3 className="text-xl mb-4 text-cyan-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Airzone avec KNX
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
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Airzone avec KNX ?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Kloud'nX transforme votre climatisation Airzone en système de confort intelligent intégré à votre domotique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-cyan-600 hover:bg-gray-100"
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
