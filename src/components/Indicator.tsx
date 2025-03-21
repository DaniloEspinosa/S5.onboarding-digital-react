import styled from "styled-components";
import { ComponentProps, IndicatorProps } from "../interfaces/Types";


export const Component = styled.p<ComponentProps>`
          height: 6px;
          width: ${({ active }) => active ? '20px' : '6px'};
          background-color: ${({ active }) => active ? 'black' : 'lightgray'};
          border-radius: 3px;
        }
`;





const Indicator = ({ step, steps }: IndicatorProps) => {
  return (
    <div className="selector-card">
      {Array.from({ length: steps }).map((_item, index) => (
        <Component key={index} active={step == index}/>

      ))}
    </div>
  );
};

export default Indicator;
