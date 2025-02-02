"use client";

import Image from "next/image";

import { Info, ShoppingCart } from "lucide-react";

import type { ProductType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  product: ProductType;
  onProductClick: (product: ProductType) => void;
  onAddToCart: (product: ProductType) => void;
}

export default function ProductCard({
  product,
  onProductClick,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="group relative flex h-full cursor-pointer flex-col overflow-hidden hover:border-secondaryColor hover:border-2 border-2 border-transparent  bg-secondaryColor/5 transition-colors duration-500  hover:shadow-lg">
      <CardHeader className="relative p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            onClick={() => onProductClick(product)}
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform will-change-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-4 left-1 right-1 md:left-4 md:right-4 flex justify-between transition-opacity duration-300">
          <Button
            onClick={() => onProductClick(product)}
            className="rounded-full bg-white/90 p-2 text-secondaryColor shadow-md backdrop-blur-sm transition-all duration-300 hover:text-primaryColor hover:bg-secondaryColor"
            size="icon"
            variant="secondary"
          >
            <Info className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => onAddToCart(product)}
            className="rounded-full bg-secondaryColor p-2 text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-primaryColor hover:text-secondaryColor"
            size="icon"
            variant="secondary"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent
        onClick={() => onProductClick(product)}
        className="flex flex-grow flex-col p-2 justify-between md:p-6"
      >
        <div>
          <CardTitle className="mb-2 text-lg font-semibold tracking-tight text-gray-900 ">
            {product.name}
          </CardTitle>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-extrabold text-secondaryColor">
            ${product.price.toFixed(2)}{" "}
            <span className="text-sm font-semibold text-gray-500">UYU</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
