"use client";

import { useEffect, useState } from "react";

import { AllProducts } from "@/lib/allProducts";
import { ProductType } from "@/lib/types";
import ProductList from "@/components/ProductsList";

export default function Productos() {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const products = AllProducts.filter(
        (product) => !inStockOnly || product.stock !== 0,
      );

      setFilteredProducts(products);
      setFilteredProducts(products);
    }

    fetchData();
  }, [inStockOnly]);

  return (
    <section className="bg-white">
      <div className="container mx-auto min-h-screen px-4 py-8">
        <h1 className="mb-8 border-l-2 border-primaryColor pl-4 text-3xl font-bold capitalize md:text-4xl">
          Todos los productos
        </h1>

        <div className="mb-4 flex items-center space-x-2">
          <input
            type="checkbox"
            id="stock"
            name="stock"
            className="h-4 w-4 bg-secondaryColor"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          <label
            htmlFor="stock"
            className="text-base font-semibold text-gray-900"
          >
            Mostrar solo productos en stock
          </label>
        </div>

        <ProductList products={filteredProducts} />
      </div>
    </section>
  );
}
