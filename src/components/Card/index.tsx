import React, { FC } from "react";
import { CardProps } from "./types";
import {
  CardImageStyled,
  CardPriceStyled,
  CardTitleStyled,
  CardWrapperStyled,
} from "./styled";

const Card: FC<CardProps> = props => {
  return (
    <CardWrapperStyled>
      <CardImageStyled src={props.image} alt={props.alt} />
      <div>
        <CardTitleStyled>{props.title}</CardTitleStyled>
        <CardPriceStyled>$ {props.price}</CardPriceStyled>
      </div>
    </CardWrapperStyled>
  );
};

export default Card;
