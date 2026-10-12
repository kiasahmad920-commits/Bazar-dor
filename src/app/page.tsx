import AllProducts from "@/components/priceProducts/AllProducts";
import PriceDownProducts from "@/components/priceProducts/PriceDownProducts";
import PriceUpProducts from "@/components/priceProducts/PriceUpProducts";
import Hero from "@/components/sheard/Hero";

export default function Home() {
  return (
    <div className="my-8 grid gap-10">
      <Hero />
      <PriceUpProducts />
      <PriceDownProducts />
      <AllProducts />
    </div>
  );
}
