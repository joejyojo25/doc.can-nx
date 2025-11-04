import { motion } from 'motion/react';
import { Cloud, Droplets, Radio, Volume2, Boxes, Zap, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import kloudnxProductImage from 'figma:asset/b1a83fc3c8a20ae4448c96116d5ab85ce70f55e4.png';
import poolnxProductImage from 'figma:asset/6b039210627c783e16b5de6f2c223b0fa9c5ae6c.png';
import speaknxProductImage from 'figma:asset/5745f25880afe1bc24c217e68bbc5b290ffbbe5f.png';
import modnxProductImage from 'figma:asset/18b368059fa728d4fc03cce97562509be61e621e.png';
import emergynxProductImage from 'figma:asset/dca0fdeb28cc7c96bb88e49f32acb378db2249c0.png';

const products = [
  {
    id: 'kloudnx',
    name: "Kloud'nX",
    icon: Cloud,
    description: 'Routeur KNX - IOT : Accès distant sécurisé, intégration IOT, Monitoring Cloud',
    image: kloudnxProductImage,
    color: 'from-blue-500 to-cyan-500',
    link: '#kloudnx',
  },
  {
    id: 'poolnx',
    name: "Pool'nX",
    icon: Droplets,
    description: 'Passerelle KNX pour piscine connectée avec les systèmes PoolCop ou Klereo',
    image: poolnxProductImage,
    color: 'from-cyan-500 to-blue-600',
    link: '#poolnx',
  },
  {
    id: 'emergynx',
    name: "Emergy'nX",
    icon: Zap,
    description: 'Optimiser la production, la consommation et le stockage d\'énergie (HEMS KNX)',
    image: emergynxProductImage,
    color: 'from-green-500 to-yellow-500',
    link: '#emergynx',
  },
  {
    id: 'infinix',
    name: 'Infini KNX',
    icon: Radio,
    description: 'Le bouton rotatif KNX - 4 Boutons poussoirs rotatifs, 4 Entrées ou sorties LED',
    image: 'figma:asset/6710d8b072ed209d48084fa9c9d51566122aedd8.png',
    color: 'from-purple-500 to-pink-600',
    link: '#infinix',
  },
  {
    id: 'speaknx',
    name: "Speak'nX",
    icon: Volume2,
    description: 'Diffuseur sonore et visuel, capteurs/sondes avec interface KNX-TP, Bluetooth et wifi',
    image: speaknxProductImage,
    color: 'from-red-500 to-pink-600',
    link: '#speaknx',
  },
  {
    id: 'modnx',
    name: "Mod'nX",
    icon: Boxes,
    description: "Module d'entrées Compact & Connecté",
    image: modnxProductImage,
    color: 'from-indigo-500 to-purple-600',
    link: '#modnx',
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] rounded-full mb-6">
            <Boxes className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6">Notre gamme de produits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La gamme de produits que nous avons mis au point est avant tout à l'usage des professionnels 
            œuvrant sur les lots techniques CFO / CFA / CVC / PB / GTB
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={product.link || '#'}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-contain p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t opacity-0" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0CB14B] to-[#cd2653] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white px-6 py-3 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  En savoir plus
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional text */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 leading-relaxed">
            Professionnels certifiés <span className="font-semibold text-[#0CB14B]">KNX</span>, intégrateur audio-visuel, 
            experts du bâtiment connecté, ou techniciens domotiques, découvrez la liberté d'enrichir les fonctionnalités 
            de vos installations avec notre gamme de produits ! Vous avez accès à des solutions fiables, interopérables, 
            flexibles et sécurisées.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white gap-2 shadow-lg shadow-[#0CB14B]/30"
              onClick={() => window.open('https://can-nx.shop', '_blank')}
            >
              Voir les prix
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
