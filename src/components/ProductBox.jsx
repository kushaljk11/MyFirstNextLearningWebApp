import React from "react";
import Link from "next/link";

export default function ProductBox({ id = 1, name = "Product", price = 99.99, image = "📦" }) {
    return (
        <Link href={`/store/product-details/${id}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 cursor-pointer">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-full h-48 rounded mb-4 flex items-center justify-center">
                    <span className="text-6xl">{image}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
                <p className="text-pink-500 font-bold text-xl mb-3">${price.toFixed(2)}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Add to Cart
                </button>
            </div>
        </Link>
    );
}