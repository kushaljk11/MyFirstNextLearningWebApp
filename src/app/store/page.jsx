import React from "react";
import Container from "@/components/Container";
import ProductBox from "@/components/ProductBox";

export default function StorePage() {
    const products = [
        { id: 1, name: "Wireless Headphones", price: 129.99, image: "🎧" },
        { id: 2, name: "Mobile Phone", price: 799.99, image: "📱" },
        { id: 3, name: "Tablet Pro", price: 549.99, image: "📑" },
        { id: 4, name: "Smart Watch", price: 299.99, image: "⌚" },
        { id: 5, name: "Bluetooth Speaker", price: 79.99, image: "🔊" },
        { id: 6, name: "USB-C Cable", price: 19.99, image: "🔌" },
        { id: 7, name: "Phone Case", price: 29.99, image: "📱" },
        { id: 8, name: "Screen Protector", price: 15.99, image: "🛡️" },
    ];

    return (
        <Container>
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-8">Welcome to Our Store!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductBox 
                            key={product.id} 
                            id={product.id} 
                            name={product.name} 
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}