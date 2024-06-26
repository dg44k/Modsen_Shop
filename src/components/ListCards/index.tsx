import { FC } from "react";
import { ListCardsProps } from "./types";
import Card from "../Card";
import { ListCardsStyled, StyledError, StyledLoading } from "./styled";
import { useGetProductsQuery } from "@/store/slices/apiSlice";

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
        <Card
          key={product.id}
          alt={product.title}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </ListCardsStyled>
  );
};

export default ListCards;
