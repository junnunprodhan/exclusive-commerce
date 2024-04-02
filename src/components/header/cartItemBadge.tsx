"use client";

import { useGetCartItemsQuery } from "@/slices/cartSlice";

function CartItemBadge() {
  const { data } = useGetCartItemsQuery(undefined);

  return (
    <div className="absolute inline-flex items-center justify-center w-[18px] h-[18px] text-xs font text-white bg-red-500 rounded-full -top-[10px] -right-[10px] dark:border-gray-900">
      {!data ? 0 : data.cartList.length}
    </div>
  );
}

export default CartItemBadge;
