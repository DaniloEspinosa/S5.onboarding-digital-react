export interface CardButtonsProps {
  step: number;
  steps: number;
  setStep: (step: number) => void;
  prevStep: () => void;
  nextStep: () => void;
}
