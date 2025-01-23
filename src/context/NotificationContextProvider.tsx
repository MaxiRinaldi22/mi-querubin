"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

type Product = {
  id: string;
  name: string;
  image: string;
};

type Notification = {
  id: string;
  product: Product;
  type: "success" | "warning";
};

type NotificationContextType = {
  addNotification: (product: Product) => void;
  removeNotification: (id: string) => void;
  notifications: Notification[];
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const NotificationContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (product: Product) => {
    const existingNotification = notifications.find(
      (n) => n.product.id === product.id,
    );
    if (existingNotification) {
      setNotifications((prev) => [
        { id: Date.now().toString(), product, type: "warning" },
        ...prev,
      ]);
    } else {
      setNotifications((prev) => [
        { id: Date.now().toString(), product, type: "success" },
        ...prev,
      ]);
    }
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{ addNotification, removeNotification, notifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  }
  return context;
};
