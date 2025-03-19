export type Data = {
    title: string
    description: string
    bgColor: string
    image: string
}[]

export interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  nextStep: () => void;
  prevStep: () => void;
  step: number;
  steps: number
}

export interface IndicatorProps {
  step: number;
  steps: number;
}

export interface ComponentProps {
  active: boolean;
}