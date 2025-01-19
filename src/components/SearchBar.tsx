"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import useTop from "@/hooks/useTop";
import { AllProducts } from "@/lib/allProducts";
import { ProductType } from "@/lib/types";
import ProductModal from "./ProductModal";
import { toast } from "@/hooks/use-toast";
import useCartInfo from "@/hooks/useCartInfo";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );
  const router = useRouter();
  const searchRef = useRef(null);
  const isTop = useTop();
  const { cartInfo, setCartInfo } = useCartInfo();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !(searchRef.current as HTMLElement).contains(
          event.target as Node | null,
        )
      ) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filteredResults = AllProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(filteredResults);
      setIsResultsVisible(true);
    } else {
      setSearchResults([]);
      setIsResultsVisible(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!isTop) {
      setSearchResults([]);
    }
  }, [isTop]);

  const handleClickProduct = (product: ProductType) => {
    setSearchQuery("");
    router.push(`/categoria/${product.category}`);
    setSearchResults([]);
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
      <div className="relative" ref={searchRef}>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border-2 border-primaryColor bg-[#f4f4f4] px-3 py-2 outline-none"
            />
            <button
              type="submit"
              className="center absolute right-0 top-0 h-full rounded-br-full rounded-tr-full bg-primaryColor px-4"
            >
              <Search className="h-5 w-5 text-[#f4f4f4]" />
            </button>
          </div>
        </form>
        {isResultsVisible && searchResults.length > 0 && (
          <Card className="absolute z-[100] mt-1 max-h-96 w-full overflow-auto">
            <CardContent className="bg-[#f4f4f4] p-2">
              {searchResults.map((product: ProductType) => (
                <button
                  onClick={() => handleClickProduct(product)}
                  key={product.id}
                  className="group flex cursor-pointer items-center space-x-4 p-2"
                >
                  <div className="relative h-12 w-12">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300 group-hover:scale-125"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        )}
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
