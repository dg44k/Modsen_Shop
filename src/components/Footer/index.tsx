import { FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

import ListIcons from "../ListIcons";
import Newsletter from "../Newsletter";
import {
  StyledAbout,
  StyledAdditionalLink,
  StyledFlexLinks,
  StyledFooter,
  StyledLinks,
  StyledPrivacy,
} from "./styled";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <>
        <StyledAbout>
          <StyledFlexLinks>
            <StyledAdditionalLink to={ROUTES.contactUS}>
              CONTACT US
            </StyledAdditionalLink>
            <StyledAdditionalLink to={ROUTES.home}>
              TERMS OF SERVICES
            </StyledAdditionalLink>
            <StyledAdditionalLink to={ROUTES.home}>
              SHIPPING AND RETURNS
            </StyledAdditionalLink>
          </StyledFlexLinks>
          <Newsletter />
        </StyledAbout>
        <StyledLinks>
          <StyledPrivacy>
            &#169; 2023 Shelly. <Link to={ROUTES.home}>Terms of use</Link> and{" "}
            <Link to={ROUTES.home}>privacy policy</Link>.
          </StyledPrivacy>
          <ListIcons />
        </StyledLinks>
      </>
    </StyledFooter>
  );
};

export default Footer;
