import { motion } from 'motion/react';
import { GitMerge, Link2, Rocket, Gauge } from 'lucide-react';

const benefits = [
  {
    icon: GitMerge,
    title: 'Déployer des infrastructures standardisées',
    description: 'Solutions et infrastructures standardisées pour une mise en œuvre rapide et efficace',
  },
  {
    icon: Link2,
    title: 'Connecter et rendre communiquant',
    description: 'Rendre les équipements communicants pour une intégration complète',
  },
  {
    icon: Rocket,
    title: 'Mise en service rapide',
    description: 'Mise en service accélérée même dans des conditions de chantier difficiles',
  },
  {
    icon: Gauge,
    title: 'Exploiter et monitorer',
    description: 'Exploitez et monitorez vos installations avec souplesse et précision',
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0CB14B] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cd2653] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-6">
            Toute notre expérience au service de vos installations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gradient-to-br from-[#0CB14B] to-[#0CB14B]/90 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
