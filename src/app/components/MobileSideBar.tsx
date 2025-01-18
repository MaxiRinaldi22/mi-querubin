'use client'

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/const"
import SearchBar from "./SearchBar"
import Link from 'next/link'



export default function MobileSidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
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
                  <Link href={`/category/${category.toLowerCase()}`}>
                    <Button variant="ghost" className="w-full justify-start" onClick={onClose}>
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
  )
}

