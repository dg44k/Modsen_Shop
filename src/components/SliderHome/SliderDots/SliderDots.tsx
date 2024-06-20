import React from "react";
import { StyledSliderDot, StyledSliderDots } from "./styled";

const SliderDots: React.FC = () => {
  return (
    <StyledSliderDots>
      <StyledSliderDot className="active" />
      <StyledSliderDot />
      <StyledSliderDot />
      <StyledSliderDot />
      <StyledSliderDot />
    </StyledSliderDots>
  );
};

export default SliderDots;
