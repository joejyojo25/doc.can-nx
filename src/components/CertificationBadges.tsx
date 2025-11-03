import { motion } from 'motion/react';
import { Award, Shield, MapPin, CheckCircle } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    label: 'KNX Certified',
    description: 'Produit certifié KNX',
  },
  {
    icon: MapPin,
    label: 'Made in Europe',
    description: 'Fabriqué en Europe',
  },
  {
    icon: Shield,
    label: 'Garantie 2 ans',
    description: 'Garantie constructeur',
  },
  {
    icon: CheckCircle,
    label: 'CE Certified',
    description: 'Conforme aux normes CE',
  },
];

export function CertificationBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.label}
          className="group relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <cert.icon className="w-8 h-8 text-[#0CB14B]" />
            </div>
            <h4 className="mb-2">{cert.label}</h4>
            <p className="text-sm text-gray-600">{cert.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
