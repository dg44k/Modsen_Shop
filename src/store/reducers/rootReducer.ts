import { combineReducers } from "redux";
import { api } from "../slices/apiSlice";
import { productsReducer } from "../slices/productsSlice";
import { sliderReducer } from "../slices/sliderSlice";
import { switchReducer } from "../slices/switchSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  products: productsReducer,
  slider: sliderReducer,
  switch: switchReducer,
});

export { rootReducer };
