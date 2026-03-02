"use client"
import React, { useState, useEffect } from "react";
import styles from "@/styles/home/Hero.module.css";
import Image from "next/image";

const images = [
    "/slider-1.png",
    "/slider-2.png",
    "/slider-3.png",
    "/slider-4.png",
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevValue => {
                if (prevValue == images.length - 1) {
                    return 0;
                } else {
                    return prevValue + 1;
                }
            });
        }, 3000)
        return () => clearInterval(interval);
    }, [])

    return (
        <div className={styles.imageSection}>
            <div className={styles.slider}>
                {
                    images.map(
                        (image, index) => {
                            return (
                                <Image alt={"Slide" + index} key={"Slide" + index}
                                    className={`${styles.slide}
                                    ${currentSlide == index && styles.active}`}
                                    src={image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                    loading={index === 0 ? "eager" : "lazy"} objectFit="fit" objectPosition="center" />
                            )
                        }
                    )   
                }
            </div>
        </div>
    );
}