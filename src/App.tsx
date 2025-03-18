import { useState } from "react";
import Card from "./components/Card";

const tutorialData = [
  {
    title: "Dedica moltes hores",
    description:
      "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora rapidament.",
    bgColor: "cyan",
    image: "",
  },
  {
    title: "Programa projectes propis",
    description:
      "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
    bgColor: "gray",
    image: "",
  },
  {
    title: "Procura descansar",
    description:
      "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    bgColor: "yellow",
    image: "",
  },
];

function App() {
  const [step, setStep] = useState(0);

  const currentCardData = tutorialData[step]

  return (
    <>
      <Card {...currentCardData} />
    </>
  );
}

export default App;
