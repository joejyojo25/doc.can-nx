import { motion } from 'motion/react';
import { ArrowRight, Wifi } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const integrations = [
  {
    id: 'integration-2n',
    name: '2N',
    category: 'Contrôle d\'accès',
    description: 'Intégrez vos interphones et portiers vidéo 2N avec contrôle d\'accès avancé',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    features: ['API HTTP', 'Événements temps réel', 'Contrôle complet'],
    color: 'from-gray-600 to-gray-700'
  },
  {
    id: 'integration-doorbird',
    name: 'DoorBird',
    category: 'Portier vidéo',
    description: 'Connectez votre portier vidéo DoorBird pour un contrôle KNX intelligent',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    features: ['Vidéo HD', 'Notifications', 'Intégration Speak\'nX'],
    color: 'from-purple-600 to-purple-700'
  },
  {
    id: 'integration-poolcop',
    name: 'PoolCop',
    category: 'Gestion piscine',
    description: 'Pilotez votre piscine PoolCop depuis votre installation KNX',
    image: 'https://images.unsplash.com/photo-1758530273222-440d6a8b0eea?w=600&q=80',
    features: ['Modbus RTU', 'Tous paramètres', 'Pool\'nX dédié'],
    color: 'from-cyan-600 to-cyan-700'
  },
  {
    id: 'integration-klereo',
    name: 'Klereo',
    category: 'Gestion piscine',
    description: 'Intégrez votre régulation de piscine Klereo dans votre KNX',
    image: 'https://images.unsplash.com/photo-1758530273222-440d6a8b0eea?w=600&q=80',
    features: ['Modbus RTU', 'pH & Chlore', 'Pool\'nX compatible'],
    color: 'from-teal-600 to-teal-700'
  },
  {
    id: 'integration-airzone',
    name: 'Airzone',
    category: 'Climatisation',
    description: 'Climatisation zonée et contrôle multi-zones avec Aidoo',
    image: 'https://images.unsplash.com/photo-1631545806609-47ddc94b03d3?w=600&q=80',
    features: ['Multi-zones', 'Aidoo Pro', 'Optimisation énergie'],
    color: 'from-sky-600 to-sky-700'
  },
  {
    id: 'integration-sonos',
    name: 'Sonos',
    category: 'Audio multiroom',
    description: 'Intégrez votre système audio Sonos dans vos scénarios KNX',
    image: 'https://images.unsplash.com/photo-1638135459157-195c5672a179?w=600&q=80',
    features: ['Contrôle total', 'Multi-zones', 'Scénarios audio'],
    color: 'from-green-600 to-green-700'
  },
  {
    id: 'integration-crestron',
    name: 'Crestron',
    category: 'Contrôle AV',
    description: 'Unifiez votre système Crestron et votre installation KNX',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    features: ['Bidirectionnel', 'Audio-vidéo', 'Home cinéma'],
    color: 'from-indigo-600 to-indigo-700'
  },
  {
    id: 'integration-hikvision',
    name: 'Hikvision',
    category: 'Vidéosurveillance',
    description: 'Intégrez vos caméras et NVR Hikvision pour une sécurité intelligente',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
    features: ['PTZ', 'Détection IA', 'Événements'],
    color: 'from-red-600 to-red-700'
  },
  {
    id: 'integration-nuki',
    name: 'Nuki',
    category: 'Serrure connectée',
    description: 'Contrôlez vos serrures connectées Nuki depuis votre installation KNX',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    features: ['Smart Lock', 'Opener', 'Automatisations'],
    color: 'from-amber-600 to-amber-700'
  },
  {
    id: 'integration-shelly',
    name: 'Shelly',
    category: 'Modules WiFi',
    description: 'Intégrez vos modules WiFi Shelly pour une domotique flexible et économique',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    features: ['Relais', 'Volets', 'Monitoring énergie'],
    color: 'from-lime-600 to-lime-700'
  },
  {
    id: 'integration-gude',
    name: 'Gude',
    category: 'PDU réseau',
    description: 'Gérez vos PDU et équipements réseau Gude intelligemment',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    features: ['Monitoring', 'Contrôle ports', 'Data-center'],
    color: 'from-slate-600 to-slate-700'
  },

  {
    id: 'integration-lektrico',
    name: 'Lektrico',
    category: 'Borne de recharge VE',
    description: 'Rechargez votre véhicule électrique intelligemment avec l\'énergie solaire',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
    features: ['Surplus solaire', 'Délestage', 'Heures creuses'],
    color: 'from-emerald-600 to-emerald-700'
  },
  {
    id: 'integration-modbus',
    name: 'Modbus TCP/RTU',
    category: 'Protocole industriel',
    description: 'Connectez compteurs, automates et équipements Modbus à votre KNX',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    features: ['TCP & RTU', 'Compteurs énergie', 'Supervision'],
    color: 'from-orange-600 to-orange-700'
  },
  {
    id: 'integration-terraac',
    name: 'ABB Terra AC',
    category: 'Borne de recharge VE',
    description: 'Borne de recharge ABB avec gestion surplus solaire et délestage intelligent',
    image: 'https://images.unsplash.com/photo-1619913387719-a43ee8859d9c?w=600&q=80',
    features: ['22 kW AC', 'Surplus solaire', 'Délestage'],
    color: 'from-red-600 to-red-700'
  },
  {
    id: 'integration-evlinkpro',
    name: 'Evlink Pro',
    category: 'Borne de recharge VE',
    description: 'Solution professionnelle Schneider Electric pour gestion multi-bornes',
    image: 'https://images.unsplash.com/photo-1619913387719-a43ee8859d9c?w=600&q=80',
    features: ['Gestion flotte', 'OCPP', 'Facturation'],
    color: 'from-green-600 to-green-700'
  },
  {
    id: 'integration-pushover',
    name: 'Pushover',
    category: 'Notifications',
    description: 'Notifications push instantanées sur smartphone depuis votre installation KNX',
    image: 'https://images.unsplash.com/photo-1609162554108-6490759499ef?w=600&q=80',
    features: ['Temps réel', 'Multi-plateformes', 'Priorités'],
    color: 'from-orange-600 to-orange-700'
  },
  {
    id: 'integration-homekit',
    name: 'Apple HomeKit',
    category: 'Écosystème',
    description: 'Contrôlez votre KNX avec Siri et l\'app Maison d\'Apple',
    image: 'https://images.unsplash.com/photo-1655481595737-a79e7592a4a4?w=600&q=80',
    features: ['Siri', 'App Maison', 'Sécurisé'],
    color: 'from-gray-800 to-gray-900'
  },
  {
    id: 'integration-knx',
    name: 'Protocole KNX',
    category: 'Standard mondial',
    description: 'Le seul standard ouvert ISO/IEC pour l\'automatisation des bâtiments',
    image: 'https://images.unsplash.com/photo-1753272691001-4d68806ac590?w=600&q=80',
    features: ['500+ fabricants', 'Interopérable', 'Pérenne'],
    color: 'from-green-600 to-green-700'
  }
];

export function BrandIntegrations() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-blue-600">
            <Wifi className="w-4 h-4 mr-2" />
            Produits connectés
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            Intégrations Can-nX
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connectez vos équipements favoris à votre installation KNX via Kloud'nX et la licence Link'nX
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.a
              key={integration.id}
              href={`#${integration.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${integration.color} opacity-90`} />
                  <ImageWithFallback
                    src={integration.image}
                    alt={integration.name}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                      {integration.category}
                    </Badge>
                  </div>

                  {/* Brand Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl">{integration.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {integration.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {integration.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm">En savoir plus</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="inline-block px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <p className="text-gray-700">
              💡 <strong>Besoin d'une intégration personnalisée ?</strong>{' '}
              <a href="#contact" className="text-blue-600 hover:underline">
                Contactez notre équipe
              </a>
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
