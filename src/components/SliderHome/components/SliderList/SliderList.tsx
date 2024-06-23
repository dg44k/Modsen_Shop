import React, { useEffect, useState } from "react";
import SliderListItem from "../SliderListItem/SliderListItem";
import { StyledSliderList } from "./styled";
import { ProductType } from "@/types/types";
import { setActiveIndex } from "@/store/slices/sliderSlice";
import { RootState } from "@/store/index";
import { useSelector } from "react-redux";

interface SliderProps {
  products: ProductType[];
}

const SliderList: React.FC<SliderProps> = ({ products }) => {
  const activeIndex = useSelector(
    (state: RootState) => state.slider.activeIndex,
  );
  const slides = products.slice(0, 7);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
