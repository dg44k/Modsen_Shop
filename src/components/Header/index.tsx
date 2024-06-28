import { FC } from "react";

import IconSvgCart from "@/assets/icon-cart.svg";
import { ROUTES } from "@/constants/routes";

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
        <StyledLink to={ROUTES.shop}>Shop</StyledLink>
        <Switch />
        <StyledIconCart to={ROUTES.cart}>
          <IconSvgCart />
        </StyledIconCart>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
