import { useState } from 'react';
import { Card } from '../../ui/card';
import { Label } from '../../ui/label';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { RoomConfig } from '../hooks/useConfiguratorState';
import { MELJAC_FINISHES, FINISH_CATEGORIES, PLATE_TYPES } from '../constants';
import { ConfigPreview } from '../shared/ConfigPreview';
import { PreviewControls } from '../shared/PreviewControls';
import { Palette, Frame, Wrench, Eye } from 'lucide-react';

interface Step4Props {
  activeRoom: RoomConfig;
  onUpdate: (updates: Partial<RoomConfig>) => void;
}

export function Step4_Finish({ activeRoom, onUpdate }: Step4Props) {
  const [showTech, setShowTech] = useState(true);
  const [showGuides, setShowGuides] = useState(false);
  
  const finishes = MELJAC_FINISHES[activeRoom.finishCategory];
  const selectedFinishObj = finishes.find((f) => f.code === activeRoom.selectedFinish);
  const plateType = PLATE_TYPES[activeRoom.type];
  const boitierSupportsVis = plateType?.visserie || false;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl mb-2">Finitions et style</h2>
        <p className="text-gray-600">
          Les finitions sont toujours Meljac (même avec boîtier Legrand)
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <div className="space-y-6">
        {/* Finish Category */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <Palette className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label className="text-base">Catégorie de finition</Label>
              <p className="text-sm text-gray-500 mb-4">
                Sélectionnez la famille de matériau
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {FINISH_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      onUpdate({
                        finishCategory: cat.id as any,
                        selectedFinish: MELJAC_FINISHES[cat.id as keyof typeof MELJAC_FINISHES][0].code
                      })
                    }
                    className={`p-4 rounded-lg border-2 transition-all ${
                      activeRoom.finishCategory === cat.id
                        ? 'border-[#0CB14B] bg-[#0CB14B]/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{cat.icon}</div>
                    <div className="font-semibold text-sm">{cat.name}</div>
                    {activeRoom.finishCategory === cat.id && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-[#0CB14B] text-white">
                          ✓
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Specific Finish */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-lg border-2 border-gray-300 shadow-sm"
              style={{ backgroundColor: selectedFinishObj?.color || '#ccc' }}
            />
            <div className="flex-1">
              <Label className="text-base">Finition spécifique</Label>
              <p className="text-sm text-gray-500 mb-4">
                Choisissez parmi les finitions {FINISH_CATEGORIES.find(c => c.id === activeRoom.finishCategory)?.name}
              </p>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                {finishes.map((finish) => (
                  <button
                    key={finish.code}
                    onClick={() => onUpdate({ selectedFinish: finish.code })}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                      activeRoom.selectedFinish === finish.code
                        ? 'border-[#0CB14B] bg-[#0CB14B]/5 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-md border-2 border-gray-300 shadow-sm flex-shrink-0"
                      style={{ backgroundColor: finish.color }}
                    />
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm">{finish.name}</div>
                      <div className="text-xs text-gray-500">{finish.code}</div>
                    </div>
                    {activeRoom.selectedFinish === finish.code && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0CB14B] text-white">
                          ✓
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Edge Style */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <Frame className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label className="text-base">Style de bord</Label>
              <p className="text-sm text-gray-500 mb-4">
                Bord plat ou arrondi
              </p>
              <RadioGroup
                value={activeRoom.bord}
                onValueChange={(val) => onUpdate({ bord: val })}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Plat" id="plat" />
                  <Label htmlFor="plat" className="cursor-pointer">
                    Plat
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Arrondi" id="arrondi" />
                  <Label htmlFor="arrondi" className="cursor-pointer">
                    Arrondi
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>

        {/* Visserie */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <Wrench className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label className="text-base">Fixation</Label>
              <p className="text-sm text-gray-500 mb-4">
                {boitierSupportsVis
                  ? 'Avec ou sans vis apparentes'
                  : 'Les boîtiers US utilisent uniquement la fixation magnétique'}
              </p>
              <RadioGroup
                value={activeRoom.visserie}
                onValueChange={(val) => onUpdate({ visserie: val as 'vissee' | 'magnet' })}
                className="flex gap-4"
                disabled={!boitierSupportsVis}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="vissee"
                    id="vissee"
                    disabled={!boitierSupportsVis}
                  />
                  <Label
                    htmlFor="vissee"
                    className={`cursor-pointer ${!boitierSupportsVis ? 'opacity-50' : ''}`}
                  >
                    Avec vis
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="magnet" id="magnet" />
                  <Label htmlFor="magnet" className="cursor-pointer">
                    Sans vis
                  </Label>
                </div>
              </RadioGroup>
              {!boitierSupportsVis && (
                <p className="text-xs text-amber-600 mt-2">
                  ⚠️ Le boîtier US ne supporte que la fixation magnétique
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Summary */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
          <div className="flex items-center gap-3 mb-3">
            <Palette className="w-5 h-5 text-purple-600" />
            <span className="font-semibold">Récapitulatif des finitions</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Finition</p>
              <p className="font-semibold">{selectedFinishObj?.name}</p>
              <p className="text-xs text-gray-400">{selectedFinishObj?.code}</p>
            </div>
            <div>
              <p className="text-gray-500">Bord</p>
              <p className="font-semibold">{activeRoom.bord}</p>
            </div>
            <div>
              <p className="text-gray-500">Fixation</p>
              <p className="font-semibold">
                {activeRoom.visserie === 'vissee' ? 'Avec vis' : 'Sans vis'}
              </p>
            </div>
          </div>
        </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                💡 <strong>Conseil :</strong> Les teintes chaudes (Bronze, Laiton, Cuivre) apportent une esthétique classique et chaleureuse. 
                Les teintes froides (Nickel, Chrome, Argent) conviennent aux intérieurs modernes et épurés. 
                Les teintes spéciales offrent des finitions noires élégantes pour un style contemporain.
              </p>
            </div>
          </div>

          {/* Live Preview Panel */}
          <div className="space-y-4 lg:sticky lg:top-4">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-100">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Aperçu en temps réel</h3>
                  <p className="text-sm text-gray-500">
                    Voyez votre finition instantanément
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
