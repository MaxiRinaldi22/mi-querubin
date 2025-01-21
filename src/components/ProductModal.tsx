"use client";

import { useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

import { ProductType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductModalProps {
  product: ProductType;
  onClose: () => void;
  onAddToCart: (product: ProductType) => void;
}

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="flex h-auto max-h-[90vh] w-full flex-col sm:max-w-[90vw] lg:max-w-[1000px] xl:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold md:text-3xl">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-grow flex-col gap-6 md:flex-row md:gap-8">
          <div className="relative aspect-square w-full md:aspect-[4/3] md:w-2/3 lg:aspect-[16/9]">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="contain"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 text-secondaryColor -translate-y-1/2 transform border-none bg-transparent shadow-none transition-all duration-500 hover:scale-150 hover:bg-transparent"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 text-secondaryColor -translate-y-1/2 transform border-none bg-transparent shadow-none transition-all duration-500 hover:scale-150 hover:bg-transparent"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentImageIndex ? "bg-secondaryColor" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col md:w-1/3">
            <DialogDescription>
              <p className="mb-4 text-3xl font-extrabold text-secondaryColor md:text-4xl">
                ${product.price.toFixed(2)}{" "}
                <span className="md:text-xl text-lg font-semibold text-gray-500">UYU</span>
              </p>
              <p className="mb-4 text-xl">Categoria: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
              <p className="mb-6 text-base">{product.description}</p>
            </DialogDescription>
            <Button
              onClick={() => onAddToCart(product)}
              className="mt-auto w-full bg-secondaryColor py-6 text-lg"
            >
              <ShoppingCart className="mr-2 h-6 w-6" /> Añadir al carrito
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
