import React from "react";
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

const Footer: React.FC = () => {
  return (
    <StyledFooter className="footer">
      <div className="footer__additional-info">
        <StyledAbout className="footer__about">
          <StyledFlexLinks>
            <StyledAdditionalLink href="#" className="footer__additional-link">
              CONTACT US
            </StyledAdditionalLink>
            <StyledAdditionalLink href="#" className="footer__additional-link">
              TERMS OF SERVICES
            </StyledAdditionalLink>
            <StyledAdditionalLink href="#" className="footer__additional-link">
              SHIPPING AND RETURNS
            </StyledAdditionalLink>
          </StyledFlexLinks>

          <StyledFormNewsletter className="footer__newsletter">
            <StyledInputNewsletter
              type="email"
              placeholder="Give an email, get the newsletter."
            />
            <StyledButtonNewsletter type="submit" value="&#8594;" />
          </StyledFormNewsletter>
        </StyledAbout>
        <StyledLinks className="footer_links">
          <StyledPrivacy className="footer_privacy">
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
