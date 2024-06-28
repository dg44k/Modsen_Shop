import { FC } from "react";

import IconSvgCart from "@/assets/icon-cart.svg";
import { ROUTES } from "@/constants/routes";

import Switch from "../Switch";
import * as StyledComponents from "./styled";

const Header: FC = () => {
  return (
    <StyledComponents.StyledHeader>
      <StyledComponents.Logo to="/">
        <StyledComponents.Span>Modsen S</StyledComponents.Span>HOPPE
      </StyledComponents.Logo>

      <StyledComponents.StyledNav>
        <StyledComponents.StyledLink to={ROUTES.shop}>
          Shop
        </StyledComponents.StyledLink>
        <Switch />
        <StyledComponents.StyledIconCart to={ROUTES.cart}>
          <IconSvgCart />
        </StyledComponents.StyledIconCart>
      </StyledComponents.StyledNav>
    </StyledComponents.StyledHeader>
  );
};

export default Header;
