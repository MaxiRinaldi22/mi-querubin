'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock cart data -> This should be replaced with your actual cart data
const initialCart = [
  { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
  { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
]

export default function Cart() {
  const [cart, setCart] = useState(initialCart)

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Button className="mt-2">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  )
}

