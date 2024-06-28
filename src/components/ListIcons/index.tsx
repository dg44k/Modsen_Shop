import { FC } from "react";
import { Link } from "react-router-dom";

import IconSVGFacebook from "@/assets/icon-facebook.svg";
import IconSVGInstagram from "@/assets/icon-instagram.svg";
import IconSVGLinkedIn from "@/assets/icon-linkedin.svg";
import IconSVGTwitter from "@/assets/icon-twitter.svg";

import { StyledIcons } from "./styled";

const ListIcons: FC = () => {
  return (
    <StyledIcons>
      <Link to="https://pl.linkedin.com/company/modsen">
        <IconSVGLinkedIn />
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
    </StyledIcons>
  );
};

export default ListIcons;
