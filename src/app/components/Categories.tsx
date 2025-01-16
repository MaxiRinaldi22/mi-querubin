"use client";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/const";
import Link from "next/link";


export default function Categories() {
  return (
    <nav className=" border-y bg-[#f4f4f4] border-[#E7E7E7] hidden md:block">
      <div className="container mx-auto px-4">
        <ul className="center space-x-4 py-2">
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/category/${category.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className="w-full md:w-auto justify-start"
                >
                  {category}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
