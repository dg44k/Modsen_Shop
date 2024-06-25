import AsideShop from "@/components/AsideShop";
import ListCards from "@/components/ListCards";
import { RootState } from "@/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  HeadingShopStyled,
  WrapperContainerShop,
  WrapperShopStyled,
} from "./styled";

const Shop: FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <WrapperShopStyled>
      <HeadingShopStyled>Shop The Latest</HeadingShopStyled>
      <WrapperContainerShop>
        <AsideShop />
        <ListCards products={products} />
      </WrapperContainerShop>
    </WrapperShopStyled>
  );
};

export default Shop;
