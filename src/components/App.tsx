import React, { FC, useEffect, useState } from "react";
import Header from "./Header";
import { Container, GlobalStyles } from "./styled";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useGetProductsQuery } from "@/store/slices/apiSlice";

const a = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <div>Count: {count}</div>;
};

const App: FC = () => {
  useGetProductsQuery(undefined);

  return (
    <Container>
      <GlobalStyles />
      <>
        <Header />
        <main>
          <a />
          <Outlet />
        </main>
        <Footer />
      </>
    </Container>
  );
};

export default App;
