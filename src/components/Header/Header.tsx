import React from "react";
import IconSvgCart from "@/assets/icon-cart.svg";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">Modsen SHOPPE</div>

      <nav className="nav">
        <a href="#" className="nav__shop">
          Shop
        </a>
        <input type="checkbox" className="nav__switch" />
        <IconSvgCart />
      </nav>
    </header>
  );
};

export default Header;
