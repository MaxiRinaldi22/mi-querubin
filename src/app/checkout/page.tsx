"use client";

import { add } from "@/lib/actions/add";
import { departamentos } from "@/lib/const";
import useCartInfo from "@/hooks/useCartInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartTimeLine } from "@/components/CartTImeLine";
import { NoProductsInCart } from "@/components/NoProductsInCart";

export default function CheckoutPage() {
  const { cartInfo } = useCartInfo();

  const totalPrice = cartInfo.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Esto lo lleva a mercado libre (api/mercadopago/route.ts)
    add(formData, cartInfo);
  };

  return (
    <section className="container mx-auto min-h-screen p-4">
      {cartInfo.length === 0 ? (
        <NoProductsInCart />
      ) : (
        <>
          <CartTimeLine step={2} />
          <div className="container mx-auto my-14">
            <form
              className="flex flex-col gap-4 md:flex-row"
              onSubmit={handleSubmit}
            >
              {/* Billing Details Form */}
              <div className="flex-1">
                <h2 className="mb-6 text-2xl font-bold">
                  Detalles de facturación
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input id="nombre" name="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellidos">Apellidos *</Label>
                      <Input id="apellidos" name="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="documento">Documento de Identidad *</Label>
                    <Input id="documento" name="document" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pais">País / Región *</Label>
                    <p className="font-extrabold text-gray-500">Uruguay</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección de la calle *</Label>
                    <Input
                      id="direccion"
                      name="direccion"
                      placeholder="Número de la casa y nombre de la calle"
                      required
                    />
                    <Input
                      name="opcionalDirreccion"
                      placeholder="Apartamento, habitación, etc. (opcional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad *</Label>
                    <Input id="ciudad" name="city" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="departamento">Departamento *</Label>
                    <Select name="departament" defaultValue="montevideo">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        {departamentos.map((departamento) => (
                          <SelectItem
                            value={departamento.toLowerCase()}
                            key={departamento}
                          >
                            {departamento}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input id="telefono" name="phone" type="tel" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Dirección de correo electrónico *
                    </Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notas">Notas del pedido (opcional)</Label>
                    <textarea
                      id="notas"
                      name="notas"
                      className="min-h-[100px] w-full rounded-md border bg-[#f7f7f7] px-3 py-2"
                      placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega."
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <Card className="max-w-[500px] flex-1 bg-[#f7f7f7]">
                <CardHeader>
                  <CardTitle>TU PEDIDO</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h3 className="mb-4 font-bold">PRODUCTO</h3>
                      <div className="space-y-2">
                        {cartInfo.map((product) => (
                          <div
                            key={product.product.id}
                            className="flex justify-between"
                          >
                            <span className="md:max-w-[300px]">
                              {product.product.name} × {product.quantity}
                            </span>
                            <span className="ml-4 font-bold text-gray-500">
                              ${product.product.price}
                              <span className="ml-1 text-xs font-medium">
                                UYU
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Envío</h3>
                      <RadioGroup defaultValue="local" name="envio">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="local" id="local" />
                          <Label htmlFor="local">Retira En El Local</Label>
                        </div>
                        <div className="ml-6 mt-4 space-y-4">
                          <Input
                            name="pickupName"
                            placeholder="Ingresar el nombre completo"
                          />
                          <Input
                            name="pickupDocument"
                            placeholder="Ingresar la cédula de quien retira"
                          />
                        </div>

                        <div className="mt-4 flex items-center space-x-2">
                          <RadioGroupItem value="envio" id="montevideo" />
                          <Label htmlFor="montevideo">Envío por DAC</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="font-bold text-black">
                          ${totalPrice}
                          <span className="ml-1 text-sm font-semibold">
                            UYU
                          </span>
                        </span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-secondaryColor py-3 font-semibold text-white hover:bg-secondaryColor/90"
                    >
                      Realizar el pedido
                    </button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </>
      )}
    </section>
  );
}
