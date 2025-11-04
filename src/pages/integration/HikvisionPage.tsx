import { motion } from 'motion/react';
import { ArrowLeft, Camera, Video, Shield, Check, Eye, AlertTriangle } from 'lucide-react';
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

export function HikvisionPage() {
  const features = [
    {
      icon: Camera,
      title: 'Caméras HD & 4K',
      description: 'Intégrez caméras Hikvision IP de 2MP à 8MP avec vision nocturne et détection IA'
    },
    {
      icon: Video,
      title: 'Enregistrement NVR',
      description: 'Connexion avec NVR Hikvision pour stockage et lecture des enregistrements'
    },
    {
      icon: Shield,
      title: 'Intégration Alarme',
      description: 'Synchronisation avec système d\'alarme KNX : déclenchements, notifications, scénarios'
    },
    {
      icon: Eye,
      title: 'Détection Intelligente',
      description: 'IA intégrée : détection personne, véhicule, intrusion de zone, franchissement de ligne'
    }
  ];

  const hikvisionProducts = [
    {
      name: 'Caméras IP Dome/Bullet',
      description: '2MP à 8MP, IR jusqu\'à 80m, PoE',
      category: 'Caméras'
    },
    {
      name: 'Caméras PTZ',
      description: 'Pan/Tilt/Zoom motorisées, tracking auto',
      category: 'Caméras PTZ'
    },
    {
      name: 'NVR série K/I',
      description: 'Enregistreurs 4 à 32 canaux avec IA',
      category: 'NVR'
    },
    {
      name: 'Caméras AcuSense',
      description: 'Détection IA avancée personne/véhicule',
      category: 'IA'
    },
    {
      name: 'Caméras DarkFighter',
      description: 'Ultra basse lumière couleur 24/7',
      category: 'Spécialisées'
    },
    {
      name: 'Caméras Fisheye',
      description: '360° panoramique sans angle mort',
      category: 'Panoramique'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation caméras',
      description: 'Installez vos caméras et NVR Hikvision. Connectez-les au réseau local (PoE recommandé pour caméras) accessible par Kloud\'nX'
    },
    {
      step: '2',
      title: 'Configuration Hikvision',
      description: 'Configurez vos caméras via iVMS ou navigateur : résolution, détection mouvement, zones de détection, enregistrement'
    },
    {
      step: '3',
      title: 'Activation API ISAPI',
      description: 'Activez le protocole ISAPI (API HTTP Hikvision) sur vos caméras et NVR. Créez un utilisateur dédié pour Kloud\'nX'
    },
    {
      step: '4',
      title: 'Intégration Kloud\'nX',
      description: 'Ajoutez vos caméras/NVR dans Kloud\'nX en renseignant IP, port, login/mot de passe. Kloud\'nX découvre les capacités'
    },
    {
      step: '5',
      title: 'Scénarios sécurité',
      description: 'Créez automatisations : allumage lumières si détection, activation alarme, enregistrement sur événement KNX, notifications'
    }
  ];

  const useCases = [
    {
      title: 'Sécurité Intégrée',
      items: [
        'Activation enregistrement par alarme KNX',
        'Allumage lumières si mouvement détecté',
        'Notification avec snapshot sur smartphone',
        'Mode surveillance auto si absence'
      ]
    },
    {
      title: 'Détection Intelligente',
      items: [
        'Détection intrusion de zone',
        'Franchissement de ligne périmétrique',
        'Distinction personne/véhicule/animal',
        'Face detection pour accès'
      ]
    },
    {
      title: 'Supervision KNX',
      items: [
        'Affichage flux caméras sur écrans tactiles',
        'PTZ contrôlé depuis boutons KNX',
        'Enregistrement événements KNX',
        'Snapshots automatiques'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Quelles caméras Hikvision sont compatibles avec Can-nX ?',
      answer: 'Toutes les caméras et NVR Hikvision récents supportant le protocole ISAPI sont compatibles : séries DS-2CD (caméras IP), DS-2DE (PTZ), DS-7600/7700/7800 (NVR), HWI (AcuSense), iDS (DeepinMind AI). Tant que la caméra a une interface web et ISAPI activable, Kloud\'nX peut l\'intégrer.'
    },
    {
      question: 'Puis-je afficher mes caméras Hikvision sur mes écrans tactiles KNX ?',
      answer: 'Oui ! Via Kloud\'nX, vous pouvez afficher le flux RTSP de vos caméras Hikvision sur vos écrans tactiles KNX compatibles (Gira X1, Jung Smart Visu Server, etc.). Vous pouvez aussi déclencher l\'affichage automatiquement quand quelqu\'un sonne à la porte (intégration DoorBird + Hikvision), ou lors d\'une détection d\'intrusion.'
    },
    {
      question: 'Comment intégrer la détection de mouvement Hikvision avec mon alarme KNX ?',
      answer: 'Kloud\'nX récupère les événements de détection des caméras Hikvision (motion detection, line crossing, intrusion detection, etc.) via ISAPI. Ces événements peuvent déclencher des scénarios KNX : activation alarme, allumage lumières, notification, enregistrement NVR. Inversement, l\'alarme KNX peut activer/désactiver la détection des caméras.'
    },
    {
      question: 'Les caméras Hikvision AcuSense avec IA sont-elles mieux pour l\'intégration ?',
      answer: 'Oui, les caméras AcuSense distinguent personnes et véhicules des fausses alarmes (animaux, pluie, ombre). Via Kloud\'nX, vous pouvez créer des règles sophistiquées : "Si personne détectée ET alarme armée ALORS allumer toutes les lumières + sirène + notification". Cela réduit drastiquement les fausses alertes par rapport à la simple détection de mouvement.'
    },
    {
      question: 'Puis-je enregistrer automatiquement lors d\'événements KNX spécifiques ?',
      answer: 'Oui ! Kloud\'nX peut commander l\'enregistrement du NVR Hikvision lors d\'événements KNX : ouverture de porte (contact KNX), déclenchement alarme, détection présence inhabituelle, etc. Vous pouvez aussi prendre des snapshots et les envoyer par notification. Cela crée un système de surveillance intelligente totalement intégré à votre domotique.'
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
              { label: 'Hikvision' }
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

              <Badge className="mb-4 bg-slate-700">
                <Camera className="w-4 h-4 mr-2" />
                Vidéosurveillance
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Hikvision
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez vos caméras et NVR Hikvision dans votre installation KNX pour une sécurité intelligente et automatisée. Détection IA, enregistrement événementiel, supervision complète.
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
                  Documentation Hikvision
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">8MP</div>
                  <div className="text-sm text-gray-600">4K Ultra HD</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">IA</div>
                  <div className="text-sm text-gray-600">Détection</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Surveillance</div>
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
                  src="https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGNjdHYlMjBzdXJ2ZWlsbGFuY2V8ZW58MXx8fHwxNzYyMTcwMTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hikvision caméras surveillance"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Sécurité</div>
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
              Pourquoi Intégrer Hikvision avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La vidéosurveillance professionnelle au service de votre domotique
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
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hikvision Products */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Produits Hikvision Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Toute la gamme Hikvision professionnelle s'intègre avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {hikvisionProducts.map((product, index) => (
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
              Connectez Hikvision à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration Hikvision-KNX
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
                  <h3 className="text-xl mb-4 text-slate-700">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration Hikvision avec KNX
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
      <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer Hikvision avec KNX ?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Kloud'nX transforme votre système Hikvision en solution de sécurité intelligente intégrée à votre domotique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-slate-700 hover:bg-gray-100"
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
