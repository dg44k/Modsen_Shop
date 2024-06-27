import { FC } from "react";
import Header from "./Header";
import { Container, GlobalStyles } from "./styled";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

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
