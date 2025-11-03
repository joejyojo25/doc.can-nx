import { motion } from 'motion/react';
import { Logo } from './Logo';

const integrations = [
  { name: '2N', position: 'top-[10%] left-[15%]', delay: 0.1 },
  { name: 'DoorBird', position: 'top-[5%] right-[20%]', delay: 0.2 },
  { name: 'Sonos', position: 'top-[30%] right-[5%]', delay: 0.3 },
  { name: 'Modbus', position: 'top-[55%] right-[8%]', delay: 0.4 },
  { name: 'PoolCop', position: 'bottom-[15%] right-[18%]', delay: 0.5 },
  { name: 'Shelly', position: 'bottom-[8%] left-[20%]', delay: 0.6 },
  { name: 'Nuki', position: 'top-[55%] left-[5%]', delay: 0.7 },
  { name: 'KNX', position: 'top-[28%] left-[8%]', delay: 0.8 },
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Integrations Circle */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Concentric circles background */}
            <div className="relative aspect-square">
              {/* Outer circles */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gray-200 opacity-20"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.div
                className="absolute inset-[10%] rounded-full border-2 border-gray-200 opacity-30"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.div
                className="absolute inset-[20%] rounded-full border-2 border-gray-200 opacity-40"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              {/* Center logo */}
              <motion.div
                className="absolute inset-[30%] flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-full shadow-2xl border-4 border-white"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <Logo className="w-full h-full" />
                </div>
              </motion.div>

              {/* Integration badges */}
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  className={`absolute ${integration.position} transform -translate-x-1/2 -translate-y-1/2`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: integration.delay }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white rounded-full px-4 py-2 shadow-lg border-2 border-gray-100 hover:border-[#0CB14B] transition-colors">
                    <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      {integration.name}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Connecting lines animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0CB14B" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#cd2653" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {integrations.map((_, index) => (
                  <motion.circle
                    key={index}
                    cx="50%"
                    cy="50%"
                    r={`${35 + index * 5}%`}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              5+ années à connecter différents systèmes & équipements
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connectez n'importe quel système ou équipement. Can'nX intègre de manière 
              transparente KNX, Modbus, IoT et plus de 13 marques leaders pour créer un 
              écosystème de bâtiment intelligent unifié.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#integrations"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                Découvrir les intégrations
              </a>
              <a
                href="https://can-nx.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-[#0CB14B] hover:text-[#0CB14B] transition-colors"
              >
                Boutique en ligne
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              {[
                { number: '13+', label: 'Intégrations' },
                { number: '6', label: 'Produits' },
                { number: '100%', label: 'KNX Certifié' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl bg-gradient-to-r from-[#0CB14B] to-[#cd2653] bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
