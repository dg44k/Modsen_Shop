import React from "react";
import IconSvgCart from "@/assets/icon-cart.svg";
import {
  Logo,
  Span,
  StyledHeader,
  StyledIconCart,
  StyledLink,
  StyledNav,
} from "./styled";
import Switch from "../Switch/Switch";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo>
        <Span>Modsen S</Span>HOPPE
      </Logo>

      <StyledNav className="nav">
        <StyledLink href="#" className="nav__shop">
          Shop
        </StyledLink>
        <Switch checked={true} />
        <StyledIconCart>
          <IconSvgCart className="nav__icon-cart" />
        </StyledIconCart>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
