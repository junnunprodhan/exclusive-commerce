import { cartItemsApi } from "@/slices/cartSlice";
import toggleSlice from "@/slices/toggleSlice";
import { wishlistApi } from "@/slices/wishlistSlice";
import { userApi } from "../slices/userSlice";

export const reducer = {
  // cartItems:cartSlice,
  toggleState: toggleSlice,
  [cartItemsApi.reducerPath]: cartItemsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [wishlistApi.reducerPath]: wishlistApi.reducer,
};
