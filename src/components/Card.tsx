import { CardProps } from "../interfaces/Types";
import { motion } from "framer-motion";
import Indicator from "./Indicator";

const getInitialX = (direction: number) => {
  if (direction === 0 || direction === 3) return 300;
  if (direction === 1 || direction === 2) return -300;

  return 0;
};


const cardVariants = {
  initial: (direction: number) => ({
    x: getInitialX(direction),
    opacity: 0,
  }),
  animate: { x: 0, opacity: 1 },
  exit: () => ({
    x: 0,
    opacity: 0.5,
  }),
};

const Card = ({
  title,
  description,
  image,
  bgColor,
  step,
  nextStep,
  prevStep,
  steps,
  setStep,
  direction

}: CardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.15 }
      }}
      custom={direction}
      className="card"
    >
      <div className="card-header" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} />
      </div>

      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="card-buttons">
          <Indicator step={step} steps={steps} setStep={setStep} />

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
              style={step === steps - 1 ? { display: "none" } : undefined}
            >
              🡒
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Card;
