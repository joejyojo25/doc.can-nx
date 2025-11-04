import { motion } from 'motion/react';
import { BarChart3, Zap, TrendingDown, Wrench, LineChart, DollarSign, Activity, Shield, Check, ArrowRight, Download, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FAQ } from '../components/FAQ';
import { ScrollProgress } from '../components/ScrollProgress';
import { StickyCTA } from '../components/StickyCTA';
import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import { ProductStickyNav } from '../components/ProductStickyNav';

const navItems = [
  { id: 'overview', label: 'Vue d\'ensemble' },
  { id: 'features', label: 'Fonctionnalités' },
  { id: 'benefits', label: 'Avantages' },
  { id: 'demo', label: 'Démo & Tutoriels' },
  { id: 'faq', label: 'FAQ' },
];

const features = [
  {
    icon: Zap,
    title: 'Abonnement électrique optimisé',
    description: 'Analysez vos consommations en temps réel et ajustez votre contrat d\'électricité pour réduire vos coûts.'
  },
  {
    icon: Activity,
    title: 'Identification des équipements énergivores',
    description: 'Détectez rapidement les appareils qui consomment le plus et optimisez leur utilisation.'
  },
  {
    icon: Wrench,
    title: 'Maintenance prédictive',
    description: 'Anticipez les pannes et planifiez les interventions avant qu\'elles ne surviennent.'
  },
  {
    icon: DollarSign,
    title: 'Optimisation du R.O.I',
    description: 'Maximisez le retour sur investissement de vos installations KNX avec des données précises.'
  },
  {
    icon: LineChart,
    title: 'Tableau de bord interactif',
    description: 'Interface claire et intuitive pour visualiser toutes vos données énergétiques en un coup d\'œil.'
  },
  {
    icon: BarChart3,
    title: 'Rapports détaillés',
    description: 'Générez des rapports personnalisés pour analyser les tendances et prendre des décisions éclairées.'
  }
];

const benefits = [
  'Configuration en quelques minutes seulement',
  'Basé sur la plateforme cloud Kloud\'nX',
  'Interface intuitive sans formation complexe',
  'Économies d\'énergie mesurables',
  'Alertes en temps réel',
  'Compatible avec tous les équipements KNX',
  'Accès depuis n\'importe où',
  'Mises à jour automatiques'
];

const chartNxFAQItems = [
  {
    question: "Qu'est-ce que Chart'nX ?",
    answer: "Chart'nX est une licence pour Kloud'nX qui transforme votre installation KNX en un système de supervision énergétique intelligent. Elle permet de surveiller, analyser et optimiser les consommations d'énergie de vos bâtiments en temps réel."
  },
  {
    question: "Quelle est la différence entre Chart'nX et Boss'nX ?",
    answer: "Chart'nX est spécialisé dans la supervision énergétique avec des tableaux de bord et analyses de consommation, tandis que Boss'nX offre une supervision globale du bâtiment incluant l'énergie, l'eau, les alarmes et le contrôle de tous les systèmes."
  },
  {
    question: "Ai-je besoin de matériel supplémentaire ?",
    answer: "Non, Chart'nX est une licence logicielle qui s'installe sur votre système Kloud'nX existant. Aucun matériel supplémentaire n'est nécessaire."
  },
  {
    question: "Combien de temps faut-il pour configurer Chart'nX ?",
    answer: "La configuration de Chart'nX prend seulement quelques minutes. L'interface intuitive vous guide pas à pas pour connecter vos équipements KNX et configurer vos tableaux de bord."
  },
  {
    question: "Puis-je accéder à Chart'nX depuis mon smartphone ?",
    answer: "Oui, Chart'nX est accessible depuis n'importe quel appareil connecté à Internet : smartphone, tablette ou ordinateur. L'interface est responsive et s'adapte à toutes les tailles d'écran."
  },
  {
    question: "Comment Chart'nX aide-t-il à réduire les coûts énergétiques ?",
    answer: "Chart'nX identifie les équipements énergivores, les périodes de surconsommation, et les anomalies. Ces données permettent d'optimiser l'abonnement électrique, de programmer les équipements aux heures creuses, et d'anticiper les pannes coûteuses."
  }
];

export function ChartnxPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ProductStickyNav items={navItems} />
      <StickyCTA 
        productName="Chart'nX - Supervision énergétique" 
        shopUrl="https://can-nx.shop/"
        docsUrl="https://doc.can-nx.com/"
      />
      
      <ProductBreadcrumb productName="Chart'nX" className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

      {/* Hero Section */}
      <section id="overview" className="relative min-h-[80vh] flex flex-col overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex-1 flex flex-col justify-center">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-900">Licence Kloud'nX</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Chart'nX
            </h1>
            
            <p className="text-2xl sm:text-3xl text-gray-700 mb-8">
              Le nouvel atout des intégrateurs KNX
            </p>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Pour une supervision énergétique intuitive ! En quelques minutes, proposez à vos clients un tableau de bord clair et interactif, basé sur Kloud'nX ⚡
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Download className="w-5 h-5 mr-2" />
                Tester la démo
              </Button>
              <Button size="lg" variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50">
                <FileText className="w-5 h-5 mr-2" />
                Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Fonctionnalités clés</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour une supervision énergétique professionnelle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-6">Pourquoi choisir Chart'nX ?</h2>
              <p className="text-xl text-gray-600">
                Une solution complète pour optimiser vos consommations énergétiques
              </p>
            </div>

            <Card className="p-8 lg:p-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Demo & Tutorials */}
      <section id="demo" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-6">Découvrez Chart'nX en action</h2>
              <p className="text-xl text-gray-600">
                Testez la démo et visionnez nos tutoriels pour une prise en main rapide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 text-center h-full bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">Démo interactive</h3>
                  <p className="text-gray-600 mb-6">
                    Explorez l'interface Chart'nX avec notre démo en ligne complète
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href="https://lnkd.in/dQnrnHRf" target="_blank" rel="noopener noreferrer">
                      Tester la démo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 text-center h-full bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">Tutoriels vidéo</h3>
                  <p className="text-gray-600 mb-6">
                    Apprenez à configurer et utiliser Chart'nX avec nos guides vidéo détaillés
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                    <a href="https://lnkd.in/di_M7gY6" target="_blank" rel="noopener noreferrer">
                      Voir les tutoriels
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">
              Prêt à optimiser vos consommations énergétiques ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez les intégrateurs qui font confiance à Chart'nX pour offrir une supervision énergétique professionnelle
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Demander une démo
              </Button>
              <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                Contactez-nous
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ items={chartNxFAQItems} />
      </section>
    </div>
  );
}
