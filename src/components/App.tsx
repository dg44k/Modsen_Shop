import { FC } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { Container, GlobalStyles } from "./styled";

const App: FC = () => {
  return (
    <Container>
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
