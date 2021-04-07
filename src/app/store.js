import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../features/products/ProductSlice";
import ShopCartReducer from "../features/shopCart/ShopCartSlice"

export default configureStore({
  reducer: {
    shopCart: ShopCartReducer,
    products: ProductsReducer
  },
});
