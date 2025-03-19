interface CardProps {
    title: string;
    description: string;
    bgColor: string;
    image: string;
    nextStep: () => void
}

const Card = ({title, description, nextStep}: CardProps) => {
  return (
    <>
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={nextStep}>Next</button>
    </>
  )
}

export default Card