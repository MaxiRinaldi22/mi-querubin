"use client";

import type React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useNotification } from "@/context/NotificationContextProvider";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CreditCard, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  type: "success" | "warning";
  product: {
    name: string;
    image: string;
  };
}

const NotificationItem: React.FC<{
  notification: Notification;
  onClose: () => void;
}> = ({ notification, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: "100%" }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 50, x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`z-50 mb-4 w-80 overflow-hidden rounded-lg bg-white shadow-lg ${
        notification.type === "warning" ? "border-l-4 border-yellow-500" : ""
      }`}
    >
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={notification.product.image || "/placeholder.svg"}
              alt={notification.product.name}
              width={64}
              height={64}
              className="rounded-md object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">
              {notification.product.name}
            </p>
            <p className="text-sm text-gray-500">
              {notification.type === "success"
                ? "Product added to cart"
                : "Product already in cart"}
            </p>
          </div>
          {notification.type === "warning" && (
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          )}
        </div>
        <div className="mt-4 flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => {
              console.log("View cart");
              onClose();
            }}
          >
            <Link href={"/cart"} className="flex gap-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              <p>View Cart</p>
            </Link>
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => {
              console.log("Go to checkout");
              onClose();
            }}
          >
            <Link href={"/checkout"} className="flex gap-1">
              <CreditCard className="mr-2 h-4 w-4" />
              <p>Checkout</p>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const CartNotification: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="fixed bottom-4 right-4 flex flex-col-reverse items-end space-y-4 space-y-reverse">
      <AnimatePresence>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
