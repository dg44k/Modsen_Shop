import React, { FC } from "react";
import { CardProps } from "./types";
import {
  CardImageStyled,
  CardPriceStyled,
  CardTitleStyled,
  CardWrapperStyled,
  WrapperInfoCardStyled,
} from "./styled";

const Card: FC<CardProps> = props => {
  return (
    <CardWrapperStyled>
      <CardImageStyled src={props.image} alt={props.alt} />
      <WrapperInfoCardStyled>
        <CardTitleStyled>{props.title}</CardTitleStyled>
        <CardPriceStyled>$ {props.price}</CardPriceStyled>
      </WrapperInfoCardStyled>
    </CardWrapperStyled>
  );
};

export default Card;
