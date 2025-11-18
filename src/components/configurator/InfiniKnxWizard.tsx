import { useConfiguratorState } from './hooks/useConfiguratorState';
import { ProgressIndicator } from './shared/ProgressIndicator';
import { StepNavigation } from './shared/StepNavigation';
import { RoomSelector } from './shared/RoomSelector';
import { Step1_ProjectInfo } from './steps/Step1_ProjectInfo';
import { Step2_RoomSetup } from './steps/Step2_RoomSetup';
import { Step3_Hardware } from './steps/Step3_Hardware';
import { Step4_Finish } from './steps/Step4_Finish';
import { Step5_Engraving } from './steps/Step5_Engraving';
import { Step6_Summary } from './steps/Step6_Summary';
import { Card } from '../ui/card';

const STEPS = [
  {
    title: 'Projet',
    description: 'Informations générales'
  },
  {
    title: 'Pièces',
    description: 'Configuration des espaces'
  },
  {
    title: 'Matériel',
    description: 'Boîtiers et modules'
  },
  {
    title: 'Finitions',
    description: 'Meljac et style'
  },
  {
    title: 'Gravures',
    description: 'Textes personnalisés'
  },
  {
    title: 'Récapitulatif',
    description: 'Validation et export'
  }
];

export function InfiniKnxWizard() {
  const {
    projectName,
    comments,
    rooms,
    activeRoom,
    activeRoomId,
    currentStep,
    updateProjectInfo,
    setCurrentStep,
    addRoom,
    deleteRoom,
    updateRoom,
    updateActiveRoom,
    setActiveRoom
  } = useConfiguratorState();

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: // Project info - no validation required
        return true;
      case 1: // Room setup - at least one room
        return rooms.length > 0;
      default:
        return true;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Card className="p-8">
        <ProgressIndicator steps={STEPS} currentStep={currentStep} />

        <div className="min-h-[500px]">
          {currentStep === 0 && (
            <Step1_ProjectInfo
              projectName={projectName}
              comments={comments}
              onUpdate={updateProjectInfo}
            />
          )}

          {currentStep === 1 && (
            <Step2_RoomSetup
              rooms={rooms}
              activeRoomId={activeRoomId}
              onAddRoom={addRoom}
              onDeleteRoom={deleteRoom}
              onUpdateRoom={updateRoom}
              onSetActiveRoom={setActiveRoom}
            />
          )}

          {currentStep === 2 && (
            <>
              <RoomSelector
                rooms={rooms}
                activeRoomId={activeRoomId}
                onSelectRoom={setActiveRoom}
              />
              <Step3_Hardware activeRoom={activeRoom} onUpdate={updateActiveRoom} />
            </>
          )}

          {currentStep === 3 && (
            <>
              <RoomSelector
                rooms={rooms}
                activeRoomId={activeRoomId}
                onSelectRoom={setActiveRoom}
              />
              <Step4_Finish activeRoom={activeRoom} onUpdate={updateActiveRoom} />
            </>
          )}

          {currentStep === 4 && (
            <>
              <RoomSelector
                rooms={rooms}
                activeRoomId={activeRoomId}
                onSelectRoom={setActiveRoom}
              />
              <Step5_Engraving activeRoom={activeRoom} onUpdate={updateActiveRoom} />
            </>
          )}

          {currentStep === 5 && (
            <Step6_Summary
              projectName={projectName}
              comments={comments}
              rooms={rooms}
              onRestart={() => {
                if (confirm('Êtes-vous sûr de vouloir recommencer ? Toutes les données seront perdues.')) {
                  window.location.reload();
                }
              }}
            />
          )}
        </div>

        <StepNavigation
          currentStep={currentStep}
          totalSteps={STEPS.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          canProceed={canProceed()}
        />
      </Card>
    </div>
  );
}
