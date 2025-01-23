"use client";

import { useState } from "react";

import { useNotification } from "@/context/NotificationContextProvider";

import { ProductType } from "@/lib/types";
import useCartInfo from "@/hooks/useCartInfo";

import ProductCard from "./ProductCart";
import ProductModal from "./ProductModal";

interface ProductListProps {
  products: ProductType[];
}

export default function ProductList({ products }: ProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );
  const { cartInfo, setCartInfo } = useCartInfo();
  const { addNotification } = useNotification();
  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: ProductType) => {
    // Si el producto ya esta en el carrito manda una notificacion si no esta lo agrega
    if (cartInfo.find((item) => item.product.id === product.id)) {
      addNotification({
        id: product.name, // TODO cambiar esto por el id tipo sku
        name: product.name,
        image: product.images[0],
      });
    } else {
      const updatedCart = [...cartInfo, { product, quantity: 1 }];
      setCartInfo(updatedCart);

      addNotification({
        id: product.name, // TODO cambiar esto por el id tipo sku
        name: product.name,
        image: product.images[0],
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}
