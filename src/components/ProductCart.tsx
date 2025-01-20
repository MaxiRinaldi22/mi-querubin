"use client"

import { useState } from "react"
import Image from "next/image"
import { Info, ShoppingCart } from "lucide-react"
import type { ProductType } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductCardProps {
  product: ProductType
  onProductClick: (product: ProductType) => void
  onAddToCart: (product: ProductType) => void
}

export default function ProductCard({ product, onProductClick, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative flex h-full flex-col cursor-pointer overflow-hidden border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
     
    >
      <CardHeader  className="relative p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
           onClick={() => onProductClick(product)}
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-out group-hover:scale-105"
          />
         
        </div>
        <div
          className={`absolute bottom-4 left-4 right-4 flex justify-between transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <Button
            onClick={() => onProductClick(product)}
            className="rounded-full bg-white/90 p-2 text-gray-800 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#74ffeb]"
            size="icon"
            variant="secondary"
          >
            <Info className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => onAddToCart(product)}
            className="rounded-full bg-[#74ffeb]/90 p-2 text-gray-800 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-[#74ffeb]"
            size="icon"
            variant="secondary"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent  onClick={() => onProductClick(product)} className="flex flex-grow flex-col justify-between p-6">
        <div>
          <CardTitle className="mb-2 text-lg font-medium tracking-tight text-gray-900 transition-colors duration-300">
            {product.name}
          </CardTitle>
        </div>
        <div  className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)} <span className="text-sm font-normal text-gray-500">UYU</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

