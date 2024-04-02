"use client";
import CarouselSlide, { ResponsiveType } from "react-multi-carousel";
import CategorySlideItem from "@/components/sections/categories/categorySlideItem";
import CustomArrowButton from "@/components/global/CustomArrowButton";

function FlashSlider({ subcategories }: { subcategories: Subcategory[] }) {
  return (
    <CarouselSlide
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      containerClass="relative"
      dotListClass="p-5"
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<CustomArrowButton  />}
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
      {subcategories.map((item, index) => (
       <CategorySlideItem item={item} key={index}/>
      ))}
    </CarouselSlide>
  );
}

export default FlashSlider;

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 6,
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
      max: 1280,
      min: 720,
    },
    items: 4,
  },
};
