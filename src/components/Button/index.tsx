import { FC } from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled";

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
