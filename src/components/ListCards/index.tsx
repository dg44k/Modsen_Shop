import { FC } from "react";

import { useGetProductsQuery } from "@/store/slices/apiSlice";

import Card from "../Card";
import { ListCardsStyled, StyledError, StyledLoading } from "./styled";
import { ListCardsProps } from "./types";

const ListCards: FC<ListCardsProps> = () => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);
  if (isLoading) {
    return <div className="loading-api">Loading...</div>;
  }
  if (isError) {
    return <div className="error-api">Error...</div>;
  }
  return (
    <ListCardsStyled>
      {data.map(product => (
        <Card key={product.id} alt={product.title} {...product} />
      ))}
    </ListCardsStyled>
  );
};

export default ListCards;
