import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primaryColor">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">Your trusted source for quality products at great prices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-600 hover:text-primary">Products</Link></li>
              <li><Link href="/categories" className="text-gray-600 hover:text-primary">Categories</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

