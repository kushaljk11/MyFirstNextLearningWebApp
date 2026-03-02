"use client"
import React, { useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";

export default function CartPage() {
    const [cartItems] = useState([
        { id: 1, name: "Wireless Headphones", price: 129.99, quantity: 1 },
        { id: 2, name: "Mobile Phone", price: 799.99, quantity: 1 },
        { id: 4, name: "Smart Watch", price: 299.99, quantity: 1 },
    ]);

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <Container>
            <div className="py-8">
                <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
                        <Link href="/store" className="text-blue-600 hover:underline">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-6 border-b">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold">{item.name}</h3>
                                            <p className="text-gray-600">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-xl font-bold text-pink-500">${(item.price * item.quantity).toFixed(2)}</p>
                                        <button className="ml-4 text-red-600 hover:text-red-800 font-bold">Remove</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between">
                                        <span>Subtotal:</span>
                                        <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax (10%):</span>
                                        <span className="font-semibold">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t pt-3 flex justify-between text-lg font-bold">
                                        <span>Total:</span>
                                        <span className="text-pink-500">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold mb-3">
                                    Proceed to Checkout
                                </button>
                                <Link href="/store" className="block text-center text-blue-600 hover:underline">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}
