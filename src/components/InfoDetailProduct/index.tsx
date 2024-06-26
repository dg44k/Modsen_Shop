import React, { FC } from "react";
import { InfoDetailProductProps } from "./types";
import IconSVGMail from "@/assets/icon-mail.svg";
import IconSVGInstagram from "@/assets/icon-instagram.svg";
import IconSVGFacebook from "@/assets/icon-facebook.svg";
import IconSVGTwitter from "@/assets/icon-twitter.svg";
import {
  BoldCategories,
  InfoCategories,
  MiniDescriptionProduct,
  StyledHeading,
  StyledPrice,
  StyledRatingCount,
  WrapperFlexRatingProduct,
  WrapperFooterInfoCard,
  WrapperHeaderInfoCard,
  WrapperInfoCart,
  WrapperInfoDetailProduct,
  WrapperLinks,
  WrapperRatingProduct,
} from "./styled";
import ListStarsRate from "../ListStarsRate";
import CounterProductCart from "../CounterProductCart";
import Button from "../Button";

const InfoDetailProduct: FC<InfoDetailProductProps> = ({ product }) => {
  return (
    <WrapperInfoDetailProduct>
      <WrapperHeaderInfoCard>
        <StyledHeading>{product.title}</StyledHeading>
        <StyledPrice>$ {product.price}</StyledPrice>
      </WrapperHeaderInfoCard>
      <WrapperRatingProduct>
        <WrapperFlexRatingProduct>
          <ListStarsRate rate={product.rating.rate} />
          <StyledRatingCount>
            {product.rating.count} customer review
          </StyledRatingCount>
        </WrapperFlexRatingProduct>
        <MiniDescriptionProduct>{product.description}</MiniDescriptionProduct>
      </WrapperRatingProduct>
      <WrapperFooterInfoCard>
        <WrapperLinks>
          <IconSVGMail className="icon-link" />
          <IconSVGFacebook className="icon-link" />
          <IconSVGInstagram className="icon-link" />
          <IconSVGTwitter className="icon-link" />
        </WrapperLinks>
        <InfoCategories>
          <BoldCategories>Categories:</BoldCategories> {product.category}
        </InfoCategories>
        <WrapperInfoCart>
          <CounterProductCart />
          <Button>ADD TO CART</Button>
        </WrapperInfoCart>
      </WrapperFooterInfoCard>
    </WrapperInfoDetailProduct>
  );
};

export default InfoDetailProduct;
