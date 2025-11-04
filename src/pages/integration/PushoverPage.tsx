import { motion } from 'motion/react';
import { ArrowLeft, Bell, Smartphone, AlertCircle, Check, MessageSquare, Zap } from 'lucide-react';
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

export function PushoverPage() {
  const features = [
    {
      icon: Bell,
      title: 'Notifications Push',
      description: 'Alertes instantanées sur smartphone iOS/Android depuis événements domotique KNX'
    },
    {
      icon: AlertCircle,
      title: 'Priorités & Sons',
      description: 'Notifications silencieuses, normales, ou d\'urgence avec sons personnalisés et vibrations'
    },
    {
      icon: MessageSquare,
      title: 'Messages Riches',
      description: 'Titres, messages longs, liens, images, actions rapides intégrées aux notifications'
    },
    {
      icon: Zap,
      title: 'Fiabilité Maximale',
      description: 'Service dédié notifications push, aucun cloud propriétaire, paiement unique lifetime'
    }
  ];

  const pushoverFeatures = [
    {
      name: 'Notification Normale',
      description: 'Son standard, vibration, apparaît dans centre notifications',
      category: 'Standard'
    },
    {
      name: 'Notification Urgente',
      description: 'Son d\'alerte fort répété jusqu\'à acquittement utilisateur',
      category: 'Urgence'
    },
    {
      name: 'Notification Silencieuse',
      description: 'Aucun son ni vibration, apparaît discrètement',
      category: 'Silencieux'
    },
    {
      name: 'Sons Personnalisés',
      description: '30+ sons intégrés ou sons personnalisés',
      category: 'Audio'
    },
    {
      name: 'Images & Liens',
      description: 'Snapshot caméra, lien vers interface web',
      category: 'Multimédia'
    },
    {
      name: 'Actions Rapides',
      description: 'Boutons dans notification pour réponse rapide',
      category: 'Interactif'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Compte Pushover',
      description: 'Créez compte Pushover (pushover.net). Achat unique 5$ lifetime iOS ou Android. Récupérez votre User Key API'
    },
    {
      step: '2',
      title: 'Application Pushover',
      description: 'Créez une "Application" dans Pushover (pour Can-nX). Notez l\'API Token généré. Vous pouvez créer plusieurs tokens pour différents usages'
    },
    {
      step: '3',
      title: 'Configuration Kloud\'nX',
      description: 'Dans Kloud\'nX, ajoutez service Pushover en renseignant votre User Key et API Token. Testez l\'envoi avec notification test'
    },
    {
      step: '4',
      title: 'Règles notifications',
      description: 'Créez règles dans Kloud\'nX : QUAND [événement KNX] ALORS envoi notification Pushover. Configurez priorité, son, message'
    },
    {
      step: '5',
      title: 'Notifications avancées',
      description: 'Ajoutez snapshots caméras, actions rapides (ex: "Désactiver alarme"), liens vers interfaces web, variables dynamiques dans messages'
    }
  ];

  const useCases = [
    {
      title: 'Alarme & Sécurité',
      items: [
        'Alarme déclenchée (notification urgente)',
        'Détection intrusion avec snapshot caméra',
        'Porte/fenêtre ouverte en absence',
        'Batterie alarme faible'
      ]
    },
    {
      title: 'Domotique Quotidienne',
      items: [
        'Fin cycle lave-linge/sèche-linge',
        'Température congélateur anormale',
        'Fuite d\'eau détectée',
        'Porte garage restée ouverte'
      ]
    },
    {
      title: 'Énergie & Technique',
      items: [
        'Production solaire anormale',
        'Coupure électricité (backup)',
        'Dépassement puissance souscrite',
        'Fin de charge véhicule électrique'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Pourquoi Pushover plutôt que notifications gratuites (IFTTT, Telegram, email) ?',
      answer: 'Pushover est LE service professionnel de notifications push pour domotique. Avantages : fiabilité 99,9%, livraison instantanée (<1s), notifications d\'urgence répétées jusqu\'à acquittement, sons personnalisés, aucune limite, pas de pub, vie privée (pas de cloud tiers). Coût unique 5$ lifetime vs abonnements récurrents. Email est lent, IFTTT gratuit a limites et délais, Telegram nécessite bot.'
    },
    {
      question: 'Comment fonctionnent les notifications d\'urgence Pushover ?',
      answer: 'Notifications priorité 2 (Emergency) : son d\'alerte fort répété toutes les X secondes (configurable) jusqu\'à ce que vous acquittiez manuellement sur smartphone. Impossible à ignorer, idéal pour : alarme intrusion, détection fuite eau, température critique, alerte sécurité. Kloud\'nX reçoit confirmation acquittement pour traçabilité (qui a acquitté, quand).'
    },
    {
      question: 'Puis-je envoyer des snapshots de mes caméras dans les notifications ?',
      answer: 'Oui ! Kloud\'nX peut capturer un snapshot caméra (Hikvision, DoorBird, 2N, etc.) et l\'attacher à la notification Pushover. Très utile : "Intrusion détectée" + photo caméra entrée. Vous voyez immédiatement qui/quoi a déclenché l\'alerte sans ouvrir app caméra séparée. Pushover supporte images jusqu\'à 2,5 MB.'
    },
    {
      question: 'Peut-on recevoir notifications sur plusieurs smartphones (famille) ?',
      answer: 'Oui ! Pushover supporte "Delivery Groups" : créez groupe incluant plusieurs User Keys (vous, conjoint, enfants). Envoyez notification au groupe, tous la reçoivent. Vous pouvez aussi créer plusieurs tokens API pour différents types notifs : token "Sécurité" vers groupe famille, token "Technique" vers vous seul, token "Confort" vers conjoint, etc.'
    },
    {
      question: 'Pushover fonctionne-t-il même si Internet est coupé chez moi ?',
      answer: 'Non, Pushover nécessite connexion Internet pour envoyer notifications (serveurs Pushover sur Internet). MAIS votre smartphone peut être en 4G/5G, donc vous recevez quand même notif. Pour alertes critiques coupure Internet, combinez avec système de backup : appel téléphonique vocal (Speak\'nX + opérateur téléphonie), SMS (module GSM), ou notification locale LAN (si smartphone sur même réseau local).'
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
              { label: 'Pushover' }
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

              <Badge className="mb-4 bg-rose-600">
                <Bell className="w-4 h-4 mr-2" />
                Notifications Push
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Pushover
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez Pushover pour recevoir notifications push instantanées depuis votre installation KNX. Alertes sécurité, alarmes domotique, événements importants sur votre smartphone.
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
                  Documentation Pushover
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">&lt;1s</div>
                  <div className="text-sm text-gray-600">Instantané</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">5$</div>
                  <div className="text-sm text-gray-600">Lifetime</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Fiabilité</div>
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
                  src="https://images.unsplash.com/photo-1609162554108-6490759499ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RpZmljYXRpb24lMjBhbGVydCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzYyMTcxMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pushover notifications smartphone"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Push</div>
                    <div className="text-xs text-gray-500">Instantané</div>
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
              Pourquoi Intégrer Pushover avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le service professionnel de notifications push pour domotique
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
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pushover Features */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Fonctionnalités Pushover
            </h2>
            <p className="text-lg text-gray-600">
              Notifications push riches et personnalisables
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {pushoverFeatures.map((feature, index) => (
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
              Connectez Pushover à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Pushover-KNX
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
                  <h3 className="text-xl mb-4 text-rose-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Pushover avec KNX
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
      <section className="py-16 bg-gradient-to-r from-rose-600 to-rose-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Pushover avec KNX ?
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Kloud'nX connecte Pushover à votre installation KNX pour des notifications push professionnelles et fiables
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-rose-600 hover:bg-gray-100"
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
