import React, { FC } from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
