import React, { useRef } from "react";
import Profile from "/wacoder.jpeg";
import pfp from "/pfp.png";
import dragon from "/dragon.png";
import lapy from "/lapy.png";
import skull from "/skull.png";

import { motion, useScroll, useTransform } from "motion/react";

import LocomotiveScroll from "locomotive-scroll";
import { delay } from "motion";

const icons = [
  "/icons/html.png",
  "/icons/js.png",
  "/icons/css.png",
  "/icons/react.png",
  "/icons/redux.png",
  "/icons/node.png",
  "/icons/express.png",
  "/icons/Tailwind.png",
  "/icons/gsap.png",
  "/icons/framer.png",
  "/icons/mui.png",
  "/icons/figma.png",
  "/icons/next.png",
  "/icons/antd.png",
];
const About = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const aboutbox = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutbox,
    offset: ["start end", "end start"],
  });

  const background = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["#000", "#fff"]
  );
  const text = [
    "Hi, I'm Muhammad Wahab Hussain — a passionate MERN Stack Developer,",
    "specializing in React.js, Next.js, Node.js, and Express.js to build scalable",
    "and high-performance web applications. I love crafting elegant UIs using",
    "Tailwind CSS and SCSS, ensuring responsive and visually engaging designs.",
    "I bring interfaces to life with modern animations powered by GSAP and",
    "Framer Motion, enhancing interactivity and user experience.",
    "With experience in API integration, real-time communication using Socket.io,",
    "and deployments on AWS, Render, and Vercel, I aim to deliver seamless digital solutions.",
    "Let’s collaborate to transform your creative ideas into powerful web experiences!",
  ];

  return (
    <motion.div
      id="about"
      ref={aboutbox}
      style={{ backgroundColor: background }}
      className="w-full min-h-screen flex flex-col overflow-hidden "
    >
      <div className="  bg-[#00FF7F]   w-[140%] overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="whitespace-nowrap flex items-center"
        >
          {[...Array(3)].map((_, i) => (
            <h1
              key={i}
              className="semiheading-bold text-black text-xl md:text-5xl font-bold mx-4 uppercase flex items-center gap-4 md:py-2"
            >
              {" "}
              Hi ! I’m Muhammad Wahab Hussain |
              <span className="text-black">Frontend Developer</span> |
              <img
                src={pfp}
                alt=""
                className="w-10 md:w-20 md:h-20 object-contain"
              />
              Wahab Hussian? <span className="text-black">Who? </span> |
              <img
                src={dragon}
                alt=""
                className="w-10 md:w-20 md:h-20 object-contain"
              />
              Wahab Hussian? <span className="text-red-500">Who? |</span>
            </h1>
          ))}
        </motion.div>
      </div>
      <div className=" overflow-hidden  relative z-30   w-full h-[99vh]    m-auto flex flex-col items-center justify-center ">
        <div className=" hidden w-[40%] h-full absolute top-0  left-0 md:flex flex-col items-center pl-10 justify-center ">
          <img src={skull} alt="" className=" w-52 h-52 mb-20" />
        </div>
        <div className=" hidden w-[40%] h-full absolute top-0  right-0 md:flex flex-col items-center pl-10 justify-center ">
          <h1 className="semiheading-bold text-[#00FF7F] md:text-7xl uppercase  ">
            About
          </h1>
          <h1 className="semiheading-bold text-black md:text-7xl uppercase   ">
            Me .
          </h1>
          <img src={dragon} alt="" className=" w-40 h-40" />
        </div>
        <div
          data-scroll
          data-scroll-speed="-0.2"
          className="md:hidden mb-5 md:mb-0  absolute z-3 flex border border-zinc-300 rounded-md overflow-hidden w-[80%] h-[70%] items-center justify-center"
        >
          <img src={Profile} alt="" className="w-full h-full object-cover" />
        </div>

        <div
          data-scroll
          data-scroll-speed="0.2"
          className="md:inline-b hidden absolute z-3    md:flex flex-col   h-[90%] overflow-hidden items-center gap-4"
        >
          <div className="flex   rounded-md overflow-hidden w-full h-full items-center justify-center">
            <img src={Profile} alt="" className="w-full h-full object-cover " />
          </div>
        </div>
      </div>
      <div className=" bg-[#00FF7F] wrapper w-[140%]  overflow-hidden ">
        <motion.div
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="  text md:h-20 md:py-2   flex md:gap-50  whitespace-nowrap "
        >
          <h1
            className="
                         semiheading-bold text-black text-xl md:text-5xl font-bold flex  gap-2  items-center justify-center md:mx-2 uppercase  md:py-2 "
          >
            MERN Stack Developer |{" "}
            <img
              src={lapy}
              alt=""
              className="md:w-20 w-10 md:h-20 object-contain"
            />
            <span className="text-black"> Frontend Developer</span>
            <img
              src={pfp}
              alt=""
              className="md:w-20 md:h-20 w-10 object-contain"
            />{" "}
            | React & Next.js Developer
            <img
              src={dragon}
              alt=""
              className="w-10 md:w-20 md:h-20 object-contain"
            />
            | UI/UX-Focused Developer
          </h1>

          <h1 className=" md:m-x-2 semiheading-bold text-zinc-100 text-xl md:text-5xl font-bold flex  gap-10  items-center justify-center md:mx-2 uppercase  md:py-2 ">
            MERN Stack Developer |{" "}
            <img
              src={lapy}
              alt=""
              className="md:w-20 w-10 md:h-20 object-contain"
            />
            <span className="text-blue-800"> Frontend Developer</span>
            <img
              src={pfp}
              alt=""
              className="md:w-20 w-10 md:h-20 object-contain"
            />{" "}
            | React & Next.js Developer
            <img
              src={dragon}
              alt=""
              className="md:w-20 w-10 md:h-20 object-contain"
            />
            <span className="text-blue-800"> who ?</span>| UI/UX-Focused
            Developer
          </h1>
        </motion.div>
      </div>
      <div id="main" className="  md:w-[90%] md:mt-15 m-auto ">
        <div className="md:text-5xl  text-lg text-left md:text-center p-5 md:p-0 text-black semiheading-h md:md:pb-10 md:font-semibold   leading-[2rem]  md:leading-[2.8rem]">
          {text.map((line, i) => (
            <h1 key={i} className="overflow-hidden   md:py-1">
              {line.split(" ").map((word, j) => (
                <motion.span
                  key={j}
                  className="inline-block "
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: j * 0.05 }}
                  viewport={{ once: true }}
                >
                  &nbsp;{word}&nbsp;
                </motion.span>
              ))}
            </h1>
          ))}
        </div>

        <div className="w-full flex mt-10 md:flex-row flex-col gap-10 ">
          <div className=" w-full   md:w-[40%] ">
            <h1 className="md:mt-10 px-4 text-4xl md:text-6xl text-black- heading ">
              <motion.span
                className="inline-block text-Black"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Tech Stack
              </motion.span>
            </h1>
            <h1 className="pl-15 text-3xl md:text-6xl text-[#00FF7F] heading ">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                I Work With
              </motion.span>
            </h1>
          </div>

          <div className="md:w-[60%] flex flex-wrap md:p-10 gap-5 items-center justify-center overflow-hidden  ">
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                className="px-2 py-2 h-20 w-20  bg-[#252b28]  hover:bg-black text-white rounded-xl  font-medium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src={icon}
                  alt=" icons "
                  className=" w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,96L21.8,117.3C43.6,139,87,181,131,165.3C174.5,149,218,75,262,69.3C305.5,64,349,128,393,165.3C436.4,203,480,213,524,181.3C567.3,149,611,75,655,69.3C698.2,64,742,128,785,133.3C829.1,139,873,85,916,80C960,75,1004,117,1047,149.3C1090.9,181,1135,203,1178,213.3C1221.8,224,1265,224,1309,240C1352.7,256,1396,288,1418,304L1440,320L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </motion.div>
  );
};

export default About;
