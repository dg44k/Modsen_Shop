import React from "react";
import IconSvgCart from "@/assets/icon-cart.svg";
import { Logo, Span, StyledHeader, StyledLink } from "./styled";
import Switch from "../Switch/Switch";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo>
        <Span>Modsen S</Span>HOPPE
      </Logo>

      <nav className="nav">
        <StyledLink href="#" className="nav__shop">
          Shop
        </StyledLink>
        {/* <input type="checkbox" className="nav__switch" /> */}
        <Switch checked={true} />
        <IconSvgCart />
      </nav>
    </StyledHeader>
  );
};

export default Header;
