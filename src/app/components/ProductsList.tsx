'use client'

import { useState } from 'react'
import ProductModal from './ProductModal'
import { useToast } from '@/hooks/use-toast'
import ProductCard from './ProductCart'

// Mock product data
const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/placeholder.svg', description: 'This is a detailed description of Product 1.' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/placeholder.svg', description: 'This is a detailed description of Product 2.' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/placeholder.svg', description: 'This is a detailed description of Product 3.' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/placeholder.svg', description: 'This is a detailed description of Product 4.' },
  { id: 5, name: 'Product 5', price: 59.99, image: '/placeholder.svg', description: 'This is a detailed description of Product 5.' },
  { id: 6, name: 'Product 6', price: 69.99, image: '/placeholder.svg', description: 'This is a detailed description of Product 6.' },
]

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { toast } = useToast()

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleAddToCart = (product) => {
    toast({
      title: "Product added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className='pt-10'>
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

