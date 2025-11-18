import { useState } from 'react';
import { motion } from 'motion/react';
import { InfiniKnxConfiguratorPage } from './InfiniKnxConfiguratorPage';
import { InfiniKnxWizard } from '../components/configurator/InfiniKnxWizard';
import { ScrollProgress } from '../components/ScrollProgress';
import { ProductBreadcrumb } from '../components/ProductBreadcrumb';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Sparkles, Layout } from 'lucide-react';

export function InfiniKnxConfiguratorPageWrapper() {
  const [selectedVersion, setSelectedVersion] = useState<'v1' | 'v2'>('v1');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ScrollProgress />
      
      <div className="container mx-auto px-4 py-8">
        <ProductBreadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Produits', href: '/#products' },
            { label: 'Infini KNX', href: '/infini-knx' },
            { label: 'Configurateur' }
          ]}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl mb-4">Configurateur Infini KNX</h1>
          <p className="text-xl text-gray-600 mb-6">
            Créez votre configuration personnalisée de plaques Meljac
          </p>
        </motion.div>

        {/* Version Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="text-center md:text-left">
                <h3 className="text-lg mb-2">Choisissez votre mode de configuration</h3>
                <p className="text-sm text-gray-600">
                  Deux interfaces pour créer vos configurations Infini KNX
                </p>
              </div>

              <div className="flex gap-4">
                {/* Version 1 - Classic */}
                <button
                  onClick={() => setSelectedVersion('v1')}
                  className={`group relative flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all ${
                    selectedVersion === 'v1'
                      ? 'border-[#0CB14B] bg-[#0CB14B]/5 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      selectedVersion === 'v1'
                        ? 'bg-[#0CB14B] text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}
                  >
                    <Layout className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">Version 1</span>
                      <Badge variant="outline" className="text-xs">
                        Classique
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">
                      Tous les contrôles visibles
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Pour utilisateurs expérimentés
                    </p>
                  </div>
                  {selectedVersion === 'v1' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0CB14B] flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </button>

                {/* Version 2 - Wizard */}
                <button
                  onClick={() => setSelectedVersion('v2')}
                  className={`group relative flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all ${
                    selectedVersion === 'v2'
                      ? 'border-[#0CB14B] bg-[#0CB14B]/5 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      selectedVersion === 'v2'
                        ? 'bg-[#0CB14B] text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}
                  >
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">Version 2</span>
                      <Badge className="text-xs bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 text-white">
                        Nouveau
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">
                      Processus pas à pas
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Guidage et validation
                    </p>
                  </div>
                  {selectedVersion === 'v2' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0CB14B] flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Content */}
        <motion.div
          key={selectedVersion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedVersion === 'v1' ? (
            <InfiniKnxConfiguratorPage />
          ) : (
            <InfiniKnxWizard />
          )}
        </motion.div>
      </div>
    </div>
  );
}
