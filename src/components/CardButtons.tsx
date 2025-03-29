import { CardButtonsProps } from "../types/cardButtonsProps";
import Button from "./Button";
import Indicator from "./Indicator";

const CardButtons = ({ step, steps, setStep, prevStep, nextStep }: CardButtonsProps) => {
  return (
    <div className="card-buttons">
      <Indicator step={step} steps={steps} setStep={setStep} />

      <div className="prev-next-buttons">
        <Button
          className="prev-button"
          onClick={prevStep}
          style={step === 0 ? { display: "none" } : undefined}
          value="&#8678;"
        />
        <Button
          className="next-button"
          onClick={nextStep}
          style={step === steps - 1 ? { display: "none" } : undefined}
          value="&#8680;"
        />
      </div>
    </div>
  );
};

export default CardButtons;
