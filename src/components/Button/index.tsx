import { FC } from "react";

import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
