"use client";
import { CircleSpinner } from "@/components/assets/globalIcons";
import Product from "@/components/product";
import { useGetWishlistQuery } from "@/slices/wishlistSlice";
import Link from "next/link";

function AllWishlistItems() {
  const { isLoading, data } = useGetWishlistQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-20">
        <span className="w-12 h-12">
          <CircleSpinner />
        </span>
      </div>
    );
  }
  return (
    <>
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-black font-medium">
            Wishlist {`(${data?.wishlist.length})`}
          </h2>
          <Link
            href="/cart"
            className="bg-white border md:px-8 px-3 border-gray-300 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none text-black font-medium"
          >
            Go to cart
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
          {data?.wishlist.slice(0, 4).map((item, index) => (
            <Product
              cartStyle="WISHLIST"
              showDiscount
              showPercentage
              item={item.product}
              key={index}
            />
          ))}
        </div>
      </div>
      {!data ||
        (!data.wishlist.length && (
          <div className="my-20 flex items-center justify-center">
            <span className="text-primary text-xl font-bold">
              Empty wishlist
            </span>
          </div>
        ))}
    </>
  );
}

export default AllWishlistItems;
