import { motion } from 'motion/react';
import { Cloud, Droplets, Radio, Volume2, Boxes, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Button } from './ui/button';

const productData = {
  kloudnx: {
    name: "Kloud'nX",
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=600&q=80',
    link: '#kloudnx',
  },
  poolnx: {
    name: "Pool'nX",
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1758530273222-440d6a8b0eea?w=600&q=80',
    link: '#poolnx',
  },
  emergynx: {
    name: "Emergy'nX",
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    link: '#emergynx',
  },
  infinix: {
    name: 'Infini KNX',
    icon: Radio,
    image: 'https://images.unsplash.com/photo-1546787128-a90ea0143164?w=600&q=80',
    link: '#infinix',
  },
  speaknx: {
    name: "Speak'nX",
    icon: Volume2,
    image: 'https://images.unsplash.com/photo-1638135459157-195c5672a179?w=600&q=80',
    link: '#speaknx',
  },
  modnx: {
    name: "Mod'nX",
    icon: Boxes,
    image: 'https://images.unsplash.com/photo-1546787128-a90ea0143164?w=600&q=80',
    link: '#modnx',
  },
};

interface RelatedProductsProps {
  currentProductId: string;
  relatedIds?: string[];
  title?: string;
  description?: string;
}

export function RelatedProducts({ 
  currentProductId, 
  relatedIds,
  title = "Produits complémentaires",
  description = "Découvrez les produits qui fonctionnent parfaitement avec"
}: RelatedProductsProps) {
  // If no related products specified, show all except current
  const productsToShow = relatedIds 
    ? relatedIds
    : Object.keys(productData).filter(id => id !== currentProductId).slice(0, 3);

  const relatedProducts = productsToShow
    .map(id => productData[id as keyof typeof productData])
    .filter(Boolean);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {relatedProducts.map((product, index) => (
            <motion.a
              key={product.name}
              href={product.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <product.icon className="w-5 h-5 text-gray-800" />
                        </div>
                        <h3 className="text-white">{product.name}</h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <Button variant="ghost" className="w-full group-hover:bg-gray-100 transition-colors">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* System Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <p className="text-gray-700">
              💡 <strong>Conseil :</strong> Tous nos produits sont conçus pour fonctionner ensemble de manière transparente via le protocole KNX et notre plateforme cloud Kloud'nX
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
