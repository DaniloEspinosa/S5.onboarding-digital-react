interface CardProps {
    title: string;
    description: string;
    bgColor: string;
    image: string;
}

const Card = ({title, description}: CardProps) => {
  return (
    <>
    <h2>{title}</h2>
    <p>{description}</p>
    </>
  )
}

export default Card