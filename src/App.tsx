import { useState } from "react";
import Card from "./components/Card";
import { Data } from "./interfaces/Types";

const tutorialData: Data = [
  {
    title: "Dedica moltes hores",
    description:
      "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora rapidament.",
    bgColor: "#4da2a9",
    image: "/time_managment.svg",
  },
  {
    title: "Programa projectes propis",
    description:
      "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
    bgColor: "#d3d4d9",
    image: "/programming.svg",
  },
  {
    title: "Procura descansar",
    description:
      "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    bgColor: "#ffd167",
    image: "/meditation.svg",
  },
];

function App() {
  const [step, setStep] = useState(0);

  const currentCardData = tutorialData[step];

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Card
        {...currentCardData}
        nextStep={nextStep}
        step={step}
        prevStep={prevStep}
        steps={tutorialData.length}
      />
    </>
  );
}

export default App;
