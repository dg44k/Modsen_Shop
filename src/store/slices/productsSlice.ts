import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import api from "./apiSlice";
import { ProductType } from "@/types/types";

interface ProductsState {
  products: ProductType[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      api.endpoints.getProducts.matchFulfilled,
      (state: ProductsState, action: PayloadAction<ProductType[]>) => {
        state.products = action.payload;
      },
    );
  },
});

export default productsSlice.reducer;
