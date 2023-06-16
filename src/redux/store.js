import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import cartSlice from "./cart.slice";
import productSlice from "./product.slice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});
