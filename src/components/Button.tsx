import { ButtonProps } from "../types/buttonProps";

const Button = ({ className, onClick, style, value }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {value}
    </button>
  );
};

export default Button;
