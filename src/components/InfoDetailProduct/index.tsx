import { FC } from "react";
import { Link } from "react-router-dom";

import IconSVGFacebook from "@/assets/icon-facebook.svg";
import IconSVGInstagram from "@/assets/icon-instagram.svg";
import IconSVGMail from "@/assets/icon-mail.svg";
import IconSVGTwitter from "@/assets/icon-twitter.svg";
import { LINK_PATHS } from "@/constants/linksPath";
import { ROUTES } from "@/constants/routes";

import Button from "../Button";
import CounterProductCart from "../CounterProductCart";
import ListStarsRate from "../ListStarsRate";
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
import { InfoDetailProductProps } from "./types";

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
          <Link to={LINK_PATHS.mail}>
            <IconSVGMail />
          </Link>
          <Link to={LINK_PATHS.facebook}>
            <IconSVGFacebook />
          </Link>
          <Link to={LINK_PATHS.instagram}>
            <IconSVGInstagram />
          </Link>
          <Link to={LINK_PATHS.twitter}>
            <IconSVGTwitter />
          </Link>
        </WrapperLinks>
        <InfoCategories>
          <BoldCategories>Categories:</BoldCategories> {product.category}
        </InfoCategories>
        <WrapperInfoCart>
          <CounterProductCart />
          <Button>
            <Link to={ROUTES.cart}>ADD TO CART</Link>
          </Button>
        </WrapperInfoCart>
      </WrapperFooterInfoCard>
    </WrapperInfoDetailProduct>
  );
};

export default InfoDetailProduct;
