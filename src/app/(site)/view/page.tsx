import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import SectionLabel from "@/components/global/sectionlabel";
import Product from "@/components/product";
import ImageView from "@/components/view_product/imageView";
import ProductInfo from "@/components/view_product/productInfo";
import { getProductSSR } from "@/hooks/getProduct";
import { products } from "../../../constants/dummy";
const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Product",
    icon: null,
    pathname: "/shop",
  },
];
async function View({ searchParams }: { searchParams: { product?: string } }) {
  //  find product by view id
  // get SSR data with pagination
  var url = `${process.env.NEXTAUTH_URL}/api/product?id=${searchParams.product}`;
  const { product } = await getProductSSR(url);

  //  Render not found
  if (!searchParams.product || !product) {
    return (
      <div className="min-h-[75vh] flex flex-col justify-center items-center">
        <span className="text-3xl text-primary font-bold">404</span>
        <span className="text-xl"> Product not found !</span>
      </div>
    );
  } else {
    return (
      <>
        <div className="container py-10 min-h-screen">
          {/* Dynamic view product breadcrumb */}
          <Breadcrumb
            crumb={[
              ...breadcrumb,
              { icon: null, pathname: null, title: product.id.toUpperCase() },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10">
            {/* Product Image View */}
            <div className="lg:col-span-3 lg:py-10 py-5 ">
              <ImageView item={product} />
            </div>
            {/* Product Information */}
            <div className="lg:col-span-2 lg:py-10 py-5 ">
              <ProductInfo item={product} />
            </div>
          </div>
          {/* Related products */}
          <div>
            <div className="my-10">
              <SectionLabel label="Related Item" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.map((item, index) => (
                <Product
                  key={index}
                  showDiscount={true}
                  showPercentage={true}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default View;
