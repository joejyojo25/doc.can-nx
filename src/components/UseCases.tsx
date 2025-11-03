import { motion } from 'motion/react';
import { Building2, Home, ArrowRight } from 'lucide-react';

const useCases = [
  {
    icon: Home,
    title: 'Résidentiel',
    description: 'Solutions pour maisons individuelles, villas et appartements connectés',
    features: ['Confort optimal', 'Économies d\'énergie', 'Sécurité avancée'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    href: '#kloudnx',
    color: 'from-[#0CB14B] to-[#0CB14B]/80',
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Solutions GTB pour bureaux, hôtels et bâtiments tertiaires',
    features: ['Gestion centralisée', 'Monitoring en temps réel', 'Optimisation énergétique'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    href: '#emergynx',
    color: 'from-[#cd2653] to-[#cd2653]/80',
  },
];

export function UseCases() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Une solution pour tous vos projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Du résidentiel au commercial, nos solutions s'adaptent à tous vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.a
              key={useCase.title}
              href={useCase.href}
              className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                
                {/* Icon overlay */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl sm:text-3xl mb-3 group-hover:text-[#0CB14B] transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0CB14B]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#0CB14B] group-hover:gap-3 transition-all">
                  <span>Découvrir les solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">
            Besoin d'un projet sur mesure ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contactez nos experts
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
