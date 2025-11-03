import { motion } from 'motion/react';
import { Plug, Lock, Cloud, Check, ArrowRight, Share2, ShoppingCart, FileText } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { FAQ } from '../components/FAQ';
import { useState } from 'react';
import kloudnxFront from 'figma:asset/f4e7e08a8f77640a41e6d024869598c4050d7f0d.png';
import kloudnxAngle from 'figma:asset/b1a83fc3c8a20ae4448c96116d5ab85ce70f55e4.png';
import kloudnxSoftware from 'figma:asset/0ad69f26920e083e2815589ec32d14e3617409ee.png';

const kloudnxFAQItems = [
  {
    question: "Qu'est-ce que Kloud'nX ?",
    answer: "Kloud'nX est un routeur KNX-IoT qui permet un accès à distance sécurisé à votre installation KNX. Il se connecte automatiquement à votre compte cloud pour télécharger, modifier ou monitorer votre installation KNX."
  },
  {
    question: "Comment fonctionne l'accès VPN sans logiciel ?",
    answer: "Kloud'nX crée une connexion sécurisée qui vous permet d'avoir un accès VPN sans installer de logiciel supplémentaire. La connexion est automatiquement établie avec votre espace cloud sécurisé."
  },
  {
    question: "Combien de connexions tunneling sont supportées ?",
    answer: "Kloud'nX supporte jusqu'à 12 connexions tunneling simultanées, permettant à plusieurs techniciens ou utilisateurs d'accéder à l'installation en même temps."
  },
  {
    question: "Quels sont les plans d'abonnement disponibles ?",
    answer: "Nous proposons 3 plans : Free (gratuit 3 mois, 50 adresses de groupe, VPN 2h), Starter (500 adresses, VPN 12h) et Pro (2000 adresses, VPN 48h, monitoring avancé). Les plans Starter et Pro sont sur devis."
  },
  {
    question: "Puis-je intégrer des équipements IoT avec Kloud'nX ?",
    answer: "Oui, Kloud'nX intègre Node Red qui vous permet de développer des flows pour ajouter tout type d'intégrations spécifiques avec des équipements IoT ayant une API."
  },
];

const features = [
  {
    icon: Plug,
    title: "Plug'N'play",
    description:
      "Passerelle de connexion à distance via ETS, qui se connecte automatiquement à votre compte cloud afin de pouvoir télécharger, modifier, ou encore monitorer votre installation KNX",
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lock,
    title: 'Service Sécurisé',
    description:
      "La connexion sécurisée ainsi créée, vous permet d'avoir un accès sécurisé via un VPN sans logiciel à installer. Vous accédez aux données générées par votre installation dans votre espace cloud sécurisé",
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'Force du Cloud',
    description:
      "Vous bénéficiez d'un accès Cloud pour visualiser l'état de votre installation, monitorer les données générées, scripter n'importe quelle fonction entre KNX et des équipements IOT avec une API",
    color: 'from-green-500 to-emerald-500',
  },
];

const technicalSpecs = [
  'KNX TP, S-Mode (ETS), 30v, 5mA',
  'Ethernet : 10/100Mbps',
  'Alimentation : 9-30v DC, 2W',
  'Température de fonctionnement : -25°/+55°C',
  'Dimensions : Rail Din – 2 modules – 35mm',
  'Fabriqué en Europe',
  "Nombre de connexions : jusqu'à 12 connexions tunneling",
  'Garantie 2 ans',
];

const partners = [
  { name: '2N', logo: 'https://can-nx.com/wp-content/uploads/2025/09/2N-logo.png' },
  { name: 'Crestron', logo: 'https://can-nx.com/wp-content/uploads/2023/04/Crestron_logo_PNG3-e1682506031893-1024x143.png' },
  { name: 'Hikvision', logo: 'https://can-nx.com/wp-content/uploads/2023/04/Hikvision_logo.svg' },
  { name: 'Klereo', logo: 'https://can-nx.com/wp-content/uploads/2021/11/Klereo-Piscine-connectee-1024x236.png' },
  { name: 'PoolCop', logo: 'https://can-nx.com/wp-content/uploads/2021/11/Logo-PoolCop.png' },
  { name: 'Nuki', logo: 'https://can-nx.com/wp-content/uploads/2025/06/nuki-logo-1.png' },
  { name: 'Sonos', logo: 'https://can-nx.com/wp-content/uploads/2021/11/sonos-logo-1024x196.png' },
  { name: 'Shelly', logo: 'https://can-nx.com/wp-content/uploads/2023/04/logo-shelly-de-website-3_2-1044x696-2-1024x683.png' },
  { name: 'Gude', logo: 'https://can-nx.com/wp-content/uploads/2025/06/gude_488px-removebg-preview-1.png' },
  { name: 'Airzone', logo: 'https://can-nx.com/wp-content/uploads/2025/06/airzone-1.png' },
  { name: 'Lektri.co', logo: 'https://can-nx.com/wp-content/uploads/2024/10/logo-lektri-co-2020-g-1024x273.png' },
];

