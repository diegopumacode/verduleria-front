import { createSlice } from "@reduxjs/toolkit";

const ShopCartSlice = createSlice({
  name: "shopCart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
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
  extraReducers: {},
});
export const {
  addItemtoCart,
  addCount,
  resCount,
  removeItem,
} = ShopCartSlice.actions;
export default ShopCartSlice.reducer;
