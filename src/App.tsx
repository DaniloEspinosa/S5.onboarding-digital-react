import { useState } from "react";
import Card from "./components/Card";
import { AnimatePresence } from "framer-motion";
import { tutorialData } from "./data/Data";

function App() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentCardData = tutorialData[step];

  const nextStep = () => {
    if (step === tutorialData.length - 2) {
      setDirection(3);
      setStep(step + 1);

      return;
    }
    if (step < tutorialData.length - 1) {
      setDirection(0);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step === 1) {
      setDirection(1);
      setStep(step - 1);

      return;
    }
    if (step > 0) {
      setDirection(2);
      setStep(step - 1);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <Card
          key={step}
          {...currentCardData}
          nextStep={nextStep}
          step={step}
          prevStep={prevStep}
          steps={tutorialData.length}
          setStep={setStep}
          direction={direction}
        />
      </AnimatePresence>
    </>
  );
}

export default App;
