import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import AllWishlistItems from "@/components/pages/wishlist/allWishlistItems";
import Product from "@/components/product";
import { getProducts } from "@/hooks/getProducts";
import Link from "next/link";

async function Wishlist() {
  const url = `${process.env.NEXTAUTH_URL}/api/products?type=best_sale`;
  const { products } = await getProducts(url);
  return (
    <div className="container pb-20 min-h-screen">
      {/* Breadcrumb */}
      <div className="py-10">
        <Breadcrumb crumb={breadcrumb} />
      </div>

      {/* Recommended  items*/}
      <AllWishlistItems />
      {/* All whitelisted items */}
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center">
          {/* Heading */}
          <div className="flex items-center gap-4">
            <span className="w-5 bg-[#db4444] rounded h-10"></span>
            <h2 className="text-xl text-black font-medium">Just for you</h2>
          </div>

          <Link
            href="/shop"
            className="bg-white border md:px-8 px-3 border-gray-300 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none text-black font-medium"
          >
            See All
          </Link>
        </div>

        {/* All Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
          {products.slice(0, 4).map((item, index) => (
            <Product
              cartStyle="REGULAR"
              showDiscount
              showPercentage
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Wishlist",
    icon: null,
    pathname: null,
  },
];
