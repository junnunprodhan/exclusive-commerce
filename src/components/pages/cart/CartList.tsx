"use client";
import { CircleSpinner } from "@/components/assets/globalIcons";
import { useGetCartItemsQuery } from "@/slices/cartSlice";
import CartItem from "./cartItem";

function CartList() {
  const { isLoading, data } = useGetCartItemsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-20">
        <span className="w-12 h-12">
          <CircleSpinner />
        </span>
      </div>
    );
  } else if (!data) {
    return (
      <div className="my-20 flex items-center justify-center">
        <span className="text-primary text-xl font-bold">Empty Cart</span>
      </div>
    );
  } else if (!data.cartList.length) {
    return (
      <div className="my-20 flex items-center justify-center">
        <span className="text-primary text-xl font-bold">Empty Cart</span>
      </div>
    );
  } else {
    return (
      <>
        {data.cartList.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </>
    );
  }
}

export default CartList;
