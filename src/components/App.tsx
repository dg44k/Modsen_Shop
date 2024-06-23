import React, { FC } from "react";
import Header from "./Header";
import { Container, GlobalStyles } from "./styled";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useGetProductsQuery } from "@/store/slices/apiSlice";

const App: FC = () => {
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
