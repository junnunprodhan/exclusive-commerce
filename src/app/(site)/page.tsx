import BestSales from "@/components/sections/bestsale";
import Categories from "@/components/sections/categories";
import Explore from "@/components/sections/explore";
import FlashSale from "@/components/sections/flashsale";
import Hero from "@/components/sections/hero";
import NewArrival from "@/components/sections/newarrival";
import Service from "@/components/sections/service";

export default function Home() {
  return (
    <main>
      <section className="container">
        <Hero />
      </section>
      <section>
        <FlashSale />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <BestSales />
      </section>
      <section>
        <Explore />
      </section>
      <section>
        <NewArrival />
      </section>
      <section>
        <Service />
      </section>
    </main>
  );
}
