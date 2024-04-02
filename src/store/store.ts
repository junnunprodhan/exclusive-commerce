import { cartItemsApi } from "@/slices/cartSlice";
import { userApi } from "@/slices/userSlice";
import { wishlistApi } from "@/slices/wishlistSlice";
import { reducer } from "@/store/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cartItemsApi.middleware,
      userApi.middleware,
      wishlistApi.middleware,
    ]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
