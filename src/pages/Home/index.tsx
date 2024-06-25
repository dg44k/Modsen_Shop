import SliderHome from "@/components/SliderHome";
import React, { FC } from "react";
import {
  GlobalStylesForHome,
  StyledHeaderMain,
  StyledLinkViewAll,
} from "./styled";

const HomePage: FC = () => {
  return (
    <div>
      <GlobalStylesForHome />
      <SliderHome />
      <StyledHeaderMain>
        <h1>Shop The Latest</h1>
        <StyledLinkViewAll to="/shop">View All</StyledLinkViewAll>
      </StyledHeaderMain>
    </div>
  );
};

export default HomePage;
