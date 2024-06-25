import AsideShop from "@/components/AsideShop";
import ListCards from "@/components/ListCards";
import { RootState } from "@/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";

const Shop: FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <div>
      <AsideShop />
      <ListCards products={products} />
    </div>
  );
};

export default Shop;
