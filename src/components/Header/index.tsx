import React, { FC } from "react";
import IconSvgCart from "@/assets/icon-cart.svg";
import {
  Logo,
  Span,
  StyledHeader,
  StyledIconCart,
  StyledLink,
  StyledNav,
} from "./styled";
import Switch from "../Switch";

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo>
        <Span>Modsen S</Span>HOPPE
      </Logo>

      <StyledNav className="nav">
        <StyledLink href="#" className="nav__shop">
          Shop
        </StyledLink>
        <Switch checked />
        <StyledIconCart>
          <IconSvgCart className="nav__icon-cart" />
        </StyledIconCart>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
