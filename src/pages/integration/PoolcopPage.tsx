import { motion } from 'motion/react';
import { ArrowLeft, Waves, Thermometer, Droplets, Check, Gauge, Shield } from 'lucide-react';
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

export function PoolcopPage() {
  const features = [
    {
      icon: Droplets,
      title: 'Mesure Automatique',
      description: 'pH, chlore, redox, température mesurés en continu 24/7 avec précision laboratoire'
    },
    {
      icon: Gauge,
      title: 'Régulation Automatique',
      description: 'Dosage automatique pH et chlore pour eau parfaite sans intervention manuelle'
    },
    {
      icon: Thermometer,
      title: 'Gestion Température',
      description: 'Contrôle pompe à chaleur et chauffage piscine selon consigne'
    },
    {
      icon: Shield,
      title: 'Alertes & Sécurité',
      description: 'Notifications si dérive paramètres, niveau réactifs bas, anomalies détectées'
    }
  ];

  const poolcopFeatures = [
    {
      name: 'Mesure pH',
      description: 'Sonde pH 0-14 avec compensation température',
      category: 'Analyse'
    },
    {
      name: 'Mesure Chlore/Redox',
      description: 'Chlore libre 0-10 ppm ou potentiel redox',
      category: 'Analyse'
    },
    {
      name: 'Dosage pH',
      description: 'Pompe doseuse pH- ou pH+ automatique',
      category: 'Traitement'
    },
    {
      name: 'Dosage Chlore',
      description: 'Pompe doseuse chlore liquide ou électrolyse',
      category: 'Traitement'
    },
    {
      name: 'Filtration',
      description: 'Contrôle pompe filtration avec planning',
      category: 'Filtration'
    },
    {
      name: 'Chauffage',
      description: 'Pilotage PAC et échangeur thermique',
      category: 'Chauffage'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation Poolcop',
      description: 'Installation du système Poolcop par un professionnel piscine : sondes d\'analyse, pompes doseuses, raccordement filtration et réseau'
    },
    {
      step: '2',
      title: 'Configuration Poolcop',
      description: 'Configuration via interface Poolcop : calibration sondes, réglage consignes pH/chlore, programmation filtration, paramètres alarmes'
    },
    {
      step: '3',
      title: 'Connexion réseau',
      description: 'Connectez le Poolcop au réseau local (Ethernet ou WiFi selon modèle) accessible par Kloud\'nX pour communication'
    },
    {
      step: '4',
      title: 'Intégration Kloud\'nX',
      description: 'Ajoutez Poolcop dans Kloud\'nX en mode Modbus TCP ou API HTTP. Kloud\'nX récupère toutes les mesures et états en temps réel'
    },
    {
      step: '5',
      title: 'Automatisations Pool\'nX',
      description: 'Créez scénarios avancés avec Pool\'nX : chauffage si présence, mode économie si absence, synchronisation avec météo, alertes personnalisées'
    }
  ];

  const useCases = [
    {
      title: 'Eau Parfaite Auto',
      items: [
        'Régulation pH 24/7 (7,2-7,4)',
        'Chlore optimal automatique',
        'Aucune intervention manuelle',
        'Économie réactifs (dosage précis)'
      ]
    },
    {
      title: 'Gestion Chauffage',
      items: [
        'Température consigne automatique',
        'Mode éco si absence prolongée',
        'Intégration avec Emergy\'nX solaire',
        'Planning hebdomadaire chauffage'
      ]
    },
    {
      title: 'Supervision KNX',
      items: [
        'Affichage mesures sur écrans tactiles',
        'Alertes si problème détecté',
        'Historiques et graphiques',
        'Contrôle filtration depuis KNX'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que Poolcop et comment s\'intègre-t-il avec Can-nX ?',
      answer: 'Poolcop est un système professionnel d\'analyse et de régulation automatique de l\'eau de piscine (pH, chlore, température). Il mesure en continu les paramètres et dose automatiquement les produits pour maintenir une eau parfaite. Via Kloud\'nX, vous supervisez Poolcop depuis votre domotique KNX : affichage des mesures sur écrans tactiles, alertes, scénarios avancés avec Pool\'nX.'
    },
    {
      question: 'Poolcop évite-t-il vraiment toute manipulation manuelle de la piscine ?',
      answer: 'Oui, en grande partie ! Poolcop mesure pH et chlore 24/7 et dose automatiquement pour maintenir les consignes. Vous n\'avez plus qu\'à remplir les bidons de produits (pH-, chlore) environ 1 fois par mois selon usage. Le système gère tout : analyse, dosage, filtration programmée. Vous recevez des alertes si niveau produit bas ou anomalie détectée.'
    },
    {
      question: 'Puis-je piloter le chauffage de ma piscine intelligemment avec Poolcop ?',
      answer: 'Oui ! Poolcop contrôle votre pompe à chaleur ou échangeur thermique selon la température consigne. Via Pool\'nX (module Can-nX), vous créez des scénarios : température réduite si absence, chauffage avant week-end uniquement, mode éco la nuit. Intégré avec Emergy\'nX, vous pouvez chauffer en priorité avec votre surplus solaire pour 0€ de coût !'
    },
    {
      question: 'Comment Poolcop m\'alerte en cas de problème ?',
      answer: 'Poolcop détecte automatiquement les anomalies : pH ou chlore hors plage malgré dosage (produit vide, sonde défaillante), température anormale, panne pompe filtration, dérive rapide des paramètres. Via Kloud\'nX, vous recevez des notifications push sur smartphone, des alertes sur écrans tactiles KNX, ou même des appels vocaux (Speak\'nX) pour problèmes critiques.'
    },
    {
      question: 'Faut-il obligatoirement Pool\'nX pour intégrer Poolcop avec KNX ?',
      answer: 'Non, Kloud\'nX peut intégrer Poolcop directement pour supervision basique (lecture mesures, états). Mais Pool\'nX (module spécialisé Can-nX pour piscines) ajoute des fonctionnalités avancées : scénarios intelligents, gestion chauffage optimisée, intégration météo, calcul coûts énergie/produits, graphiques historiques détaillés. Pool\'nX est recommandé pour exploiter pleinement votre piscine connectée.'
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
              { label: 'Poolcop' }
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

              <Badge className="mb-4 bg-sky-600">
                <Waves className="w-4 h-4 mr-2" />
                Analyse Piscine
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Poolcop
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez votre système Poolcop d'analyse et régulation automatique de piscine dans votre installation KNX. Eau parfaite 24/7, chauffage intelligent, supervision complète avec Pool'nX.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
                  onClick={() => window.location.hash = 'poolnx'}
                >
                  Découvrir Pool'nX
                </Button>
                <Button size="lg" variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50">
                  Documentation Poolcop
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Analyse</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Auto</div>
                  <div className="text-sm text-gray-600">Dosage</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">±0.1</div>
                  <div className="text-sm text-gray-600">Précision pH</div>
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
                  src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjB3YXRlcnxlbnwxfHx8fDE3NjIxNzEzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Poolcop régulation piscine"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-sky-700 rounded-lg flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Eau</div>
                    <div className="text-xs text-gray-500">Parfaite</div>
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
              Pourquoi Intégrer Poolcop avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La régulation automatique professionnelle pour piscine parfaite
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
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Poolcop Features */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Fonctionnalités Poolcop
            </h2>
            <p className="text-lg text-gray-600">
              Système complet d'analyse et régulation automatique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {poolcopFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {feature.category}
                  </Badge>
                  <h3 className="text-base mb-2">{feature.name}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
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
              Connectez Poolcop à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-600 to-sky-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Poolcop-KNX
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
                  <h3 className="text-xl mb-4 text-sky-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Poolcop avec KNX
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
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Poolcop avec KNX ?
            </h2>
            <p className="text-xl text-sky-100 mb-8">
              Pool'nX transforme votre Poolcop en solution de gestion intelligente de piscine intégrée à votre domotique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-sky-600 hover:bg-gray-100"
                onClick={() => window.location.hash = 'poolnx'}
              >
                Découvrir Pool'nX
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
