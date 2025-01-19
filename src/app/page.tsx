import { OutstandingProducts } from "@/lib/const";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import MainProducts from "../components/OutstandingProducts";
import ProductList from "@/components/ProductsList";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full overflow-hidden">
        <MainProducts />
        <div className="bg-white px-5 py-14 md:px-48 md:py-32">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Destacados</h2>
          <ProductList products={OutstandingProducts} />
        </div>
        <AboutUs />
      </div>
    </>
  );
}
