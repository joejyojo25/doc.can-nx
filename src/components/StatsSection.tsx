import { motion } from 'motion/react';
import { Building2, Globe2, Puzzle, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    number: '1000+',
    label: 'Projets déployés',
    description: 'Installations réalisées à travers le monde',
    href: '#products',
  },
  {
    icon: Globe2,
    number: '25+',
    label: 'Pays',
    description: 'Présence internationale',
    href: '#contact',
  },
  {
    icon: Puzzle,
    number: '13+',
    label: 'Intégrations',
    description: 'Marques et systèmes supportés',
    href: '#integrations',
  },
  {
    icon: Sparkles,
    number: 'Infini',
    label: 'Possibilités',
    description: 'Personnalisation sans limite',
    href: '#products',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Can'nX en chiffres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions éprouvées qui font la différence dans le monde entier
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.a
              key={stat.label}
              href={stat.href}
              className="group block bg-white rounded-2xl border-2 border-gray-100 p-6 lg:p-8 hover:border-[#0CB14B] hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 flex items-center justify-center group-hover:from-[#0CB14B]/20 group-hover:to-[#cd2653]/20 transition-colors">
                    <stat.icon className="w-7 h-7 text-[#0CB14B] group-hover:text-[#cd2653] transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#0CB14B] to-[#cd2653] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            Fabricant KNX certifié depuis 2021
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['KNX Certified', 'Made in France', 'CE'].map((badge, index) => (
              <motion.div
                key={badge}
                className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <span className="text-sm font-semibold text-gray-700">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
