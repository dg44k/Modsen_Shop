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

const Card: FC<CardProps> = ({ id, image, alt, title, price }) => {
  return (
    <CardWrapperStyled>
      <ProductIconsShow className="card_product-show">
        <Link to="/cart">
          <IconCart className="icon" />
        </Link>
        <Link to={`/card/${id}`}>
          <IconEye className="icon" />
        </Link>
      </ProductIconsShow>
      <CardImageStyled src={image} alt={alt} />
      <WrapperInfoCardStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <CardPriceStyled>$ {price}</CardPriceStyled>
      </WrapperInfoCardStyled>
    </CardWrapperStyled>
  );
};

export default Card;
