import { cubicBezier, motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headingVariants = {
  hidden: { y: -120, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Home = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden"
    >
      {isMobile && (
        <motion.img
          src="/pfp.png"
          alt="profile"
          className="floating-img w-38 h-38 my-8 rounded-full border-2 border-[#00FF7F] shadow-[0_0_20px_#00FF7F]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        />
      )}

      <div className="relative z-10 w-full flex flex-col items-center justify-center md:pt-24">
        {/* Frontend */}
        <div className="w-full overflow-hidden">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2, ease: "easeIn" }}
            className={`frontend text-5xl md:text-9xl font-bold uppercase ${
              isMobile ? "text-center text-[#00FF7F]" : "pl-5 text-[#00FF7F]"
            }`}
          >
            Frontend
          </motion.h1>
        </div>

        {/* Developer */}
        <div className="w-full overflow-hidden mt-2">
          <motion.h1
            variants={headingVariants}
            initial={{ y: 110 }}
            animate="visible"
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`developer text-5xl md:text-9xl font-bold uppercase ${
              isMobile
                ? "text-center text-gray-400"
                : "text-right w-full pr-8 text-gray-500"
            }`}
          >
            Developer
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
          className={`pt-4 ${
            isMobile
              ? "text-center w-[90%] text-base font-medium text-gray-300"
              : "w-[82%] m-auto text-sm md:text-lg text-right font-semibold text-gray-300"
          }`}
        >
          Driven by curiosity, creativity, and a commitment <br /> to crafting
          beautiful web solutions.
        </motion.p>
        {isMobile && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-10 px-6 py-3 rounded-full text-black font-semibold bg-[#00FF7F] shadow-[0_0_20px_#00FF7F] hover:shadow-[0_0_35px_#00FF7F] transition-all duration-300"
          >
            Explore My Work
          </motion.button>
        )}

        <hr className="border-[#00FF88] border-2 w-32 md:w-80 mt-10 mb-10 rounded-full shadow-[0_0_15px_#00FF88]" />
      </div>
    </div>
  );
};

export default Home;
