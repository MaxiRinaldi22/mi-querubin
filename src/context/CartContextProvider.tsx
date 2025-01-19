"use client";

import { ProductCartType } from "@/lib/types";
import { createContext, useState } from "react";

type cartContextType = {
  cartInfo: ProductCartType[];
  setCartInfo: React.Dispatch<React.SetStateAction<ProductCartType[]>>;
};

const CartContext = createContext<cartContextType | null>(null);

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [cartInfo, setCartInfo] = useState<ProductCartType[]>([]);

  return (
    <CartContext.Provider value={{ cartInfo, setCartInfo }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
