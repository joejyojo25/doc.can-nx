import { motion } from 'motion/react';
import { Star, Quote, ThumbsUp, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';

interface Review {
  id: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  helpful: number;
  verified: boolean;
}

interface ProductReviewsProps {
  reviews: Review[];
  averageRating?: number;
  totalReviews?: number;
}

const defaultReviews: Review[] = [
  {
    id: '1',
    author: 'Jean-Marc D.',
    role: 'Intégrateur KNX',
    company: 'Smart Building Solutions',
    rating: 5,
    date: '2024-10-15',
    title: 'Excellent produit, installation facile',
    comment: "Configuration rapide et intuitive. L'intégration avec le système KNX existant s'est faite sans problème. Mes clients sont très satisfaits de la fiabilité.",
    helpful: 12,
    verified: true,
  },
  {
    id: '2',
    author: 'Pierre L.',
    role: 'Électricien',
    company: 'Elec Pro',
    rating: 5,
    date: '2024-09-28',
    title: 'Qualité professionnelle',
    comment: "Matériel robuste et bien conçu. La documentation technique est complète. Je recommande pour les projets professionnels.",
    helpful: 8,
    verified: true,
  },
  {
    id: '3',
    author: 'Sophie M.',
    role: 'Architecte d\'intérieur',
    rating: 4,
    date: '2024-09-12',
    title: 'Design élégant et fonctionnel',
    comment: "Très bon produit avec un design soigné qui s'intègre parfaitement dans mes projets haut de gamme. Seul bémol : le délai de livraison un peu long.",
    helpful: 5,
    verified: true,
  },
];

export function ProductReviews({ 
  reviews = defaultReviews,
  averageRating = 4.8,
  totalReviews = reviews.length
}: ProductReviewsProps) {
  const ratingDistribution = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Avis clients</h2>
          <p className="text-lg text-gray-600">
            Ce que disent les professionnels qui utilisent nos produits
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center lg:sticky lg:top-24">
              <div className="mb-4">
                <div className="text-5xl mb-2">{averageRating}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(averageRating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Basé sur {totalReviews} avis vérifiés
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {ratingDistribution.map(({ stars, percentage }) => (
                  <div key={stars} className="flex items-center gap-2 text-sm">
                    <span className="w-12 text-gray-600">{stars} ★</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-12 text-right text-gray-600">{percentage}%</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Vous avez utilisé ce produit ?</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm transition-colors">
                  Laisser un avis →
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm text-gray-900">{review.author}</h4>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                ✓ Vérifié
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600">
                            {review.role}
                            {review.company && ` • ${review.company}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {new Date(review.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                          })}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>

                      <h5 className="text-sm mb-2">{review.title}</h5>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        <Quote className="w-4 h-4 inline text-gray-400 mr-1" />
                        {review.comment}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          Utile ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <p className="text-sm text-gray-700">
              🏆 <strong>95% de nos clients</strong> recommandent Can-nX à d'autres professionnels
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
