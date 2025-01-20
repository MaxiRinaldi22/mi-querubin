"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Minus, Plus } from "lucide-react";

import { ProductCartType } from "@/lib/types";
import useCartInfo from "@/hooks/useCartInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Cart() {
  const { cartInfo, setCartInfo } = useCartInfo();
  const [cart, setCart] = useState<ProductCartType[]>(cartInfo);

  console.log(cart);

  useEffect(() => {
    setCartInfo(cart);
  }, [cart, setCartInfo]);

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(0, newQuantity) }
          : item,
      ),
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="container mx-auto min-h-screen p-4">
      <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Desktop Table Header - Hidden on Mobile */}
          <div className="hidden md:mb-4 md:grid md:grid-cols-[1fr_auto_auto_auto_auto] md:gap-4 md:px-4">
            <div className="text-sm font-medium text-muted-foreground">
              Product
            </div>
            <div className="w-[100px] text-center text-sm font-medium text-muted-foreground">
              Price
            </div>
            <div className="w-[140px] text-center text-sm font-medium text-muted-foreground">
              Quantity
            </div>
            <div className="w-[100px] text-center text-sm font-medium text-muted-foreground">
              Total
            </div>
            <div className="w-[100px] text-center text-sm font-medium text-muted-foreground">
              Action
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col rounded-lg border p-4 md:grid md:grid-cols-[1fr_auto_auto_auto_auto] md:items-center md:gap-4"
              >
                {/* Product Info */}
                <div className="mb-4 flex flex-col items-center gap-4 md:mb-0 md:flex-row md:items-center">
                  <div className="relative h-24 w-24">
                    <Image
                      src={item.product.images[0] || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium md:text-left">
                    {item.product.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-4 flex justify-between text-center md:mb-0 md:block md:w-[100px]">
                  <span className="text-sm text-muted-foreground md:hidden">
                    Price:
                  </span>
                  <span className="font-medium">
                    ${item.product.price.toFixed(2)}
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="mb-4 flex items-center justify-center gap-2 md:mb-0 md:w-[140px]">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                  >
                    <Minus className="h-3 w-3" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <Input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.product.id,
                        parseInt(e.target.value) || 0,
                      )
                    }
                    className="h-8 w-14 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                  >
                    <Plus className="h-3 w-3" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>

                {/* Subtotal */}
                <div className="mb-4 flex justify-between text-center md:mb-0 md:block md:w-[100px]">
                  <span className="text-sm text-muted-foreground md:hidden">
                    Total:
                  </span>
                  <span className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                {/* Remove Button */}
                <div className="text-center md:w-[100px]">
                  <Button
                    variant="destructive"
                    size="sm"
                    className="w-full md:w-auto"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total and Checkout */}
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Button className="mt-2">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
}
