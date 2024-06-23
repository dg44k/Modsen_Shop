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

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className="footer__additional-info">
        <StyledAbout className="footer__about">
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
            &#169; 2023 Shelly. <a href="#">Terms of use</a> and{" "}
            <a href="#">privacy policy</a>.
          </StyledPrivacy>
          <ListIcons />
        </StyledLinks>
      </div>
    </StyledFooter>
  );
};

export default Footer;
