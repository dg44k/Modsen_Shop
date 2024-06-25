import React, { FC } from "react";
import {
  StyledAbout,
  StyledAdditionalLink,
  StyledButtonNewsletter,
  StyledFlexLinks,
  StyledFooter,
  StyledFormNewsletter,
  StyledInputNewsletter,
  StyledLinks,
  StyledPrivacy,
} from "./styled";
import ListIcons from "../ListIcons";
import { Link } from "react-router-dom";

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

          <StyledFormNewsletter>
            <StyledInputNewsletter
              type="email"
              placeholder="Give an email, get the newsletter."
            />
            <StyledButtonNewsletter type="submit" value="&#8594;" />
          </StyledFormNewsletter>
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
