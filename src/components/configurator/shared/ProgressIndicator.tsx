import { Check } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 relative">
            <div className="flex flex-col items-center">
              {/* Circle indicator */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  index < currentStep
                    ? 'bg-[#0CB14B] border-[#0CB14B] text-white'
                    : index === currentStep
                    ? 'bg-white border-[#0CB14B] text-[#0CB14B]'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              {/* Label */}
              <div className="mt-2 text-center max-w-[120px]">
                <div
                  className={`text-sm ${
                    index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 hidden md:block">
                  {step.description}
                </div>
              </div>
            </div>

            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="absolute top-5 left-[calc(50%+20px)] right-[calc(-50%+20px)] h-0.5 -z-10">
                <div
                  className={`h-full transition-all ${
                    index < currentStep ? 'bg-[#0CB14B]' : 'bg-gray-300'
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
