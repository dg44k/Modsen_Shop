import { FC, useEffect } from "react";
import SliderList from "./components/SliderList";
import { StyledSliderWrapper } from "./styled";
import SliderDots from "./components/SliderDots";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { END_SLICE_SLIDES, START_SLICE_SLIDES } from "@/constants/constants";
import { setSliceSlides } from "@/store/slices/sliderSlice";
import { useGetProductsQuery } from "@/store/slices/apiSlice";

const SliderHome: FC = () => {
  const sliceSlides = useSelector(
    (state: RootState) => state.slider.sliceSlides,
  );
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      dispatch(
        setSliceSlides(data.slice(START_SLICE_SLIDES, END_SLICE_SLIDES)),
      );
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <div className="loading-api">Loading...</div>;
  }
  if (isError) {
    return <div className="error-api">Error...</div>;
  }
  return (
    <StyledSliderWrapper>
      <SliderList slides={sliceSlides} />
      <SliderDots slides={sliceSlides} />
    </StyledSliderWrapper>
  );
};

export default SliderHome;
