import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Trophies() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random();
      const icons = ["🏆", "🎈", "⭐", "🎉"];

      const newItem = {
        id,
        x: Math.random() * window.innerWidth,
        icon: icons[Math.floor(Math.random() * icons.length)],
      };

      setItems((prev) => [...prev, newItem]);
      setTimeout(() => {
        setItems((prev) => prev.filter((i) => i.id !== id));
      }, 4000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {items.map((i) => (
        <motion.div
          key={i.id}
          initial={{ y: window.innerHeight, opacity: 1 }}
          animate={{ y: -200, opacity: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
          style={{
            position: "fixed",
            left: i.x,
            fontSize: "2rem",
            pointerEvents: "none",
          }}
        >
          {i.icon}
        </motion.div>
      ))}
    </>
  );
}
