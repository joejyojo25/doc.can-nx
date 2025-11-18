import { useState } from 'react';
import { Card } from '../../ui/card';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { RoomConfig } from '../hooks/useConfiguratorState';
import { MAX_CHARS } from '../constants';
import { ConfigPreview } from '../shared/ConfigPreview';
import { PreviewControls } from '../shared/PreviewControls';
import { Type, AlignVerticalSpaceAround, CaseSensitive, Eye } from 'lucide-react';

interface Step5Props {
  activeRoom: RoomConfig;
  onUpdate: (updates: Partial<RoomConfig>) => void;
}

export function Step5_Engraving({ activeRoom, onUpdate }: Step5Props) {
  const [showTech, setShowTech] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  
  const totalButtons = Object.values(activeRoom.btnsPerGang).reduce((sum, b) => sum + b, 0);

  const handleEngravingChange = (btnKey: string, value: string) => {
    const maxChars = activeRoom.numLines === 2 ? MAX_CHARS * 2 : MAX_CHARS;
    const newEngravings = { ...activeRoom.engravings, [btnKey]: value.slice(0, maxChars) };
    onUpdate({ engravings: newEngravings });
  };

  const getButtonKeys = () => {
    const keys: string[] = [];
    for (let gang = 1; gang <= activeRoom.gangs; gang++) {
      const btnsInGang = activeRoom.btnsPerGang[gang] || 0;
      for (let btn = 1; btn <= btnsInGang; btn++) {
        keys.push(`${gang}-${btn}`);
      }
    }
    return keys;
  };

  const buttonKeys = getButtonKeys();
  const filledEngravings = buttonKeys.filter((key) => activeRoom.engravings[key]?.trim()).length;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl mb-2">Gravures personnalisées</h2>
        <p className="text-gray-600">
          Ajoutez des textes personnalisés pour chaque bouton
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <div className="space-y-6">
        {/* Text Position */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <AlignVerticalSpaceAround className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label className="text-base">Position du texte</Label>
              <p className="text-sm text-gray-500 mb-4">
                Au-dessus ou en-dessous du bouton
              </p>
              <RadioGroup
                value={activeRoom.textPosition}
                onValueChange={(val) => onUpdate({ textPosition: val as 'above' | 'below' })}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="above" id="above" />
                  <Label htmlFor="above" className="cursor-pointer">
                    Au-dessus
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="below" id="below" />
                  <Label htmlFor="below" className="cursor-pointer">
                    En-dessous
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>

        {/* Number of Lines */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <Type className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label className="text-base">Nombre de lignes</Label>
              <p className="text-sm text-gray-500 mb-4">
                Une ou deux lignes de texte par bouton
              </p>
              <RadioGroup
                value={String(activeRoom.numLines)}
                onValueChange={(val) => onUpdate({ numLines: parseInt(val) as 1 | 2 })}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="line1" />
                  <Label htmlFor="line1" className="cursor-pointer">
                    1 ligne
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="line2" />
                  <Label htmlFor="line2" className="cursor-pointer">
                    2 lignes
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>

        {/* Text Case */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <CaseSensitive className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label className="text-base">Casse du texte</Label>
              <p className="text-sm text-gray-500 mb-4">
                Majuscules, minuscules ou mixte
              </p>
              <RadioGroup
                value={activeRoom.textCase}
                onValueChange={(val) =>
                  onUpdate({ textCase: val as 'uppercase' | 'lowercase' | 'mixed' })
                }
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="uppercase" id="uppercase" />
                  <Label htmlFor="uppercase" className="cursor-pointer">
                    MAJUSCULES
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lowercase" id="lowercase" />
                  <Label htmlFor="lowercase" className="cursor-pointer">
                    minuscules
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mixed" id="mixed" />
                  <Label htmlFor="mixed" className="cursor-pointer">
                    Mixte
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>

        {/* Engraving Inputs */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <Type className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label className="text-base">Textes des boutons</Label>
              <p className="text-sm text-gray-500 mb-4">
                {activeRoom.numLines === 2
                  ? `Maximum ${MAX_CHARS * 2} caractères (${MAX_CHARS} par ligne)`
                  : `Maximum ${MAX_CHARS} caractères`}{' '}
                par bouton ({filledEngravings}/{totalButtons} rempli
                {filledEngravings > 1 ? 's' : ''})
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2">
                {buttonKeys.map((key) => {
                  const [gang, btn] = key.split('-').map(Number);
                  const maxChars = activeRoom.numLines === 2 ? MAX_CHARS * 2 : MAX_CHARS;
                  return (
                    <div key={key} className="space-y-2">
                      <Label htmlFor={`engraving-${key}`} className="text-sm">
                        Module {gang} - Bouton {btn}
                        {activeRoom.numLines === 2 && (
                          <span className="ml-2 text-xs text-gray-400">(2 lignes)</span>
                        )}
                      </Label>
                      <div className="relative">
                        <Input
                          id={`engraving-${key}`}
                          placeholder={`Ex: Lumière ${btn}`}
                          value={activeRoom.engravings[key] || ''}
                          onChange={(e) => handleEngravingChange(key, e.target.value)}
                          maxLength={maxChars}
                          className="pr-12"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                          {(activeRoom.engravings[key] || '').length}/{maxChars}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Fill */}
        <Card className="p-4 bg-gray-50">
          <div className="text-sm">
            <p className="font-semibold mb-2">Raccourcis utiles</p>
            <div className="flex flex-wrap gap-2">
              {['Lumière', 'Volet', 'Chauffage', 'Scène', 'Mode'].map((text) => (
                <button
                  key={text}
                  onClick={() => {
                    const newEngravings = { ...activeRoom.engravings };
                    buttonKeys.forEach((key, index) => {
                      if (!newEngravings[key]?.trim()) {
                        newEngravings[key] = `${text} ${index + 1}`;
                      }
                    });
                    onUpdate({ engravings: newEngravings });
                  }}
                  className="px-3 py-1 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-xs transition-colors"
                >
                  Remplir avec "{text}"
                </button>
              ))}
              <button
                onClick={() => onUpdate({ engravings: {} })}
                className="px-3 py-1 rounded-md border border-red-300 bg-white hover:bg-red-50 text-xs text-red-600 transition-colors"
              >
                Effacer tout
              </button>
            </div>
          </div>
        </Card>

        {/* Summary */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
          <div className="flex items-center gap-3 mb-3">
            <Type className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold">Récapitulatif des gravures</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Position</p>
              <p className="font-semibold">
                {activeRoom.textPosition === 'above' ? 'Au-dessus' : 'En-dessous'}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Lignes</p>
              <p className="font-semibold">{activeRoom.numLines}</p>
            </div>
            <div>
              <p className="text-gray-500">Casse</p>
              <p className="font-semibold">
                {activeRoom.textCase === 'uppercase'
                  ? 'MAJUSCULES'
                  : activeRoom.textCase === 'lowercase'
                  ? 'minuscules'
                  : 'Mixte'}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Boutons gravés</p>
              <p className="font-semibold">
                {filledEngravings}/{totalButtons}
              </p>
            </div>
          </div>
        </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                💡 <strong>Conseil :</strong> Les gravures sont optionnelles. Vous pouvez laisser des 
                boutons sans texte si vous préférez des plaques minimalistes. Les textes courts (3-6 caractères) 
                sont les plus lisibles.
              </p>
            </div>
          </div>

          {/* Live Preview Panel */}
          <div className="space-y-4 lg:sticky lg:top-4">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-100">
                  <Eye className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Aperçu en temps réel</h3>
                  <p className="text-sm text-gray-500">
                    Visualisez vos gravures
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
