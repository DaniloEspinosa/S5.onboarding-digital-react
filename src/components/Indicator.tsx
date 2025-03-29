import styled from "styled-components";
import { StyledPProps } from "../types/styledPProps";
import { IndicatorProps } from "../types/indicatorProps";

export const Component = styled.p<StyledPProps>`
  height: 6px;
  width: ${({ $active }) => ($active ? "20px" : "6px")};
  background-color: ${({ $active }) => ($active ? "black" : "lightgray")};
  border-radius: 3px;
  transition: all 0.3s;
  &:hover {
    scale: 1.5;
    background-color: purple;
  }
`;

const Indicator = ({ step, steps, setStep }: IndicatorProps) => {
  const selectorCard = (i: number) => {
    setStep(i);
  };

  return (
    <div className="selector-card">
      {Array.from({ length: steps }).map((_item, index) => (
        <Component
          key={index}
          $active={step === index ? 1 : 0}
          onClick={() => selectorCard(index)}
        />
      ))}
    </div>
  );
};

export default Indicator;
