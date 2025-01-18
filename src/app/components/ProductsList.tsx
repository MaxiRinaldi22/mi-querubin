'use client'

import { useState } from 'react'
import ProductModal from './ProductModal'
import ProductCard from './ProductCart'
import { useToast } from '@/hooks/use-toast'
import { ProductType } from '@/lib/types'


interface ProductListProps {
  products: ProductType[]
}

export default function ProductList({ products }: ProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const { toast } = useToast()

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product)
  }

  const handleAddToCart = (product: ProductType) => {
    toast({
      title: "Product added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
    </div>
  )
}

