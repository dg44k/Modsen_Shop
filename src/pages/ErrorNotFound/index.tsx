import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Link } from "react-router-dom";
import { Container, GlobalStyles } from "@/components/styled";
import {
  StyledFlexHeadings,
  StyledHeadingOne,
  StyledHeadingThree,
} from "./styled";

const ErrorNotFound: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <StyledFlexHeadings>
        <StyledHeadingOne>404 ERROR</StyledHeadingOne>
        <StyledHeadingThree>
          This page not found;
          <br /> back to home and start again
        </StyledHeadingThree>
        <Link to="/" className="error__link">
          HOMEPAGE
        </Link>
      </StyledFlexHeadings>
      <Footer />
    </Container>
  );
};

export default ErrorNotFound;
