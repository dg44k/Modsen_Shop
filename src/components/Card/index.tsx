import React, { FC } from "react";
import { CardProps } from "./types";
import IconEye from "@/assets/icon-eye.svg";
import IconCart from "@/assets/icon-cart.svg";
import {
  CardImageStyled,
  CardPriceStyled,
  CardTitleStyled,
  CardWrapperStyled,
  ProductIconsShow,
  WrapperInfoCardStyled,
} from "./styled";
import { Link } from "react-router-dom";

const Card: FC<CardProps> = props => {
  return (
    <CardWrapperStyled to={`/card/${props.id}`}>
      <ProductIconsShow className="card_product-show">
        <Link to="/cart">
          <IconCart className="icon" />
        </Link>
        <Link to={`/card/${props.id}`}>
          <IconEye className="icon" />
        </Link>
      </ProductIconsShow>
      <CardImageStyled src={props.image} alt={props.alt} />
      <WrapperInfoCardStyled>
        <CardTitleStyled>{props.title}</CardTitleStyled>
        <CardPriceStyled>$ {props.price}</CardPriceStyled>
      </WrapperInfoCardStyled>
    </CardWrapperStyled>
  );
};

export default Card;
