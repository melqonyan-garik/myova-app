"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageSlider.css";
import localFont from "next/font/local";

const playwrite = localFont({
  src: "../app/fonts/DancingScript-Regular.ttf",
  variable: "--font-playwrite",
  display: "swap", // optional
});

const slidesBack = [
  { image: "/images/sketch1.png", title: "Become the bride you've always dreamed of being" },
  { image: "/images/sketch2.png", title: "Perfect moments with a perfect dress" },
  { image: "/images/sketch3.png", title: "Your dream dress: a step toward fairytale" },
  { image: "/images/sketch4.png", title: "Unforgettable moments immortalized in the perfect dress" },
];

const slidesFront = [
  { image: "/images/sketch1.png", title: "01" },
  { image: "/images/sketch2.png", title: "02" },
  { image: "/images/sketch3.png", title: "03" },
  { image: "/images/sketch4.png", title: "04" },
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesBack.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <AnimatePresence>
        <motion.div
          key={slidesBack[index].title}
          className="slide-back"
          initial={{ x: "100%" }}  
          animate={{ x: 0 }}     
          exit={{ x: "-100%" }}  
          transition={{
            duration: 2,         
            ease: "easeInOut",   
            delay: 1,             
          }}
        >
          <motion.h2
            className="slide-back-title"
            style={{ fontFamily: 'var(--font-playwrite)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            {slidesBack[index].title}
          </motion.h2>
          <Image
            src={slidesBack[index].image}
            alt={slidesBack[index].title}
            width={300}
            height={450}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={slidesFront[index].title} 
          className="slide-front"
          initial={{ x: "-100%" }} 
          animate={{ x: 0 }}      
          exit={{ x: "100%" }}  
          transition={{
            duration: 2,       
            ease: "easeInOut", 
            delay: 1,        
          }}
        >
          <Image
            src={slidesFront[index].image}
            alt={slidesFront[index].title}
            width={300}
            height={200}
            className="slide-front-img"
          />
          <motion.h2
            className="slide-front-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
           
          </motion.h2>
        </motion.div>
      </AnimatePresence>

      <div className="coming-soon">
        <h2 className="coming-soon-title"  style={{ fontFamily: 'var(--font-playwrite)' }}>Coming Soon</h2>
      </div>
    </div>
  );
}
