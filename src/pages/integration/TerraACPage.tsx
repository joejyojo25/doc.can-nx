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

export function TerraACPage() {
  const features = [
    {
      icon: BatteryCharging,
      title: 'Recharge Intelligente',
      description: 'Contrôle complet de votre borne ABB Terra AC : démarrage, arrêt, puissance de charge'
    },
    {
      icon: Sun,
      title: 'Mode Solaire Intégré',
      description: 'Rechargez avec votre surplus solaire via Emergy\'nX pour 0€ de coût'
    },
    {
      icon: Zap,
      title: 'Optimisation Tarifaire',
      description: 'Recharge automatique en heures creuses pour minimiser vos factures'
    },
    {
      icon: Leaf,
      title: 'Fiabilité ABB',
      description: 'Qualité industrielle et durabilité reconnue d\'ABB avec garantie étendue'
    }
  ];

  const terraModels = [
    {
      name: 'ABB Terra AC',
      description: 'Borne 7,4 kW monophasée avec RFID',
      category: 'Monophasé'
    },
    {
      name: 'ABB Terra AC-W',
      description: 'Version murale 7,4/11/22 kW avec câble intégré',
      category: 'Murale'
    },
    {
      name: 'ABB Terra AC-P',
      description: 'Borne sur pied 22 kW professionnelle',
      category: 'Triphasé'
    },
    {
      name: 'ABB Terra AC Wallbox',
      description: 'Solution compacte résidentielle 7,4 kW',
      category: 'Résidentiel'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation Terra AC',
      description: 'Installez votre borne ABB Terra AC par un électricien certifié et connectez-la au réseau Ethernet ou WiFi (selon modèle)'
    },
    {
      step: '2',
      title: 'Configuration borne',
      description: 'Configurez votre Terra AC via l\'interface web ABB : connexion réseau, RFID, puissance maximale, et activez le protocole OCPP 1.6'
    },
    {
      step: '3',
      title: 'Intégration Kloud\'nX',
      description: 'Dans Kloud\'nX, ajoutez votre Terra AC en mode OCPP. Renseignez l\'URL de la borne et l\'identifiant du point de charge'
    },
    {
      step: '4',
      title: 'Configuration Emergy\'nX',
      description: 'Pour la recharge solaire intelligente, activez Emergy\'nX qui pilotera la puissance selon votre production photovoltaïque'
    },
    {
      step: '5',
      title: 'Scénarios KNX',
      description: 'Créez des automatisations : recharge heures creuses, mode solaire auto, notifications, intégration avec détection de présence véhicule'
    }
  ];

  const useCases = [
    {
      title: 'Recharge Solaire',
      items: [
        'Mode 100% surplus solaire (économie maximale)',
        'Mode hybride solaire + réseau',
        'Stockage énergie dans batterie VE',
        'Maximisation autoconsommation'
      ]
    },
    {
      title: 'Optimisation Coûts',
      items: [
        'Recharge heures creuses programmée',
        'Délestage intelligent si nécessaire',
        'Suivi coût en temps réel',
        'Historique et statistiques'
      ]
    },
    {
      title: 'Contrôle Avancé',
      items: [
        'Démarrage/arrêt depuis KNX',
        'Réglage puissance dynamique',
        'Gestion multi-utilisateurs RFID',
        'Load balancing multi-bornes'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Quelle est la différence entre Terra AC et les autres bornes ?',
      answer: 'ABB Terra AC est une borne de qualité industrielle reconnue mondialement. Plus robuste que les bornes grand public, elle offre une garantie étendue, un SAV professionnel, et une compatibilité parfaite avec les flottes d\'entreprise. L\'intégration OCPP 1.6 garantit un contrôle complet via Kloud\'nX (démarrage, arrêt, ajustement puissance).'
    },
    {
      question: 'Terra AC peut-elle charger tous les véhicules électriques ?',
      answer: 'Oui, Terra AC utilise le connecteur Type 2 standard européen, compatible avec tous les VE vendus en Europe : Tesla (avec adaptateur inclus), Renault, Peugeot, VW, BMW, Audi, Hyundai, Kia, Mercedes, etc. La communication OCPP permet un contrôle avancé avec tous les véhicules modernes.'
    },
    {
      question: 'Comment fonctionne le mode solaire avec Terra AC ?',
      answer: 'Emergy\'nX surveille votre production solaire en temps réel. Si vous produisez un surplus (ex: 8 kW produits, 2 kW consommés = 6 kW disponibles), il ordonne à la borne Terra AC de charger à 6 kW. Si la production baisse (nuage), la puissance s\'ajuste instantanément. Vous chargez gratuitement votre VE avec votre propre électricité !'
    },
    {
      question: 'Puis-je installer plusieurs Terra AC (copropriété, entreprise) ?',
      answer: 'Oui, Kloud\'nX peut gérer plusieurs bornes Terra AC simultanément avec load balancing intelligent : répartition automatique de la puissance disponible entre les bornes actives pour ne jamais dépasser votre abonnement. Idéal pour parkings d\'entreprise, copropriétés, flottes de véhicules. Gestion RFID par utilisateur avec facturation individuelle possible.'
    },
    {
      question: 'Terra AC est-elle adaptée à l\'extérieur et aux conditions difficiles ?',
      answer: 'Oui, les bornes Terra AC ont un indice de protection IP54 minimum (certains modèles IP65), résistantes à la pluie, neige, poussière, et températures extrêmes (-25°C à +50°C). Leur construction robuste industrielle ABB garantit une longévité supérieure aux bornes grand public, même en installation extérieure permanente.'
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
              { label: 'ABB Terra AC' }
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

              <Badge className="mb-4 bg-red-600">
                <BatteryCharging className="w-4 h-4 mr-2" />
                ABB Terra AC
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration ABB Terra AC
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez votre borne de recharge ABB Terra AC dans votre installation KNX. Qualité industrielle ABB, recharge intelligente et mode 100% solaire avec Emergy'nX.
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
                  Documentation ABB
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">22kW</div>
                  <div className="text-sm text-gray-600">Max power</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">ABB</div>
                  <div className="text-sm text-gray-600">Qualité</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">OCPP</div>
                  <div className="text-sm text-gray-600">Protocole</div>
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
                  alt="ABB Terra AC borne recharge véhicule électrique"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Qualité</div>
                    <div className="text-xs text-gray-500">ABB Industrial</div>
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
              Pourquoi Intégrer Terra AC avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La référence industrielle pour la recharge de véhicules électriques
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
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terra Models */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Gamme ABB Terra AC
            </h2>
            <p className="text-lg text-gray-600">
              Toutes les bornes Terra AC s'intègrent avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {terraModels.map((model, index) => (
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
              Connectez Terra AC à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Terra AC-KNX
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
                  <h3 className="text-xl mb-4 text-red-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration ABB Terra AC avec KNX
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Terra AC avec KNX ?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Kloud'nX et Emergy'nX transforment votre borne ABB en solution de recharge intelligente et éco-responsable
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-red-600 hover:bg-gray-100"
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
