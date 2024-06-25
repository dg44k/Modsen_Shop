import React, { FC } from "react";
import { ListCardsProps } from "./types";
import Card from "../Card";
import { ListCardsStyled } from "./styled";

const ListCards: FC<ListCardsProps> = ({ products }) => {
  return (
    <ListCardsStyled>
      {products.map(product => (
        <Card
          key={product.id}
          image={product.image}
          alt={product.title}
          price={product.price}
          title={product.title}
        />
      ))}
    </ListCardsStyled>
  );
};

export default ListCards;
