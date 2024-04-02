"use client";
import CarouselSlide from "react-multi-carousel";
import ImageFade from "../../global/imageFade";

function Slider({ carousels }: { carousels: Carousel[] }) {
  return (
    <CarouselSlide
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      containerClass="lg:pt-8 lg:ms-8 relative"
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
      showDots
      sliderClass="h-full "
      slidesToSlide={1}
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr
      deviceType={"desktop"}
    >
      {carousels.map((item, i) => (
        <ImageFade
          key={i}
          className="opacity-0 duration-500 transition-all h-auto object-cover"
          priority={true}
          alt="cover image"
          src={item.image}
          width={1280}
          height={720}
        />
      ))}
    </CarouselSlide>
  );
}

export default Slider;

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
};
