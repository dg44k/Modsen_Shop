import { FC } from "react";
import { Link } from "react-router-dom";

import IconCart from "@/assets/icon-cart.svg";
import IconEye from "@/assets/icon-eye.svg";
import { ROUTES } from "@/constants/routes";

import {
  CardImageStyled,
  CardPriceStyled,
  CardTitleStyled,
  CardWrapperStyled,
  ProductIconsShow,
  WrapperInfoCardStyled,
} from "./styled";
import { CardProps } from "./types";

const Card: FC<CardProps> = ({ id, image, alt, title, price }) => {
  return (
    <CardWrapperStyled>
      <ProductIconsShow className="card_product-show">
        <Link to={ROUTES.cart}>
          <IconCart className="icon" />
        </Link>
        <Link to={`${ROUTES.card}${id}`}>
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
