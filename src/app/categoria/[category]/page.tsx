import { AllProducts } from "@/lib/allProducts";
import ProductList from "@/components/ProductsList";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage(props: Props) {
  const { category: categoryParam } = await props.params;
  const category = categoryParam.toLowerCase();
  const filteredProducts = AllProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p className="text-xl text-gray-600">
          No products found in the {category} category.
        </p>
      )}
    </div>
  );
}
