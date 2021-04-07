import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${BASE_URI}product`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { products: data };
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle",
    error: null,
    items: [],
    filterItems: [],
    categories: [],
    categorySelect: "todos",
  },
  reducers: {
    filterItemProduct: (state, action) => {
      let { type } = action.payload;
      state.categorySelect = type;
      if (type === "todos") {
        state.filterItems = state.items;
      } else {
        state.filterItems = state.items.filter(
          (item) => item.category.name === type
        );
      }
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.items = action.payload.products;
      state.filterItems = state.items;
      state.categories = state.items
        .map((item) => item.category.name)
        .reduce(function (a, b) {
          if (a.indexOf(b) < 0) a.push(b);
          return a;
        }, []);
    },

    [fetchProducts.error]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const { filterItemProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
