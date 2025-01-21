"use client";

import Link from "next/link";

import useCartInfo from "@/hooks/useCartInfo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CartItem({children} : {children: React.ReactNode}) {
  const { cartInfo } = useCartInfo();

  return (
    <>
      <Link href="/cart">
        <button className="md:center relative hidden p-2">
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
          {cartInfo.length > 0 ? (
            <Badge
              variant="destructive"
              className="absolute -right-1 -top-1 rounded-full bg-secondaryColor px-2 py-1 text-xs"
            >
              {cartInfo.length}
            </Badge>
          ) : (
            <Badge
              variant="destructive"
              className="absolute -right-1 -top-1 rounded-full bg-secondaryColor px-2 py-1 text-xs"
            >
              0
            </Badge>
          )}
        </button>
      </Link>

      <div className="flex items-center space-x-2 md:hidden">
        <Link href="/cart">
          <Button variant="ghost" size="icon" className="relative p-2">
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
            {cartInfo.length > 0 ? (
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 rounded-full bg-secondaryColor px-2 py-1 text-xs"
              >
                {cartInfo.length}
              </Badge>
            ) : (
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 rounded-full bg-secondaryColor px-2 py-1 text-xs"
              >
                0
              </Badge>
            )}
          </Button>
        </Link>
        {children}
      </div>
    </>
  );
}
