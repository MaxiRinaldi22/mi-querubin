import { revalidatePath } from "next/cache";

import { mercadopago } from "@/api";
import { Payment } from "mercadopago";

import { handleSubmit } from "@/lib/actions/serverSubmit";

export async function POST(request: Request) {
  // Obtenemos el cuerpo de la petición que incluye información sobre la notificación
  const body: { data: { id: string } } = await request.json();

  // Obtenemos el pago
  const payment = await new Payment(mercadopago).get({ id: body.data.id });

  // Si se aprueba, agregamos el mensaje
  if (payment.status === "approved") {
    // Aca hay qye agregar la logica para guardar el mensaje en la base de datos
    if (
      payment.metadata &&
      payment.metadata.cart_info &&
      payment.metadata.client_info
    ) {
      const cartInfo = payment.metadata.cart_info;
      const clientInfo = payment.metadata.client_info;
      handleSubmit(cartInfo, clientInfo);
    } else {
      console.error(
        "Missing cartInfo or clientInfo in payment metadata",
        payment.metadata,
      );
    }

    // Revalidamos la página de inicio para mostrar los datos actualizados
    revalidatePath("/");
  }

  // Respondemos con un estado 200 para indicarle que la notificación fue recibida
  return new Response(null, { status: 200 });
}
