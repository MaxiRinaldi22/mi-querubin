"use client"

import React from "react"
import Image from "next/image"
import type { DocumentData } from "firebase/firestore"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductCartType } from "@/lib/types"

const OrdersContent = ({ order }: { order: DocumentData }) => {
  const { cartInfo, formData } = order

  if (!formData) {
    return (
      <Card>
        <CardContent className="pt-6">No form data available</CardContent>
      </Card>
    )
  }

  const { contact_info, direction_info, personal_info, pickup_info, tipo } = formData

  return (
    <Card className="w-full   mx-auto">
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Cart Information */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Cart Information:</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {cartInfo.map((item: ProductCartType, index: number) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.product.images[0] || "/placeholder.svg"}
                      alt={item.product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    <p className="font-medium">${item.product.price} UYU</p>
                    <Badge variant="secondary" className="mt-2">
                      {item.product.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Contact Information */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Contact Information:</h3>
          <div className="grid grid-cols-2 gap-2">
            <p>
              <strong>Email:</strong> {contact_info.email}
            </p>
            <p>
              <strong>Phone:</strong> {contact_info.phone}
            </p>
          </div>
        </section>

        <Separator />

        {/* Address Information */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Direction Information:</h3>
          <div className="grid grid-cols-2 gap-2">
            <p>
              <strong>City:</strong> {direction_info.city}
            </p>
            <p>
              <strong>Department:</strong> {direction_info.departament}
            </p>
            <p>
              <strong>Address:</strong> {direction_info.direccion}
            </p>
            <p>
              <strong>Optional Address:</strong> {direction_info.opcionalDirreccion || "N/A"}
            </p>
          </div>
        </section>

        <Separator />

        {/* Personal Information */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Personal Information:</h3>
          <div className="grid grid-cols-2 gap-2">
            <p>
              <strong>Document:</strong> {personal_info.document}
            </p>
            <p>
              <strong>Last Name:</strong> {personal_info.lastName}
            </p>
            <p>
              <strong>Name:</strong> {personal_info.name}
            </p>
          </div>
        </section>

        <Separator />

        {/* Pickup Information */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Pickup Information:</h3>
          {pickup_info?.document || pickup_info?.name ? (
            <div className="grid grid-cols-2 gap-2">
              <p>
                <strong>Document:</strong> {pickup_info.document}
              </p>
              <p>
                <strong>Name:</strong> {pickup_info.name}
              </p>
            </div>
          ) : (
            <p>No pickup details provided.</p>
          )}
        </section>

        <Separator />

        {/* Type of Delivery */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Delivery Type:</h3>
          <Badge variant="outline">{tipo}</Badge>
        </section>
      </CardContent>
    </Card>
  )
}

export default OrdersContent

