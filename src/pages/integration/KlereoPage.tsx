import { motion } from 'motion/react';
import { ArrowLeft, Waves, Filter, Gauge, Check, Droplets, Sparkles } from 'lucide-react';
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

export function KlereoPage() {
  const features = [
    {
      icon: Waves,
      title: 'Filtration Intelligente',
      description: 'Pilotage pompe filtration selon température, météo et usage réel de la piscine'
    },
    {
      icon: Droplets,
      title: 'Gestion Niveau Eau',
      description: 'Régulation automatique niveau eau avec détection fuite et remplissage auto'
    },
    {
      icon: Filter,
      title: 'Entretien Automatisé',
      description: 'Backwash, rinçage, nettoyage automatique robotisé programmable'
    },
    {
      icon: Sparkles,
      title: 'Économies d\'Énergie',
      description: 'Optimisation filtration et chauffage pour réduire consommation jusqu\'à 40%'
    }
  ];

  const klereoFeatures = [
    {
      name: 'Contrôle Filtration',
      description: 'Pilotage pompe avec planning adaptatif',
      category: 'Filtration'
    },
    {
      name: 'Gestion Niveau',
      description: 'Auto-remplissage et détection fuite',
      category: 'Niveau'
    },
    {
      name: 'Pilotage Chauffage',
      description: 'PAC, échangeur, capteurs solaires',
      category: 'Chauffage'
    },
    {
      name: 'Robot Nettoyeur',
      description: 'Lancement automatique programmé',
      category: 'Nettoyage'
    },
    {
      name: 'Éclairage Piscine',
      description: 'LEDs RGB multicolores programmables',
      category: 'Éclairage'
    },
    {
      name: 'Alarmes',
      description: 'Détection anomalies et alertes',
      category: 'Sécurité'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation Klereo',
      description: 'Installation du coffret Klereo dans local technique piscine par électricien : raccordement pompe, sondes, vannes, appareils'
    },
    {
      step: '2',
      title: 'Configuration Klereo',
      description: 'Configuration via interface Klereo : type piscine, volume, équipements, planning filtration, consignes température, alarmes'
    },
    {
      step: '3',
      title: 'Connexion réseau',
      description: 'Connectez Klereo au réseau local (Ethernet ou WiFi) accessible par Kloud\'nX pour communication et pilotage'
    },
    {
      step: '4',
      title: 'Intégration Kloud\'nX',
      description: 'Ajoutez Klereo dans Kloud\'nX en mode API HTTP. Kloud\'nX récupère tous les états et permet le contrôle complet'
    },
    {
      step: '5',
      title: 'Automatisations Pool\'nX',
      description: 'Créez scénarios Pool\'nX : filtration adaptée météo, chauffage solaire optimisé, nettoyage auto, supervision écrans KNX'
    }
  ];

  const useCases = [
    {
      title: 'Filtration Optimisée',
      items: [
        'Planning adaptatif selon température',
        'Réduction filtration si absence',
        'Mode boost avant baignade',
        'Économie 30-40% électricité'
      ]
    },
    {
      title: 'Chauffage Intelligent',
      items: [
        'Température consigne auto',
        'Priorisation énergie solaire',
        'Intégration Emergy\'nX',
        'Mode éco absence prolongée'
      ]
    },
    {
      title: 'Supervision KNX',
      items: [
        'États piscine sur écrans tactiles',
        'Contrôle filtration/éclairage',
        'Alertes si anomalie détectée',
        'Historiques et statistiques'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que Klereo et en quoi diffère-t-il de Poolcop ?',
      answer: 'Klereo est un système de gestion globale de piscine : filtration, chauffage, niveau eau, nettoyage, éclairage. Poolcop se concentre sur l\'analyse chimique (pH, chlore) et le dosage automatique. Les deux sont complémentaires : Klereo gère les équipements mécaniques, Poolcop la qualité de l\'eau. Ensemble via Pool\'nX, vous avez une piscine 100% automatisée et supervisée depuis KNX.'
    },
    {
      question: 'Klereo permet-il vraiment des économies d\'énergie significatives ?',
      answer: 'Oui ! Klereo optimise la filtration selon température eau et météo (filtration réduite quand eau froide). Il gère intelligemment le chauffage (priorisation solaire, mode éco si absence). Les utilisateurs constatent 30-40% d\'économie sur électricité piscine. Avec Emergy\'nX en plus, vous chauffez prioritairement avec surplus solaire gratuit, augmentant encore les économies.'
    },
    {
      question: 'Puis-je contrôler ma piscine depuis mes écrans tactiles KNX ?',
      answer: 'Oui, via Kloud\'nX et Pool\'nX ! Affichez sur vos écrans tactiles KNX : température eau, état filtration, niveau eau, alarmes, consommation. Contrôlez : marche/arrêt filtration manuelle, réglage température chauffage, allumage éclairage piscine RGB, lancement robot nettoyeur. Tout depuis votre interface domotique habituelle.'
    },
    {
      question: 'Klereo détecte-t-il les fuites d\'eau automatiquement ?',
      answer: 'Oui ! Klereo surveille en permanence le niveau d\'eau. Si niveau baisse anormalement malgré remplissage auto, il détecte une fuite probable et vous alerte immédiatement (notification smartphone, écran KNX). Il peut même fermer automatiquement la vanne de remplissage pour éviter gaspillage. Très utile pour détecter fuites cachées liner avant gros dégâts.'
    },
    {
      question: 'Puis-je combiner Klereo avec Poolcop pour piscine 100% automatique ?',
      answer: 'Oui, c\'est l\'idéal ! Klereo gère les équipements (filtration, chauffage, niveau, nettoyage), Poolcop gère la chimie (pH, chlore). Pool\'nX (module Can-nX) centralise la supervision des deux systèmes dans KNX. Résultat : piscine 100% automatique avec eau parfaite, température idéale, entretien minimal, supervision complète, et alertes intelligentes. Le rêve !'
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
              { label: 'Klereo' }
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

              <Badge className="mb-4 bg-teal-600">
                <Filter className="w-4 h-4 mr-2" />
                Gestion Piscine
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Klereo
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez votre système Klereo de gestion globale de piscine dans votre installation KNX. Filtration intelligente, chauffage optimisé, entretien automatisé avec Pool'nX.
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
                  Documentation Klereo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Économies</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Auto</div>
                  <div className="text-sm text-gray-600">Entretien</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">Smart</div>
                  <div className="text-sm text-gray-600">Filtration</div>
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
                  alt="Klereo gestion piscine"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Piscine</div>
                    <div className="text-xs text-gray-500">Intelligente</div>
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
              Pourquoi Intégrer Klereo avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La gestion intelligente et automatisée pour piscine sans souci
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
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Klereo Features */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Fonctionnalités Klereo
            </h2>
            <p className="text-lg text-gray-600">
              Gestion complète de tous les équipements piscine
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {klereoFeatures.map((feature, index) => (
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
              Connectez Klereo à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Klereo-KNX
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
                  <h3 className="text-xl mb-4 text-teal-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Klereo avec KNX
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
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Klereo avec KNX ?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Pool'nX transforme votre Klereo en solution de gestion intelligente de piscine intégrée à votre domotique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-teal-600 hover:bg-gray-100"
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
