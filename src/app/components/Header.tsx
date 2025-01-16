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
    <header className="bg-[#f4f4f4] shadow-md md:shadow-none p-3">
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
            className="md:hidden flex"
          />
        </Link>
        <div className="hidden md:block flex-1 max-w-xl">
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <Button
              variant="outline"
              className="hidden  md:center border-none bg-transparent shadow-none"
            >
              <ShoppingCart className="h-10 w-10 md:center " />
            </Button>
          </Link>
          <div className="md:hidden flex items-center space-x-2">
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
