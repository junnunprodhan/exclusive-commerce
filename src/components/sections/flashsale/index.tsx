import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import { getProducts } from "@/hooks/getProducts";
import Link from "next/link";
import CountdownTimer from "./countdowntimer";
import FlashSlider from "./flashSlider";

async function FlashSale() {
  const url = `${process.env.NEXTAUTH_URL}/api/products?type=flash_sale`;
  const { products } = await getProducts(url);
  return (
    <>
      <div className="container py-10 border-b relative">
        <div className="flex py-5 flex-col gap-4 ">
          <SectionLabel label="Today's" />
          {/* Section Heading */}
          <SectionHeading title="Flash Sales" subItem={<CountdownTimer />}/>
        </div>
        {/* Product List */}
        <div className="py-5">
          {/* <ProductSlider /> */}
          <FlashSlider products={products} />
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
    </>
  );
}

export default FlashSale;
