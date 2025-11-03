import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

interface ConfigOption {
  id: string;
  label: string;
  description: string;
  recommended?: boolean;
}

interface ConfigStep {
  id: string;
  title: string;
  question: string;
  options: ConfigOption[];
}

const configuratorSteps: ConfigStep[] = [
  {
    id: 'usage',
    title: 'Usage',
    question: 'Quel est votre usage principal ?',
    options: [
      { id: 'residential', label: 'Résidentiel', description: 'Pour maison ou appartement' },
      { id: 'commercial', label: 'Commercial/Tertiaire', description: 'Pour bureaux, hôtels, etc.', recommended: true },
      { id: 'industrial', label: 'Industriel', description: 'Pour usines, entrepôts' },
    ]
  },
  {
    id: 'scale',
    title: 'Échelle',
    question: 'Quelle est la taille de votre installation ?',
    options: [
      { id: 'small', label: 'Petit (<500 points)', description: 'Installation basique' },
      { id: 'medium', label: 'Moyen (500-2000 points)', description: 'Installation standard', recommended: true },
      { id: 'large', label: 'Grand (>2000 points)', description: 'Installation complexe' },
    ]
  },
  {
    id: 'features',
    title: 'Fonctionnalités',
    question: 'Quelles fonctionnalités sont essentielles ?',
    options: [
      { id: 'basic', label: 'Basique', description: 'Contrôle distant uniquement' },
      { id: 'advanced', label: 'Avancé', description: 'Monitoring et contrôle', recommended: true },
      { id: 'pro', label: 'Professionnel', description: 'Toutes fonctionnalités + intégrations' },
    ]
  }
];

export function ProductConfigurator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelection = (stepId: string, optionId: string) => {
    setSelections(prev => ({ ...prev, [stepId]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < configuratorSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({});
    setShowResult(false);
  };

  const step = configuratorSteps[currentStep];
  const selectedOption = selections[step?.id];

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8 lg:p-10">
        {!showResult ? (
          <>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Étape {currentStep + 1} sur {configuratorSteps.length}
                </span>
                <span className="text-sm text-gray-600">
                  {Math.round(((currentStep + 1) / configuratorSteps.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0CB14B] to-[#0a9940]"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / configuratorSteps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question */}
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl mb-2">{step.question}</h3>
              <p className="text-gray-600 mb-6">{step.title}</p>

              <RadioGroup value={selectedOption} onValueChange={(value) => handleSelection(step.id, value)}>
                <div className="space-y-3">
                  {step.options.map((option) => (
                    <motion.div
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Label
                        htmlFor={option.id}
                        className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedOption === option.id
                            ? 'border-[#0CB14B] bg-[#0CB14B]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span>{option.label}</span>
                            {option.recommended && (
                              <Badge className="bg-[#0CB14B] text-white text-xs">Recommandé</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                        {selectedOption === option.id && (
                          <Check className="w-5 h-5 text-[#0CB14B]" />
                        )}
                      </Label>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                Précédent
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedOption}
                className="bg-gradient-to-r from-[#0CB14B] to-[#0a9940] hover:from-[#0a9940] hover:to-[#087d33] text-white"
              >
                {currentStep === configuratorSteps.length - 1 ? 'Voir la recommandation' : 'Suivant'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0CB14B] to-[#0a9940] rounded-full mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl mb-2">Configuration recommandée</h3>
              <p className="text-gray-600">Basée sur vos réponses, nous vous recommandons :</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-6">
              <h4 className="text-xl mb-4">Plan recommandé : <strong>Pro</strong></h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                  <span>Support complet pour installations {selections.scale === 'large' ? 'grandes' : 'moyennes'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                  <span>Monitoring avancé et alertes en temps réel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                  <span>Intégrations tierces illimitées</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0CB14B] mt-0.5 flex-shrink-0" />
                  <span>Support technique prioritaire</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleReset}
                className="flex-1"
              >
                Recommencer
              </Button>
              <Button
                className="flex-1 bg-gradient-to-r from-[#0CB14B] to-[#0a9940] hover:from-[#0a9940] hover:to-[#087d33] text-white"
                asChild
              >
                <a href="https://can-nx.shop" target="_blank" rel="noopener noreferrer">
                  Obtenir un devis
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </Card>
    </div>
  );
}
