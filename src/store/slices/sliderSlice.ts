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

export const sliderReducer = sliderSlice.reducer;
