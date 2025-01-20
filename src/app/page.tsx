import { OutstandingProducts } from "@/lib/const";
import ProductList from "@/components/ProductsList";

import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import MainProducts from "../components/OutstandingProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full overflow-hidden">
        <MainProducts />
        <div className="bg-white px-5 py-14 md:px-48 md:py-32">
          <h2 className="mb-8 border-l-2 border-[#74ffeb] pl-4 text-3xl font-bold md:text-4xl">
            Destacados
          </h2>

          <ProductList products={OutstandingProducts} />
        </div>
        <AboutUs />
      </div>
    </>
  );
}
