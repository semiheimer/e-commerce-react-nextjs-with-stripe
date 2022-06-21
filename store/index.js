import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart-slice";
import uiReducer from "./ui-slice";
import authReducer from "./auth/auth-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
