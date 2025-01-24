"use server";

import { redirect } from "next/navigation";

import api from "@/api";

import { FormInfoType, ProductCartType } from "../types";

async function add(formData: FormData, cartInfo: ProductCartType[]) {

  const formDataInfo: FormInfoType = {
    personalInfo: {
      name: formData.get("name") as string,
      lastName: formData.get("lastName") as string,
      document: formData.get("document") as string,
    },
    directionInfo: {
      direccion: formData.get("direccion") as string,
      opcionalDirreccion: formData.get("opcionalDirreccion") as string,
      city: formData.get("city") as string,
      departament: formData.get("departament") as string,
    },
    notes: formData?.get("notes") as string,
    contactInfo: {
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
    },
    tipo: formData.get("envio") as string,
    pickupInfo: {
      name: formData.get("pickupName") as string,
      document: formData.get("pickupDocument") as string,
    }
    
  }
  // Hay que pasarle cosa por cosa 
  const url = await api.message.submit(cartInfo, formDataInfo);

  redirect(url);
}

export { add };
