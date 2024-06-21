import React from "react";
import Header from "./Header/Header";
import { Container, GlobalStyles } from "./styled";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { useGetProductsQuery } from "@/store/slices/apiSlice";

const App: React.FC = () => {
  useGetProductsQuery(undefined);

  return (
    <Container className="container">
      <GlobalStyles />
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    </Container>
  );
};

export default App;
