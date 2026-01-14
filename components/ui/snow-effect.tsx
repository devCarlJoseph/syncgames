"use client";

import { motion } from "framer-motion";

interface Snowflake {
  id: number;
  left: string;
  size: number;
  drift: number;
  opacity: number;
  duration: number;
  delay: number;
}

const SNOWFLAKES: Snowflake[] = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  left: `${(i * 7) % 100}%`,
  size: 1 + (i % 3),   
  drift: ((i % 5) - 2) * 10,   
  opacity: 0.1 + ((i % 4) * 0.1), 
  duration: 10 + (i % 5) * 2,   
  delay: (i % 5) * 0.5,               
}));

export function SnowEffect() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {SNOWFLAKES.map((flake) => (
        <motion.div
          key={flake.id}
          initial={{ top: "-10px", left: flake.left, opacity: 0, scale: 0 }}
          animate={{
            top: "110%",
            left: `calc(${flake.left} + ${flake.drift}px)`,
            opacity: [0, flake.opacity, flake.opacity, 0],
            scale: 1,
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: flake.size,
            height: flake.size,
            backgroundColor: "#3ABFF8",
            borderRadius: "50%",
            filter: "blur(0.5px)",
            boxShadow: "0 0 10px rgba(58,191,248,0.6)",
          }}
        />
      ))}
    </div>
  );
}
