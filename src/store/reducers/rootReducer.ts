import { combineReducers } from "redux";
import api from "../slices/apiSlice";
import productsReducer from "../slices/productsSlice";
import sliderReducer from "../slices/sliderSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  products: productsReducer,
  slider: sliderReducer,
});

export default rootReducer;
