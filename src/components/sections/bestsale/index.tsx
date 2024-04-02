import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import { getProducts } from "@/hooks/getProducts";
import Link from "next/link";
import BestSaleSlider from "./bestSaleSlider";

async function BestSales() {
  const url = `${process.env.NEXTAUTH_URL}/api/products?type=best_sale`;
  const { products } = await getProducts(url);

  return (
    <div className="container py-10 border-b">
      <div className="py-5 flex flex-col gap-4">
        <SectionLabel label="This Month" />
        {/* Section Heading */}
        <SectionHeading title="Best Selling Products ">
          <Link
            className={` text-white border border-gray-300 bg-primary md:px-8 px-3 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none`}
            href="/shop"
          >
            View All
          </Link>
        </SectionHeading>
      </div>
      {/* Product List */}
      <div className="py-5">
        <BestSaleSlider products={products} />
      </div>
    </div>
  );
}

export default BestSales;
