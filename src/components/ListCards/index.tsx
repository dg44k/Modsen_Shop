import React, { FC } from "react";
import { ListCardsProps } from "./types";
import Card from "../Card";
import { ListCardsStyled } from "./styled";

const ListCards: FC<ListCardsProps> = ({ products }) => {
  return (
    <ListCardsStyled>
      {products.map(product => (
        <Card key={product.id} alt={product.title} {...product} />
      ))}
    </ListCardsStyled>
  );
};

export default ListCards;
