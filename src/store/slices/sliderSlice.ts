import { ProductType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliderState {
  activeIndex: number;
}

const initialState: SliderState = {
  activeIndex: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setActiveIndex(state: SliderState, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = sliderSlice.actions;

export default sliderSlice.reducer;
