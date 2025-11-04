import { motion } from 'motion/react';
import { Zap, Wifi, Radio, Lock, Camera, Wind, Plug, Car, Video, Network, Droplets, Waves, Home, Speaker, Bell, Server, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import logo from 'figma:asset/919ef30138c882ec49118640f7395b4d213df19e.png';

const integrations = [
  { name: '2N', icon: Camera, color: 'from-blue-600 to-blue-700', description: 'Interphonie IP', link: '#integration-2n' },
  { name: 'Airzone', icon: Wind, color: 'from-cyan-500 to-cyan-600', description: 'Climatisation zonée', link: '#integration-airzone' },
  { name: 'Crestron', icon: Home, color: 'from-gray-700 to-gray-800', description: 'Automatisation pro', link: '#integration-crestron' },
  { name: 'DoorBird', icon: Camera, color: 'from-red-500 to-red-600', description: 'Interphones IP', link: '#integration-doorbird' },
  { name: 'EvlinkPro', icon: Zap, color: 'from-indigo-500 to-indigo-600', description: 'Stations de charge', link: '#integration-evlinkpro' },
  { name: 'Gude', icon: MessageSquare, color: 'from-green-500 to-green-600', description: 'Monitoring énergie', link: '#integration-gude' },
  { name: 'Hikvision', icon: Video, color: 'from-red-600 to-red-700', description: 'Vidéosurveillance', link: '#integration-hikvision' },
  { name: 'HomeKit', icon: Home, color: 'from-gray-600 to-gray-700', description: 'Écosystème Apple', link: '#integration-homekit' },
  { name: 'Klereo', icon: Waves, color: 'from-purple-500 to-purple-600', description: 'Domotique KNX', link: '#integration-klereo' },
  { name: 'KNX', icon: Network, color: 'from-[#0CB14B] to-[#0a9d3f]', description: 'Standard bus domotique', link: '#integration-knx' },
  { name: 'Lektrico', icon: Plug, color: 'from-green-600 to-green-700', description: 'Bornes de charge', link: '#integration-lektrico' },
  { name: 'Modbus', icon: Server, color: 'from-yellow-600 to-yellow-700', description: 'Protocole industriel', link: '#integration-modbus' },
  { name: 'Nuki', icon: Lock, color: 'from-orange-500 to-orange-600', description: 'Serrures connectées', link: '#integration-nuki' },
  { name: 'PoolCop', icon: Droplets, color: 'from-blue-400 to-blue-500', description: 'Gestion piscine', link: '#integration-poolcop' },
  { name: 'Pushover', icon: Bell, color: 'from-blue-500 to-blue-600', description: 'Notifications push', link: '#integration-pushover' },
  { name: 'Shelly', icon: Zap, color: 'from-blue-500 to-blue-600', description: 'Modules IoT WiFi', link: '#integration-shelly' },
  { name: 'Sonos', icon: Speaker, color: 'from-gray-800 to-gray-900', description: 'Audio multi-room', link: '#integration-sonos' },
  { name: 'TerraAC', icon: Car, color: 'from-teal-500 to-teal-600', description: 'Charge véhicules', link: '#integration-terraac' },
];

export function IntegrationsShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0CB14B] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#cd2653] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <ImageWithFallback src={logo} alt="Can-nX" className="w-24 h-24 object-contain" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            5+ années à connecter différents systèmes & équipements
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connectez n'importe quel système ou équipement. Can'nX intègre de manière 
            transparente KNX, Modbus, IoT et 18 marques leaders pour créer un 
            écosystème de bâtiment intelligent unifié.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { number: '18', label: 'Intégrations' },
              { number: '6', label: 'Produits' },
              { number: '100%', label: 'KNX Certifié' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl bg-gradient-to-r from-[#0CB14B] to-[#cd2653] bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-7xl mx-auto mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.a
                key={integration.name}
                href={integration.link}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0CB14B] overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${integration.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg mb-2 text-gray-900 group-hover:text-[#0CB14B] transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {integration.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 rounded-full bg-[#0CB14B] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
            asChild
          >
            <a
              href="https://can-nx.shop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acheter une licence d'intégration
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
