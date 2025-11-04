import { motion } from 'motion/react';
import { ArrowLeft, Lock, Shield, Smartphone, Check, Key, DoorOpen } from 'lucide-react';
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

export function NukiPage() {
  const features = [
    {
      icon: Lock,
      title: 'Contrôle Serrure Smart',
      description: 'Verrouillez et déverrouillez vos portes depuis votre système KNX ou à distance'
    },
    {
      icon: Shield,
      title: 'Sécurité Renforcée',
      description: 'Intégration avec alarme KNX, notification d\'état, historique d\'accès complet'
    },
    {
      icon: Smartphone,
      title: 'Accès Sans Clé',
      description: 'Contrôle via smartphone, code PIN, empreinte digitale ou carte NFC'
    },
    {
      icon: Key,
      title: 'Gestion Accès',
      description: 'Créez des accès temporaires pour invités, personnel de service, locations courtes'
    }
  ];

  const nukiProducts = [
    {
      name: 'Nuki Smart Lock 4.0',
      description: 'Serrure connectée dernière génération avec Matter',
      category: 'Serrure'
    },
    {
      name: 'Nuki Smart Lock 3.0 Pro',
      description: 'Version professionnelle avec alimentation secteur',
      category: 'Serrure Pro'
    },
    {
      name: 'Nuki Opener',
      description: 'Contrôle d\'interphone pour ouvrir depuis smartphone',
      category: 'Interphone'
    },
    {
      name: 'Nuki Keypad 2.0',
      description: 'Clavier à code PIN et lecteur NFC',
      category: 'Accessoire'
    },
    {
      name: 'Nuki Bridge',
      description: 'Connexion Internet pour accès distant',
      category: 'Accessoire'
    },
    {
      name: 'Nuki Fob',
      description: 'Télécommande compacte porte-clés',
      category: 'Accessoire'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Installation Nuki',
      description: 'Installez votre Nuki Smart Lock sur votre porte existante (compatible avec la plupart des cylindres européens) et configurez-le via l\'app Nuki'
    },
    {
      step: '2',
      title: 'Ajout du Nuki Bridge',
      description: 'Connectez un Nuki Bridge pour permettre l\'accès distant et l\'intégration API. Le Bridge doit être sur le même réseau que Kloud\'nX'
    },
    {
      step: '3',
      title: 'Activation dans Kloud\'nX',
      description: 'Activez l\'intégration Nuki dans Kloud\'nX. Renseignez votre token API Nuki (disponible dans l\'app Nuki)'
    },
    {
      step: '4',
      title: 'Découverte et configuration',
      description: 'Kloud\'nX découvre automatiquement vos serrures Nuki. Associez-les à des objets KNX pour le contrôle et la supervision'
    },
    {
      step: '5',
      title: 'Intégration scénarios',
      description: 'Créez des automatisations : verrouillage auto au départ, ouverture par code PIN, notification si porte ouverte, intégration alarme'
    }
  ];

  const useCases = [
    {
      title: 'Scénarios Automatiques',
      items: [
        'Verrouillage auto en quittant (géolocalisation)',
        'Déverrouillage en arrivant',
        'Verrouillage nocturne automatique (23h)',
        'Intégration avec scénario "Quitter la maison"'
      ]
    },
    {
      title: 'Sécurité Intelligente',
      items: [
        'Notification si porte ouverte > 5 min',
        'Activation alarme si déverrouillage forcé',
        'Historique complet des accès',
        'Blocage à distance en cas de problème'
      ]
    },
    {
      title: 'Accès Invités',
      items: [
        'Codes PIN temporaires pour invités',
        'Accès limité dans le temps',
        'Gestion locations courtes (Airbnb)',
        'Accès personnel de ménage, jardinier'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Comment Nuki s\'intègre-t-il avec mon système KNX ?',
      answer: 'Via Kloud\'nX et le Nuki Bridge. Kloud\'nX communique avec l\'API Nuki pour contrôler vos serrures et récupérer leur état. Vous pouvez ensuite piloter Nuki depuis vos boutons KNX, écrans tactiles, ou automatisations. L\'état de la serrure (verrouillée/déverrouillée) remonte en temps réel dans KNX.'
    },
    {
      question: 'Nuki Smart Lock est-il compatible avec ma porte ?',
      answer: 'Nuki Smart Lock est compatible avec la plupart des cylindres européens standard (cylindre à bouton intérieur). Il s\'installe sans perçage ni modification de la porte en ~10 minutes. Nuki propose un outil de compatibilité sur leur site web. Pour les portes atypiques, Nuki peut fournir des adaptateurs spécifiques.'
    },
    {
      question: 'Puis-je toujours utiliser mes clés physiques avec Nuki ?',
      answer: 'Oui, absolument ! Nuki se fixe côté intérieur et n\'interfère pas avec le fonctionnement normal de votre serrure. Vous pouvez toujours utiliser vos clés physiques de l\'extérieur comme avant. C\'est un système additionnel, pas un remplacement.'
    },
    {
      question: 'Que se passe-t-il en cas de coupure Internet ou panne batterie ?',
      answer: 'En cas de coupure Internet, Nuki continue de fonctionner localement (Bluetooth avec smartphone, clés physiques). Les batteries durent ~6 mois et Nuki vous prévient 1 mois avant. En cas de batterie faible critique, vous pouvez toujours ouvrir avec vos clés ou une batterie externe 9V de secours.'
    },
    {
      question: 'Puis-je intégrer Nuki Opener (interphone) avec KNX ?',
      answer: 'Oui ! Nuki Opener permet d\'ouvrir la porte d\'immeuble depuis votre smartphone ou KNX. Via Kloud\'nX, vous pouvez créer des scénarios : ouverture automatique pour facteur/livreur à certaines heures, ouverture depuis bouton KNX à l\'intérieur, notification si quelqu\'un sonne, etc.'
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
              { label: 'Nuki' }
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
                <Lock className="w-4 h-4 mr-2" />
                Serrure Connectée
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Intégration Nuki
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intégrez vos serrures connectées Nuki dans votre système KNX pour un contrôle d'accès intelligent. Verrouillez, déverrouillez et supervisez depuis votre domotique.
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
                  Documentation Nuki
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">10min</div>
                  <div className="text-sm text-gray-600">Installation</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">6 mois</div>
                  <div className="text-sm text-gray-600">Autonomie</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Sans clé</div>
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
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGRvb3IlMjBsb2NrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYyMTY5ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nuki Smart Lock serrure connectée"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Sécurité</div>
                    <div className="text-xs text-gray-500">AES-256</div>
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
              Pourquoi Intégrer Nuki avec KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le contrôle d'accès intelligent au service de votre domotique
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

      {/* Nuki Products */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Produits Nuki Compatibles
            </h2>
            <p className="text-lg text-gray-600">
              Toute la gamme Nuki s'intègre avec Kloud'nX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {nukiProducts.map((product, index) => (
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
              Connectez Nuki à KNX en quelques étapes simples
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
              Exploitez tout le potentiel de l'intégration Nuki-KNX
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
              Tout savoir sur l'intégration Nuki avec KNX
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
              Prêt à Intégrer Nuki avec KNX ?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Kloud'nX transforme votre serrure Nuki en système de contrôle d'accès professionnel intégré à votre domotique
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
