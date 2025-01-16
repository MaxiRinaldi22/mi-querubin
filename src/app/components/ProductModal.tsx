import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ShoppingCart } from 'lucide-react'

export default function ProductModal({ product, onClose, onAddToCart }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="relative h-64 my-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <DialogDescription>
          <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
        </DialogDescription>
        <div className="mt-4">
          <Button onClick={() => onAddToCart(product)} className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

