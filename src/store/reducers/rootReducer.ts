import { combineReducers } from "redux";
import api from "../slices/apiSlice";
import productsReducer from "../slices/productsSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
