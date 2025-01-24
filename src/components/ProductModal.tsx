"use client";

import { useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

import { Icon } from "@/lib/Icon";
import { ProductType } from "@/lib/types";
import { useIsMobile } from "@/hooks/use-mobile";
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
  const isMobile = useIsMobile();

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
      <DialogContent className="flex h-auto min-h-screen w-full flex-col overflow-auto p-5 sm:max-w-[90vw] md:min-h-[50vh] lg:max-w-[1000px] xl:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle className="text-start text-2xl font-bold md:text-3xl">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-grow flex-col gap-1 md:flex-row md:gap-8">
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
              className="absolute left-0 top-1/2 -translate-y-1/2 transform border-none bg-transparent text-secondaryColor shadow-none transition-all duration-500 hover:scale-150 hover:bg-transparent"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 transform border-none bg-transparent text-secondaryColor shadow-none transition-all duration-500 hover:scale-150 hover:bg-transparent"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentImageIndex
                      ? "bg-secondaryColor"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col md:w-1/3">
            <DialogDescription>
              <p className="text-3xl font-extrabold text-secondaryColor md:mb-1 md:text-4xl">
                ${product.price.toFixed(2)}{" "}
                <span className="text-lg font-semibold text-gray-500 md:text-xl">
                  UYU
                </span>
              </p>
              <p className="mb-4 text-lg md:text-xl">
                Categoria:{" "}
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </p>
              <p className="mb-6 text-base">{product.description}</p>
              {product.stock === 0 && (
                <div className="my-4 rounded-md border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-700">
                  <div className="flex items-center gap-2">
                    <Icon
                      path={
                        <g fill="none">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                          <path
                            fill="#eab308"
                            d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"
                          ></path>
                        </g>
                      }
                      size={24}
                    />
                    <p className="font-bold">Producto bajo pedido</p>
                  </div>
                  {!isMobile && (
                    <p className="mt-2 text-sm">
                      Actualmente, este producto no está en stock. Podemos
                      fabricarlo especialmente para ti. Por favor, ten en cuenta
                      que el tiempo de entrega será mayor debido al proceso de
                      producción. ¡Gracias por tu paciencia y comprensión!
                    </p>
                  )}
                </div>
              )}
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
