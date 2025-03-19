import { CardProps } from "../interfaces/Types";
import Indicator from "./Indicator";

const Card = ({
  title,
  description,
  image,
  bgColor,
  step,
  nextStep,
  prevStep,
  steps,
}: CardProps) => {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} />
      </div>

      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="card-buttons">
          <Indicator step={step} steps={steps} />

          <div className="prev-next-buttons">
            <button
              className="prev-button"
              onClick={prevStep}
              style={step === 0 ? { display: "none" } : undefined}
            >
              🡐
            </button>
            <button
              className="next-button"
              onClick={nextStep}
              style={step === 2 ? { display: "none" } : undefined}
            >
              🡒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
