import React from "react";
import Container from "../Container";
import Slider from "./Slider";
import styles from "@/styles/home/Hero.module.css";

export default function Hero() {
    return (
        <Container>
            <section className={styles.hero}>
                {/* Text Section */}
                <div className={`${styles.textSection} text-gray-700`}>
                    <h1>
                        One stop solution <span className="text-blue-600">E-Store</span>
                    </h1>
                    <p>Discover the latest headphones, earphones, mobiles, tablets etc.</p>
                    <p>Exclusive deals just for you!</p>
                    <button className={styles.ctaButton}>Shop Now</button>
                </div>
                {/* Image Slider Section */}
                <Slider />
            </section>
        </Container>
    );
}