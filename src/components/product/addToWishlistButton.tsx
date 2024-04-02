"use client";
import { useUseAddToWishlistMutation } from "@/slices/wishlistSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IconHeart } from "../assets/globalIcons";

function AddToWishlistButton({ item }: { item: Product }) {
  const { data, status } = useSession();
  const { push } = useRouter();
  const [addWishlist] = useUseAddToWishlistMutation();

  async function addToWishlist() {
    if (status !== "authenticated") {
      return push(`/auth/signin`);
    }
    if (data.user?.id) {
      const id = toast.loading("Please wait...");
      await addWishlist({
        product_id: item.id,
        user_id: data.user.id,
      });
      toast.update(id, {
        render: "Added to wishlist",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
    }
  }
  return (
    <button
      type="button"
      onClick={addToWishlist}
      className="text-gray-500 bg-white hover:bg-gray-300 hover:text-black rounded-full p-[6px] inline-flex items-center  dark:bg-gray-600 dark:hover:bg-gray-700 "
    >
      <IconHeart />
    </button>
  );
}

export default AddToWishlistButton;
