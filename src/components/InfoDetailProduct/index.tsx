import { FC } from "react";
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
import { Link } from "react-router-dom";

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
