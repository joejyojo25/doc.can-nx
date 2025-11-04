import { motion } from 'motion/react';
import { ArrowLeft, Camera, Bell, DoorOpen, Check, Video, Shield } from 'lucide-react';
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

export function DoorbirdPage() {
  const features = [
    {
      icon: Camera,
      title: 'Vidéo Haute Définition',
      description: 'Vidéo HD 1080p avec vision nocturne infrarouge pour identification claire'
    },
    {
      icon: Bell,
      title: 'Notifications Intelligentes',
      description: 'Alertes instantanées sur KNX et smartphone quand quelqu\'un sonne'
    },
    {
      icon: DoorOpen,
      title: 'Ouverture à Distance',
      description: 'Contrôlez la gâche électrique depuis votre système KNX ou application'
    },
    {
      icon: Video,
      title: 'Enregistrement Cloud',
      description: 'Stockage automatique des événements et visites pour historique complet'
    }
  ];

  const doorbirdModels = [
    {
      name: 'DoorBird D2101V',
      description: 'Portier vidéo IP compact, montage saillie',
      category: 'Vidéophone'
    },
    {
      name: 'DoorBird D1101V',
      description: 'Portier vidéo IP encastré élégant',
      category: 'Vidéophone'
    },
    {
      name: 'DoorBird D21DKV',
      description: '2 boutons sonnette pour bâtiment collectif',
      category: 'Multi-logements'
    },
    {
      name: 'DoorBird A1101',
      description: 'Moniteur intérieur tactile 7" Android',
      category: 'Moniteur'
    },
    {
      name: 'DoorBird A1121',
      description: 'Moniteur intérieur 10" pour contrôle avancé',
      category: 'Moniteur'
    },
    {
      name: 'DoorBird D301',
      description: 'Contrôleur de portail avec caméra',
      category: 'Portail'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation DoorBird',
      description: 'Installez votre portier vidéo DoorBird et connectez-le au réseau Ethernet (PoE recommandé) et à la gâche électrique de votre porte'
    },
    {
      step: '2',
      title: 'Configuration réseau',
      description: 'Configurez DoorBird via son application mobile : réseau WiFi/Ethernet, qualité vidéo, sonneries, utilisateurs autorisés'
    },
    {
      step: '3',
      title: 'Intégration Kloud\'nX',
      description: 'Dans Kloud\'nX, ajoutez votre DoorBird en renseignant son adresse IP et identifiants API (disponibles dans l\'app DoorBird)'
    },
    {
      step: '4',
      title: 'Mapping KNX',
      description: 'Associez les événements DoorBird (sonnette, détection mouvement) et actions (ouverture, lumière) à des objets KNX'
    },
    {
      step: '5',
      title: 'Scénarios avancés',
      description: 'Créez des automatisations : photo automatique des visiteurs, ouverture depuis écran tactile KNX, notification si sonnette quand absent'
    }
  ];

  const useCases = [
    {
      title: 'Contrôle Intégré',
      items: [
        'Ouverture depuis boutons KNX',
        'Affichage vidéo sur écran tactile KNX',
        'Appel intercom vers Sonos/Speak\'nX',
        'Photo visiteur automatique'
      ]
    },
    {
      title: 'Sécurité Renforcée',
      items: [
        'Détection de mouvement devant la porte',
        'Notification si sonnette quand absent',
        'Historique complet des visites',
        'Enregistrement événements suspects'
      ]
    },
    {
      title: 'Automatisations',
      items: [
        'Éclairage auto quand quelqu\'un sonne',
        'Ouverture auto pour codes PIN/RFID',
        'Scénario "Ouverture livreur" horaire',
        'Intégration alarme (désactivation auto)'
      ]
    }
  ];

  const faqs = [
    {
      question: 'DoorBird nécessite-t-il un câblage spécial ?',
      answer: 'DoorBird nécessite une connexion Ethernet (RJ45) pour le réseau et l\'alimentation PoE. Si vous n\'avez pas de PoE, un adaptateur secteur est fourni. Pour l\'ouverture de porte, il faut câbler la gâche électrique (12-24V AC/DC selon modèle). Le câblage est simple et documenté.'
    },
    {
      question: 'Puis-je voir qui sonne depuis mon système KNX ?',
      answer: 'Oui ! Via Kloud\'nX, vous pouvez afficher le flux vidéo DoorBird sur vos écrans tactiles KNX compatibles (Gira, Jung, etc.). Vous pouvez aussi recevoir une photo du visiteur automatiquement et ouvrir la porte depuis l\'écran tactile. L\'intégration est native et fluide.'
    },
    {
      question: 'DoorBird fonctionne-t-il la nuit ?',
      answer: 'Oui, tous les modèles DoorBird intègrent des LED infrarouges pour vision nocturne automatique. La qualité d\'image reste excellente même dans l\'obscurité totale. Vous pouvez identifier clairement les visiteurs 24h/24.'
    },
    {
      question: 'Puis-je avoir plusieurs utilisateurs avec accès DoorBird ?',
      answer: 'Oui, DoorBird supporte plusieurs utilisateurs avec des niveaux d\'accès différents : administrateur, utilisateur, invité temporaire. Via Kloud\'nX + KNX, vous pouvez aussi créer des accès basés sur RFID, codes PIN, ou même reconnaissance faciale (avec module additionnel).'
    },
    {
      question: 'DoorBird peut-il gérer un portail en plus de la porte d\'entrée ?',
      answer: 'Oui, plusieurs solutions : soit 2 DoorBird distincts (porte + portail), soit 1 DoorBird avec relais supplémentaire, soit utiliser le modèle D301 spécifique pour portails. Via Kloud\'nX, vous contrôlez tous les points d\'accès depuis la même interface KNX.'
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
              { label: 'DoorBird' }
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

              <Badge className="mb-4 bg-indigo-600">
                <Camera className="w-4 h-4 mr-2" />
                Portier Vidéo IP
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration DoorBird
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez votre portier vidéo IP DoorBird dans votre système KNX. Vidéo HD, ouverture à distance, notifications intelligentes et contrôle total depuis votre domotique.
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
                  Documentation DoorBird
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">1080p</div>
                  <div className="text-sm text-gray-600">Vidéo HD</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Vision nuit</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">IP65</div>
                  <div className="text-sm text-gray-600">Étanche</div>
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
                  src="https://images.unsplash.com/photo-1760276141897-de770ebf5bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb29yYmVsbCUyMGNhbWVyYSUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MjE2OTg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="DoorBird portier vidéo IP"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Sécurité</div>
                    <div className="text-xs text-gray-500">Certifié IP</div>
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
              Pourquoi Intégrer DoorBird avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le portier vidéo professionnel au service de votre domotique
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
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DoorBird Models */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Modèles DoorBird Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Toute la gamme DoorBird s'intègre avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {doorbirdModels.map((model, index) => (
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
              Connectez DoorBird à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration DoorBird-KNX
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
                  <h3 className="text-xl mb-4 text-indigo-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration DoorBird avec KNX
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer DoorBird avec KNX ?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Kloud'nX transforme votre portier vidéo DoorBird en solution de contrôle d'accès professionnelle intégrée à votre domotique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-indigo-600 hover:bg-gray-100"
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
