import { motion } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ProductGallery } from './ProductGallery';
import { ProductSpecs } from './ProductSpecs';
import { TrustSignals } from './TrustSignals';
import { RelatedProducts } from './RelatedProducts';
import { ProductComparison } from './ProductComparison';
import { Breadcrumb } from './Breadcrumb';
import { ProductReviews } from './ProductReviews';
import { Button } from './ui/button';

const sampleImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80',
  'https://images.unsplash.com/photo-1546778251-8b0c8c3cf4b5?w=800&q=80',
  'https://images.unsplash.com/photo-1546787128-a90ea0143164?w=800&q=80',
];

const sampleSpecs = [
  { label: 'Protocole', value: 'KNX TP, KNX IP' },
  { label: 'Alimentation', value: 'Bus KNX (5V DC)' },
  { label: 'Dimensions', value: '90 x 90 x 70 mm' },
  { label: 'Température', value: '-5°C à +45°C' },
  { label: 'Humidité', value: '5% à 95% sans condensation' },
  { label: 'Certification', value: 'KNX Certified, CE' },
  { label: 'Montage', value: 'Rail DIN, mural' },
  { label: 'Garantie', value: '2 ans' },
];

const sampleDownloads = [
  { name: 'Fiche technique PDF', type: 'pdf' as const, size: '2.3 MB', url: '#' },
  { name: 'Manuel d\'installation', type: 'manual' as const, size: '5.1 MB', url: '#' },
  { name: 'Base de données ETS', type: 'ets' as const, size: '1.2 MB', url: '#' },
  { name: 'Vidéo de configuration', type: 'video' as const, size: '45 MB', url: '#' },
];

const improvements = [
  {
    category: 'Visualisation Produit',
    items: [
      'Galerie d\'images avec zoom et lightbox',
      'Vues multiples du produit (jusqu\'à 5 images)',
      'Navigation par miniatures',
      'Plein écran avec navigation au clavier',
    ],
  },
  {
    category: 'Documentation Technique',
    items: [
      'Onglets organisés (Specs, Downloads, Compatibilité)',
      'Téléchargements structurés par type',
      'Spécifications techniques en tableau',
      'Liens vers documentation externe',
    ],
  },
  {
    category: 'Confiance & Crédibilité',
    items: [
      'Métriques de confiance (certifications, garantie)',
      'Avis clients avec note moyenne',
      'Distribution des notes par étoiles',
      'Avis vérifiés de professionnels',
    ],
  },
  {
    category: 'Navigation & UX',
    items: [
      'Fil d\'Ariane (breadcrumb) pour le contexte',
      'Produits complémentaires recommandés',
      'Comparateur de produits (jusqu\'à 4)',
      'Interface responsive et moderne',
    ],
  },
  {
    category: 'Engagement Client',
    items: [
      'Système d\'avis avec filtres',
      'Indicateurs de fiabilité',
      'Suggestions de produits intelligentes',
      'Animations fluides et professionnelles',
    ],
  },
];

export function ImprovementsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Améliorations Majeures
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Can-nX : Standard Mondial KNX
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Découvrez les améliorations inspirées des leaders mondiaux du KNX comme Gira, Jung, ABB et Basalte
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Voir les améliorations
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Documentation complète
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb Example */}
      <Breadcrumb 
        items={[
          { label: 'Produits', href: '#products' },
          { label: 'Connectivité', href: '#connectivity' },
          { label: "Kloud'nX" },
        ]}
      />

      {/* What's New Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Nouveautés Inspirées des Leaders KNX
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous avons analysé les meilleurs sites KNX du monde (Gira, Jung, ABB, Basalte, Zennio) pour vous offrir une expérience utilisateur de classe mondiale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {improvements.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                  <h3 className="text-lg mb-4 text-blue-600">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery Demo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4">Nouveau</Badge>
            <h2 className="text-3xl sm:text-4xl mb-4">
              Galerie Produit Professionnelle
            </h2>
            <p className="text-lg text-gray-600">
              Navigation intuitive, zoom, lightbox - inspiré de Basalte et Gira
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ProductGallery images={sampleImages} productName="Kloud'nX Demo" />
          </div>
        </div>
      </section>

      {/* Product Specs Demo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4">Nouveau</Badge>
            <h2 className="text-3xl sm:text-4xl mb-4">
              Documentation Technique Intégrée
            </h2>
            <p className="text-lg text-gray-600">
              Onglets organisés, téléchargements faciles - comme ABB et MDT
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ProductSpecs
              specifications={sampleSpecs}
              downloads={sampleDownloads}
              compatibleWith={[
                'ETS5 / ETS6',
                'Kloud\'nX Cloud Platform',
                'KNX IP Router',
                'Tous appareils KNX TP',
                'Systèmes BMS Modbus',
                'MQTT Broker',
              ]}
              applications={[
                'Résidentiel haut de gamme',
                'Bâtiments tertiaires',
                'Hôtels et hospitality',
                'Établissements de santé',
                'Sites industriels',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Product Reviews */}
      <ProductReviews />

      {/* Related Products */}
      <RelatedProducts 
        currentProductId="kloudnx"
        relatedIds={['modnx', 'infinix', 'speaknx']}
        title="Produits qui fonctionnent ensemble"
        description="Créez un écosystème complet avec ces produits complémentaires"
      />

      {/* Product Comparison */}
      <ProductComparison />

      {/* Implementation Roadmap */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Feuille de Route d'Implémentation
            </h2>
            <p className="text-lg text-gray-600">
              Plan d'action sur 8 semaines pour atteindre le niveau des leaders KNX
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: 'Phase 1',
                weeks: 'Semaines 1-2',
                title: 'Fondations',
                items: ['Galeries d\'images', 'Spécifications', 'Breadcrumb', 'Comparateur'],
              },
              {
                phase: 'Phase 2',
                weeks: 'Semaines 3-4',
                title: 'Engagement',
                items: ['Avis clients', 'Études de cas', 'Vidéos', 'Blog/News'],
              },
              {
                phase: 'Phase 3',
                weeks: 'Semaines 5-6',
                title: 'Avancé',
                items: ['Configurateur', 'Localisateur revendeurs', 'Chat live', 'Formation'],
              },
              {
                phase: 'Phase 4',
                weeks: 'Semaines 7-8',
                title: 'Premium',
                items: ['Vue 3D', 'Réalité augmentée', 'Showroom virtuel', 'Analytics'],
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white hover:shadow-xl transition-shadow">
                  <div className="text-sm text-blue-600 mb-1">{phase.phase}</div>
                  <div className="text-xs text-gray-500 mb-3">{phase.weeks}</div>
                  <h3 className="text-lg mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4">
              Prêt à Élever Votre Site au Niveau Mondial ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Consultez la documentation complète dans /guidelines/WebsiteImprovements.md pour voir toutes les recommandations détaillées
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Voir la documentation →
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Commencer l'implémentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
