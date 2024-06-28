import { FC } from "react";

import IconSvgCart from "@/assets/icon-cart.svg";

import Switch from "../Switch";
import {
  Logo,
  Span,
  StyledHeader,
  StyledIconCart,
  StyledLink,
  StyledNav,
} from "./styled";

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo to="/">
        <Span>Modsen S</Span>HOPPE
      </Logo>

      <StyledNav>
        <StyledLink to="/shop">Shop</StyledLink>
        <Switch />
        <StyledIconCart to="/cart">
          <IconSvgCart />
        </StyledIconCart>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
