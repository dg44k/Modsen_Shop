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
import { useGetProductsQuery } from "@/store/slices/apiSlice";

const Shop: FC = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  if (isLoading) {
    return <div className="loading-api">Loading...</div>;
  }
  if (isError) {
    return <div className="error-api">Error...</div>;
  }
  return (
    <WrapperShopStyled>
      <HeadingShopStyled>Shop The Latest</HeadingShopStyled>
      <WrapperContainerShop>
        <AsideShop />
        <ListCards products={data} />
      </WrapperContainerShop>
    </WrapperShopStyled>
  );
};

export default Shop;
