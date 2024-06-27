import React, { FC } from "react";
import {
  InputSearchStyled,
  WrapperAsideStyled,
  WrapperIconSearchStyled,
  WrapperSearchStyled,
} from "./styled";
import IconSearch from "@/assets/icon-search.svg";

const AsideShop: FC = () => {
  return (
    <WrapperAsideStyled>
      <form>
        <WrapperSearchStyled>
          <InputSearchStyled type="search" placeholder="Search..." />
          <WrapperIconSearchStyled>
            <IconSearch />
          </WrapperIconSearchStyled>
        </WrapperSearchStyled>
        <div>
          <div className="dropdown">
            <button className="dropbtn">Sort By</button>
            <div className="dropdown-content">
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Shop By</button>
            <div className="dropdown-content">
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" />
            </div>
          </div>
        </div>
      </form>
    </WrapperAsideStyled>
  );
};

export default AsideShop;
