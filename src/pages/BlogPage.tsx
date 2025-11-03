import { motion } from 'motion/react';
import { Newspaper, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Breadcrumb } from '../components/Breadcrumb';

const blogPosts = [
  {
    title: "Can'nX dévoile ses innovations KNX au CES 2024 à Las Vegas",
    excerpt: "Découvrez comment Can'nX a présenté ses dernières innovations en matière d'intégration KNX et IoT lors du CES 2024, le plus grand salon technologique au monde.",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1638135459157-195c5672a179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMDA2MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '15 Janvier 2024',
    author: "Équipe Can'nX",
    tags: ['CES', 'Innovation', 'KNX'],
  },
  {
    title: 'Sunny Smart Living – 2023, Parlons ensemble des brillantes innovations KNX',
    excerpt: "Retour sur notre participation à Sunny Smart Living 2023, où nous avons partagé notre vision de l'avenir du bâtiment intelligent avec les professionnels du secteur.",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1757478558372-43c94b3268bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwMDYxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '10 Novembre 2023',
    author: "Équipe Can'nX",
    tags: ['Événement', 'Smart Home', 'KNX'],
  },
  {
    title: "Can'nX présente ses solutions au congrès mondial IoT Solutions 2023",
    excerpt: "Notre équipe a participé au congrès mondial IoT Solutions 2023 pour présenter nos solutions d'intégration entre KNX et les écosystèmes IoT modernes.",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1638734255280-8bae834f8297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBjb25uZWN0ZWQlMjBkZXZpY2VzfGVufDF8fHx8MTc2MTkyNzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '5 Septembre 2023',
    author: "Équipe Can'nX",
    tags: ['IoT', 'Congrès', 'Solutions'],
  },
  {
    title: "Can'nX a présenté les dernières solutions à Light & Building – 2022 à Francfort",
    excerpt: "Nous avons exposé nos produits phares lors du salon Light & Building 2022, le rendez-vous incontournable de l'industrie du bâtiment connecté.",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjE5NTQzODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '28 Mars 2022',
    author: "Équipe Can'nX",
    tags: ['Light & Building', 'Exposition', 'Francfort'],
  },
  {
    title: "Can'nX gagne l'elevator pitch de la startup KNX",
    excerpt: "Grande victoire pour Can'nX ! Nous avons remporté le concours elevator pitch lors de l'événement startup KNX, confirmant notre position d'innovateur dans le secteur.",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1638135459157-195c5672a179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMDA2MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '15 Octobre 2021',
    author: "Équipe Can'nX",
    tags: ['Startup', 'Pitch', 'Victoire'],
  },
  {
    title: "Can'nX est désormais un fabricant KNX certifié",
    excerpt: "Nous sommes fiers d'annoncer que Can'nX a obtenu la certification officielle de fabricant KNX, garantissant la qualité et la conformité de nos produits.",
    category: "Can'nX - Achèvements",
    image: 'https://images.unsplash.com/photo-1757478558372-43c94b3268bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwMDYxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '1 Juin 2021',
    author: "Équipe Can'nX",
    tags: ['KNX', 'Certification', 'Qualité'],
  },
];

const categories = [
  "Can'nX - Achèvements",
  'Innovations KNX',
  'Guides Techniques',
  'Études de Cas',
  'Événements',
];

export function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Support', href: '#support' },
          { label: 'Blog' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0CB14B] via-[#0CB14B]/90 to-[#cd2653] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Blog Can'nX
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Actualités, innovations et réalisations dans le monde du KNX et de l'IoT
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts - Main Column */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="grid md:grid-cols-5 gap-6">
                      <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      
                      <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge className="bg-[#0CB14B] hover:bg-[#0CB14B]/90">
                              {post.category}
                            </Badge>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {post.author}
                              </span>
                            </div>
                          </div>
                          
                          <h2 className="text-2xl mb-3 group-hover:text-[#0CB14B] transition-colors">
                            {post.title}
                          </h2>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="text-[#0CB14B] hover:text-[#cd2653] transition-colors inline-flex items-center gap-2 mt-4">
                          Lire l'article complet
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0CB14B] to-[#cd2653] hover:opacity-90 text-white"
                >
                  Charger plus d'articles
                </Button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl mb-4">Rechercher</h3>
                  <Input
                    type="search"
                    placeholder="Rechercher un article..."
                    className="bg-white"
                  />
                </motion.div>

                {/* Categories */}
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl mb-4">Catégories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-white hover:text-[#0CB14B] transition-colors text-gray-700"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Posts */}
                <motion.div
                  className="bg-gray-50 rounded-2xl p-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl mb-4">Articles Récents</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 4).map((post) => (
                      <a
                        key={post.title}
                        href="#"
                        className="block group"
                      >
                        <h4 className="text-sm mb-1 line-clamp-2 group-hover:text-[#0CB14B] transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  className="bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-2xl p-6 text-white"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Newspaper className="w-10 h-10 mb-4 opacity-80" />
                  <h3 className="text-xl mb-2">Newsletter</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Recevez nos dernières actualités directement dans votre boîte mail
                  </p>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="mb-3 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Button
                    className="w-full bg-white text-[#0CB14B] hover:bg-white/90"
                  >
                    S'abonner
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
