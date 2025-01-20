"use client";

import { useState } from "react";
import Link from "next/link";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics" },
  { name: "Clothing" },
  { name: "Books" },
  { name: "Home & Garden" },
  { name: "Toys" },
];

export default function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-white border-r border-gray-200 w-full md:w-64 md:min-h-screen">
      <div className="p-4">
        <Button
          variant="outline"
          className="w-full md:hidden flex items-center justify-between mb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          Categories
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
        <div className={`space-y-2 ${isOpen ? "block" : "hidden md:block"}`}>
          <h2 className="text-lg font-semibold mb-4 hidden md:block">
            Categories
          </h2>
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={
                selectedCategory === category.name ? "secondary" : "ghost"
              }
              className="w-full justify-start text-left hover:bg-gray-100 transition-colors"
              onClick={() => setSelectedCategory(category.name)}
            >
              <Link
                href={`/category/${category.name.toLowerCase()}`}
                className="flex items-center w-full"
              >
                <span>{category.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
