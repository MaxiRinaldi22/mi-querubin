"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { AllProducts } from "@/lib/allProducts";
import { ProductType } from "@/lib/types";
import ProductList from "@/components/ProductsList";

export function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (typeof q === "string") {
      const filteredProducts = AllProducts.filter((product) =>
        product.name.toLowerCase().includes(q.toLowerCase()),
      );
      setProducts(filteredProducts);
    }
  }, [q]);

  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold capitalize">
        Resultados de búsqueda para &quot;{q}&quot;
      </h1>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p className="text-xl text-gray-600">
          No se encontraron productos para la búsqueda &quot;{q}&quot;.
        </p>
      )}
    </div>
  );
};

