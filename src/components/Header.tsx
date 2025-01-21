"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/lib/Icon";

import { CartItem } from "./CartItem";
import MobileSidebar from "./MobileSideBar";
import SearchBar from "./SearchBar";
import logo from "/public/mi-quierubin-logo-m-04.png";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-[#f4f4f4] p-3 shadow-md md:shadow-none">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src={logo}
            alt="Mi quierubin logo"
            width={150}
            height={150}
            className="hidden md:flex"
          />
          <Image
            src={logo}
            alt="Mi quierubin logo"
            width={110}
            height={110}
            className="flex md:hidden"
          />
        </Link>
        <div className="hidden max-w-xl flex-1 md:block">
          <SearchBar />
        </div>

        <div className="center">
          <CartItem>
            <button onClick={() => setIsSidebarOpen(true)}>
              <Icon
                size={26}
                path={
                  <path
                    fill="none"
                    stroke="#74ffeb"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M7 12h13m-10 6h10"
                  />
                }
              />
            </button>
          </CartItem>
        </div>
      </div>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
}
