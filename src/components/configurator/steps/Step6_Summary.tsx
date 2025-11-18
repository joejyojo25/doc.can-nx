import { useState } from 'react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { RoomConfig } from '../hooks/useConfiguratorState';
import { MELJAC_FINISHES, PLATE_TYPES } from '../constants';
import { ConfigPreview } from '../shared/ConfigPreview';
import { Download, Eye, FileText, Package, CheckCircle2, AlertCircle, RotateCcw, Image } from 'lucide-react';

interface Step6Props {
  projectName: string;
  comments: string;
  rooms: RoomConfig[];
  onRestart?: () => void;
}

export function Step6_Summary({ projectName, comments, rooms, onRestart }: Step6Props) {
  const [isGenerating, setIsGenerating] = useState(false);

  const allFinishes = [
    ...MELJAC_FINISHES.chaudes,
    ...MELJAC_FINISHES.froides,
    ...MELJAC_FINISHES.speciales
  ];

  const totalPlates = rooms.reduce((sum, room) => sum + room.quantity, 0);
  const totalButtons = rooms.reduce((sum, room) => {
    const roomButtons = Object.values(room.btnsPerGang).reduce((s, b) => s + b, 0);
    return sum + roomButtons * room.quantity;
  }, 0);

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      // Import jsPDF dynamically
      const { default: jsPDF } = await import('jspdf');
      
      alert('Génération PDF à implémenter avec la logique complète du canvas');
      // TODO: Implémenter la génération PDF complète
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Erreur lors de la génération du PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreview = () => {
    alert('Aperçu PDF à implémenter');
    // TODO: Implémenter l'aperçu
  };

  const isConfigComplete = () => {
    return rooms.every((room) => {
      const hasFinish = room.selectedFinish && room.finishCategory;
      const plateType = PLATE_TYPES[room.type];
      const hasHardware = room.type && (
        plateType?.supportsGangs ? (room.gangs || 0) > 0 : true
      );
      return hasFinish && hasHardware;
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl mb-2">Récapitulatif et export</h2>
        <p className="text-gray-600">Vérifiez votre configuration et générez le PDF</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Project Info */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <FileText className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-3">Informations du projet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Nom du projet</p>
                  <p className="font-semibold">{projectName || 'Sans nom'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Nombre de pièces</p>
                  <p className="font-semibold">{rooms.length}</p>
                </div>
              </div>
              {comments && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Commentaires</p>
                  <p className="text-sm">{comments}</p>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Statistics */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <Package className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-4">Statistiques globales</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-[#0CB14B]/10 to-blue-50 rounded-lg">
                  <p className="text-3xl mb-1">{rooms.length}</p>
                  <p className="text-sm text-gray-600">Pièce{rooms.length > 1 ? 's' : ''}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <p className="text-3xl mb-1">{totalPlates}</p>
                  <p className="text-sm text-gray-600">Plaque{totalPlates > 1 ? 's' : ''}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <p className="text-3xl mb-1">{totalButtons}</p>
                  <p className="text-sm text-gray-600">Bouton{totalButtons > 1 ? 's' : ''}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
                  <p className="text-3xl mb-1">
                    {new Set(rooms.map((r) => r.selectedFinish)).size}
                  </p>
                  <p className="text-sm text-gray-600">Finition{new Set(rooms.map((r) => r.selectedFinish)).size > 1 ? 's' : ''}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Rooms Detail */}
        <Card className="p-6">
          <h3 className="text-lg mb-4">Détail par pièce</h3>
          <div className="space-y-4">
            {rooms.map((room, index) => {
              const totalBtns = Object.values(room.btnsPerGang).reduce((s, b) => s + b, 0);
              const finishObj = allFinishes.find((f) => f.code === room.selectedFinish);
              const engravingsCount = Object.values(room.engravings).filter((v) => v?.trim())
                .length;

              return (
                <div
                  key={room.id}
                  className="p-4 border rounded-lg hover:border-[#0CB14B] transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{room.roomName}</h4>
                      <p className="text-sm text-gray-500">
                        {room.quantity} unité{room.quantity > 1 ? 's' : ''}
                      </p>
                    </div>
                    <Badge variant="outline">{index + 1}</Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">Type</p>
                      <p className="font-medium">{PLATE_TYPES[room.type]?.name || room.type}</p>
                    </div>
                    {PLATE_TYPES[room.type]?.supportsGangs && (
                      <div>
                        <p className="text-gray-500">Modules</p>
                        <p className="font-medium">{room.gangs || 0}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-gray-500">Boutons</p>
                      <p className="font-medium">{totalBtns}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Quantité</p>
                      <p className="font-medium">{room.quantity}x</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">Gravures</p>
                      <p className="font-medium">
                        {engravingsCount}/{totalBtns}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded border-2 border-gray-300"
                        style={{ backgroundColor: finishObj?.color || '#ccc' }}
                      />
                      <span>{finishObj?.name || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Bord:</span>{' '}
                      <span className="font-medium">{room.bord}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Fixation:</span>{' '}
                      <span className="font-medium">
                        {room.visserie === 'vissee' ? 'Avec vis' : 'Sans vis'}
                      </span>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center gap-2 mb-3">
                      <Image className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Aperçu</span>
                    </div>
                    <div className="flex justify-center bg-gray-50 rounded-lg p-4">
                      <ConfigPreview room={room} width={400} height={280} showTech={false} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Validation Status */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-lg ${
                isConfigComplete() ? 'bg-green-100' : 'bg-amber-100'
              }`}
            >
              {isConfigComplete() ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : (
                <AlertCircle className="w-6 h-6 text-amber-600" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg mb-2">
                {isConfigComplete() ? 'Configuration complète' : 'Configuration incomplète'}
              </h3>
              <p className="text-sm text-gray-600">
                {isConfigComplete()
                  ? 'Votre configuration est prête à être exportée en PDF.'
                  : 'Certaines informations sont manquantes. Vérifiez les étapes précédentes.'}
              </p>
            </div>
          </div>
        </Card>

        {/* Export Actions */}
        <Card className="p-6 bg-gradient-to-br from-[#0CB14B]/5 to-blue-50">
          <h3 className="text-lg mb-4 text-center">Exporter votre configuration</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handlePreview}
              variant="outline"
              size="lg"
              className="gap-2"
              disabled={!isConfigComplete() || isGenerating}
            >
              <Eye className="w-5 h-5" />
              Aperçu PDF
            </Button>
            <Button
              onClick={handleGeneratePDF}
              size="lg"
              className="gap-2 bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
              disabled={!isConfigComplete() || isGenerating}
            >
              <Download className="w-5 h-5" />
              {isGenerating ? 'Génération...' : 'Télécharger PDF'}
            </Button>
          </div>
          {!isConfigComplete() && (
            <p className="text-center text-sm text-amber-600 mt-4">
              ⚠️ Complétez toutes les étapes pour activer l'export PDF
            </p>
          )}
          {onRestart && (
            <div className="mt-6 pt-6 border-t">
              <Button
                onClick={onRestart}
                variant="outline"
                size="sm"
                className="gap-2 mx-auto block"
              >
                <RotateCcw className="w-4 h-4" />
                Nouvelle configuration
              </Button>
            </div>
          )}
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              💡 <strong>Conseil :</strong> Le PDF généré inclura toutes vos configurations avec des 
              aperçus visuels de chaque plaque, les quantités, et toutes les spécifications techniques. 
              Idéal pour vos commandes et devis.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-900">
              ✨ <strong>Nouveau :</strong> Ce wizard Version 2 vous guide étape par étape. 
              Vous pouvez toujours basculer vers la Version 1 pour une vue d'ensemble complète 
              en utilisant le sélecteur en haut de la page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
