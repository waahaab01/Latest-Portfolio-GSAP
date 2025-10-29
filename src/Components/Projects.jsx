import { easeInOut, motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

import ProjectCard from "./Projectcard";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <div id="projects" className=" w-full min-h-screen relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 1, display: "block" }}
        animate={{
          opacity: inView ? 0 : 1,
          display: inView ? "none" : "block",
        }}
        transition={{ duration: 0.6 }}
        className=" absolute z-10    bg-black md:top-0  h-screen  w-full flex items-center justify-center "
      >
        <h1 className="md:text-[20vw] text-7xl text-center md:pl-45 text-[#00FF7F]   md:flex heading ">
          {" "}
          Projects{" "}
        </h1>
      </motion.div>

      <div className="w-full  min-h-screen  ">
        <h1 className="uppercase w-[85%] m-auto text-4xl md:text-6xl  text-white py-10 ">
          My Recent <span className="text-[#00FF7F]">work</span>{" "}
        </h1>
        <div className=" w-full   p-2 flex flex-col gap-20 ">
          <ProjectCard />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Projects;
