"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import useTop from "@/hooks/useTop";

// Mock product data for search results
const products = [
  { id: 1, name: "Laptop", price: 999.99, image: "/placeholder.svg" },
  { id: 2, name: "Smartphone", price: 599.99, image: "/placeholder.svg" },
  { id: 3, name: "Headphones", price: 149.99, image: "/placeholder.svg" },
  { id: 4, name: "Tablet", price: 399.99, image: "/placeholder.svg" },
  { id: 5, name: "Smartwatch", price: 249.99, image: "/placeholder.svg" },
];

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const router = useRouter();
  const searchRef = useRef(null);
  const isTop = useTop();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsResultsVisible(true);
    } else {
      setSearchResults([]);
      setIsResultsVisible(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!isTop) {
      setSearchResults([]);
    }
  }, [isTop]);

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 outline-none border-primaryColor bg-[#f4f4f4] px-3 py-2 rounded-md"
          />
          <button
            type="submit"
            className="absolute bg-primaryColor center px-4 right-0 top-0 h-full rounded-tr-md rounded-br-md"
          >
            <Search className="h-4 w-4 text-white " />
          </button>
        </div>
      </form>
      {isResultsVisible && searchResults.length > 0 && (
        <Card className="absolute z-[100] w-full mt-1 max-h-96 overflow-auto">
          <CardContent className="p-2">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="flex items-center space-x-4 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="relative w-12 h-12">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
