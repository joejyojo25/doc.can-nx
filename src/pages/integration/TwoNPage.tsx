import { motion } from 'motion/react';
import { ArrowLeft, Phone, Video, Shield, Check, DoorOpen, Bell } from 'lucide-react';
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

export function TwoNPage() {
  const features = [
    {
      icon: Video,
      title: 'Intercom Vidéo HD',
      description: 'Portiers vidéo 2N avec caméra HD, vision nocturne et audio bidirectionnel'
    },
    {
      icon: DoorOpen,
      title: 'Contrôle d\'Accès',
      description: 'Ouverture depuis KNX, RFID, code PIN, Bluetooth, reconnaissance faciale'
    },
    {
      icon: Bell,
      title: 'Notifications Intégrées',
      description: 'Sonnerie sur smartphone, écrans tactiles KNX, et intégration avec DoorBird'
    },
    {
      icon: Shield,
      title: 'Sécurité Renforcée',
      description: 'Enregistrement vidéo, détection anti-vandalisme, intégration alarme KNX'
    }
  ];

  const twoNProducts = [
    {
      name: '2N IP Style',
      description: 'Intercom design modulaire HD',
      category: 'Intercom'
    },
    {
      name: '2N IP Verso',
      description: 'Portier robuste anti-vandalisme',
      category: 'Intercom'
    },
    {
      name: '2N Indoor Touch',
      description: 'Écran tactile intérieur 7"',
      category: 'Moniteur'
    },
    {
      name: '2N Access Unit',
      description: 'Lecteur RFID et contrôle accès',
      category: 'Accès'
    },
    {
      name: '2N IP Force',
      description: 'Intercom industriel renforcé',
      category: 'Industriel'
    },
    {
      name: '2N Helios IP',
      description: 'Portier classique IP',
      category: 'Intercom'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation 2N',
      description: 'Installez votre intercom 2N et connectez-le au réseau Ethernet (PoE recommandé). Assurez-vous qu\'il est accessible sur le même réseau que Kloud\'nX'
    },
    {
      step: '2',
      title: 'Configuration 2N',
      description: 'Configurez votre 2N via interface web : caméra, audio, boutons, RFID, utilisateurs. Activez l\'API HTTP pour contrôle externe'
    },
    {
      step: '3',
      title: 'Intégration Kloud\'nX',
      description: 'Ajoutez votre 2N dans Kloud\'nX en renseignant son IP et identifiants API. Kloud\'nX découvre automatiquement les fonctionnalités (sonnette, relais, etc.)'
    },
    {
      step: '4',
      title: 'Liaison KNX',
      description: 'Associez la sonnette 2N à vos sonneries KNX, le relais de porte à vos objets d\'ouverture KNX, et configurez l\'affichage vidéo sur écrans tactiles'
    },
    {
      step: '5',
      title: 'Scénarios avancés',
      description: 'Créez automatisations : ouverture porte via scénario KNX, allumage lumières entrée si sonnette, enregistrement vidéo si alarme, notifications smartphone'
    }
  ];

  const useCases = [
    {
      title: 'Contrôle Accès',
      items: [
        'Ouverture porte depuis boutons KNX',
        'Badges RFID résidents/visiteurs',
        'Code PIN temporaire pour livreurs',
        'Reconnaissance faciale (modèles compatibles)'
      ]
    },
    {
      title: 'Notifications',
      items: [
        'Sonnette sur smartphone avec vidéo',
        'Affichage caméra sur écrans KNX',
        'Enregistrement automatique visiteurs',
        'Historique des accès'
      ]
    },
    {
      title: 'Sécurité',
      items: [
        'Intégration avec alarme KNX',
        'Détection anti-vandalisme',
        'Verrouillage automatique',
        'Mode vacances sécurisé'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Quels modèles 2N sont compatibles avec Can-nX ?',
      answer: 'Tous les intercoms 2N IP récents sont compatibles : IP Style, IP Verso, IP Force, Helios IP, Indoor Touch, Access Unit. L\'intégration se fait via l\'API HTTP 2N (activable dans les paramètres). Les fonctionnalités disponibles dépendent du modèle : sonnette, relais de porte, caméra, RFID, états des boutons, etc.'
    },
    {
      question: 'Puis-je ouvrir ma porte depuis mes boutons KNX ou mon smartphone ?',
      answer: 'Oui ! Via Kloud\'nX, vous pouvez associer le relais de porte de votre 2N à n\'importe quel objet KNX (bouton, scénario, commande vocale). Vous pouvez aussi ouvrir depuis l\'application Kloud\'nX sur smartphone. Pratique pour ouvrir au livreur même quand vous n\'êtes pas chez vous (avec vidéo en direct).'
    },
    {
      question: 'Comment intégrer la vidéo 2N avec mes écrans tactiles KNX ?',
      answer: 'Kloud\'nX récupère le flux RTSP de la caméra 2N et peut l\'afficher sur vos écrans tactiles KNX compatibles (Gira X1, Jung Smart Visu Server, ABB-free@home, etc.). Quand quelqu\'un sonne, l\'écran affiche automatiquement la vidéo en direct avec bouton d\'ouverture de porte. Vous pouvez aussi afficher manuellement la caméra à tout moment.'
    },
    {
      question: 'Peut-on gérer plusieurs entrées avec 2N (copropriété, entreprise) ?',
      answer: 'Oui, Kloud\'nX peut piloter plusieurs intercoms 2N simultanément (entrée principale, parking, accès secondaire, etc.). Chaque intercom a ses propres autorisations RFID/codes PIN. Vous pouvez centraliser la gestion des utilisateurs, générer des codes temporaires pour visiteurs, et consulter l\'historique complet des accès de toutes les entrées.'
    },
    {
      question: 'Les intercoms 2N fonctionnent-ils avec l\'application mobile 2N en parallèle ?',
      answer: 'Oui, l\'intégration Can-nX est totalement compatible avec l\'application 2N Mobile Video. Vous pouvez utiliser les deux : l\'app 2N pour répondre aux sonneries en mobilité (4G), et l\'intégration KNX pour les automatisations, l\'affichage sur écrans tactiles, et le contrôle depuis boutons muraux. Les deux systèmes cohabitent parfaitement.'
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
              { label: '2N' }
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

              <Badge className="mb-4 bg-blue-600">
                <Video className="w-4 h-4 mr-2" />
                Intercom Vidéo
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration 2N
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez vos portiers et intercoms vidéo 2N dans votre installation KNX. Contrôle d'accès intelligent, vidéo HD, notifications et automatisations avancées.
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
                  Documentation 2N
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">HD</div>
                  <div className="text-sm text-gray-600">Vidéo</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">RFID</div>
                  <div className="text-sm text-gray-600">Accès</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">IP</div>
                  <div className="text-sm text-gray-600">Réseau</div>
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
                  src="https://images.unsplash.com/photo-1703199647409-365ad7b452e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwybiUyMGludGVyY29tJTIwZG9vciUyMHN5c3RlbXxlbnwxfHx8fDE3NjIxNzA1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="2N intercom vidéo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Intercom</div>
                    <div className="text-xs text-gray-500">Intelligent</div>
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
              Pourquoi Intégrer 2N avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le contrôle d'accès professionnel au service de votre domotique
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
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2N Products */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Produits 2N Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Toute la gamme 2N IP s'intègre avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {twoNProducts.map((product, index) => (
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
              Connectez 2N à KNX facilement
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
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-xl">
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
              Exploitez tout le potentiel de l'intégration 2N-KNX
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
                  <h3 className="text-xl mb-4 text-blue-600">{useCase.title}</h3>
                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
              Tout savoir sur l'intégration 2N avec KNX
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Prêt à Intégrer 2N avec KNX ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Kloud'nX transforme votre intercom 2N en solution de contrôle d'accès intelligente intégrée à votre domotique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100"
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
