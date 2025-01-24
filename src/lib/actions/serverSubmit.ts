"use server";

import { FormInfoType, ProductCartType } from "../types";
import { handleFormSubmit } from "./formsubmit";

// import { sendEmail } from "./brevo";

export const handleSubmit = async (
  cartInfo: ProductCartType[],
  formData: FormInfoType,
) => {
  // console.log("ServerSubmit", cartInfo, formData);

  const order = {
    cartInfo,
    formData,
  };

  handleFormSubmit(order);

  // Enviar email de confimacion del pedido
  //   await sendEmail({
  //     to: [
  //       {
  //         email: mail as string,
  //         hora: hora as string,
  //         name: name as string,
  //         tipo: tipo as string,
  //         phone: phone as string,
  //       },
  //     ],
  //   });
};
