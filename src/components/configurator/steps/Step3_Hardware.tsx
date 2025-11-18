import { useState } from 'react';
import { Card } from '../../ui/card';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Input } from '../../ui/input';
import { RoomConfig } from '../hooks/useConfiguratorState';
import { PLATE_TYPES, MAX_MODULES, PlateType } from '../constants';
import { ConfigPreview } from '../shared/ConfigPreview';
import { PreviewControls } from '../shared/PreviewControls';
import { Box, Grid3x3, LayoutGrid, Eye, Tag } from 'lucide-react';

interface Step3Props {
  activeRoom: RoomConfig;
  onUpdate: (updates: Partial<RoomConfig>) => void;
}

export function Step3_Hardware({ activeRoom, onUpdate }: Step3Props) {
  const [showTech, setShowTech] = useState(true);
  const [showGuides, setShowGuides] = useState(false);

  const handleGangsChange = (newGangs: number) => {
    const newBtnsPerGang: { [key: number]: number } = {};
    for (let i = 1; i <= newGangs; i++) {
      newBtnsPerGang[i] = activeRoom.btnsPerGang[i] || 2;
    }
    onUpdate({ gangs: newGangs, btnsPerGang: newBtnsPerGang });
  };

  const handleButtonsChange = (gang: number, value: number) => {
    const newBtnsPerGang = { ...activeRoom.btnsPerGang, [gang]: value };
    onUpdate({ btnsPerGang: newBtnsPerGang });
  };

  const totalButtons = Object.values(activeRoom.btnsPerGang).reduce((sum, b) => sum + b, 0);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl mb-2">Configuration matérielle</h2>
        <p className="text-gray-600">
          Sélectionnez le type de boîtier et configurez les modules
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <div className="space-y-6">
        {/* Type de plaque Selection */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <Box className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <Label className="text-base">Type de plaque</Label>
                <p className="text-sm text-gray-500 mb-3">
                  Choisissez votre type de boîtier
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {(Object.entries(PLATE_TYPES) as [PlateType, typeof PLATE_TYPES[PlateType]][]).map(([key, info]) => (
                    <button
                      key={key}
                      onClick={() => onUpdate({ type: key })}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        activeRoom.type === key
                          ? 'border-[#0CB14B] bg-[#0CB14B]/5 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-xl mb-2">
                          {key === 'eu' ? '🇪🇺' : 
                           key === 'uk' ? '🇬🇧' : 
                           key === 'us' ? '🇺🇸' : 
                           '⚡'}
                        </div>
                        <div className="font-semibold text-sm mb-1">{info.name}</div>
                        <div className="text-xs text-gray-500">
                          {'wPerGang' in info ? `${info.wPerGang}×${info.h}mm` : `${info.w}×${info.h}mm`}
                        </div>
                        {activeRoom.type === key && (
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-[#0CB14B] text-white">
                              ✓
                            </span>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Gangs Configuration - Only for Standard types */}
        {PLATE_TYPES[activeRoom.type]?.supportsGangs && (
          <>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0CB14B]/10">
                  <Grid3x3 className="w-6 h-6 text-[#0CB14B]" />
                </div>
                <div className="flex-1">
                  <Label className="text-base">Nombre de modules (gangs)</Label>
                  <p className="text-sm text-gray-500 mb-3">
                    Jusqu'à {MAX_MODULES} modules par plaque
                  </p>
                  <Select
                    value={String(activeRoom.gangs)}
                    onValueChange={(val) => handleGangsChange(parseInt(val))}
                  >
                    <SelectTrigger className="max-w-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} module{n > 1 ? 's' : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* Buttons per Gang */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0CB14B]/10">
                  <LayoutGrid className="w-6 h-6 text-[#0CB14B]" />
                </div>
                <div className="flex-1">
                  <Label className="text-base">Boutons par module</Label>
                  <p className="text-sm text-gray-500 mb-4">
                    Configurez le nombre de boutons pour chaque module
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: activeRoom.gangs || 2 }, (_, i) => i + 1).map((gang) => (
                      <div key={gang} className="flex items-center gap-3">
                        <Label className="min-w-[80px]">Module {gang}</Label>
                        <Select
                          value={String(activeRoom.btnsPerGang?.[gang] || 2)}
                          onValueChange={(val) => handleButtonsChange(gang, parseInt(val))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                              <SelectItem key={n} value={String(n)}>
                                {n} bouton{n > 1 ? 's' : ''}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </>
        )}



        {/* Summary */}
        <div className="bg-gradient-to-r from-[#0CB14B]/10 to-blue-50 rounded-lg p-4 border border-[#0CB14B]/20">
          <div className="flex items-center gap-3 mb-3">
            <Box className="w-5 h-5 text-[#0CB14B]" />
            <span className="font-semibold">Récapitulatif matériel</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Type</p>
              <p className="font-semibold">{PLATE_TYPES[activeRoom.type]?.name || activeRoom.type}</p>
            </div>
            {PLATE_TYPES[activeRoom.type]?.supportsGangs && (
              <>
                <div>
                  <p className="text-gray-500">Modules</p>
                  <p className="font-semibold">{activeRoom.gangs || 0}</p>
                </div>
                <div>
                  <p className="text-gray-500">Total boutons</p>
                  <p className="font-semibold">{totalButtons}</p>
                </div>
              </>
            )}
            {!PLATE_TYPES[activeRoom.type]?.supportsGangs && 'modules' in PLATE_TYPES[activeRoom.type] && (
              <div>
                <p className="text-gray-500">Configuration</p>
                <p className="font-semibold">
                  {PLATE_TYPES[activeRoom.type].modules} module(s), 
                  {PLATE_TYPES[activeRoom.type].buttonsPerModule} boutons max
                </p>
              </div>
            )}
          </div>
        </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                💡 <strong>Conseil :</strong> Les types Standard (EU/UK/US) utilisent le système de gangs modulaire. 
                Les plaques Legrand ont des dimensions fixes : 1 Module (80×80mm, 4 boutons max) ou 2 Modules (80×154mm, 8 boutons max).
              </p>
            </div>
          </div>

          {/* Live Preview Panel */}
          <div className="space-y-4 lg:sticky lg:top-4">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Aperçu en temps réel</h3>
                  <p className="text-sm text-gray-500">
                    Visualisez vos modifications instantanément
                  </p>
                </div>
              </div>
              <PreviewControls
                showTech={showTech}
                showGuides={showGuides}
                onShowTechChange={setShowTech}
                onShowGuidesChange={setShowGuides}
              />
              <div className="flex justify-center">
                <ConfigPreview
                  room={activeRoom}
                  width={500}
                  height={400}
                  showTech={showTech}
                  showGuides={showGuides}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
