import React from "react";
import Header from "./Header/Header";
import { Container, GlobalStyles } from "./styled";

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <div className="app">
        <Header />
      </div>
    </Container>
  );
};

export default App;
