import React from "react";
import { StyledIcons } from "./styled";
import IconSVGLinkedIn from "@/assets/icon-linkedin.svg";
import IconSVGInstagram from "@/assets/icon-instagram.svg";
import IconSVGFacebook from "@/assets/icon-facebook.svg";
import IconSVGTwitter from "@/assets/icon-twitter.svg";

const ListIcons: React.FC = () => {
  return (
    <StyledIcons className="footer__list-links-social-media">
      <IconSVGLinkedIn className="icon-link" />
      <IconSVGFacebook className="icon-link" />
      <IconSVGInstagram className="icon-link" />
      <IconSVGTwitter className="icon-link" />
    </StyledIcons>
  );
};

export default ListIcons;