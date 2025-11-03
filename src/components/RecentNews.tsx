import { motion } from 'motion/react';
import { Newspaper, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

const newsItems = [
  {
    title: "Can'nX dévoile ses innovations KNX au CES 2024 à Las Vegas",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1638135459157-195c5672a179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMDA2MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Sunny Smart Living – 2023, Parlons ensemble des brillantes innovations KNX',
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1757478558372-43c94b3268bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwMDYxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: "Can'nX présente ses solutions au congrès mondial IoT Solutions 2023",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1638734255280-8bae834f8297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzfGVufDF8fHx8MTc2MTkyNzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: "Can'nX a présenté les dernières solutions à Light & Building – 2022 à Francfort",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjE5NTQzODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: "Can'nX gagne l'elevator pitch de la startup KNX",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1638135459157-195c5672a179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMDA2MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: "Can'nX est désormais un fabricant KNX certifié",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1757478558372-43c94b3268bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwMDYxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function RecentNews() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-full mb-6">
            <Newspaper className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">Récent</h2>
          <p className="text-xl text-gray-600">Nos dernières actualités et réalisations</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#0CB14B] text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg mb-4 line-clamp-2 group-hover:text-[#0CB14B] transition-colors">
                  {item.title}
                </h3>
                <button className="text-[#0CB14B] hover:text-[#cd2653] transition-colors inline-flex items-center gap-2">
                  Lire plus...
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
