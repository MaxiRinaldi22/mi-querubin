"use client";

import Link from "next/link";

import { categories } from "@/lib/const";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import SearchBar from "./SearchBar";

export default function MobileSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] py-10">
        <div className="py-4">
          <div className="mb-4">
            <SearchBar />
          </div>
          <nav>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link href={`/categoria/${category.toLowerCase()}`}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={onClose}
                    >
                      {category}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
