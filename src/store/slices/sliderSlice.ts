import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "@/types/types";

interface SliderState {
  activeIndex: number;
  sliceSlides: ProductType[];
}

const initialState: SliderState = {
  activeIndex: 0,
  sliceSlides: [],
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setActiveIndex(state: SliderState, action: PayloadAction<number>) {
      return {
        ...state,
        activeIndex: action.payload,
      };
    },
    setSliceSlides(state: SliderState, action: PayloadAction<ProductType[]>) {
      return {
        ...state,
        sliceSlides: action.payload,
      };
    },
  },
});

export const { setActiveIndex, setSliceSlides } = sliderSlice.actions;

export const sliderReducer = sliderSlice.reducer;
