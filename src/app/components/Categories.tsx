"use client";

import { categories } from "@/lib/const";
import Link from "next/link";

export default function Categories() {
  return (
    <nav className="hidden border-y py-2 border-[#E7E7E7] bg-[#f4f4f4] md:block">
      <div className="container mx-auto px-4">
        <ul className="center space-x-4 py-2">
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/categoria/${category.toLowerCase()}`}>
                <button className="w-full justify-start text-black md:w-auto">
                  {category}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
