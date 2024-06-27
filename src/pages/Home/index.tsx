import SliderHome from "@/components/SliderHome";
import React, { FC } from "react";
import {
  GlobalStylesForHome,
  StyledHeaderMain,
  StyledLinkViewAll,
} from "./styled";
import LastViewListCards from "@/components/LastViewListCards";

const HomePage: FC = () => {
  return (
    <div>
      <GlobalStylesForHome />
      <SliderHome />
      <StyledHeaderMain>
        <h1>Shop The Latest</h1>
        <StyledLinkViewAll to="/shop">View All</StyledLinkViewAll>
      </StyledHeaderMain>
      <LastViewListCards />
    </div>
  );
};

export default HomePage;
