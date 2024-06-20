import SliderHome from "@/components/SliderHome/SliderHome";
import React from "react";
import {
  GlobalStylesForHome,
  StyledHeaderMain,
  StyledLinkViewAll,
} from "./styled";

const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalStylesForHome />
      <SliderHome />
      <StyledHeaderMain>
        <h1 className="home__heading">Shop The Latest</h1>
        <StyledLinkViewAll to="/shop">View All</StyledLinkViewAll>
      </StyledHeaderMain>
    </div>
  );
};

export default HomePage;
