import { FC } from "react";

import IconSearch from "@/assets/icon-search.svg";

import {
  InputSearchStyled,
  WrapperAsideStyled,
  WrapperIconSearchStyled,
  WrapperSearchStyled,
} from "./styled";

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
      </form>
    </WrapperAsideStyled>
  );
};

export default AsideShop;
