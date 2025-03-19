interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  nextStep: () => void;
  step: number;
}

const Card = ({
  title,
  description,
  image,
  bgColor,
  step,
  nextStep,
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
          <div className="selector-card">
            <p className={step == 0 ? "card-active" : "card-inactive"}></p>
            <p className={step == 1 ? "card-active" : "card-inactive"}></p>
            <p className={step == 2 ? "card-active" : "card-inactive"}></p>
          </div>
          <button onClick={nextStep}>➔</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
