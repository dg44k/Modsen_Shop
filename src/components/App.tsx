import React from "react";
import Header from "./Header/Header";
import { Container, GlobalStyles } from "./styled";
import Footer from "./Footer/Footer";

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <>
        <Header />
        <Footer />
      </>
    </Container>
  );
};

export default App;
