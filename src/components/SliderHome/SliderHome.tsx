import React from "react";
import SliderList from "./SliderList/SliderList";
import { StyledSliderWrapper } from "./styled";
import SliderDots from "./SliderDots/SliderDots";

const SliderHome: React.FC = () => {
  return (
    <StyledSliderWrapper>
      <SliderList />
      <SliderDots />
    </StyledSliderWrapper>
  );
};

export default SliderHome;
