import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599474217443-56aa0c5c3c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Professionnel installant un système d'automatisation"
          className="w-full h-full object-cover"
        />
        {/* Bright overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content - Left side */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-[#0CB14B]/10 text-[#0CB14B] rounded-full text-sm mb-6 backdrop-blur-sm border border-[#0CB14B]/20">
                Solutions KNX & IoT pour le bâtiment intelligent
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-gray-900">
                Alliez le meilleur de l'{' '}
                <span className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/80 bg-clip-text text-transparent">
                  IoT
                </span>{' '}
                et du{' '}
                <span className="bg-gradient-to-r from-[#cd2653] to-[#cd2653]/80 bg-clip-text text-transparent">
                  KNX
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Des solutions conçues par des professionnels, pour des professionnels. 
              Intégrez de manière transparente KNX, Modbus, BACnet, IoT et plus de 50 autres 
              systèmes pour créer l'écosystème parfait.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white gap-2 shadow-lg shadow-[#0CB14B]/30"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Découvrir nos produits
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 bg-white/50 text-gray-900 hover:bg-white hover:border-gray-400 backdrop-blur-sm gap-2"
                onClick={() => window.open('https://www.youtube.com/@cannx7140/videos', '_blank')}
              >
                <Play className="w-5 h-5" />
                Voir les vidéos
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#cd2653] to-[#cd2653]/90 hover:from-[#cd2653]/90 hover:to-[#cd2653] text-white gap-2 shadow-lg shadow-[#cd2653]/30"
                onClick={() => window.open('https://calendly.com/can-nx-marketing/demo', '_blank')}
              >
                Demander une démo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center lg:justify-start items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                'KNX Certifié',
                'Made in France',
                '1000+ Installations',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-2 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0CB14B]" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Key features cards */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: '🏢',
                  title: 'GTB Complète',
                  desc: 'Gestion technique du bâtiment',
                  delay: 0.4,
                },
                {
                  icon: '🔌',
                  title: 'Intégration',
                  desc: '13+ marques supportées',
                  delay: 0.5,
                },
                {
                  icon: '📱',
                  title: 'Cloud Ready',
                  desc: 'Supervision à distance',
                  delay: 0.6,
                },
                {
                  icon: '⚡',
                  title: 'Installation rapide',
                  desc: 'Mise en service simplifiée',
                  delay: 0.7,
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0CB14B] to-[#cd2653] text-white px-6 py-3 rounded-full shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm whitespace-nowrap">Fabricant KNX depuis 2021</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
