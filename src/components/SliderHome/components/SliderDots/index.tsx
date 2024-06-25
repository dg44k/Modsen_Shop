import React, { FC } from "react";
import { StyledSliderDot, StyledSliderDots } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setActiveIndex } from "@/store/slices/sliderSlice";
import { SliderDotsProps } from "../../types";

const SliderDots: FC<SliderDotsProps> = ({ slides }) => {
  const dispatch = useDispatch<AppDispatch>();
  const activeIndex = useSelector(
    (state: RootState) => state.slider.activeIndex,
  );

  const handleDotClick = (index: number) => {
    dispatch(setActiveIndex(index));
  };

  return (
    <StyledSliderDots>
      {slides.map((slide, index) => (
        <StyledSliderDot
          key={slide.id}
          onClick={() => handleDotClick(index)}
          className={activeIndex === index ? "active" : ""}
        />
      ))}
    </StyledSliderDots>
  );
};

export default SliderDots;
