import { motion } from "framer-motion";
import pro1 from '/ProjectsImg/image.png'
import pro2 from '/ProjectsImg/p1.png'
import pro3 from '/ProjectsImg/p2.png'
import pro4 from '/ProjectsImg/pro4.png'

const projects = [
  {
    name: "Redine Gaming",
    image: pro1,
    link: "https://gsap-redefine-gaming.vercel.app/",
    tech: ["React", "GSAP", "Tailwind"],
  },
  {
    name: "Benzifi Landing Page",
    image: pro2,
    link: "https://www.benzifi.com/",
    tech: ["FIgma to Code", "Next Js", "Tailwind"],
  },
  {
    name: "Fantasy League of Hiphop The-Flohh",
    image: pro3,
    link: "https://theflohh.com/",
    tech: ["React", "Node", "Tailwind", "MongoDB"],
  },
    {
    name: "SPYLT Cold Drink Website",
    image: pro4,
    link: "https://gsap-spylt-kohl.vercel.app/ ",
    tech: ["React", "GSAP", "Tailwind"],
  },
];

const ProjectCard = () => {
  return (
    <div className="grid md:grid-cols-2  gap-x-0 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: i * 0.2 }}
          className="relative md:w-[95%] w-full rounded-2xl overflow-hidden m-auto"
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt="Project Screenshot"
              className="w-full h-full object-cover"
            />
          </a>

          <div className="hidden uppercase px-5 p-3 absolute z-4 w-full h-24 bottom-0 md:flex gap-3 bg-black backdrop-blur-md">
            <div className="h-full w-2 bg-[#00FF7F]"></div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white font-semibold md:text-md">
                <span>Project name</span>: {project.name}
              </h1>
              <h1 className="text-white navbar font-medium md:text-md">
                Tech Used :{" "}
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="border border-gray-600 navbar text-xs rounded-2xl inline-block p-1 px-3 m-1"
                  >
                    {t}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          {/* Mobile Info */}
          <div className="px-2 py-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#00FF7F] font-semibold md:text-xl text-md">
                <span className="capitalize text-md">Project name</span>:{" "}
                {project.name}
              </h1>
              <h1 className="text-white font-medium md:text-xl flex gap-1 flex-wrap">
                Tech Used :
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs rounded-full border-[#00FF7F] border inline-block p-1 px-3"
                  >
                    {t}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
