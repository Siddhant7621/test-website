import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import Stars from "./components/Stars";
import Trophies from "./components/Trophies";

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const audio = new Audio("/dad-music.mp3"); // Add your own music file
    audio.volume = 0.4;
    audio.loop = true;
    audio.play().catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f7ff] text-center text-gray-800">
      <Stars />
      <Trophies />
      {showConfetti && <Confetti />}

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white relative overflow-hidden">

        {/* Floating Stars Background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: [0, 1, 0], y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 3,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold text-yellow-300 z-10 drop-shadow-xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Happy Birthday Papa 🎉
        </motion.h1>

        <motion.p
          className="text-xl mt-4 text-gray-200 z-10 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Celebrating the man whose strength, love & guidance shaped my life.
        </motion.p>

        <motion.button
          className="mt-10 px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:scale-110 transition z-10"
          onClick={() => {
            document.getElementById("memories")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Beautiful Memories 📸
        </motion.button>
      </section>

      {/* 📸 MEMORIES SECTION */}
      <section id="memories" className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">
          My handsome Paaaaa
        </h2>

       <div className="px-6 space-y-6">

  {/* Row 1 */}
  <div className="grid grid-cols-2 gap-4">
    <img className="rounded-2xl" src="https://res.cloudinary.com/dzpty54y0/image/upload/v1765815498/profiles/WhatsApp_Image_2025-12-15_at_21.33.20_2_abzdm8.jpg" />
    <img className="rounded-2xl" src="https://res.cloudinary.com/dzpty54y0/image/upload/v1765815498/profiles/WhatsApp_Image_2025-12-15_at_21.33.20_3_sao2pg.jpg" />
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-2 gap-4">
    <img className="rounded-2xl" src="https://res.cloudinary.com/dzpty54y0/image/upload/v1765815498/profiles/WhatsApp_Image_2025-12-15_at_21.33.20_qmhqw9.jpg" />
    <img className="rounded-2xl" src="https://res.cloudinary.com/dzpty54y0/image/upload/v1765815497/profiles/WhatsApp_Image_2025-12-15_at_21.33.19_n0hqy3.jpg" />
  </div>

  {/* Row 3 */}
  <div className="grid grid-cols-3 gap-4">
    <img className="rounded-2xl" src="https://res.cloudinary.com/dzpty54y0/image/upload/v1765815496/profiles/WhatsApp_Image_2025-12-15_at_21.33.19_1_pd5qlw.jpg" />
    <img className="rounded-2xl" src="https://res.cloudinary.com/dzpty54y0/image/upload/v1765815496/profiles/one_wgiuce.jpg" />
    <img className="rounded-2xl" src="https://res.cloudinary.com/dzpty54y0/image/upload/v1765815497/profiles/WhatsApp_Image_2025-12-15_at_21.33.20_1_bjufq0.jpg" />
  </div>

</div>


      </section>

      {/* ❤️ FATHER APPRECIATION NOTES */}
      <section className="py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Things I Love About You, Paaa 💙
        </h2>

        <div className="flex flex-wrap justify-center gap-6 px-6">
          {[
            "Your strength inspires me every day.",
            "You taught me how to stand tall in life.",
            "Your sacrifices made me who I am.",
            "You're my first hero and forever role model.",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 w-72 border-l-4 border-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-lg text-gray-700 italic">“{text}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎥 VIDEO SECTION */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          A Special Moment Together 🎥
        </h2>
        <div className="flex justify-center px-4">
          <video
            className="rounded-2xl shadow-lg"
            style={{
              width: "460px",
              height: "715px",
            }}
            controls
            autoPlay
            loop
            muted
          >
            <source src="https://res.cloudinary.com/dzpty54y0/video/upload/v1766072397/profiles/WhatsApp_Video_2025-12-15_at_23.12.29_nyhuk1.mp4" />
          </video>
        </div>
      </section>

      {/* 🎁 SURPRISE SECTION */}
      <section className="py-20 bg-blue-100">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">
          A Birthday Surprise 🎁
        </h2>

        <motion.button
          className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg"
          whileHover={{ scale: 1.15 }}
          onClick={() => {
            setShowMessage("prank");
            setTimeout(() => {
              setShowConfetti(true);
              setShowMessage("real");
              setTimeout(() => setShowConfetti(false), 6000);
            }, 2000);
          }}
        >
          Click Me 🎂
        </motion.button>

        {showMessage === "prank" && (
          <motion.p
            className="mt-8 text-2xl text-gray-700 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Hmm... what's happening? 🤔
          </motion.p>
        )}

        {showMessage === "real" && (
          <motion.p
            className="mt-8 text-2xl text-blue-800 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Happy Birthday Papa!  
            Thank you for every sacrifice, every lesson, and every moment of love.  
            You are my hero. 💙
          </motion.p>
        )}
      </section>

      <footer className="py-6 text-gray-500 text-sm">
        Made with ❤️ by Shalu
      </footer>
    </div>
  );
}
