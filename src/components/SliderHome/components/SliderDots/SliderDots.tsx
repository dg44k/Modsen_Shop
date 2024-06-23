import React from "react";
import { StyledSliderDot, StyledSliderDots } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductType } from "@/types/types";
import { setActiveIndex } from "@/store/slices/sliderSlice";

interface SliderDotsProps {
  products: ProductType[];
}

const SliderDots: React.FC<SliderDotsProps> = ({ products }) => {
  const activeIndex = useSelector(
    (state: RootState) => state.slider.activeIndex,
  );
  const dispatch = useDispatch();

  const handleDotClick = (index: number) => {
    dispatch(setActiveIndex(index));
  };

  return (
    <StyledSliderDots>
      {products.map(product => (
        <StyledSliderDot
          key={product.id}
          onClick={() => handleDotClick(product.id)}
        />
      ))}
    </StyledSliderDots>
  );
};

export default SliderDots;
