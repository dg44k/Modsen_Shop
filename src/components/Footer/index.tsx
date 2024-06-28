import { FC } from "react";
import { Link } from "react-router-dom";

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
      <div>
        <StyledAbout>
          <StyledFlexLinks>
            <StyledAdditionalLink to="/contact-us">
              CONTACT US
            </StyledAdditionalLink>
            <StyledAdditionalLink to="/">
              TERMS OF SERVICES
            </StyledAdditionalLink>
            <StyledAdditionalLink to="/">
              SHIPPING AND RETURNS
            </StyledAdditionalLink>
          </StyledFlexLinks>
          <Newsletter />
        </StyledAbout>
        <StyledLinks>
          <StyledPrivacy>
            &#169; 2023 Shelly. <Link to="/">Terms of use</Link> and{" "}
            <Link to="/">privacy policy</Link>.
          </StyledPrivacy>
          <ListIcons />
        </StyledLinks>
      </div>
    </StyledFooter>
  );
};

export default Footer;
