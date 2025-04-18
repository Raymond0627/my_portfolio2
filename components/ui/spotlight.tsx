"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(168, 85, 247, 0) 80%)", // Dimmed first gradient
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 80%, transparent 100%)", // Dimmed second gradient
  gradientThird = "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 80%, transparent 100%)", // Dimmed third gradient
  translateY = -350,
  width = 280,
  height = 1380,
  smallWidth = 120,
  duration = 12,
  xOffset = 50,
}: SpotlightProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint (768px)
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mobileWidth = width * 0.6;       // 60% size on mobile
  const mobileSmallWidth = smallWidth * 0.6;
  const mobileXOffset = xOffset * 0.6;

  const currentWidth = isMobile ? mobileWidth : width;
  const currentSmallWidth = isMobile ? mobileSmallWidth : smallWidth;
  const currentXOffset = isMobile ? mobileXOffset : xOffset;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Left spotlight */}
      <motion.div
        animate={{ x: [0, currentXOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${currentWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${currentSmallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${currentSmallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      {/* Right spotlight */}
      <motion.div
        animate={{ x: [0, -currentXOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${currentWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${currentSmallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${currentSmallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};
