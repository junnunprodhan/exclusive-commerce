"use client";
import Product from "@/components/product";
import CarouselSlide, { ResponsiveType } from "react-multi-carousel";

function BestSaleSlider({ products }: { products: Product[] }) {
  return (
    <CarouselSlide
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="relative"
      dotListClass="p-5"
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass="h-full "
      itemClass="pr-5"
      slidesToSlide={1}
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr
      deviceType={"desktop"}
    >
      {products.map((item, index) => (
        <Product
          key={index}
          item={item}
          showPercentage={false}
          showDiscount={true}
        />
      ))}
    </CarouselSlide>
  );
}

export default BestSaleSlider;

const responsive: ResponsiveType = {

  desktop: {
    breakpoint: {
      max: 3000,
      min: 960,
    },
    items: 4,
  },
  mobile: {
    breakpoint: {
      max: 720,
      min: 0,
    },
    items: 2,
  },
  tablet: {
    breakpoint: {
      max: 960,
      min: 720,
    },
    items: 3,
  },
};
