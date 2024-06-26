import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC } from "react";
import { Container, GlobalStyles } from "@/components/styled";
import {
  LinkToHome,
  StyledFlexHeadings,
  StyledHeadingOne,
  StyledHeadingThree,
} from "./styled";

const ErrorNotFound: FC = () => {
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
        <LinkToHome to="/">HOMEPAGE</LinkToHome>
      </StyledFlexHeadings>
      <Footer />
    </Container>
  );
};

export default ErrorNotFound;
