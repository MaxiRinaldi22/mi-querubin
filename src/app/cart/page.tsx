"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Minus, Plus } from "lucide-react";

import { Icon } from "@/lib/Icon";
import type { ProductCartType } from "@/lib/types";
import useCartInfo from "@/hooks/useCartInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { OutOfStockModal } from "./components/out-of-stock-modal";
import { RemoveFromCartModal } from "./components/remove-from-cart-modal";
import { ConfirmOutOfStockModal } from "./components/confirm-out-of-stock-modal";
import { useRouter } from "next/navigation";

export default function Cart() {
  const router = useRouter();
  const { cartInfo, setCartInfo } = useCartInfo();
  const [cart, setCart] = useState<ProductCartType[]>(cartInfo);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOutOfStockModalOpen, setIsOutOfStockModalOpen] = useState(false);
  const [isConfirmOutOfStockModalOpen, setIsConfirmOutOfStockModalOpen] = useState(false)

  const handleRemoveClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmRemove = (item: ProductCartType) => {
    removeFromCart(item.product.id);
    setIsModalOpen(false);
  };

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

  const hasOutOfStockItems = cart.some((item) => item.product.stock === 0)

  const handleProceedToCheckout = () => {
    if (hasOutOfStockItems) {
      setIsConfirmOutOfStockModalOpen(true)
    } else {
      router.push("/checkout")
    }
  }


  return (
    <div className="container mx-auto min-h-screen p-4">
      {/* ACA TIENE QUE IR EL HEADER DEL CARITO PRODUCTOS > CHEACK OUT > FINALIZAR COMPRA  */}
      {cart.length === 0 ? (
        <section className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#D3D3D4">
              <path
                stroke-linecap="round"
                d="M8 12V8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"
              />
              <path d="M3.694 12.668c.145-1.741.218-2.611.792-3.14S5.934 9 7.681 9h8.639c1.746 0 2.62 0 3.194.528s.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843c-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323s-.255-.83-.17-1.843z" />
            </g>
          </svg>
          <p className="text-base font-[600] text-neutral-500">
            No hay productos en el carrito
          </p>
          <button className="mt-8 rounded-lg bg-secondaryColor px-5 py-3 font-bold text-white transition duration-300 hover:bg-[#34383d]">
            <Link href={"/productos"}>VOLVER A LA TIENDA</Link>
          </button>
        </section>
      ) : (
        <>
          {/* Desktop Table Header - Hidden on Mobile */}
          <div className="hidden md:mb-4 md:grid md:grid-cols-[1fr_auto_auto_auto_auto] md:gap-4 md:px-4">
            <div className="text-sm font-medium text-muted-foreground">
              Producto
            </div>
            <div className="w-[100px] text-center text-sm font-medium text-muted-foreground">
              Precio
            </div>
            <div className="w-[140px] text-center text-sm font-medium text-muted-foreground">
              Cantidad
            </div>
            <div className="w-[100px] text-center text-sm font-medium text-muted-foreground">
              Total
            </div>
            <div className="w-[100px] text-center text-sm font-medium text-muted-foreground"></div>
          </div>

          {/* Cart Items */}
          <div className="space-y-2">
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
                  <h3 className="text-center text-base font-medium md:text-left">
                    {item.product.name}
                  </h3>
                  {item.product.stock === 0 && (
                    <Icon
                    path={
                      <g fill="none">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="#eab308"
                          d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"
                        ></path>
                      </g>
                    }
                    size={24}
                  />
                  )}
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
                        Number.parseInt(e.target.value) || 0,
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
                    onClick={handleRemoveClick}
                  >
                    Eliminar
                  </Button>
                </div>
                <RemoveFromCartModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onConfirm={() => handleConfirmRemove(item)}
                  productName={item.product.name}
                />
              </div>
            ))}
          </div>

          {/* Cart Total and Checkout */}
          <div className="mt-4 flex flex-col items-center justify-end  text-right">
            <div className="flex w-full items-center justify-end">
              <p className="mr-4 text-xl font-bold">
                Total: ${total.toFixed(2)}
              </p>
              <div>
                {hasOutOfStockItems && (
                  <div className="rounded-md border-l-2 border-yellow-500 bg-yellow-100 p-1 text-yellow-700">
                    <button
                      className="bg-transparent text-yellow-500 shadow-none flex"
                      onClick={() => setIsOutOfStockModalOpen(true)}
                    >
                      <Icon
                        path={
                          <g fill="none">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                            <path
                              fill="#eab308"
                              d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"
                            ></path>
                          </g>
                        }
                        size={24}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 16l4-4-4-4" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex justify-end items-center my-1">

            <Button className="mt-2" onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
            </div>
          </div>
        </>
      )}
      <OutOfStockModal
        isOpen={isOutOfStockModalOpen}
        onClose={() => setIsOutOfStockModalOpen(false)}
      />
        <ConfirmOutOfStockModal
        isOpen={isConfirmOutOfStockModalOpen}
        onClose={() => setIsConfirmOutOfStockModalOpen(false)}
      />
    </div>
  );
}
