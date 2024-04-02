import Slider from "@/components/sections/hero/slider";
import { getCarouselSSG } from "@/hooks/getCarousel";
import ListGroup from "./listgroup";

async function Hero() {
  const url = `${process.env.NEXTAUTH_URL}/api/carousel`;
  const { carousel } = await getCarouselSSG(url);
  return (
    <>
      <div className="flex lg:flex-row flex-col ">
        <div className="xl:w-[250px] lg:w-[200px] lg:block hidden w-full lg:order-1 order-2">
          <ListGroup />
        </div>
        <div className="xl:w-[calc(100%-250px)] lg:w-[calc(100%-200px)] lg:order-2 order-1 w-full">
          <Slider carousels={carousel} />
        </div>
      </div>
    </>
  );
}

export default Hero;
