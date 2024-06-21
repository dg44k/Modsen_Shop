import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import api from "./slices/apiSlice";

export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
