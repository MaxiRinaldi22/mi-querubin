"use client";

import { useEffect, useState } from "react";

import { collection, DocumentData, getDocs } from "firebase/firestore";

import db from "@/lib/firestore";
import OrdersContent from "@/components/OrdersContent";

export default function Test() {
  const [info, setInfo] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchItmes = async () => {
      const quertSnapshot = await getDocs(collection(db, "clients"));
      const items = quertSnapshot.docs.map((doc) => ({
        cartInfo: doc.data().order.cartInfo,
        formData: doc.data().order.formData,
      }));

      console.log("items de la base de datos", items);

      setInfo(items);
    };

    fetchItmes();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 md:w-full p-4">
      {info.map((order, i) => (
        <OrdersContent key={i} order={order} />
      ))}
    </div>
  );
}
