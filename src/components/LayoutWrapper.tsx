"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { CartContextProvider } from "@/context/CartContextProvider";
import { Toaster } from "@/components/ui/toaster";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noLayoutRoutes = ["/login", "/dashboard", "/dashboard/pedidos", "/dashboard/cms"];

  if (noLayoutRoutes.includes(pathname)) {
    return <>{children}</>; 
  }

  return (
    <div className="flex flex-col bg-[#f4f4f4]">
      <CartContextProvider>
        <Header />
        <div className="sticky top-0 z-50">
          <Categories />
        </div>
        <main className="flex-1">{children}</main>
      </CartContextProvider>
      <Footer />
      <Toaster />
    </div>
  );
}
