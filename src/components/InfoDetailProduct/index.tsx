import { FC } from "react";
import { Link } from "react-router-dom";

import IconSVGFacebook from "@/assets/icon-facebook.svg";
import IconSVGInstagram from "@/assets/icon-instagram.svg";
import IconSVGMail from "@/assets/icon-mail.svg";
import IconSVGTwitter from "@/assets/icon-twitter.svg";

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
          <Link to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBRCdHQvpnKPPQSvpLLCRnvtMKSrTXSMkBFQWGwWtRpbgHWkgWmQbDHRRWQNrXVpFJjWWs">
            <IconSVGMail />
          </Link>
          <Link to="https://www.facebook.com/ModsenSoftware/">
            <IconSVGFacebook />
          </Link>
          <Link to="https://www.instagram.com/modsencompany/">
            <IconSVGInstagram />
          </Link>
          <Link to="https://twitter.com/modsencompany?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <IconSVGTwitter />
          </Link>
        </WrapperLinks>
        <InfoCategories>
          <BoldCategories>Categories:</BoldCategories> {product.category}
        </InfoCategories>
        <WrapperInfoCart>
          <CounterProductCart />
          <Button>
            <Link to="/shop">ADD TO CART</Link>
          </Button>
        </WrapperInfoCart>
      </WrapperFooterInfoCard>
    </WrapperInfoDetailProduct>
  );
};

export default InfoDetailProduct;
