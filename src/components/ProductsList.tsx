"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();
  const { cartInfo, setCartInfo } = useCartInfo();

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: ProductType) => {
    // Si el producto ya esta en el carrito manda una notificacion si no esta lo agrega
    if (cartInfo.find((item) => item.product.id === product.id)) {
      toast({
        title: "Este producto ya está en tu carrito",
        duration: 2000,
        variant: "destructive",
      });
    } else {
      const updatedCart = [...cartInfo, { product, quantity: 1 }];
      setCartInfo(updatedCart);

      toast({
        title: "Product added to cart",
        description: `${product.name} has been added to your cart.`,
        duration: 2000,
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
