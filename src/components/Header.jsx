import React from "react";
import styles from "@/styles/header.module.css";
import Container from "./Container";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className={`${styles.header} py-3 px-1 shadow`}>
      <Container className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-800">JK-EStore</span>
        </div>

        {/* Searchbar */}
        <div className={`${styles.searchBar} flex items-center`}>
          <input
            type="text"
            placeholder="Search for products..."
            className={styles.searchInput}
          />
          <button className={`${styles.searchButton}`}>
            <FiSearch size={20} />
          </button>
        </div>
        <NavBar />
      </Container>
    </header>
  );
}

const NavBar = () => {
  return (
    <nav className="flex items-center gap-5">
      {/* Navigation Links */}
      <ul className="flex items-center gap-3 font-semibold">
        <li className={styles.navLink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/store">Store</Link>
        </li>
      </ul>
      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Cart Icon */}
        <Link href="/cart">
          <div className="relative">
            <FiShoppingCart color="black" size={24} />
            <span
              className={`${styles.cartBadge} absolute -top-3.75 -right-5 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}
            >
              3
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