const pricingPlans = [
  {
    name: 'Free',
    usage: 'Mise en service & Utilisation distante KNX',
    vpnDuration: '2h',
    groupAddresses: "Jusqu'à 50",
    dataRetention: '1 mois glissant',
    duration: '3 mois',
    price: 'Gratuit',
  },
  {
    name: 'Starter',
    usage: 'Maintenance & Mise en service de CVC KNX',
    vpnDuration: '12h',
    groupAddresses: "Jusqu'à 500",
    dataRetention: '4 mois glissant',
    duration: '1 mois / 12 mois (renouvelable)',
    price: 'Sur devis',
    highlighted: true,
  },
  {
    name: 'Pro',
    usage: "Maintenance avancée & Monitoring et optimisation d'énergie",
    vpnDuration: '48h',
    groupAddresses: "Jusqu'à 2000",
    dataRetention: '12 mois glissants, au-delà valeurs moyennes quotidiennes conservées',
    duration: '1 mois / 12 mois (renouvelable)',
    price: 'Sur devis',
  },
];

export function KloudnxPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kloud'nX
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-800">
              Routeur KNX – IoT : passez au KNX augmenté !
            </h2>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={kloudnxAngle}
                alt="Kloud'nX - Routeur KNX IoT"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Découvrez Kloud'nX</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Matériel professionnel et interface logicielle intuitive
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="product" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="product">Produit</TabsTrigger>
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="software">Interface</TabsTrigger>
              </TabsList>

              <TabsContent value="product">
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ImageWithFallback
                    src={kloudnxAngle}
                    alt="Kloud'nX - Vue d'ensemble"
                    className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg"
                  />
                  <p className="text-center text-gray-600 mt-6">
                    Module KNX Rail DIN compact - Connexions KNX, Ethernet et Alimentation
                  </p>
                </motion.div>
              </TabsContent>

              <TabsContent value="details">
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ImageWithFallback
                    src={kloudnxFront}
                    alt="Kloud'nX - Détails techniques"
                    className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg"
                  />
                  <p className="text-center text-gray-600 mt-6">
                    Interface KNX avec indicateurs LED - Connecteurs Ethernet et alimentation 9-30V DC
                  </p>
                </motion.div>
              </TabsContent>

              <TabsContent value="software">
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ImageWithFallback
                    src={kloudnxSoftware}
                    alt="Kloud'nX - Interface logicielle"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-center text-gray-600 mt-6">
                    Interface cloud complète pour monitoring, configuration et gestion à distance de votre installation KNX
                  </p>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why Kloud'nX */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Pourquoi Kloud'nX ?</h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto prose prose-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-gray-600 space-y-6">
              <p>
                L'accès à distance à vos installations est souvent fragile à cause de plusieurs éléments : adresse IP
                dynamique, changement de box internet ou d'opérateur, sécurisation de votre accès ou encore le
                paramétrage réseau non accessible…
              </p>

              <p>
                De plus, l'accès à distance vous permet de proposer un vrai service à vos clients sans vous déplacer.
                Vous pouvez terminer votre mise en service à votre bureau, contrôler le bon fonctionnement, ajuster et
                affiner vos régulations, mais aussi monitorer et basculer votre installation de Chauffage à
                Climatisation…
              </p>

              <p>
                Nous vous proposons aujourd'hui un outil permettant d'optimiser la gestion de votre temps de travail et
                de réduire les coûts significatifs de vos déplacements chez vos clients en termes de configuration, mise
                en service, de maintenance et d'entretien de vos installations KNX.
              </p>

              <p className="text-gray-900">
                Ce routeur KNX – IoT est LA solution pour les électriciens certifiés KNX, intégrateur à la recherche de
                nouvelles fonctions ou chauffagistes soucieux du bon fonctionnement de leurs installation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Avantages</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <p>
                Voici deux fonctions complémentaires qui vous permettront d'ancrer notre produit sur toutes vos
                installations KNX :
              </p>

              <div>
                <h3 className="text-2xl mb-4 text-gray-900">Une intégration sans limite</h3>
                <p>
                  Afin d'allier les avantages de KNX et du monde IoT, nous avons intégré un module de programmation{' '}
                  <a
                    href="https://nodered.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0CB14B] hover:text-[#cd2653]"
                  >
                    Node Red
                  </a>{' '}
                  qui vous permet de développer des flows, par vous mêmes ou via nos services. Ainsi, vous pourrez
                  ajouter tout type de développements spécifiques ou d'intégration de parties tierces qui ont une API.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4 text-gray-900">Monitoring & Notifications</h3>
                <p>
                  À travers votre interface cloud, vous pourrez importer votre fichier de configuration ETS, choisir les
                  adresses de groupes que vous souhaitez suivre, et vous pourrez très facilement créer des graphes pour
                  vérifier et valider le fonctionnement de votre installation. Le service est proposé pour monitorer 50
                  adresses de groupe gratuitement pendant 3 mois.
                </p>
                <p>
                  Vous pouvez aussi créer un service de notification (push ou email) sur la valeur d'un Datagramme ou si
                  le bus se met en défaut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">
              Synoptique général d'une installation communicante
            </h2>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://can-nx.com/wp-content/uploads/2021/11/Schema-KloudnX-1024x376.png"
              alt="Schema pour Kloud'nX"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Domaine d'application - Recommandation</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="residential" className="border rounded-lg px-6">
                <AccordionTrigger className="text-xl">
                  En résidentiel pour intégrer les systèmes
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                      <span>Centralisation des données KNX pour script ou fonction avancée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                      <span>Monitorer et accéder aux installations KNX à distance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                      <span>Discuter avec des équipements IP et interagir sur KNX</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                      <span>
                        Récupérer des informations / commandes qui nécessite une authentification sécurisée sur Crestron
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="commercial" className="border rounded-lg px-6">
                <AccordionTrigger className="text-xl">En tertiaire particulièrement pour</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                      <span>Déployer une architecture GTB en IP dans le bâtiment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                      <span>Interagir entre les différents équipements du bâtiment</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Caractéristiques techniques</h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <ul className="space-y-3">
                {technicalSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#0CB14B]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">Produit connecté avec</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ImageWithFallback
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-auto max-h-16 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4">Un aperçu des plans d'abonnement</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Kloud'nX peut être utilisé avec ou sans abonnement, voir ci-dessous pour plus de détails sur les différents
              types d'abonnement disponibles :
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              asChild
            >
              <a href="#kloudnx-subscription">
                Voir tous les plans d'abonnement
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 h-full ${
                    plan.highlighted
                      ? 'border-[#0CB14B] border-2 shadow-xl relative'
                      : 'border-gray-200'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0CB14B] text-white px-4 py-1 rounded-full text-sm">
                      Recommandé
                    </div>
                  )}
                  <h3 className="text-3xl mb-4">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.usage}</p>
                  <div className="space-y-4 mb-8">
                    <div>
                      <div className="text-sm text-gray-500">Durée maximale VPN</div>
                      <div>{plan.vpnDuration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Adresses de groupe</div>
                      <div>{plan.groupAddresses}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Conservation données</div>
                      <div>{plan.dataRetention}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Durée du service</div>
                      <div>{plan.duration}</div>
                    </div>
                  </div>
                  <div className="text-3xl mb-6">{plan.price}</div>
                  <Button
                    className={`w-full ${
                      plan.highlighted ? 'bg-[#0CB14B] hover:bg-[#0a9841]' : ''
                    }`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    En savoir plus
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={kloudnxFAQItems} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <ImageWithFallback
                src={kloudnxAngle}
                alt="Kloud'nX"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <h2 className="text-4xl mb-8">Prêt à passer au KNX augmenté ?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-gray-900 hover:bg-gray-100"
                asChild
              >
                <a href="https://doc.can-nx.com/" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Documentation
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-[#0CB14B] text-white hover:bg-[#0a9841]"
                asChild
              >
                <a
                  href="https://can-nx.shop/11-modulaire/22-passerelle-kloudn-x-routeur-knx-vpn-cloud.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  En savoir plus et acheter
                </a>
              </Button>
            </div>

            <div className="mt-12">
              <p className="text-white/80 mb-4">Partager</p>
              <div className="flex justify-center gap-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20"
                  asChild
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20"
                  asChild
                >
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20"
                  asChild
                >
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
