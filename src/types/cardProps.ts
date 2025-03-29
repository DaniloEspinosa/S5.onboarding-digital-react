import { Dispatch, SetStateAction } from "react";

export interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  nextStep: () => void;
  prevStep: () => void;
  step: number;
  steps: number;
  setStep: Dispatch<SetStateAction<number>>;
  direction: number;
}
