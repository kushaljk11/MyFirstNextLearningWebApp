import React from "react";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Next-e-Store</h3>
            <p className="text-gray-400">Your one-stop solution for all electronics and gadgets.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/" className="hover:text-pink-500">Home</Link></li>
              <li><Link href="/store" className="hover:text-pink-500">Store</Link></li>
              <li><Link href="/cart" className="hover:text-pink-500">Cart</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-pink-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-pink-500">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-500">Shipping Info</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-pink-500">Facebook</a></li>
              <li><a href="#" className="hover:text-pink-500">Twitter</a></li>
              <li><a href="#" className="hover:text-pink-500">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Next-e-Store. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}