import { useState } from 'react';
import { motion } from 'motion/react';
import { Cloud, Droplets, Radio, Volume2, Boxes, X, Check, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface Product {
  id: string;
  name: string;
  icon: any;
  category: string;
  price: string;
  specs: {
    connectivity?: string;
    protocol?: string;
    power?: string;
    dimensions?: string;
    inputs?: string;
    outputs?: string;
    features?: string[];
  };
}

const products: Product[] = [
  {
    id: 'kloudnx',
    name: "Kloud'nX",
    icon: Cloud,
    category: 'Connectivité IoT',
    price: 'À partir de 295€',
    specs: {
      connectivity: '4G/5G, Ethernet, WiFi',
      protocol: 'KNX IP, Modbus TCP',
      power: '5V DC',
      dimensions: '90 x 90 x 70 mm',
      features: ['Cloud integration', 'Remote access', 'OTA updates', 'API access'],
    },
  },
  {
    id: 'poolnx',
    name: "Pool'nX",
    icon: Droplets,
    category: 'Gestion de piscine',
    price: 'Sur demande',
    specs: {
      connectivity: 'RS485, KNX',
      protocol: 'KNX, Modbus',
      power: '12-24V DC',
      dimensions: '144 x 90 x 70 mm',
      features: ['Pool automation', 'Multi-protocol', 'Dosing control', 'Temperature monitoring'],
    },
  },
  {
    id: 'infinix',
    name: 'Infini KNX',
    icon: Radio,
    category: 'Contrôle rotatif',
    price: 'À partir de 120€',
    specs: {
      connectivity: 'KNX Bus',
      protocol: 'KNX TP',
      power: 'Bus powered',
      dimensions: 'Variable selon finition',
      features: ['Rotary control', '8 scenarios', 'Premium finishes', 'Haptic feedback'],
    },
  },
  {
    id: 'speaknx',
    name: "Speak'nX",
    icon: Volume2,
    category: 'Diffusion audio',
    price: 'À partir de 85€',
    specs: {
      connectivity: 'KNX Bus',
      protocol: 'KNX TP',
      power: 'Bus powered',
      dimensions: '50 x 50 x 15 mm',
      features: ['Audio diffusion', 'Customizable messages', 'Premium finishes', 'Doorbell integration'],
    },
  },
  {
    id: 'modnx',
    name: "Mod'nX",
    icon: Boxes,
    category: 'Module E/S',
    price: 'À partir de 65€',
    specs: {
      connectivity: 'KNX Bus',
      protocol: 'KNX TP',
      power: 'Bus powered',
      dimensions: '18 x 90 x 70 mm',
      inputs: '4-8 inputs',
      outputs: 'Logic outputs',
      features: ['Compact design', 'Alarm inputs', 'DIN rail mount', 'Sécu\'nX compatible'],
    },
  },
];

export function ProductComparison() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['kloudnx', 'modnx']);
  const [availableProducts, setAvailableProducts] = useState<string[]>(
    products.filter(p => !selectedProducts.includes(p.id)).map(p => p.id)
  );

  const addProduct = (productId: string) => {
    if (selectedProducts.length < 4) {
      setSelectedProducts([...selectedProducts, productId]);
      setAvailableProducts(availableProducts.filter(id => id !== productId));
    }
  };

  const removeProduct = (productId: string) => {
    if (selectedProducts.length > 2) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
      setAvailableProducts([...availableProducts, productId]);
    }
  };

  const selectedProductData = selectedProducts
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as Product[];

  const allFeatures = Array.from(
    new Set(
      selectedProductData.flatMap(p => p.specs.features || [])
    )
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Comparateur de produits</h2>
          <p className="text-lg text-gray-600">
            Comparez jusqu'à 4 produits pour trouver la solution idéale
          </p>
        </motion.div>

        {/* Product Selection */}
        {availableProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-wrap gap-2 justify-center"
          >
            <span className="text-sm text-gray-600 self-center mr-2">Ajouter un produit :</span>
            {availableProducts.map(productId => {
              const product = products.find(p => p.id === productId);
              if (!product) return null;
              return (
                <Button
                  key={productId}
                  variant="outline"
                  size="sm"
                  onClick={() => addProduct(productId)}
                  disabled={selectedProducts.length >= 4}
                >
                  <product.icon className="w-4 h-4 mr-2" />
                  {product.name}
                </Button>
              );
            })}
          </motion.div>
        )}

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <Card className="p-0 overflow-hidden">
            <div className="min-w-[800px]">
              {/* Product Headers */}
              <div className="grid gap-px bg-gray-200" style={{ gridTemplateColumns: `200px repeat(${selectedProductData.length}, 1fr)` }}>
                <div className="bg-white p-4"></div>
                {selectedProductData.map(product => (
                  <div key={product.id} className="bg-white p-6 text-center relative">
                    {selectedProducts.length > 2 && (
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    )}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="mb-1">{product.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-blue-600">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connectivity */}
              <div className="grid gap-px bg-gray-200" style={{ gridTemplateColumns: `200px repeat(${selectedProductData.length}, 1fr)` }}>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">Connectivité</div>
                {selectedProductData.map(product => (
                  <div key={product.id} className="bg-white p-4 text-sm text-center">
                    {product.specs.connectivity || '-'}
                  </div>
                ))}
              </div>

              {/* Protocol */}
              <div className="grid gap-px bg-gray-200" style={{ gridTemplateColumns: `200px repeat(${selectedProductData.length}, 1fr)` }}>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">Protocole</div>
                {selectedProductData.map(product => (
                  <div key={product.id} className="bg-white p-4 text-sm text-center">
                    {product.specs.protocol || '-'}
                  </div>
                ))}
              </div>

              {/* Power */}
              <div className="grid gap-px bg-gray-200" style={{ gridTemplateColumns: `200px repeat(${selectedProductData.length}, 1fr)` }}>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">Alimentation</div>
                {selectedProductData.map(product => (
                  <div key={product.id} className="bg-white p-4 text-sm text-center">
                    {product.specs.power || '-'}
                  </div>
                ))}
              </div>

              {/* Dimensions */}
              <div className="grid gap-px bg-gray-200" style={{ gridTemplateColumns: `200px repeat(${selectedProductData.length}, 1fr)` }}>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">Dimensions</div>
                {selectedProductData.map(product => (
                  <div key={product.id} className="bg-white p-4 text-sm text-center">
                    {product.specs.dimensions || '-'}
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="grid gap-px bg-gray-200" style={{ gridTemplateColumns: `200px repeat(${selectedProductData.length}, 1fr)` }}>
                <div className="bg-gray-50 p-4 text-sm text-gray-600">
                  Fonctionnalités
                </div>
                {selectedProductData.map(product => (
                  <div key={product.id} className="bg-white p-4">
                    <div className="space-y-2">
                      {allFeatures.map(feature => {
                        const hasFeature = product.specs.features?.includes(feature);
                        return (
                          <div key={feature} className="flex items-center justify-center gap-2 text-xs">
                            {hasFeature ? (
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            ) : (
                              <Minus className="w-4 h-4 text-gray-300 flex-shrink-0" />
                            )}
                            <span className={hasFeature ? 'text-gray-700' : 'text-gray-400'}>
                              {feature}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="grid gap-px bg-gray-200" style={{ gridTemplateColumns: `200px repeat(${selectedProductData.length}, 1fr)` }}>
                <div className="bg-white p-4"></div>
                {selectedProductData.map(product => (
                  <div key={product.id} className="bg-white p-4">
                    <Button className="w-full" size="sm">
                      En savoir plus
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-gray-600"
        >
          💡 Besoin d'aide pour choisir ? <a href="#contact" className="text-blue-600 hover:underline">Contactez nos experts</a>
        </motion.div>
      </div>
    </section>
  );
}
