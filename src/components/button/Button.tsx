import React from "react";
import { Button as BaseButton } from "../ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ onClick, ...props }: ButtonProps) => {
  return <BaseButton onClick={onClick} {...props} />;
};

export default Button;
