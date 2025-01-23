"use client";

import useCartInfo from "@/hooks/useCartInfo";
import { CartTimeLine } from "@/components/CartTImeLine";
import { NoProductsInCart } from "@/components/NoProductsInCart";

export default function CheckoutPage() {
  const { cartInfo } = useCartInfo();

  return (
    <section className="container mx-auto min-h-screen p-4">
      {cartInfo.length === 0 ? <NoProductsInCart /> : <CartTimeLine step={2} />}
    </section>
  );
}
