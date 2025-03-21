import { Dispatch, SetStateAction } from "react";

export type Data = {
  title: string;
  description: string;
  bgColor: string;
  image: string;
}[];

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

export interface IndicatorProps {
  step: number;
  steps: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export interface ComponentProps {
  $active: number;
}
