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
import * as StyledComponents from "./styled";
import { InfoDetailProductProps } from "./types";

const InfoDetailProduct: FC<InfoDetailProductProps> = ({ product }) => {
  return (
    <StyledComponents.WrapperInfoDetailProduct>
      <StyledComponents.WrapperHeaderInfoCard>
        <StyledComponents.StyledHeading>
          {product.title}
        </StyledComponents.StyledHeading>
        <StyledComponents.StyledPrice>
          $ {product.price}
        </StyledComponents.StyledPrice>
      </StyledComponents.WrapperHeaderInfoCard>
      <StyledComponents.WrapperRatingProduct>
        <StyledComponents.WrapperFlexRatingProduct>
          <ListStarsRate rate={product.rating.rate} />
          <StyledComponents.StyledRatingCount>
            {product.rating.count} customer review
          </StyledComponents.StyledRatingCount>
        </StyledComponents.WrapperFlexRatingProduct>
        <StyledComponents.MiniDescriptionProduct>
          {product.description}
        </StyledComponents.MiniDescriptionProduct>
      </StyledComponents.WrapperRatingProduct>
      <StyledComponents.WrapperFooterInfoCard>
        <StyledComponents.WrapperLinks>
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
        </StyledComponents.WrapperLinks>
        <StyledComponents.InfoCategories>
          <StyledComponents.BoldCategories>
            Categories:
          </StyledComponents.BoldCategories>{" "}
          {product.category}
        </StyledComponents.InfoCategories>
        <StyledComponents.WrapperInfoCart>
          <CounterProductCart />
          <Button>
            <Link to={ROUTES.cart}>ADD TO CART</Link>
          </Button>
        </StyledComponents.WrapperInfoCart>
      </StyledComponents.WrapperFooterInfoCard>
    </StyledComponents.WrapperInfoDetailProduct>
  );
};

export default InfoDetailProduct;
