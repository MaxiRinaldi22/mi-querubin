import Hero from './components/Hero'
import MainProducts from './components/MainProducts'
import ProductList from './components/ProductsList'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-8 overflow-hidden">
        <MainProducts />
        
        <ProductList />
      </div>
    </>
  )
}

