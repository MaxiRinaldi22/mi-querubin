"use client";

import { useState } from "react";

import { add } from "@/lib/actions/add";
import { departamentos } from "@/lib/const";
import { Icon } from "@/lib/Icon";
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
import { NoProductsInCart } from "@/app/cart/components/NoProductsInCart";

import { OutOfStockModal } from "../cart/components/out-of-stock-modal";

export default function CheckoutPage() {
  const [isOutOfStockModalOpen, setIsOutOfStockModalOpen] = useState(false);
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

  const hasOutOfStockItems = cartInfo.some((item) => item.product.stock === 0);

  return (
    <section className="bg-white">

    <div className="container mx-auto min-h-screen p-4">
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
              <Card className="h-auto max-w-[500px] flex-1 bg-[#f7f7f7]">
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
                            <span className="flex items-center gap-3 md:max-w-[300px]">
                              {product.product.stock === 0 && (
                                <Icon
                                  path={
                                    <g fill="none">
                                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                      <path
                                        fill="#eab308"
                                        d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"
                                      ></path>
                                    </g>
                                  }
                                  size={24}
                                />
                              )}
                              <span>
                                {product.product.name} × {product.quantity}
                              </span>
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

                    <div>
                      {hasOutOfStockItems && (
                        <div className="rounded-md border-l-2 border-yellow-500 bg-yellow-100 p-1">
                          <button
                            type="button"
                            className="flex w-full justify-between bg-transparent px-5 text-yellow-500 shadow-none"
                            onClick={() => setIsOutOfStockModalOpen(true)}
                          >
                            <Icon
                              path={
                                <g fill="none">
                                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                  <path
                                    fill="#eab308"
                                    d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"
                                  ></path>
                                </g>
                              }
                              size={24}
                            />

                            <p className="font-semibold text-yellow-500">
                              {" "}
                              Productos sin stock, entrega extendida.
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M10 16l4-4-4-4" />
                            </svg>
                          </button>
                        </div>
                      )}
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
      <OutOfStockModal
        isOpen={isOutOfStockModalOpen}
        onClose={() => setIsOutOfStockModalOpen(false)}
      />
    </div>
    </section>

  );
}
