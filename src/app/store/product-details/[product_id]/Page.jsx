import React from "react";
import Container from "@/components/Container";
import Link from "next/link";

export default function ProductDetails({ params }) {
    const productId = params.product_id;

    const products = {
        1: { name: "Wireless Headphones", price: 129.99, description: "Premium wireless headphones with noise cancellation" },
        2: { name: "Mobile Phone", price: 799.99, description: "Latest flagship smartphone with advanced features" },
        3: { name: "Tablet Pro", price: 549.99, description: "High-performance tablet for work and entertainment" },
        4: { name: "Smart Watch", price: 299.99, description: "Feature-rich smartwatch with health tracking" },
        5: { name: "Bluetooth Speaker", price: 79.99, description: "Portable Bluetooth speaker with great sound quality" },
        6: { name: "USB-C Cable", price: 19.99, description: "Durable USB-C charging cable" },
        7: { name: "Phone Case", price: 29.99, description: "Protective phone case with premium materials" },
        8: { name: "Screen Protector", price: 15.99, description: "Tempered glass screen protector" },
    };

    const product = products[productId] || { name: "Product Not Found", price: 0, description: "This product does not exist" };

    return (
        <Container>
            <div className="py-8">
                <Link href="/store" className="text-blue-600 hover:underline mb-4 inline-block">
                    &larr; Back to Store
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                        <span className="text-gray-500 text-xl">Product Image</span>
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                        <p className="text-2xl text-pink-500 font-bold mb-4">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600 text-lg mb-6">{product.description}</p>

                        <div className="flex gap-4 mb-6">
                            <input 
                                type="number" 
                                min="1" 
                                defaultValue="1" 
                                className="border border-gray-300 rounded px-4 py-2 w-20"
                            />
                            <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition font-bold">
                                Add to Cart
                            </button>
                        </div>

                        <div className="border-t pt-6">
                            <h3 className="text-lg font-bold mb-3">Product Details</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>✓ High Quality</li>
                                <li>✓ Fast Shipping</li>
                                <li>✓ 1 Year Warranty</li>
                                <li>✓ Easy Returns</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}