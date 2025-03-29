import { motion } from "framer-motion";
import { CardProps } from "../types/cardProps";
import { cardVariants } from "../utils/motionUtils";
import CardButtons from "./CardButtons";

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
  direction,
}: CardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 29 },
        opacity: { duration: 0.18 },
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

        <CardButtons
          step={step}
          steps={steps}
          setStep={setStep}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      </div>
    </motion.div>
  );
};

export default Card;
