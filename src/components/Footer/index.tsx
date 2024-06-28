import { FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

import ListIcons from "../ListIcons";
import Newsletter from "../Newsletter";
import * as StyledComponents from "./styled";

const Footer: FC = () => {
  return (
    <StyledComponents.StyledFooter>
      <>
        <StyledComponents.StyledAbout>
          <StyledComponents.StyledFlexLinks>
            <StyledComponents.StyledAdditionalLink to={ROUTES.contactUS}>
              CONTACT US
            </StyledComponents.StyledAdditionalLink>
            <StyledComponents.StyledAdditionalLink to={ROUTES.home}>
              TERMS OF SERVICES
            </StyledComponents.StyledAdditionalLink>
            <StyledComponents.StyledAdditionalLink to={ROUTES.home}>
              SHIPPING AND RETURNS
            </StyledComponents.StyledAdditionalLink>
          </StyledComponents.StyledFlexLinks>
          <Newsletter />
        </StyledComponents.StyledAbout>
        <StyledComponents.StyledLinks>
          <StyledComponents.StyledPrivacy>
            &#169; 2023 Shelly. <Link to={ROUTES.home}>Terms of use</Link> and{" "}
            <Link to={ROUTES.home}>privacy policy</Link>.
          </StyledComponents.StyledPrivacy>
          <ListIcons />
        </StyledComponents.StyledLinks>
      </>
    </StyledComponents.StyledFooter>
  );
};

export default Footer;
