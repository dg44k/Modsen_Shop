import { FC } from "react";
import { Link } from "react-router-dom";

import IconSVGFacebook from "@/assets/icon-facebook.svg";
import IconSVGInstagram from "@/assets/icon-instagram.svg";
import IconSVGLinkedIn from "@/assets/icon-linkedin.svg";
import IconSVGTwitter from "@/assets/icon-twitter.svg";
import { LINK_PATHS } from "@/constants/linksPath";

import { StyledIcons } from "./styled";

const ListIcons: FC = () => {
  return (
    <StyledIcons>
      <Link to={LINK_PATHS.linkedin}>
        <IconSVGLinkedIn />
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
    </StyledIcons>
  );
};

export default ListIcons;
