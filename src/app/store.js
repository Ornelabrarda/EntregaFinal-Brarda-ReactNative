import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../services/shop.js";
import cartReducer from "../features/cart/CartSlice.js";
import { authApi } from "../services/auth.js";
import authReducer from "../features/auth/AuthSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
