import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ExternalLink, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Distributor {
  name: string;
  country: string;
  city: string;
  phone?: string;
  email?: string;
  website?: string;
  certified: boolean;
}

const distributors: Distributor[] = [
  {
    name: 'Can-nX France',
    country: 'France',
    city: 'Paris',
    phone: '+33 1 XX XX XX XX',
    email: 'contact@can-nx.com',
    website: 'https://can-nx.com',
    certified: true,
  },
  {
    name: 'KNX Solutions Belgium',
    country: 'Belgique',
    city: 'Bruxelles',
    phone: '+32 2 XXX XX XX',
    email: 'info@knxsolutions.be',
    certified: true,
  },
  {
    name: 'Smart Home Deutschland',
    country: 'Allemagne',
    city: 'Berlin',
    phone: '+49 30 XXXX XXXX',
    email: 'kontakt@smarthome.de',
    certified: true,
  },
  {
    name: 'Swiss Automation AG',
    country: 'Suisse',
    city: 'Zurich',
    phone: '+41 44 XXX XX XX',
    email: 'info@swissauto.ch',
    certified: true,
  },
];

export function DistributorLocator() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {distributors.map((distributor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="mb-1">{distributor.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{distributor.city}, {distributor.country}</span>
                  </div>
                </div>
                {distributor.certified && (
                  <Badge className="bg-[#0CB14B] text-white">
                    Certifié
                  </Badge>
                )}
              </div>

              <div className="space-y-3 mb-4">
                {distributor.phone && (
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${distributor.phone}`} className="text-gray-700 hover:text-[#0CB14B] transition-colors">
                      {distributor.phone}
                    </a>
                  </div>
                )}
                {distributor.email && (
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${distributor.email}`} className="text-gray-700 hover:text-[#0CB14B] transition-colors">
                      {distributor.email}
                    </a>
                  </div>
                )}
                {distributor.website && (
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <a href={distributor.website} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#0CB14B] transition-colors">
                      Visiter le site
                    </a>
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full hover:border-[#0CB14B] hover:text-[#0CB14B]"
                asChild
              >
                <a href={`mailto:${distributor.email || 'contact@can-nx.com'}`}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contacter le distributeur
                </a>
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <p className="text-gray-700 mb-4">
            <strong>Vous ne trouvez pas de distributeur dans votre région ?</strong>
          </p>
          <Button
            className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
            asChild
          >
            <a href="mailto:contact@can-nx.com">
              Contactez-nous directement
            </a>
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}
