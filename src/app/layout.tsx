import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./components/Footer";
import { mulish } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Mi querubin | tienda online",
  description: "A simple e-commerce application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <div className="flex bg-[#f4f4f4] flex-col">
          <Header />
          <div className="sticky top-0 z-50">
            <Categories />
          </div>
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
