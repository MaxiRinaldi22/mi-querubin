"use client";

import useCartInfo from "@/hooks/useCartInfo";
import { NoProductsInCart } from "@/app/cart/components/NoProductsInCart";

import { CartContent } from "./components/CartContent";

export default function Cart() {
  const { cartInfo } = useCartInfo();

  return <>{cartInfo.length === 0 ? <NoProductsInCart /> : <CartContent />}</>;
}
