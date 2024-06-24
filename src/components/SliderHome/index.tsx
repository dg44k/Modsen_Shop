import React, { FC, useEffect } from "react";
import SliderList from "./components/SliderList";
import { StyledSliderWrapper } from "./styled";
import SliderDots from "./components/SliderDots";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { END_SLICE_SLIDES, START_SLICE_SLIDES } from "@/constants/constants";
import { setSliceSlides } from "@/store/slices/sliderSlice";

const SliderHome: FC = () => {
  const sliceSlides = useSelector(
    (state: RootState) => state.slider.sliceSlides,
  );
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (products.length > 0) {
      dispatch(
        setSliceSlides(products.slice(START_SLICE_SLIDES, END_SLICE_SLIDES)),
      );
    }
  }, [products, dispatch]);

  console.log(sliceSlides);
  return (
    <StyledSliderWrapper>
      <SliderList slides={sliceSlides} />
      <SliderDots slides={sliceSlides} />
    </StyledSliderWrapper>
  );
};

export default SliderHome;
