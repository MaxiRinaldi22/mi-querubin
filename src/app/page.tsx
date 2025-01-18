import { OutstandingProducts } from "@/lib/const";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import MainProducts from "./components/OutstandingProducts";
import ProductList from "./components/ProductsList";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full overflow-hidden ">
        <MainProducts />
        <ProductList products={OutstandingProducts}/>
        <AboutUs />
      </div>

    </>
  );
}
