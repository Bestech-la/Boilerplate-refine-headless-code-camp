/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/shadcn/elements";
import { Step, useStepper, Stepper as ShadcnStepper } from "@src/shadcn/elements/stepper";

interface StepperProps {
  steps: Array<{ label: string, value: JSX.Element }>
  initialStep: number
  label?: string
  storageKey?: string
  orientation?: "horizontal" | "vertical"
}

const StepperContainer: React.FC<StepperProps> = ({ steps, initialStep, label = "ສໍາເລັດແລ້ວ! 🎉", storageKey, orientation = "vertical" }) => {
  return (
    <ShadcnStepper orientation={orientation} initialStep={initialStep} steps={steps}>
      {steps.map((stepProps) => (
        <Step key={stepProps.label} {...stepProps}>
          <div className="w-fit">
            {stepProps.value}
          </div>
        </Step>
      ))}
      <Footer label={label} storageKey={storageKey} />
    </ShadcnStepper>
  );
};

const Footer = ({ label = "ສໍາເລັດແລ້ວ! 🎉", storageKey = "storageKey" }: { label?: string, storageKey?: string }) => {
  const { nextStep, hasCompletedAllSteps, isLastStep, resetSteps } = useStepper();
  const handleButtonRemoveItemStorage = () => {
    localStorage.removeItem(storageKey);
    window.location.reload();
    resetSteps();
  };
  autoClickFinish();
  let button = null;
  if (hasCompletedAllSteps) {
    button = (
      <Button size="sm" onClick={handleButtonRemoveItemStorage}>
        Reset
      </Button>
    );
  } else if (isLastStep) {
    button = (
      <Button size="sm" onClick={nextStep}>
        Finish
      </Button>
    );
  }

  return (
    <>
      {hasCompletedAllSteps && (
        <div className="flex items-center justify-center h-40 border rounded-md bg-secondary text-primary">
          <h1 className="text-xl">{label}</h1>
        </div>
      )}
    </>
  );
};

function autoClickFinish() {
  const { nextStep, isLastStep, hasCompletedAllSteps } = useStepper();
  React.useEffect(() => {
    if (hasCompletedAllSteps && isLastStep) {
      nextStep();
    }
  }, [hasCompletedAllSteps, nextStep]);
}

export default StepperContainer;
