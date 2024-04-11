import React from "react";
import { Input as BaseInput } from "../ui/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <BaseInput ref={ref} {...props} />;
});

export default Input;
