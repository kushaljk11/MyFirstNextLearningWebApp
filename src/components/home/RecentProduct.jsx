import React from "react";
import Container from "../Container";

export default function RecentProduct() {
    return (
        <Container>
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-4">Recent Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold">Product 1</h3>
                        <p className="text-gray-600 text-sm">Description of Product 1</p>
                        <p className="text-pink-500 font-bold mt-2">$89.99</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold">Product 2</h3> 
                        <p className="text-gray-600 text-sm">Description of Product 2</p>
                        <p className="text-pink-500 font-bold mt-2">$109.99</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold">Product 3</h3>
                        <p className="text-gray-600 text-sm">Description of Product 3</p>
                        <p className="text-pink-500 font-bold mt-2">$79.99</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold">Product 4</h3>
                        <p className="text-gray-600 text-sm">Description of Product 4</p>
                        <p className="text-pink-500 font-bold mt-2">$139.99</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}