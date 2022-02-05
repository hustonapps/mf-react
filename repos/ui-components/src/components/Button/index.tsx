import React, { FC } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
