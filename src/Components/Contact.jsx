import React from "react";
import { motion, easeInOut } from "framer-motion";
import img from "/contactImg.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { VscHeartFilled } from "react-icons/vsc";

const text = ["Let’s", "Turn", "Your", "Vision", "Into", "Reality"];

const wordVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/wahabhussain01/" },
  { name: "Github", href: "https://github.com/waahaab01" },
];

const Contact = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.5"
      id="contact"
      className="w-full h-screen    flex flex-col items-center justify-center"
    >
      <div className="md:w-[96%] w-full h-[95%] flex flex-col items-center justify-center   m-auto md:p-5 rounded-xl  bg-[#00FF7F] overflow-hidden">
        <h1 className="heading px-4  md:text-8xl flex text-3xl text-black gap-1  flex-wrap md:gap-x-5 w-[96%] m-auto">
          {text.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="md:w-[85%] w-full  m-auto h-[68%] flex gap-5 md:flex-row flex-col md:text-xl heading items-center justify-around  text-black ">
          <div className=" w-full md:w-[20%] flex flex-row gap-2     justify-center md:flex-col   ">
            {socials.map((social, i) => (
              <motion.div
                key={i}
                className="relative   w-full h-[30px] overflow-hidden"
                initial="initial"
                whileHover="hover"
              >
                {/* Top text (slides up & fades out) */}
                <motion.span
                  className="absolute top-0 left-0 inline-flex items-center gap-1 font-medium"
                  variants={{
                    initial: { y: "0%", opacity: 1 },
                    hover: { y: "-105%", opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                >
                  <GoArrowUpRight className="text-sm" />
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.name}
                  </a>
                </motion.span>

                {/* Bottom text (slides up & fades in) */}
                <motion.span
                  className="absolute top-0 left-0 inline-flex items-center gap-1 font-medium"
                  variants={{
                    initial: { y: "100%", opacity: 0 },
                    hover: { y: "0%", opacity: 1 },
                  }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                >
                  <GoArrowUpRight className="text-sm" />
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.name}
                  </a>
                </motion.span>
              </motion.div>
            ))}
          </div>

          <div className="  relative w-full  md:w-[50%] h-[100%]     ">
            <div className=" bobRev md:w-full w-[80%] m-auto  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full absolute z-1   rounded-full   border"></div>
            <div className=" bobround  md:w-full w-[80%] h-full absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-full   border"></div>
            <div className=" absolute top-1/2 left-1/2 z-3 w-[65%] md:w-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full overflow-hidden">
              <img src={img} alt="w-full h-full object-cover " />
            </div>
          </div>

          <div className="md:w-[20%] w-full gap-5 flex md:flex-col   justify-center items-center   ">
            <button
              onClick={() =>
                (window.location.href = "mailto:waahaab7233@gmail.com")
              }
              className="border semiheading-h1 bg-black text-[#00FF7F] px-7 py-3 flex items-center justify-center gap-1 rounded-full"
            >
              <CiMail /> Email
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/923010146619?text=Hi%20Wahab,%20I%20want%20to%20connect"
                )
              }
              className="border semiheading-h1  bg-black text-[#00FF7F] px-6 py-3 flex items-center justify-center gap-1 rounded-full"
            >
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
