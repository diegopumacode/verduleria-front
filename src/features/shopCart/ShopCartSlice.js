import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";


export const fetchCreateOrden = createAsyncThunk(
  "shopCart/fetchCreateOrden",
  async ({orden}) => {
    const response = await fetch(`${BASE_URI}orden`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orden),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { products: data };
  }
);


const ShopCartSlice = createSlice({
  name: "shopCart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    status: "idle"
  },
  reducers: {
    addItemtoCart: (state, action) => {
      let objProduct = action.payload;
      let product = state.cartItems.find((items) => items.id === objProduct.id);
      if (product) {
        product.count += 1;
        product.total = Number((product.count * product.price).toFixed(2));
      } else {
        state.cartItems.push({
          ...objProduct,
          count: 1,
          total: objProduct.price,
        });
      }
      //   TODO refactor
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addCount: (state, action) => {
      let { id } = action.payload;
      let product = state.cartItems.find((items) => items.id === id);
      product.count += 1;
      //   TODO refactor
      product.total = Number((product.count * product.price).toFixed(2));
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    resCount: (state, action) => {
      let { id } = action.payload;
      let product = state.cartItems.find((items) => items.id === id);
      if (product.count > 1) {
        product.count -= 1;
        //   TODO refactor
        product.total = Number((product.count * product.price).toFixed(2));
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeItem: (state, action) => {
      let { id } = action.payload;
      state.cartItems = state.cartItems.filter((items) => items.id !== id);
      //   TODO refactor
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
  extraReducers: {
    [fetchCreateOrden.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchCreateOrden.fulfilled]: (state, action) => {
      state.status = "succeded";
      localStorage.removeItem("cartItems")
      state.cartItems = []
      alert("Compra realizada con exito")
    },

    [fetchCreateOrden.error]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      alert("Error al procesar informacion")
    },
  },
});
export const {
  addItemtoCart,
  addCount,
  resCount,
  removeItem,
} = ShopCartSlice.actions;
export default ShopCartSlice.reducer;
