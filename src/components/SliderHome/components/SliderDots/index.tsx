import React, { FC } from "react";
import { StyledSliderDot, StyledSliderDots } from "./styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setActiveIndex } from "@/store/slices/sliderSlice";
import { SliderDotsProps } from "../../types";

const SliderDots: FC<SliderDotsProps> = ({ slides }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDotClick = (index: number) => {
    dispatch(setActiveIndex(index));
  };

  return (
    <StyledSliderDots>
      {slides.map((slide, index) => (
        <StyledSliderDot key={slide.id} onClick={() => handleDotClick(index)} />
      ))}
    </StyledSliderDots>
  );
};

export default SliderDots;
