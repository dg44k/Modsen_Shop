import React from "react";
import SearchIcon from '@/assets/icon_search.svg'
import CartIcon from '../../assets/icon_cart.svg';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">Modsen SHOPPE</div>

      <nav className="nav">
        <a href="#" className="nav__shop">
          Shop
        </a>
        <input type="checkbox" className="nav__switch" />
        <SearchIcon />
				<CartIcon />
      </nav>
    </header>
  );
};

export default Header;
