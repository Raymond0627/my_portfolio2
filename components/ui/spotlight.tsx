"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type SpotlightProps = {
  baseTranslateY?: number;
  baseDuration?: number;
};

export const Spotlight = ({
  baseTranslateY = -350,
  baseDuration = 12,
}: SpotlightProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(loadTimer);
    };
  }, []);

  // Spotlight configurations
  const leftSpotlights = [
    {
      id: 1,
      width: isMobile ? 180 : 300,
      smallWidth: isMobile ? 80 : 120,
      xOffset: isMobile ? 30 : 50,
      translateY: baseTranslateY * 0.8,
      duration: baseDuration * 1.2,
      gradients: [
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 80%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.1) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 80%, transparent 100%)"
      ],
      delay: 0.2,
      rotation: -45
    },
    {
      id: 2,
      width: isMobile ? 120 : 200,
      smallWidth: isMobile ? 60 : 90,
      xOffset: isMobile ? 20 : 35,
      translateY: baseTranslateY * 1.1,
      duration: baseDuration * 0.8,
      gradients: [
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 80%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.07) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.07) 0%, rgba(168, 85, 247, 0.03) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.03) 0%, rgba(168, 85, 247, 0.01) 80%, transparent 100%)"
      ],
      delay: 0.4,
      rotation: -40
    },
    // Add 2 more left spotlights with different configurations
    {
      id: 3,
      width: isMobile ? 160 : 250,
      smallWidth: isMobile ? 70 : 100,
      xOffset: isMobile ? 25 : 45,
      translateY: baseTranslateY * 0.9,
      duration: baseDuration * 1.5,
      gradients: [
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 80%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.05) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.02) 0%, rgba(168, 85, 247, 0.005) 80%, transparent 100%)"
      ],
      delay: 0.6,
      rotation: -50
    },
    {
      id: 4,
      width: isMobile ? 100 : 180,
      smallWidth: isMobile ? 50 : 80,
      xOffset: isMobile ? 15 : 30,
      translateY: baseTranslateY * 1.2,
      duration: baseDuration * 0.7,
      gradients: [
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0.12) 50%, transparent 80%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.08) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.04) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.04) 0%, rgba(168, 85, 247, 0.01) 80%, transparent 100%)"
      ],
      delay: 0.8,
      rotation: -35
    }
  ];

  const rightSpotlights = [
    {
      id: 1,
      width: isMobile ? 200 : 280,
      smallWidth: isMobile ? 90 : 130,
      xOffset: isMobile ? 35 : 60,
      translateY: baseTranslateY * 0.7,
      duration: baseDuration * 1.4,
      gradients: [
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0.12) 50%, transparent 80%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.08) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.04) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.04) 0%, rgba(168, 85, 247, 0.01) 80%, transparent 100%)"
      ],
      delay: 0.3,
      rotation: 50
    },
    // Add 3 more right spotlights with different configurations
    {
      id: 2,
      width: isMobile ? 140 : 220,
      smallWidth: isMobile ? 70 : 110,
      xOffset: isMobile ? 25 : 45,
      translateY: baseTranslateY * 1.0,
      duration: baseDuration * 0.9,
      gradients: [
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 80%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.06) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.06) 0%, rgba(168, 85, 247, 0.03) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.03) 0%, rgba(168, 85, 247, 0.01) 80%, transparent 100%)"
      ],
      delay: 0.5,
      rotation: 40
    },
    {
      id: 3,
      width: isMobile ? 180 : 260,
      smallWidth: isMobile ? 80 : 120,
      xOffset: isMobile ? 30 : 55,
      translateY: baseTranslateY * 0.8,
      duration: baseDuration * 1.1,
      gradients: [
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 80%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.1) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 80%, transparent 100%)"
      ],
      delay: 0.7,
      rotation: 45
    },
    {
      id: 4,
      width: isMobile ? 120 : 200,
      smallWidth: isMobile ? 60 : 100,
      xOffset: isMobile ? 20 : 40,
      translateY: baseTranslateY * 1.1,
      duration: baseDuration * 0.6,
      gradients: [
        "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 80%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.05) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 80%, transparent 100%)",
        "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.02) 0%, rgba(168, 85, 247, 0.005) 80%, transparent 100%)"
      ],
      delay: 0.9,
      rotation: 55
    }
  ];

  const height = 1380; // Consistent height for all spotlights

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Render left spotlights */}
      {leftSpotlights.map((spotlight, index) => (
        <motion.div
          key={`left-${spotlight.id}`}
          initial={{ x: -spotlight.xOffset * 0.5, opacity: 0 }}
          animate={{ 
            x: [0, spotlight.xOffset, 0],
            opacity: 1
          }}
          transition={{
            duration: spotlight.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: spotlight.delay
          }}
          className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
        >
          {spotlight.gradients.map((gradient, gradIndex) => (
            <motion.div
              key={`left-grad-${spotlight.id}-${gradIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: spotlight.delay + (gradIndex * 0.1),
                duration: 1.5
              }}
              style={{
                transform: `translateY(${spotlight.translateY}px) rotate(${spotlight.rotation}deg)`,
                background: gradient,
                width: `${gradIndex === 0 ? spotlight.width : spotlight.smallWidth}px`,
                height: `${height}px`,
                ...(gradIndex === 1 && { transform: `rotate(${spotlight.rotation}deg) translate(5%, -50%)` }),
                ...(gradIndex === 2 && { transform: `rotate(${spotlight.rotation}deg) translate(-180%, -70%)` }),
                ...(gradIndex === 3 && { transform: `rotate(${spotlight.rotation}deg) translate(120%, -30%)` })
              }}
              className={`absolute top-0 left-0 ${gradIndex > 0 ? 'origin-top-left' : ''}`}
            />
          ))}
        </motion.div>
      ))}

      {/* Render right spotlights */}
      {rightSpotlights.map((spotlight, index) => (
        <motion.div
          key={`right-${spotlight.id}`}
          initial={{ x: spotlight.xOffset * 0.5, opacity: 0 }}
          animate={{ 
            x: [0, -spotlight.xOffset * 1.2, 0],
            opacity: 1
          }}
          transition={{
            duration: spotlight.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: [0.17, 0.67, 0.83, 0.67],
            delay: spotlight.delay
          }}
          className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
        >
          {spotlight.gradients.map((gradient, gradIndex) => (
            <motion.div
              key={`right-grad-${spotlight.id}-${gradIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: spotlight.delay + (gradIndex * 0.1),
                duration: 1.5
              }}
              style={{
                transform: `translateY(${spotlight.translateY}px) rotate(${spotlight.rotation}deg)`,
                background: gradient,
                width: `${gradIndex === 0 ? spotlight.width : spotlight.smallWidth}px`,
                height: `${height}px`,
                ...(gradIndex === 1 && { transform: `rotate(${spotlight.rotation}deg) translate(-5%, -50%)` }),
                ...(gradIndex === 2 && { transform: `rotate(${spotlight.rotation}deg) translate(180%, -70%)` }),
                ...(gradIndex === 3 && { transform: `rotate(${spotlight.rotation}deg) translate(-120%, -30%)` })
              }}
              className={`absolute top-0 right-0 ${gradIndex > 0 ? 'origin-top-right' : ''}`}
            />
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};