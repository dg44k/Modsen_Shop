import { RootState } from "@/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ListSimilarProductsProps } from "./types";
import Card from "../Card";
import { SimpleWrapper, StyledHeading, WrapperSimilarProducts } from "./styled";

const ListSimilarCard: FC<ListSimilarProductsProps> = ({
  currentCategory,
  currentElementId,
}) => {
  const products = useSelector((state: RootState) => state.products.products);
  const similarProducts = products.filter(
    product =>
      product.category === currentCategory && product.id !== currentElementId,
  );
  return (
    <SimpleWrapper>
      <StyledHeading>Similar items</StyledHeading>
      <WrapperSimilarProducts>
        {similarProducts.map(product => (
          <Card
            key={product.id}
            alt={product.title}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </WrapperSimilarProducts>
    </SimpleWrapper>
  );
};

export default ListSimilarCard;
