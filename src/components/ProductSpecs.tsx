import { motion } from 'motion/react';
import { Download, FileText, Video, Book } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';

interface Specification {
  label: string;
  value: string;
}

interface Download {
  name: string;
  type: 'pdf' | 'video' | 'ets' | 'manual';
  size?: string;
  url: string;
}

interface ProductSpecsProps {
  specifications: Specification[];
  downloads?: Download[];
  compatibleWith?: string[];
  applications?: string[];
}

export function ProductSpecs({ 
  specifications, 
  downloads = [],
  compatibleWith = [],
  applications = []
}: ProductSpecsProps) {
  const getDownloadIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'manual':
        return <Book className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <Tabs defaultValue="specs" className="w-full">
        <TabsList className="w-full grid grid-cols-2 lg:grid-cols-4 h-auto bg-gray-100 rounded-none">
          <TabsTrigger value="specs" className="py-4">Spécifications</TabsTrigger>
          <TabsTrigger value="downloads" className="py-4">Téléchargements</TabsTrigger>
          <TabsTrigger value="compatibility" className="py-4">Compatibilité</TabsTrigger>
          <TabsTrigger value="applications" className="py-4">Applications</TabsTrigger>
        </TabsList>

        {/* Specifications Tab */}
        <TabsContent value="specs" className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 pr-6 text-gray-600 whitespace-nowrap">{spec.label}</td>
                      <td className="py-4 text-gray-900">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </TabsContent>

        {/* Downloads Tab */}
        <TabsContent value="downloads" className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {downloads.length > 0 ? (
              downloads.map((download, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {getDownloadIcon(download.type)}
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-900">{download.name}</h4>
                        {download.size && (
                          <p className="text-xs text-gray-500">{download.size}</p>
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <Download className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg text-gray-600 mb-2">Documentation à venir</h3>
                <p className="text-sm text-gray-500">
                  Les fichiers de documentation seront bientôt disponibles au téléchargement
                </p>
              </div>
            )}

            {downloads.length > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 Besoin d'aide avec l'installation ? Consultez notre{' '}
                  <a href="https://doc.can-nx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    documentation en ligne
                  </a>
                  {' '}ou regardez nos{' '}
                  <a href="https://www.youtube.com/@cannx7140/videos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    guides vidéo
                  </a>
                </p>
              </div>
            )}
          </motion.div>
        </TabsContent>

        {/* Compatibility Tab */}
        <TabsContent value="compatibility" className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {compatibleWith.length > 0 ? (
              <div className="space-y-4">
                <h3 className="text-lg mb-4">Compatible avec :</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {compatibleWith.map((item, index) => (
                    <Card key={index} className="p-4 border-l-4 border-green-500">
                      <p className="text-sm text-gray-700">{item}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  Ce produit est compatible avec tous les systèmes KNX standard
                </p>
              </div>
            )}
          </motion.div>
        </TabsContent>

        {/* Applications Tab */}
        <TabsContent value="applications" className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {applications.length > 0 ? (
              <div className="space-y-4">
                <h3 className="text-lg mb-4">Applications recommandées :</h3>
                <div className="space-y-3">
                  {applications.map((app, index) => (
                    <Card key={index} className="p-4">
                      <p className="text-sm text-gray-700">{app}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  Contactez-nous pour discuter des applications spécifiques à votre projet
                </p>
              </div>
            )}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
