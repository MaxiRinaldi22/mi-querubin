import { MercadoPagoConfig, Preference } from "mercadopago";

import { FormInfoType, ProductCartType } from "./lib/types";

export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN as string,
});

const api = {
  message: {
    async submit(cartInfo: ProductCartType[], clientInfo: FormInfoType) {
      // Creamos la preferencia incluyendo el precio, titulo y metadata. La información de `items` es standard de Mercado Pago. La información que nosotros necesitamos para nuestra DB debería vivir en `metadata`.
      const preference = await new Preference(mercadopago).create({
        body: {
          items: [
            {
              id: "message", // Cambiar por un id único
              // unit_price: cartInfo.reduce(
              //   (total, item) => total + item.product.price * item.quantity,
              //   0,
              // ),
              // Test value
              unit_price: 1,
              quantity: 1,
              title: "Compra en Mi Querubin | Tienda online",
            },
          ],
          metadata: {
            cartInfo,
            clientInfo,
          },
        },
      });

      // Devolvemos el init point (url de pago) para que el usuario pueda pagar
      return preference.init_point!;
    },
  },
};

export default api;
