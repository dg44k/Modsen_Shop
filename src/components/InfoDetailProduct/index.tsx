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
  StyledRatingRate,
  WrapperFlexRatingProduct,
  WrapperFooterInfoCard,
  WrapperHeaderInfoCard,
  WrapperInfoDetailProduct,
  WrapperLinks,
  WrapperRatingProduct,
} from "./styled";

const InfoDetailProduct: FC<InfoDetailProductProps> = ({ product }) => {
  return (
    <WrapperInfoDetailProduct>
      <WrapperHeaderInfoCard>
        <StyledHeading>{product.title}</StyledHeading>
        <StyledPrice>$ {product.price}</StyledPrice>
      </WrapperHeaderInfoCard>
      <WrapperRatingProduct>
        <WrapperFlexRatingProduct>
          <StyledRatingRate>{product.rating.rate}</StyledRatingRate>
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
      </WrapperFooterInfoCard>
    </WrapperInfoDetailProduct>
  );
};

export default InfoDetailProduct;
