import React from "react";
import Header from "./Header/Header";
import { Container, GlobalStyles } from "./styled";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </Container>
  );
};

export default App;
