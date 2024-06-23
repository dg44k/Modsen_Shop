import React from "react";
import SliderList from "./components/SliderList";
import { StyledSliderWrapper } from "./styled";
import SliderDots from "./components/SliderDots";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";
import { ProductType } from "@/types/types";

const SliderHome: React.FC = () => {
  const products: ProductType[] = useSelector(
    (state: RootState) => state.products.products,
  );

  return (
    <StyledSliderWrapper>
      <SliderList products={products} />
      <SliderDots products={products} />
    </StyledSliderWrapper>
  );
};

export default SliderHome;
