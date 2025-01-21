"use client";

import Link from "next/link";

import { categories } from "@/lib/const";
import useTop from "@/hooks/useTop";

import { CartItem } from "./CartItem";

export default function Categories() {
  const isTop = useTop();

  return (
    <nav className="hidden border-y border-[#E7E7E7] bg-[#f4f4f4] py-2 text-secondaryColor md:flex md:items-center md:justify-between md:px-[183px]">
      <div></div>
      <div className="  ">
        <ul className="center space-x-4 py-2">
          {categories.map((category) => (
            <li key={category} className="center gap-3">
              <Link href={`/categoria/${category.toLowerCase()}`}>
                <button className="w-full justify-start text-base font-semibold md:w-auto">
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
      <div className={`hidden  transition-all duration-300 md:flex md:items-center md:justify-end ${isTop ? "opacity-0" : "opacity-100"}`}>
        <CartItem>
          <></>
        </CartItem>
      </div>
    </nav>
  );
}
