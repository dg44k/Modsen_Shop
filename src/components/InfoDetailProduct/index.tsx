import React, { FC } from "react";
import { InfoDetailProductProps } from "./types";
import IconSVGMail from "@/assets/icon-mail.svg";
import IconSVGInstagram from "@/assets/icon-instagram.svg";
import IconSVGFacebook from "@/assets/icon-facebook.svg";
import IconSVGTwitter from "@/assets/icon-twitter.svg";

const InfoDetailProduct: FC<InfoDetailProductProps> = ({ product }) => {
  return (
    <div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
      </div>
      <div>
        <div>
          <div>{product.rating.rate}</div>
          <p>{product.rating.count} customer review</p>
        </div>
        <p>{product.description}</p>
      </div>
      <div>
        <div>
          <IconSVGMail className="icon-link" />
          <IconSVGFacebook className="icon-link" />
          <IconSVGInstagram className="icon-link" />
          <IconSVGTwitter className="icon-link" />
        </div>
        <p>
          <b>Categories:</b> {product.category}
        </p>
      </div>
    </div>
  );
};

export default InfoDetailProduct;
