import { motion } from 'motion/react';
import { ArrowLeft, Network, Shield, Zap, Globe, Building2, Home, Check, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

export function KNXPage() {
  const features = [
    {
      icon: Network,
      title: 'Standard Mondial',
      description: 'Protocole ISO/IEC 14543 utilisé par plus de 500 fabricants dans le monde'
    },
    {
      icon: Shield,
      title: 'Fiabilité Éprouvée',
      description: '30 ans d\'évolution et millions d\'installations dans le monde entier'
    },
    {
      icon: Globe,
      title: 'Interopérabilité',
      description: 'Tous les appareils KNX certifiés communiquent entre eux, quelle que soit la marque'
    },
    {
      icon: Building2,
      title: 'Résidentiel & Tertiaire',
      description: 'De la maison individuelle aux grands bâtiments commerciaux et industriels'
    },
    {
      icon: Zap,
      title: 'Efficacité Énergétique',
      description: 'Réduction jusqu\'à 50% de la consommation énergétique grâce à l\'automatisation'
    },
    {
      icon: TrendingUp,
      title: 'Évolutif & Pérenne',
      description: 'Installation évolutive qui grandit avec vos besoins, investissement durable'
    }
  ];

  const technicalSpecs = [
    { label: 'Norme', value: 'ISO/IEC 14543-3' },
    { label: 'Topologie', value: 'Ligne de bus décentralisée' },
    { label: 'Vitesse', value: '9600 bps (TP), 38.4 kbps (RF)' },
    { label: 'Adressage', value: 'Jusqu\'à 57 600 appareils' },
    { label: 'Distance max', value: '1000m (avec répéteurs)' },
    { label: 'Alimentation bus', value: '29V DC (SELV)' }
  ];

  const mediaTypes = [
    {
      name: 'KNX Twisted Pair (TP)',
      description: 'Bus 2 fils - le plus répandu, 9600 bps, jusqu\'à 1000m',
      icon: '🔌',
      usage: 'Standard pour 95% des installations'
    },
    {
      name: 'KNX RF (Radio)',
      description: 'Sans fil 868 MHz - retrofit et rénovation',
      icon: '📡',
      usage: 'Idéal pour rénovation sans câblage'
    },
    {
      name: 'KNX IP',
      description: 'Via réseau Ethernet/IP - backbone pour grandes installations',
      icon: '🌐',
      usage: 'Liaisons longue distance & visualisation'
    },
    {
      name: 'KNX Powerline (PL)',
      description: 'Via le réseau électrique existant',
      icon: '⚡',
      usage: 'Cas spécifiques (moins courant)'
    }
  ];

  const advantages = [
    {
      category: 'Pour le Propriétaire',
      benefits: [
        'Investissement pérenne et évolutif',
        'Compatibilité garantie entre marques',
        'Valorisation du bien immobilier',
        'Économies d\'énergie substantielles'
      ]
    },
    {
      category: 'Pour l\'Installateur',
      benefits: [
        'Formation et certification officielles',
        'Outils de programmation standardisés (ETS)',
        'Large choix de fabricants et produits',
        'Support technique mondial'
      ]
    },
    {
      category: 'Pour le Bâtiment',
      benefits: [
        'Réduction de la consommation énergétique',
        'Confort optimal des occupants',
        'Maintenance simplifiée',
        'Conformité aux normes BBC/RT2020'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que le protocole KNX exactement ?',
      answer: 'KNX est le seul standard mondial ouvert (ISO/IEC 14543-3) pour le contrôle de la maison et du bâtiment. Il permet à tous les appareils de communiquer entre eux via un bus commun, indépendamment du fabricant. KNX gère l\'éclairage, le chauffage, la sécurité, les volets, etc. avec une installation fiable et pérenne.'
    },
    {
      question: 'Pourquoi choisir KNX plutôt qu\'une solution propriétaire ?',
      answer: 'KNX garantit l\'interopérabilité : vous n\'êtes jamais dépendant d\'un seul fabricant. Avec plus de 500 fabricants certifiés (Siemens, ABB, Schneider, Gira, Jung, etc.), vous avez le choix et la certitude que votre installation sera maintenue dans 20 ans. Les solutions propriétaires risquent l\'obsolescence.'
    },
    {
      question: 'KNX est-il adapté à une maison individuelle ?',
      answer: 'Absolument ! KNX s\'adapte à toutes les tailles d\'installation, de l\'appartement à la villa de luxe. Pour le résidentiel, le coût est comparable aux solutions haut de gamme propriétaires, avec la garantie d\'évolutivité et de pérennité en plus. C\'est l\'investissement idéal pour une maison neuve ou une rénovation complète.'
    },
    {
      question: 'Comment Can-nX facilite-t-il l\'utilisation de KNX ?',
      answer: 'Can-nX développe des produits qui rendent KNX plus accessible : Kloud\'nX pour la visualisation cloud et l\'accès distant, Speak\'nX pour l\'audio, Pool\'nX pour les piscines, Emergy\'nX pour l\'énergie, etc. Nos solutions permettent de profiter de KNX sans la complexité technique, tout en restant 100% compatible avec le standard.'
    },
    {
      question: 'Où puis-je trouver un installateur KNX certifié ?',
      answer: 'La KNX Association maintient un annuaire mondial d\'installateurs et intégrateurs certifiés. En France, plusieurs niveaux de certification existent (KNX Basic, Advanced, Expert). Can-nX travaille avec un réseau de partenaires certifiés que nous pouvons vous recommander selon votre région et projet.'
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
              { label: 'Protocole KNX' }
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

              <Badge className="mb-4 bg-green-600">
                <Network className="w-4 h-4 mr-2" />
                Standard Mondial
              </Badge>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
                Protocole KNX
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Le seul standard mondial ouvert (ISO/IEC 14543) pour l'automatisation des bâtiments résidentiels et tertiaires. Plus de 500 fabricants, 8 000+ produits certifiés.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30">
                  Découvrir nos produits KNX
                </Button>
                <Button size="lg" variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50">
                  KNX Association
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl text-green-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Fabricants</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">30 ans</div>
                  <div className="text-sm text-gray-600">D\'expertise</div>
                </div>
                <div>
                  <div className="text-3xl text-green-600 mb-1">ISO</div>
                  <div className="text-sm text-gray-600">Standard</div>
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
                  src="https://images.unsplash.com/photo-1753272691001-4d68806ac590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGF1dG9tYXRpb24lMjBzeXN0ZW18ZW58MXx8fHwxNzYyMDkzOTExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Installation KNX système automatisation bâtiment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Norme ISO</div>
                    <div className="text-xs text-gray-500">14543-3</div>
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
              Pourquoi Choisir KNX ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le protocole de référence pour l'automatisation des bâtiments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Types */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Supports de Transmission KNX
            </h2>
            <p className="text-lg text-gray-600">
              Quatre moyens de communication adaptés à chaque besoin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mediaTypes.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{media.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{media.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{media.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {media.usage}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl mb-6">
                Caractéristiques Techniques
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Architecture décentralisée robuste et évolutive
              </p>

              <Card className="p-6">
                <div className="space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="text-gray-900">{spec.value}</span>
                      </div>
                      {index < technicalSpecs.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl mb-6">
                Avantages par Profil
              </h2>

              <div className="space-y-6">
                {advantages.map((adv, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg mb-4 text-green-600">{adv.category}</h3>
                    <div className="space-y-3">
                      {adv.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
              Tout savoir sur le protocole KNX
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl mb-6 text-white">
              Démarrez Votre Projet KNX
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Can-nX vous accompagne dans tous vos projets KNX avec des produits innovants et un support technique expert
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Nos produits KNX
              </Button>
              <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                Contacter un expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
