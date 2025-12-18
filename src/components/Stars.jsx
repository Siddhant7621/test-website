import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const id = Math.random();
      const newStar = {
        id,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 360,
      };
      setStars((prev) => [...prev, newStar]);
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id));
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, y: -60, rotate: star.rotation }}
          transition={{ duration: 1.2 }}
          style={{
            position: "fixed",
            left: star.x,
            top: star.y,
            pointerEvents: "none",
            fontSize: "22px",
            color: "#FFD700",
          }}
        >
          ⭐
        </motion.div>
      ))}
    </>
  );
}
