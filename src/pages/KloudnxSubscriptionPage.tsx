import { motion } from 'motion/react';
import { Check, X, Cloud, Zap, Star, Shield, Users, BarChart3, Clock, Database, ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { FAQ } from '../components/FAQ';
import kloudnxProduct from 'figma:asset/b1a83fc3c8a20ae4448c96116d5ab85ce70f55e4.png';

const subscriptionFAQItems = [
  {
    question: "Comment fonctionne l'abonnement Kloud'nX ?",
    answer: "Vous choisissez le plan adapté à vos besoins, créez votre compte cloud, connectez votre Kloud'nX et profitez immédiatement de tous les avantages : accès VPN distant, monitoring en temps réel, et intégrations IoT."
  },
  {
    question: "Puis-je changer de plan d'abonnement ?",
    answer: "Oui, vous pouvez upgrader votre plan à tout moment. Le changement est immédiat et vous bénéficiez des nouvelles fonctionnalités dès la mise à jour."
  },
  {
    question: "Que se passe-t-il après les 3 mois gratuits ?",
    answer: "Après la période d'essai gratuite de 3 mois avec le plan Free, vous pouvez continuer avec un plan Starter ou Pro selon vos besoins, ou rester sur le plan Free avec des limitations."
  },
  {
    question: "Comment est calculée la durée VPN ?",
    answer: "La durée VPN indique le temps maximum d'une session VPN continue. Par exemple, avec le plan Starter (12h), vous pouvez maintenir une connexion VPN pendant 12 heures d'affilée pour la maintenance."
  },
  {
    question: "Qu'est-ce que la rétention de données ?",
    answer: "C'est la période pendant laquelle vos données de monitoring sont conservées dans le cloud. Le plan Free conserve 1 mois, Starter 4 mois, et Pro 12 mois avec archivage automatique des moyennes quotidiennes."
  },
  {
    question: "Est-ce que Node-RED est inclus dans tous les plans ?",
    answer: "Oui ! Node-RED est inclus dans tous les plans (Free, Starter et Pro), vous permettant de créer des automatisations personnalisées et d'intégrer des équipements IoT avec API."
  },
];

const pricingPlans = [
  {
    name: 'Free',
    tagline: 'Découverte & Tests',
    price: 'Gratuit',
    duration: '3 mois',
    description: 'Parfait pour tester Kloud\'nX et les installations simples',
    color: 'from-gray-500 to-gray-600',
    features: [
      { name: 'Accès VPN distant', value: '2h par session', included: true },
      { name: 'Adresses de groupe', value: 'Jusqu\'à 50', included: true },
      { name: 'Rétention de données', value: '1 mois glissant', included: true },
      { name: 'Connexions tunneling ETS', value: 'Jusqu\'à 12', included: true },
      { name: 'Node-RED intégré', value: 'Inclus', included: true },
      { name: 'Interface cloud', value: 'Accès complet', included: true },
      { name: 'Monitoring avancé', value: 'Non disponible', included: false },
      { name: 'API REST', value: 'Non disponible', included: false },
      { name: 'Support technique prioritaire', value: 'Non disponible', included: false },
    ],
    cta: 'Démarrer gratuitement',
    href: 'https://can-nx.shop',
    popular: false,
  },
  {
    name: 'Starter',
    tagline: 'Maintenance & CVC',
    price: 'Sur devis',
    duration: '1 mois ou 12 mois',
    description: 'Idéal pour les professionnels et installations moyennes',
    color: 'from-blue-500 to-cyan-500',
    features: [
      { name: 'Accès VPN distant', value: '12h par session', included: true },
      { name: 'Adresses de groupe', value: 'Jusqu\'à 500', included: true },
      { name: 'Rétention de données', value: '4 mois glissant', included: true },
      { name: 'Connexions tunneling ETS', value: 'Jusqu\'à 12', included: true },
      { name: 'Node-RED intégré', value: 'Inclus', included: true },
      { name: 'Interface cloud', value: 'Accès complet', included: true },
      { name: 'Monitoring avancé', value: 'Graphiques & stats', included: true },
      { name: 'API REST', value: 'Accès limité', included: true },
      { name: 'Support technique prioritaire', value: 'Email', included: true },
    ],
    cta: 'Demander un devis',
    href: '#contact',
    popular: true,
  },
  {
    name: 'Pro',
    tagline: 'Monitoring & Énergie',
    price: 'Sur devis',
    duration: '1 mois ou 12 mois',
    description: 'Pour les grandes installations et optimisation énergétique',
    color: 'from-purple-500 to-pink-500',
    features: [
      { name: 'Accès VPN distant', value: '48h par session', included: true },
      { name: 'Adresses de groupe', value: 'Jusqu\'à 2000', included: true },
      { name: 'Rétention de données', value: '12 mois + archivage', included: true },
      { name: 'Connexions tunneling ETS', value: 'Jusqu\'à 12', included: true },
      { name: 'Node-RED intégré', value: 'Inclus', included: true },
      { name: 'Interface cloud', value: 'Accès complet', included: true },
      { name: 'Monitoring avancé', value: 'Analyse énergétique', included: true },
      { name: 'API REST', value: 'Accès complet', included: true },
      { name: 'Support technique prioritaire', value: 'Téléphone & Email', included: true },
    ],
    cta: 'Demander un devis',
    href: '#contact',
    popular: false,
  },
];

const cloudFeatures = [
  {
    icon: Cloud,
    title: 'Accès Cloud Sécurisé',
    description: 'Connectez-vous à votre installation KNX depuis n\'importe où dans le monde avec une connexion chiffrée de bout en bout.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Node-RED Intégré',
    description: 'Créez des automatisations personnalisées et intégrez n\'importe quel équipement IoT grâce à Node-RED pré-installé.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Monitoring en Temps Réel',
    description: 'Visualisez les données de votre installation avec des graphiques interactifs et des tableaux de bord personnalisables.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'VPN Sans Logiciel',
    description: 'Accédez à ETS à distance sans installer de logiciel VPN supplémentaire. La connexion est automatique et sécurisée.',
    color: 'from-purple-500 to-pink-500',
  },
];

const useCases = [
  {
    title: 'Installateurs KNX',
    icon: Users,
    description: 'Programmation et maintenance à distance',
    benefits: [
      'Accès ETS distant sans déplacement',
      'Diagnostic en temps réel',
      'Mise à jour des projets à distance',
      'Historique des modifications'
    ]
  },
  {
    title: 'Gestionnaires de Bâtiments',
    icon: BarChart3,
    description: 'Monitoring et optimisation continue',
    benefits: [
      'Surveillance 24/7 des installations',
      'Alertes en temps réel',
      'Rapports de consommation',
      'Optimisation énergétique'
    ]
  },
  {
    title: 'Intégrateurs IoT',
    icon: Zap,
    description: 'Créez des solutions sur-mesure',
    benefits: [
      'Node-RED pour intégrations custom',
      'API REST pour développements',
      'Connexion à tout équipement IoT',
      'Automatisations avancées'
    ]
  },
];

const comparisonFeatures = [
  { name: 'Durée VPN par session', free: '2h', starter: '12h', pro: '48h' },
  { name: 'Adresses de groupe KNX', free: '50', starter: '500', pro: '2000' },
  { name: 'Rétention données', free: '1 mois', starter: '4 mois', pro: '12 mois +' },
  { name: 'Connexions tunneling', free: '12', starter: '12', pro: '12' },
  { name: 'Node-RED', free: true, starter: true, pro: true },
  { name: 'Interface cloud', free: true, starter: true, pro: true },
  { name: 'Monitoring avancé', free: false, starter: true, pro: true },
  { name: 'API REST', free: false, starter: 'Limité', pro: 'Complet' },
  { name: 'Support prioritaire', free: false, starter: 'Email', pro: 'Tel + Email' },
];

export function KloudnxSubscriptionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              Abonnements Cloud Kloud'nX
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              Choisissez votre plan cloud
            </h1>
            <p className="text-2xl sm:text-3xl mb-8 max-w-3xl mx-auto">
              Accès distant, monitoring et automatisations pour votre installation KNX
            </p>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
              Commencez avec 3 mois gratuits, puis évoluez selon vos besoins
            </p>
          </motion.div>

          <motion.div
            className="max-w-sm mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={kloudnxProduct}
                alt="Kloud'nX - Routeur Cloud KNX"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Plans d'abonnement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la découverte gratuite à la gestion énergétique avancée, trouvez le plan adapté à vos besoins
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-1 text-sm">
                      <Star className="w-4 h-4 mr-1 inline" />
                      Populaire
                    </Badge>
                  </div>
                )}
                
                <Card className={`p-8 h-full flex flex-col ${plan.popular ? 'border-2 border-blue-500 shadow-2xl' : 'shadow-lg'}`}>
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}>
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.tagline}</p>
                    <div className="mb-4">
                      <div className="text-4xl mb-1">{plan.price}</div>
                      <div className="text-gray-600">{plan.duration}</div>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature.name} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <div className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                            {feature.name}
                          </div>
                          <div className={`text-xs ${feature.included ? 'text-gray-600' : 'text-gray-400'}`}>
                            {feature.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' : ''}`}
                    size="lg"
                    asChild
                  >
                    <a href={plan.href} target={plan.href.startsWith('http') ? '_blank' : undefined} rel={plan.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {plan.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Fonctionnalités Cloud</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous les plans incluent l'accès à notre plateforme cloud puissante et sécurisée
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Pour qui ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les professionnels du KNX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Comparaison détaillée</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparez les fonctionnalités de chaque plan
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4">Fonctionnalité</th>
                    <th className="text-center p-4">Free</th>
                    <th className="text-center p-4 bg-blue-50">Starter</th>
                    <th className="text-center p-4">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4">{feature.name}</td>
                      <td className="text-center p-4">
                        {typeof feature.free === 'boolean' ? (
                          feature.free ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-gray-700">{feature.free}</span>
                        )}
                      </td>
                      <td className="text-center p-4 bg-blue-50/50">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-gray-700">{feature.starter}</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-gray-700">{feature.pro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={subscriptionFAQItems} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Prêt à démarrer ?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
              Profitez de 3 mois gratuits pour découvrir toute la puissance de Kloud'nX
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <a href="https://can-nx.shop" target="_blank" rel="noopener noreferrer">
                  Démarrer gratuitement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#kloudnx">
                  En savoir plus sur Kloud'nX
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
