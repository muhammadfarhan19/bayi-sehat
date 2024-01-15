import { FC } from "react";

interface ButtonProps {
  style: string;
  value: string;
}

const Button: FC<ButtonProps> = ({ style, value, ...validation }) => {
  return (
    <button type="submit" className={style}>
      {value}
    </button>
  );
};

export default Button;
