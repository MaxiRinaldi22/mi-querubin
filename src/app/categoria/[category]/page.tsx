"use client";

import { useEffect, useState } from "react";

import { AllProducts } from "@/lib/allProducts";
import { ProductType } from "@/lib/types";
import ProductList from "@/components/ProductsList";

interface Props {
  params: Promise<{ category: string }>;
}

export default function CategoryPage(props: Props) {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { category: categoryParam } = await props.params;
      const category = categoryParam.toLowerCase();

      const products = AllProducts.filter(
        (product) =>
          product.category === category &&
          (!inStockOnly || product.stock !== 0),
      );

      setFilteredProducts(products);
      setCategory(category);
      setFilteredProducts(products);
    }

    fetchData();
  }, [props.params, inStockOnly]);

  return (
    <section className="bg-white">
      <div className="container mx-auto min-h-screen px-4 py-8">
        <div className="flex w-full flex-col items-start justify-start md:items-start md:justify-start">
          <h1 className="mb-8 border-l-2 border-primaryColor pl-4 text-3xl font-bold capitalize md:text-4xl">
            {category.replaceAll("%20", " ")}
          </h1>
        </div>

        {filteredProducts.length > 0 ? (
          <>
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
          </>
        ) : (
          <p className="text-xl text-gray-600">
            No se encontraron productos en la categoria{" "}
            {category.replaceAll("%20", " ")}.
          </p>
        )}
      </div>
    </section>
  );
}
