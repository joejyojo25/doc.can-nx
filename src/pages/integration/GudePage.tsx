import { motion } from 'motion/react';
import { ArrowLeft, Zap, Power, Network, Check, Gauge, Shield } from 'lucide-react';
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

export function GudePage() {
  const features = [
    {
      icon: Power,
      title: 'PDU Intelligentes',
      description: 'Contrôle prises individuelles, mesure consommation par prise, délestage programmé'
    },
    {
      icon: Gauge,
      title: 'Monitoring Énergie',
      description: 'Mesure tension, courant, puissance, énergie par prise avec précision professionnelle'
    },
    {
      icon: Network,
      title: 'Contrôle IP',
      description: 'Management réseau HTTP/SNMP, intégration KNX via Kloud\'nX sans câblage supplémentaire'
    },
    {
      icon: Shield,
      title: 'Fiabilité Industrielle',
      description: 'Qualité allemande Gude, protections surcharge, alertes email/SNMP natives'
    }
  ];

  const gudeProducts = [
    {
      name: 'Expert PDU',
      description: 'PDU 19" rack 8-24 prises commutables',
      category: 'Rack'
    },
    {
      name: 'Expert Power Control',
      description: 'Multiprise intelligente 8 prises IP',
      category: 'Desktop'
    },
    {
      name: 'Expert Net Control',
      description: 'Contrôleur IP 4/8 relais + capteurs',
      category: 'Contrôleur'
    },
    {
      name: 'Expert Sensor Box',
      description: 'Capteurs température/humidité IP',
      category: 'Capteur'
    },
    {
      name: 'Expert Power Meter',
      description: 'Compteur énergie IP sans coupure',
      category: 'Mesure'
    },
    {
      name: 'Expert Transfer Switch',
      description: 'Commutateur alimentation redondante',
      category: 'Redondance'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation Gude PDU',
      description: 'Installez votre PDU/multiprise Gude dans rack ou près des équipements. Raccordement électrique selon normes (triphasé si nécessaire)'
    },
    {
      step: '2',
      title: 'Configuration réseau',
      description: 'Connectez PDU Gude au réseau Ethernet (PoE possible selon modèle). Configurez IP fixe via interface web Gude ou DHCP'
    },
    {
      step: '3',
      title: 'Configuration Gude',
      description: 'Via interface web Gude : nommez les prises, configurez seuils alarmes, activez SNMP/HTTP, créez comptes utilisateurs'
    },
    {
      step: '4',
      title: 'Intégration Kloud\'nX',
      description: 'Ajoutez PDU Gude dans Kloud\'nX en mode HTTP ou SNMP. Kloud\'nX récupère états prises et mesures électriques en temps réel'
    },
    {
      step: '5',
      title: 'Automatisations KNX',
      description: 'Créez scénarios : délestage intelligent si dépassement puissance, coupure équipements non-essentiels, alertes surconsommation, supervision'
    }
  ];

  const useCases = [
    {
      title: 'Baie Informatique',
      items: [
        'Monitoring consommation serveurs',
        'Reboot à distance équipements',
        'Séquencement démarrage (UPS d\'abord)',
        'Alertes température/surcharge'
      ]
    },
    {
      title: 'Gestion Énergie',
      items: [
        'Délestage automatique si dépassement',
        'Coupure équipements non-essentiels',
        'Mesure consommation par équipement',
        'Intégration avec Emergy\'nX'
      ]
    },
    {
      title: 'Automatismes',
      items: [
        'Contrôle alimentations depuis KNX',
        'Supervision centralisée domotique',
        'Coupure programmée (économie veille)',
        'Redémarrage automatique si panne'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce qu\'une PDU Gude et pourquoi l\'intégrer avec KNX ?',
      answer: 'Une PDU (Power Distribution Unit) Gude est une multiprise professionnelle intelligente permettant de contrôler et mesurer chaque prise individuellement via réseau IP. Contrairement à une multiprise classique, elle offre : commutation ON/OFF par prise, mesure consommation par prise, alertes surcharge, qualité industrielle. Via Kloud\'nX, vous intégrez ces fonctions dans domotique KNX pour gestion énergétique globale.'
    },
    {
      question: 'Puis-je mesurer la consommation de chaque appareil branché sur PDU Gude ?',
      answer: 'Oui ! Les PDU Gude séries "Metered" ou "Switched+Metered" mesurent pour chaque prise : tension (V), courant (A), puissance active (W), énergie consommée (kWh), facteur puissance. Via Kloud\'nX, ces mesures remontent dans KNX et Emergy\'nX pour : calcul coûts par équipement, détection surconsommations anormales, optimisation énergétique, facturation interne (datacenter, colocation).'
    },
    {
      question: 'Comment utiliser PDU Gude pour délestage intelligent avec KNX ?',
      answer: 'Kloud\'nX surveille puissance totale consommée (compteur général ou Emergy\'nX). Si approche limite souscription (ex: 36 kW sur 40 kW souscrit), Kloud\'nX coupe automatiquement prises Gude d\'équipements non-essentiels selon priorités définies : PAC piscine, sèche-linge, VE si pas urgent, serveurs secondaires. Évite disjonction compteur général et coûts dépassement.'
    },
    {
      question: 'PDU Gude permet-elle reboot à distance des équipements réseau ?',
      answer: 'Oui, c\'est un usage très courant en IT ! Si serveur, switch, ou modem plante et ne répond plus (ping failed), Kloud\'nX peut couper puis rallumer la prise Gude correspondante après délai (ex: 10s). Reboot automatique sans déplacement physique. Très utile pour équipements distants (site secondaire, local technique éloigné). Vous pouvez aussi rebooter manuellement depuis smartphone via Kloud\'nX.'
    },
    {
      question: 'Quelle différence entre PDU Gude rack et multiprises Gude desktop ?',
      answer: 'PDU rack (Expert PDU Energy, 8600/8800 series) : format 19" pour montage baie informatique, 8-24 prises IEC C13/C19, triphasé possible, idéal datacenters. Multiprises desktop (Expert Power Control) : format classique, 8 prises Schuko/FR, pour bureaux/ateliers. Les deux ont mêmes fonctions (contrôle IP, mesure) et s\'intègrent identiquement avec Kloud\'nX. Choisissez selon environnement.'
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
              { label: 'Gude' }
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

              <Badge className="mb-4 bg-amber-600">
                <Zap className="w-4 h-4 mr-2" />
                PDU Intelligentes
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Gude
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez vos PDU et multiprises intelligentes Gude dans votre installation KNX. Contrôle prises individuelles, mesure énergie par équipement, délestage automatique intelligent.
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
                  Documentation Gude
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">24</div>
                  <div className="text-sm text-gray-600">Prises max</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">IP</div>
                  <div className="text-sm text-gray-600">Contrôle</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">kWh</div>
                  <div className="text-sm text-gray-600">Par prise</div>
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
                  src="https://images.unsplash.com/photo-1725136839480-f7ce91ec30c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRpc3RyaWJ1dGlvbiUyMGVsZWN0cmljYWx8ZW58MXx8fHwxNzYyMTcxMzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gude PDU distribution électrique"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                    <Power className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">PDU</div>
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
              Pourquoi Intégrer Gude avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distribution électrique intelligente et mesure énergétique professionnelle
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
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gude Products */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Gamme Gude Compatible
            </h2>
            <p className="text-lg text-gray-600">
              Toutes les PDU et contrôleurs Gude s'intègrent avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {gudeProducts.map((product, index) => (
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
              Connectez Gude à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Gude-KNX
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
                  <h3 className="text-xl mb-4 text-amber-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Gude avec KNX
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
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Gude avec KNX ?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Kloud'nX et Emergy'nX transforment vos PDU Gude en solution de gestion énergétique intelligente intégrée
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-amber-600 hover:bg-gray-100"
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
