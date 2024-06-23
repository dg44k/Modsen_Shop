import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import api from "./slices/apiSlice";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
