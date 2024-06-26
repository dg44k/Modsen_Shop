import React, { FC } from "react";
import { ListCardsProps } from "./types";
import Card from "../Card";
import { ListCardsStyled } from "./styled";
import { title } from "process";

const ListCards: FC<ListCardsProps> = ({ products }) => {
  return (
    <ListCardsStyled>
      {products.map(product => (
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
