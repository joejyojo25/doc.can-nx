import { motion } from 'motion/react';
import { ArrowLeft, Network, Factory, Gauge, Check, Cpu, Cable } from 'lucide-react';
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

export function ModbusPage() {
  const features = [
    {
      icon: Factory,
      title: 'Protocole Industriel',
      description: 'Standard industriel universel pour compteurs, capteurs, automates, onduleurs solaires'
    },
    {
      icon: Network,
      title: 'Modbus TCP & RTU',
      description: 'Support Modbus TCP (Ethernet) et Modbus RTU (RS485) pour tous types d\'équipements'
    },
    {
      icon: Gauge,
      title: 'Lecture & Écriture',
      description: 'Lecture mesures (énergie, température, débit) et écriture commandes (relais, consignes)'
    },
    {
      icon: Cpu,
      title: 'Intégration Universelle',
      description: 'Intégrez n\'importe quel équipement Modbus dans KNX sans passerelle supplémentaire'
    }
  ];

  const modbusApplications = [
    {
      name: 'Compteurs Énergie',
      description: 'Eastron SDM, Carlo Gavazzi, Schneider PM',
      category: 'Énergie'
    },
    {
      name: 'Onduleurs Solaires',
      description: 'Fronius, SolarEdge, SMA, Huawei',
      category: 'Solaire'
    },
    {
      name: 'Batteries',
      description: 'BYD, LG Chem, Tesla Powerwall',
      category: 'Stockage'
    },
    {
      name: 'CVC & HVAC',
      description: 'PAC, VMC, régulation climatisation',
      category: 'Chauffage'
    },
    {
      name: 'Compteurs d\'Eau/Gaz',
      description: 'Mesure consommation eau, gaz',
      category: 'Mesure'
    },
    {
      name: 'Automates & PLC',
      description: 'Siemens, Schneider, ABB automates',
      category: 'Automatisme'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Identification équipement',
      description: 'Identifiez l\'équipement Modbus : compteur énergie, onduleur, PAC, etc. Récupérez sa documentation Modbus (registres, adresses)'
    },
    {
      step: '2',
      title: 'Connexion réseau',
      description: 'Pour Modbus TCP : connectez l\'équipement au réseau Ethernet. Pour Modbus RTU : câble RS485 vers convertisseur RS485-Ethernet ou USB'
    },
    {
      step: '3',
      title: 'Configuration Modbus',
      description: 'Configurez l\'équipement : adresse Modbus slave (ID), vitesse (baudrate pour RTU), parité. Testez avec outil Modbus (Modpoll, QModMaster)'
    },
    {
      step: '4',
      title: 'Intégration Kloud\'nX',
      description: 'Ajoutez l\'équipement dans Kloud\'nX : type (TCP/RTU), IP/port ou port série, ID slave, mapping registres Modbus vers objets KNX'
    },
    {
      step: '5',
      title: 'Automatisations',
      description: 'Utilisez données Modbus dans scénarios KNX : optimisation énergie selon production solaire, alertes dépassement puissance, historiques'
    }
  ];

  const useCases = [
    {
      title: 'Gestion Énergie',
      items: [
        'Lecture compteur électrique Modbus',
        'Suivi production solaire onduleur',
        'Mesure consommation par circuit',
        'Intégration avec Emergy\'nX'
      ]
    },
    {
      title: 'HVAC Industriel',
      items: [
        'Contrôle PAC Modbus depuis KNX',
        'Régulation température multi-zones',
        'Lecture débits VMC',
        'Optimisation consommation'
      ]
    },
    {
      title: 'Automatismes',
      items: [
        'Intégration automates industriels',
        'Contrôle relais Modbus',
        'Lecture capteurs industriels',
        'Supervision centralisée KNX'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que Modbus et pourquoi est-il important en domotique ?',
      answer: 'Modbus est LE protocole industriel universel créé en 1979, encore massivement utilisé aujourd\'hui. La plupart des compteurs énergie, onduleurs solaires, batteries, PAC professionnelles, compteurs d\'eau/gaz parlent Modbus. Sans intégration Modbus, impossible de récupérer ces données précieuses dans votre domotique KNX. Kloud\'nX fait le pont : il lit/écrit Modbus et expose tout dans KNX.'
    },
    {
      question: 'Quelle différence entre Modbus TCP et Modbus RTU ?',
      answer: 'Modbus TCP utilise réseau Ethernet/IP (câble RJ45 ou WiFi). Modbus RTU utilise liaison série RS485 (câble 2 fils blindé, jusqu\'à 1200m). TCP est plus moderne et pratique (plug réseau existant). RTU est plus ancien mais ultra fiable en environnement industriel difficile. Kloud\'nX supporte les deux. Si votre équipement a port Ethernet, utilisez TCP. Si uniquement RS485, utilisez convertisseur RS485-Ethernet.'
    },
    {
      question: 'Puis-je lire mon compteur électrique Modbus avec Kloud\'nX ?',
      answer: 'Oui ! La plupart des compteurs DIN électroniques récents ont Modbus : Eastron SDM120/SDM630, Carlo Gavazzi EM, Schneider PM, ABB B-Series, etc. Kloud\'nX lit les registres Modbus : puissance active (W), énergie totale (kWh), tension (V), courant (A), facteur puissance, etc. Ces valeurs sont exposées dans KNX et Emergy\'nX pour optimisation, historiques, facturation.'
    },
    {
      question: 'L\'intégration Modbus permet-elle aussi d\'écrire des commandes ?',
      answer: 'Oui ! Kloud\'nX peut lire (fonction Modbus Read) ET écrire (fonction Modbus Write). Lecture : mesures compteurs, états, températures. Écriture : commandes relais Modbus, changement consignes PAC, reset compteurs, configuration équipements. Exemple : piloter relais Modbus depuis bouton KNX, ajuster consigne température PAC Modbus, commander charge batterie.'
    },
    {
      question: 'Ai-je besoin de connaissances techniques pour configurer Modbus ?',
      answer: 'Un minimum, oui. Vous devez récupérer la documentation Modbus de l\'équipement (liste registres, adresses, formats). Kloud\'nX simplifie ensuite : vous sélectionnez équipement dans bibliothèque (si pré-configuré), ou créez mapping manuel (adresse registre, type, format). Pour compteurs/onduleurs courants, Can-nX fournit templates pré-configurés. Pour équipements exotiques, votre intégrateur KNX/électricien peut vous aider à configurer.'
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
              { label: 'Modbus' }
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

              <Badge className="mb-4 bg-orange-600">
                <Cable className="w-4 h-4 mr-2" />
                Protocole Industriel
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Modbus
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez tous vos équipements Modbus TCP/RTU dans votre installation KNX. Compteurs énergie, onduleurs solaires, PAC, automates industriels : supervision et contrôle unifiés.
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
                  Documentation Modbus
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">TCP</div>
                  <div className="text-sm text-gray-600">& RTU</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">R/W</div>
                  <div className="text-sm text-gray-600">Lecture/Écriture</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">∞</div>
                  <div className="text-sm text-gray-600">Équipements</div>
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
                  src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbW9kYnVzJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NjIxNzA1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modbus protocole industriel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Modbus</div>
                    <div className="text-xs text-gray-500">TCP/RTU</div>
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
              Pourquoi Intégrer Modbus avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le protocole industriel universel au service de votre domotique
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
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modbus Applications */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Applications Modbus Typiques
            </h2>
            <p className="text-lg text-gray-600">
              Équipements industriels intégrables dans KNX via Modbus
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {modbusApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {app.category}
                  </Badge>
                  <h3 className="text-base mb-2">{app.name}</h3>
                  <p className="text-sm text-gray-600">{app.description}</p>
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
              Connectez équipements Modbus à KNX
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Modbus-KNX
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
                  <h3 className="text-xl mb-4 text-orange-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Modbus avec KNX
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Modbus avec KNX ?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Kloud'nX connecte tous vos équipements industriels Modbus à votre domotique KNX pour une supervision et un contrôle complets
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-orange-600 hover:bg-gray-100"
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
