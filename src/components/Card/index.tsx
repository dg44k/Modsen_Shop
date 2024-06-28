import { FC } from "react";
import { Link } from "react-router-dom";

import IconCart from "@/assets/icon-cart.svg";
import IconEye from "@/assets/icon-eye.svg";
import { ROUTES } from "@/constants/routes";

import * as StyledComponents from "./styled";
import { CardProps } from "./types";

const Card: FC<CardProps> = ({ id, image, alt, title, price }) => {
  return (
    <StyledComponents.CardWrapperStyled>
      <StyledComponents.ProductIconsShow className="card_product-show">
        <Link to={ROUTES.cart}>
          <IconCart className="icon" />
        </Link>
        <Link to={`${ROUTES.card}${id}`}>
          <IconEye className="icon" />
        </Link>
      </StyledComponents.ProductIconsShow>
      <StyledComponents.CardImageStyled src={image} alt={alt} />
      <StyledComponents.WrapperInfoCardStyled>
        <StyledComponents.CardTitleStyled>
          {title}
        </StyledComponents.CardTitleStyled>
        <StyledComponents.CardPriceStyled>
          $ {price}
        </StyledComponents.CardPriceStyled>
      </StyledComponents.WrapperInfoCardStyled>
    </StyledComponents.CardWrapperStyled>
  );
};

export default Card;
