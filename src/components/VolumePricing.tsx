import { motion } from 'motion/react';
import { Check, TrendingDown } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface PriceTier {
  quantity: string;
  discount: string;
  pricePerUnit: string;
  savings?: string;
}

const volumeTiers: PriceTier[] = [
  { quantity: '1-4 unités', discount: '0%', pricePerUnit: 'Prix standard' },
  { quantity: '5-9 unités', discount: '5%', pricePerUnit: 'Sur devis', savings: 'Économisez 5%' },
  { quantity: '10-24 unités', discount: '10%', pricePerUnit: 'Sur devis', savings: 'Économisez 10%' },
  { quantity: '25+ unités', discount: '15%', pricePerUnit: 'Sur devis', savings: 'Économisez 15%' },
];

export function VolumePricing() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Badge className="mb-4 bg-gradient-to-r from-[#0CB14B] to-[#0a9940] text-white">
          <TrendingDown className="w-4 h-4 mr-2" />
          Tarifs dégressifs disponibles
        </Badge>
        <h3 className="text-2xl lg:text-3xl mb-2">Prix pour achats en volume</h3>
        <p className="text-gray-600">Plus vous commandez, plus vous économisez</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {volumeTiers.map((tier, index) => (
          <motion.div
            key={tier.quantity}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`p-6 relative overflow-hidden ${
              index === volumeTiers.length - 1 ? 'border-[#0CB14B] border-2' : ''
            }`}>
              {tier.savings && (
                <Badge className="absolute top-4 right-4 bg-[#0CB14B] text-white">
                  {tier.savings}
                </Badge>
              )}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl mb-1">{tier.quantity}</h4>
                  <p className="text-sm text-gray-600">{tier.pricePerUnit}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl bg-gradient-to-r from-[#0CB14B] to-[#0a9940] bg-clip-text text-transparent">
                    -{tier.discount}
                  </div>
                  <p className="text-xs text-gray-500">de remise</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-[#0CB14B]" />
                <span>Support technique inclus</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-center text-gray-700">
          <strong>Besoin d'un devis personnalisé ?</strong> Contactez notre équipe commerciale pour des projets de grande envergure ou des besoins spécifiques.
        </p>
      </motion.div>
    </div>
  );
}
