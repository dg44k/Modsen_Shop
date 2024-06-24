import React, { FC, useEffect } from "react";
import SliderListItem from "../SliderListItem/index";
import { StyledSliderList } from "./styled";
import { setActiveIndex } from "@/store/slices/sliderSlice";
import { AppDispatch, RootState } from "@/store/index";
import { useDispatch, useSelector } from "react-redux";
import { SliderProps } from "../../types";

const SliderList: FC<SliderProps> = ({ slides }) => {
  const activeIndex = useSelector(
    (state: RootState) => state.slider.activeIndex,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setActiveIndex((activeIndex + 1) % slides.length));
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, dispatch, slides.length]);

  return (
    <StyledSliderList>
      {slides.map((slide, index) => (
        <SliderListItem
          key={slide.id}
          isActive={index === activeIndex}
          image={slide.image}
          alt={slide.title}
        />
      ))}
    </StyledSliderList>
  );
};

export default SliderList;
