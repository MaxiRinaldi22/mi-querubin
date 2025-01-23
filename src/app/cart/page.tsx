"use client";

import useCartInfo from "@/hooks/useCartInfo";
import { NoProductsInCart } from "@/components/NoProductsInCart";

import { CartContent } from "./components/CartContent";

export default function Cart() {
  const { cartInfo } = useCartInfo();

  return (
    <div className="container mx-auto min-h-screen p-4">
      {cartInfo.length === 0 ? <NoProductsInCart /> : <CartContent />}
    </div>
  );
}
