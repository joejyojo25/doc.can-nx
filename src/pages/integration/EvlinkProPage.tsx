import { motion } from 'motion/react';
import { ArrowLeft, BatteryCharging, Zap, Sun, Check, Gauge, Shield } from 'lucide-react';
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

export function EvlinkProPage() {
  const features = [
    {
      icon: BatteryCharging,
      title: 'Recharge Professionnelle',
      description: 'Borne Schneider Electric robuste pour usage résidentiel et tertiaire intensif'
    },
    {
      icon: Sun,
      title: 'Mode Solaire Optimal',
      description: 'Intégration parfaite avec Emergy\'nX pour recharge 100% surplus photovoltaïque'
    },
    {
      icon: Zap,
      title: 'Contrôle Complet',
      description: 'Pilotage puissance, planning, load balancing via KNX et Kloud\'nX'
    },
    {
      icon: Shield,
      title: 'Sécurité Schneider',
      description: 'Protection électrique avancée et qualité Schneider Electric reconnue'
    }
  ];

  const evlinkModels = [
    {
      name: 'EVlink Home',
      description: 'Version résidentielle 7,4 kW monophasée',
      category: 'Résidentiel'
    },
    {
      name: 'EVlink Pro AC',
      description: 'Borne professionnelle 7,4/22 kW',
      category: 'Professionnel'
    },
    {
      name: 'EVlink Parking',
      description: 'Solution parking avec gestion multi-bornes',
      category: 'Parking'
    },
    {
      name: 'EVlink City',
      description: 'Borne urbaine pour voirie publique',
      category: 'Public'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation EVlink',
      description: 'Installation par électricien certifié Schneider. Connexion réseau Ethernet/WiFi et raccordement électrique selon puissance choisie'
    },
    {
      step: '2',
      title: 'Configuration borne',
      description: 'Configuration via interface web Schneider : connexion réseau, RFID, puissance max, activation protocole Modbus TCP ou OCPP'
    },
    {
      step: '3',
      title: 'Intégration Kloud\'nX',
      description: 'Ajout de la borne dans Kloud\'nX en mode Modbus TCP ou OCPP. Kloud\'nX découvre automatiquement les paramètres disponibles'
    },
    {
      step: '4',
      title: 'Configuration Emergy\'nX',
      description: 'Activez le pilotage solaire : Emergy\'nX ajuste la puissance de charge selon la production PV en temps réel'
    },
    {
      step: '5',
      title: 'Automatisations KNX',
      description: 'Créez scénarios : recharge heures creuses, mode solaire auto, notification fin charge, intégration avec présence véhicule'
    }
  ];

  const useCases = [
    {
      title: 'Recharge Solaire',
      items: [
        'Mode 100% surplus photovoltaïque',
        'Mode hybride (solaire + réseau)',
        'Optimisation autoconsommation',
        'Réduction facture électrique'
      ]
    },
    {
      title: 'Entreprise & Copro',
      items: [
        'Gestion multi-utilisateurs RFID',
        'Load balancing intelligent',
        'Facturation individualisée',
        'Statistiques par borne'
      ]
    },
    {
      title: 'Contrôle Intelligent',
      items: [
        'Planning hebdomadaire recharge',
        'Heures creuses automatiques',
        'Limitation puissance dynamique',
        'Monitoring temps réel'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Quelle est la différence entre EVlink Home et EVlink Pro ?',
      answer: 'EVlink Home est conçu pour usage résidentiel (1 véhicule, utilisation quotidienne normale), tandis qu\'EVlink Pro est renforcé pour usage intensif professionnel (flottes, parkings, utilisation continue). EVlink Pro offre aussi plus d\'options de connectivité (Modbus, OCPP), de gestion multi-utilisateurs, et une garantie commerciale étendue.'
    },
    {
      question: 'EVlink fonctionne-t-elle avec tous les véhicules électriques ?',
      answer: 'Oui, toute la gamme EVlink utilise le connecteur Type 2 standard européen, compatible avec 100% des VE vendus en Europe. La communication via Modbus ou OCPP permet un contrôle avancé (démarrage, arrêt, ajustement puissance) avec tous les véhicules récents.'
    },
    {
      question: 'Comment fonctionne l\'intégration avec mon installation solaire ?',
      answer: 'Emergy\'nX surveille en permanence votre production solaire et votre consommation maison. Il calcule le surplus disponible et ordonne à EVlink de charger avec exactement cette puissance. Si la production varie (nuage, fin de journée), EVlink ajuste immédiatement sa puissance. Vous maximisez votre autoconsommation et chargez gratuitement !'
    },
    {
      question: 'Puis-je gérer plusieurs bornes EVlink (copropriété, entreprise) ?',
      answer: 'Oui, Kloud\'nX peut piloter plusieurs EVlink avec load balancing automatique : répartition intelligente de la puissance disponible entre bornes actives pour ne jamais dépasser votre abonnement. Idéal pour parkings d\'entreprise ou copropriétés. Chaque utilisateur a sa carte RFID, ses statistiques, et sa facturation si nécessaire.'
    },
    {
      question: 'EVlink est-elle compatible avec les installations KNX existantes ?',
      answer: 'Oui, via Kloud\'nX ! Vous n\'avez pas besoin de passerelle KNX-Modbus supplémentaire. Kloud\'nX fait le lien entre EVlink (Modbus/OCPP) et votre installation KNX. Vous pouvez déclencher des charges depuis boutons KNX, créer des scénarios (ex: recharge auto si VE détecté + soleil), et superviser depuis vos écrans tactiles KNX.'
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
              { label: 'Schneider EVlink' }
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

              <Badge className="mb-4 bg-green-700">
                <BatteryCharging className="w-4 h-4 mr-2" />
                Schneider Electric
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration EVlink Pro
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez votre borne Schneider Electric EVlink dans votre installation KNX. Recharge intelligente, mode solaire et gestion professionnelle multi-utilisateurs.
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
                  Documentation Schneider
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">22kW</div>
                  <div className="text-sm text-gray-600">Puissance</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Pro</div>
                  <div className="text-sm text-gray-600">Qualité</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Multi</div>
                  <div className="text-sm text-gray-600">Utilisateurs</div>
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
                  alt="Schneider EVlink borne recharge"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-800 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Schneider</div>
                    <div className="text-xs text-gray-500">Electric</div>
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
              Pourquoi Intégrer EVlink avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La solution professionnelle Schneider Electric pour la recharge intelligente
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
                    <feature.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVlink Models */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Gamme Schneider EVlink
            </h2>
            <p className="text-lg text-gray-600">
              Toutes les bornes EVlink s'intègrent avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {evlinkModels.map((model, index) => (
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
              Connectez EVlink à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-700 to-green-800 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration EVlink-KNX
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
                  <h3 className="text-xl mb-4 text-green-700">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration EVlink avec KNX
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
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer EVlink avec KNX ?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Kloud'nX et Emergy'nX transforment votre borne Schneider en solution de recharge professionnelle et intelligente
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-green-700 hover:bg-gray-100"
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
