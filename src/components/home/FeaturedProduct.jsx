import React from "react";
import Container from "../Container";

export default function FeaturedProduct() {
    return (
        <Container>
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold">Featured Product 1</h3>
                        <p className="text-gray-600 text-sm">Description of Featured Product 1</p>
                        <p className="text-pink-500 font-bold mt-2">$99.99</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold">Featured Product 2</h3>   
                        <p className="text-gray-600 text-sm">Description of Featured Product 2</p>
                        <p className="text-pink-500 font-bold mt-2">$129.99</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold">Featured Product 3</h3>
                        <p className="text-gray-600 text-sm">Description of Featured Product 3</p>
                        <p className="text-pink-500 font-bold mt-2">$149.99</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-bold">Featured Product 4</h3>
                        <p className="text-gray-600 text-sm">Description of Featured Product 4</p>
                        <p className="text-pink-500 font-bold mt-2">$119.99</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}