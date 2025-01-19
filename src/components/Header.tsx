"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SearchBar from "./SearchBar";
import MobileSidebar from "./MobileSideBar";
import Image from "next/image";
import logo from "/public/mi-quierubin-logo-m-04.png";
import { Icon } from "@/lib/Icon";

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
          <Link href="/cart">
            <button className="hidden md:center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 256 256"
              >
                <path
                  fill="#74ffeb"
                  d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m88 168H40V80h40v16a8 8 0 0 0 16 0V80h64v16a8 8 0 0 0 16 0V80h40Z"
                ></path>
              </svg>
            </button>
          </Link>
          <div className="flex items-center space-x-2 md:hidden">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </Link>
            <button onClick={() => setIsSidebarOpen(true)}>
              <Icon
                size={26}
                path={
                  <path
                    fill="none"
                    stroke="#003b73"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M7 12h13m-10 6h10"
                  />
                }
              />
            </button>
          </div>
        </div>
      </div>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
}
