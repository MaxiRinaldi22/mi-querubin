"use client";

import Link from "next/link";

import { categories } from "@/lib/const";
import useTop from "@/hooks/useTop";

import { CartItem } from "./CartItem";

export default function Categories() {
  const isTop = useTop();

  return (
    <nav className="hidden border-y border-secondaryColor bg-white py-2 text-secondaryColor md:flex md:items-center md:justify-between">
      <div className="container mx-auto flex items-center justify-between">
        {/* Primer Div */}
        <div className="flex flex-1 justify-start">
          {/* Aquí puedes añadir contenido adicional si lo necesitas */}
        </div>

        {/* Categorías (ocupa la mayor parte del espacio) */}
        <div className="flex-[3]">
          <ul className="flex items-center justify-center space-x-4 py-2">
            {categories.map((category) => (
              <li key={category} className="flex items-center gap-3">
                <Link href={`/categoria/${category.toLowerCase()}`}>
                  <button className="text-base font-semibold transition duration-500 will-change-transform hover:scale-105">
                    {category}
                  </button>
                </Link>
                {category !== "Colgantes" ? (
                  <p className="text-primaryColor">|</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        {/* Último Div */}
        <div
          className={`flex flex-1 items-center justify-end transition-all duration-300 ${
            isTop ? "opacity-0" : "opacity-100"
          }`}
        >
          <CartItem>
            <></>
          </CartItem>
        </div>
      </div>
    </nav>
  );
}
