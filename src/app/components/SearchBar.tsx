"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import useTop from "@/hooks/useTop";
import { AllProducts } from "@/lib/allProducts";
import { ProductType } from "@/lib/types";

// Mock product data for search results
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
      const filteredResults = AllProducts.filter((product) =>
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
            className="w-full border-2 outline-none border-primaryColor bg-[#f4f4f4] px-3 py-2 rounded-full"
          />
          <button
            type="submit"
            className="absolute bg-primaryColor center px-4 right-0 top-0 h-full rounded-tr-full rounded-br-full"
          >
            <Search className="h-5 w-5 text-[#f4f4f4] " />
          </button>
        </div>
      </form>
      {isResultsVisible && searchResults.length > 0 && (
        <Card className="absolute z-[100] w-full mt-1 max-h-96 overflow-auto">
          <CardContent className="p-2 bg-[#f4f4f4]">
            {searchResults.map((product : ProductType) => (
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
