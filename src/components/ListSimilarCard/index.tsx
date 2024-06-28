import { FC } from "react";

import { useGetProductsQuery } from "@/store/slices/apiSlice";

import Card from "../Card";
import { SimpleWrapper, StyledHeading, WrapperSimilarProducts } from "./styled";
import { ListSimilarProductsProps } from "./types";

const ListSimilarCard: FC<ListSimilarProductsProps> = ({
  currentCategory,
  currentElementId,
}) => {
  const { data, isLoading, isError } = useGetProductsQuery();
  if (isLoading) {
    return <div className="loading-api">Loading...</div>;
  }
  if (isError) {
    return <div className="error-api">Error...</div>;
  }
  const similarProducts = data.filter(
    product =>
      product.category === currentCategory && product.id !== currentElementId,
  );
  return (
    <SimpleWrapper>
      <StyledHeading>Similar items</StyledHeading>
      <WrapperSimilarProducts>
        {similarProducts.map(product => (
          <Card key={product.id} alt={product.title} {...product} />
        ))}
      </WrapperSimilarProducts>
    </SimpleWrapper>
  );
};

export default ListSimilarCard;
