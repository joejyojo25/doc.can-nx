import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, X, Search, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface CompatibilityItem {
  name: string;
  compatible: boolean;
  notes?: string;
}

const compatibilityDatabase: CompatibilityItem[] = [
  { name: 'ETS5', compatible: true, notes: 'Version recommandée' },
  { name: 'ETS6', compatible: true, notes: 'Entièrement supporté' },
  { name: 'Crestron', compatible: true },
  { name: 'Control4', compatible: true },
  { name: 'Loxone', compatible: false, notes: 'Non compatible actuellement' },
  { name: 'Sonos', compatible: true },
  { name: 'Philips Hue', compatible: true },
  { name: 'Node-RED', compatible: true, notes: 'Intégration native' },
];

export function CompatibilityChecker() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<CompatibilityItem[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const filtered = compatibilityDatabase.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
    setHasSearched(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0CB14B]/10 to-[#cd2653]/10 rounded-2xl mb-4">
            <Search className="w-8 h-8 text-[#0CB14B]" />
          </div>
          <h3 className="text-2xl lg:text-3xl mb-2">Vérificateur de compatibilité</h3>
          <p className="text-gray-600">Vérifiez si votre équipement est compatible</p>
        </div>

        <div className="flex gap-3 mb-6">
          <Input
            type="text"
            placeholder="Rechercher un produit, marque ou système..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            onClick={handleSearch}
            className="bg-gradient-to-r from-[#0CB14B] to-[#0a9940] hover:from-[#0a9940] hover:to-[#087d33] text-white"
          >
            <Search className="w-4 h-4 mr-2" />
            Vérifier
          </Button>
        </div>

        {hasSearched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {results.length > 0 ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  {results.length} résultat{results.length > 1 ? 's' : ''} trouvé{results.length > 1 ? 's' : ''}
                </p>
                {results.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-4 p-4 rounded-xl border-2 ${
                      item.compatible
                        ? 'border-green-200 bg-green-50/50'
                        : 'border-red-200 bg-red-50/50'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      item.compatible ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {item.compatible ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <X className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4>{item.name}</h4>
                        <Badge className={item.compatible ? 'bg-green-500' : 'bg-red-500'}>
                          {item.compatible ? 'Compatible' : 'Non compatible'}
                        </Badge>
                      </div>
                      {item.notes && (
                        <p className="text-sm text-gray-600">{item.notes}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-2">Aucun résultat trouvé</p>
                <p className="text-sm text-gray-500">
                  Essayez un autre terme de recherche ou contactez notre support pour plus d'informations
                </p>
              </div>
            )}
          </motion.div>
        )}

        {!hasSearched && (
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6">
            <h4 className="mb-4">Produits populaires :</h4>
            <div className="flex flex-wrap gap-2">
              {['ETS5', 'ETS6', 'Crestron', 'Sonos', 'Node-RED'].map((item) => (
                <Button
                  key={item}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm(item);
                    setTimeout(() => handleSearch(), 100);
                  }}
                  className="hover:border-[#0CB14B] hover:text-[#0CB14B]"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
