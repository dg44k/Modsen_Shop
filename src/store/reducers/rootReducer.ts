import { combineReducers } from "redux";
import { api } from "../slices/apiSlice";
import { sliderReducer } from "../slices/sliderSlice";
import { switchReducer } from "../slices/switchSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  slider: sliderReducer,
  switch: switchReducer,
});

export { rootReducer };
