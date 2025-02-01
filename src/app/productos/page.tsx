import { AllProducts } from "@/lib/allProducts";
import ProductList from "@/components/ProductsList";


export default async function Productos() {

  return (
    <section className="bg-white">

    <div className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">Todos los productos</h1>
        <ProductList products={AllProducts} />
    </div>
    
    </section>
  );
}
