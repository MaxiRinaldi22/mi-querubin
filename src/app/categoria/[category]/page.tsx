import ProductList from "@/app/components/ProductsList"
import { AllProducts } from "@/lib/allProducts"


export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.toLowerCase()
  const filteredProducts = AllProducts.filter(product => product.category === category)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p className="text-xl text-gray-600">No products found in the {category} category.</p>
      )}
    </div>
  )
}

