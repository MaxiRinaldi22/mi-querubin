import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Info } from 'lucide-react'

export default function ProductCard({ product, onProductClick, onAddToCart }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 sm:h-56">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="mb-2">{product.name}</CardTitle>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 flex flex-col gap-2">
        <Button onClick={() => onProductClick(product)} className="w-full" variant="outline">
          <Info className="mr-2 h-4 w-4" /> More Info
        </Button>
        <Button onClick={() => onAddToCart(product)} className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

