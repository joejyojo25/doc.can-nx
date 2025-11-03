import { motion } from 'motion/react';
import { Award, Shield, MapPin, Users, Star } from 'lucide-react';
import { Card } from './ui/card';

const trustMetrics = [
  {
    icon: Shield,
    value: 'KNX Certified',
    label: 'Produits certifiés',
    color: 'text-green-600',
  },
  {
    icon: MapPin,
    value: 'Fabriqué en Europe',
    label: 'Qualité garantie',
    color: 'text-blue-600',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Installations actives',
    color: 'text-purple-600',
  },
  {
    icon: Award,
    value: '2 ans',
    label: 'Garantie',
    color: 'text-orange-600',
  },
];

const certifications = [
  { name: 'KNX Certified', badge: 'KNX' },
  { name: 'CE Certified', badge: 'CE' },
  { name: 'Made in France', badge: '🇫🇷' },
  { name: 'ISO 9001', badge: 'ISO' },
];

export function TrustSignals() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                <div className={`text-2xl mb-1 ${metric.color}`}>{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-sm text-gray-600">Certifications & Labels :</span>
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                  {cert.badge}
                </div>
                <span className="text-sm text-gray-700">{cert.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customer Reviews Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <p className="text-gray-600">
            Note moyenne <span className="text-gray-900">4.8/5</span> basée sur <span className="text-gray-900">127 avis</span> de professionnels
          </p>
        </motion.div>
      </div>
    </section>
  );
}
