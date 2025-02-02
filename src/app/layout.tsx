import type { Metadata } from "next";

import { mulish } from "@/lib/fonts";

import "./globals.css";

import { CartContextProvider } from "@/context/CartContextProvider";
import { NotificationContextProvider } from "@/context/NotificationContextProvider";

import { CartNotification } from "@/components/cart-notification";
import LayoutScreen from "@/components/LayoutScreen";
import LayoutWrapper from "@/components/LayoutWrapper";

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
        <LayoutScreen>
          <CartContextProvider>
            <NotificationContextProvider>
              <LayoutWrapper>{children}</LayoutWrapper>
              <CartNotification />
            </NotificationContextProvider>
          </CartContextProvider>
        </LayoutScreen>
      </body>
    </html>
  );
}
