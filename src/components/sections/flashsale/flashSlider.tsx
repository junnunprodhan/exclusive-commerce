"use client";
import Product from "@/components/product";
import CarouselSlide, { ResponsiveType } from "react-multi-carousel";
import CustomArrowButton from "@/components/global/CustomArrowButton";

function FlashSlider({ products }: { products: Product[] }) {
  return (
    <CarouselSlide
      additionalTransfrom={0}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<CustomArrowButton  />}
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

export default FlashSlider;

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
