import { motion } from 'motion/react';
import { Settings, Code, Lightbulb, Wrench } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: "Optimisation d'installation KNX & IOT / GTB",
    description:
      "Nous vous aidons dans le choix de vos équipements selon la demande, la fonction attendue et le prix, quel que soit le type de projet. Comparateur de prix multimarques, optimisation et variante de solutions, rationalisation du câblage ou encore une programmation script pour toute fonction avancée.",
  },
  {
    icon: Code,
    title: 'Pré-programmation KNX',
    description:
      "Nous pouvons préparer la programmation simple ou avancée, tout en s'assurant du bon fonctionnement de la solution retenue. Tous les produits KNX ne se valent pas, ou certaines fonctions ne sont pas possibles. Nous vous proposons de mettre en évidence ces limites et d'aller au-delà.",
  },
  {
    icon: Wrench,
    title: 'Programmation de fonctions complexes',
    description:
      "Exprimez nous votre besoin, nous codons la fonctionnalité, même les plus complexes ! Vous pourrez ainsi interfacer différents systèmes qui n'ont jamais été fait auparavant, nous pouvons le faire !",
  },
  {
    icon: Lightbulb,
    title: 'Conception et Prototypage',
    description:
      "Vous avez une idée, une envie, un besoin non exprimé, une demande des plus folle, nous sommes là pour vous aider à la concevoir pour une fois ou pour des milliers de fois.",
  },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0CB14B] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#cd2653] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-2xl mb-6 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Wrench className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des services professionnels pour optimiser, programmer et innover dans vos projets domotiques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-gray-200/50 shadow-lg group-hover:shadow-2xl group-hover:border-[#0CB14B]/30 transition-all duration-500 h-full">
                {/* Icon with gradient ring */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <motion.div 
                    className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-2xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <h3 className="text-2xl lg:text-3xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-[#0CB14B] group-hover:to-[#0a9940] transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-[#0CB14B]/5 to-[#cd2653]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
