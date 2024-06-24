import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SwitchState {
  checked: boolean;
}

const initialState: SwitchState = {
  checked: false,
};

const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    setIsChecked(state: SwitchState, action: PayloadAction<boolean>) {
      state.checked = action.payload;
    },
  },
});

export const { setIsChecked } = switchSlice.actions;

export const switchReducer = switchSlice.reducer;
