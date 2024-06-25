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
    <CardWrapperStyled>
      <ProductIconsShow className="card_product-show">
        <Link to={`/`}>
          <IconCart className="icon" />
        </Link>
        <Link to={`/`}>
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
