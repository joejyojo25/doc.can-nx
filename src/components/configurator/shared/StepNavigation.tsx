import { Button } from '../../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  canProceed?: boolean;
}

export function StepNavigation({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext,
  canProceed = true 
}: StepNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-4 pt-6 border-t">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 0}
        className="gap-2"
      >
        <ChevronLeft className="w-4 h-4" />
        Précédent
      </Button>

      <div className="flex gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === currentStep
                ? 'w-8 bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90'
                : i < currentStep
                ? 'w-2 bg-[#0CB14B]/50'
                : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {currentStep < totalSteps - 1 ? (
        <Button
          onClick={onNext}
          disabled={!canProceed}
          className="gap-2 bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white shadow-lg shadow-[#0CB14B]/30"
        >
          Suivant
          <ChevronRight className="w-4 h-4" />
        </Button>
      ) : (
        <div className="w-[100px]" />
      )}
    </div>
  );
}
