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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-full mb-6">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des services professionnels pour optimiser, programmer et innover dans vos projets domotiques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0CB14B]/20 to-[#cd2653]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-xl mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
