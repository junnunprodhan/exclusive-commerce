import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import Product from "@/components/product";
import { getProducts } from "@/hooks/getProducts";
import Link from "next/link";

async function Explore() {
  // Get SSR Products
  const url = `${process.env.NEXTAUTH_URL}/api/products`; // change sale type
  const { products } = await getProducts(url);

  return (
    <div className="container py-10">
      <div className="py-5 flex flex-col gap-4">
        <SectionLabel label="Our Products" />
        {/* Section Heading */}
        <SectionHeading title="Explore Our Products">
          <div className="flex items-center gap-1 md:gap-2">
              <Link
                  className={` text-white border border-gray-300 bg-primary md:px-8 px-3 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none`}
                  href="/shop"
              >
                  View More
              </Link>
          </div>
        </SectionHeading>
      </div>
      {/* Product List */}
      <div className="grid py-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
        {products.slice(0, 8).map((item, index) => (
          <Product
            key={index}
            item={item}
            showDiscount={true}
            showPercentage={true}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className={` text-white border border-gray-300 bg-primary md:px-8 px-3 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none`}
          href="/shop"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

export default Explore;
