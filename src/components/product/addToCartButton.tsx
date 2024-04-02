"use client";

import { useAddToCartMutation, useGetCartItemsQuery } from "@/slices/cartSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function AddToCartButton({ item }: { item: Product }) {
  const [addToCart] = useAddToCartMutation();
  const session = useSession();
  const { push } = useRouter();
  const { data } = useGetCartItemsQuery(undefined);

  async function submitPost() {
    if (session.status !== "authenticated") {
      return push(`/auth/signin`);
    }
    if (session.data.user?.id) {
      const id = toast.loading("Please wait...");
      await addToCart({
        user_id: session.data.user.id,
        product_id: item.id,
      });
      toast.update(id, {
        render: "Added to cart",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
    }
  }

  const existInCart = data?.cartList.find((x) => x.product_id === item.id);
  if (existInCart) {
    return (
      <Link
        href="/cart"
        className="text-center absolute bottom-0 left-0 group-hover/product:scale-100 scale-0  py-2 text-sm font-medium text-white rounded-b focus:outline-none bg-primary  hover:bg-red-600 transition-all dark:bg-gray-800 dark:text-gray-400 w-full"
      >
        View Cart
      </Link>
    );
  }
  return (
    <>
      <button
        type="button"
        onClick={submitPost}
        className="absolute bottom-0 left-0 group-hover/product:scale-100 scale-0  py-2 text-sm font-medium text-white rounded-b focus:outline-none bg-black  hover:bg-gray-800 transition-all dark:bg-gray-800 dark:text-gray-400 w-full"
      >
        Add to cart
      </button>
    </>
  );
}

export default AddToCartButton;
