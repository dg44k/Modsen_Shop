import { FC } from "react";

import LastViewListCards from "@/components/LastViewListCards";
import SliderHome from "@/components/SliderHome";

import {
  GlobalStylesForHome,
  StyledHeaderMain,
  StyledLinkViewAll,
} from "./styled";

const HomePage: FC = () => {
  return (
    <>
      <GlobalStylesForHome />
      <SliderHome />
      <StyledHeaderMain>
        <h1>Shop The Latest</h1>
        <StyledLinkViewAll to="/shop">View All</StyledLinkViewAll>
      </StyledHeaderMain>
      <LastViewListCards />
    </>
  );
};

export default HomePage;
