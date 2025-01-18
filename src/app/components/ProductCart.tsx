import Image from "next/image";
import { ShoppingCart, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/lib/types";

interface ProductCardProps {
  product: ProductType
  onProductClick: (product: ProductType) => void
  onAddToCart: (product: ProductType) => void
}

export default function ProductCard({
  product,
  onProductClick,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <CardHeader className="relative p-0">
        <div className="relative h-56">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="px-5 md:px-10"
          />
          <Button
            onClick={() => onAddToCart(product)}
            className="absolute right-2 top-2 rounded-full bg-primaryColor p-2"
            size="icon"
            variant="secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Add to Cart</span>
          </Button>
          <Button
            onClick={() => onProductClick(product)}
            className="absolute right-2 top-14 rounded-full p-2"
            size="icon"
            variant="secondary"
          >
            <Info className="h-4 w-4" />
            <span className="sr-only">Add to Cart</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col justify-between p-4">
        <div>
          <CardTitle className="mb-2 font-[400] tracking-wide line-clamp-2">{product.name}</CardTitle>
          <p className="font-extrabold tracking-wide ">

          ${product.price.toFixed(2)} UYU
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
