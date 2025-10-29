import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".exp-card");
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const totalCards = cards.length;

        gsap.to(cards, {
          xPercent: -100 * (totalCards - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1.5,
            snap: 1 / (totalCards - 1),
            start: "top top",
            end: () => "+=" + containerRef.current.offsetWidth,
            onUpdate: (self) => {
              gsap.to(lineRef.current, {
                width: `${self.progress * 100}%`,
                ease: "none",
              });
            },
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(cards, { opacity: 0, x: 100 });

        cards.forEach((card) => {
          gsap.to(card, {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "top 10%",
              toggleActions: "play reverse play reverse",
            },
          });
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      id: 1,
      role: "React.js Intern",
      period: "Dec 2023 - Apr 2024 • Agency / On-site",
      desc: "Kickstarted my professional journey by transforming complex Figma concepts into production-ready UIs using React.js, Tailwind CSS, and Material UI. Learned fundamentals of component-based architecture, performance optimization, and responsive design.",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "Redux",
        "REST API",
        "Version Control",
      ],
      color: "#00FF7F",
    },
    {
      id: 2,
      role: "Frontend React Developer",
      period: "May 2024 - Jun 2025 • Agency / On-site",
      desc: "Elevated user experiences by designing and developing high-performing interfaces. Built reusable design components and ensured seamless API integrations with real-time data rendering.",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "UI/UX Design",
      ],
      color: "#00FF7F",
    },
    {
      id: 3,
      role: "MERN Stack Developer",
      period: "Jun 2025 - Present • Agency / Remote",
      desc: "Currently developing and scaling full-stack web apps using the MERN stack, focusing on performance, security, and scalability. Delivering intuitive, data-driven interfaces and optimizing user flows.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "AWS",
        "JWT",
      ],
      color: "#00FF7F",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 1, display: "block" }}
        animate={{
          opacity: inView ? 0 : 1,
          display: inView ? "none" : "block",
        }}
        transition={{ duration: 0.6 }}
        className="absolute z-10 bg-black top-0 h-screen w-full flex items-center justify-center"
      >
        <h1 className="md:text-[15vw] text-6xl sm:text-7xl text-center text-[#00FF7F] font-bold">
          Experience
        </h1>
      </motion.div>

      <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl text-center font-bold text-white mt-10 md:mt-0 md:max-w-full w-[96%]">
        My Experience <span className="text-[#00FF7F]">Journey</span>
      </h1>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="relative flex flex-col md:flex-row w-full md:w-[300vw] min-h-screen"
      >
        {/* Progress Line (Desktop only) */}
        <div className="absolute md:top-1/2 top-[99%] left-0 right-0 md:h-[6px] h-[4px] -translate-y-1/2 z-0 rounded-full overflow-hidden">
          <div
            ref={lineRef}
            className="h-full bg-gray-500 w-0 rounded-full shadow-[0_0_20px_rgba(30,64,175,0.6)]"
          ></div>
        </div>

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="exp-card w-full md:w-screen flex items-center justify-center py-10 px-4 sm:px-6 md:px-10"
          >
            <div
              className="relative w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] bg-black border-2 border-[#00FF7F] rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-transform duration-500"
              style={{ boxShadow: `0 0 40px ${exp.color}40` }}
            >
              <div>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
                  style={{ color: exp.color }}
                >
                  {exp.role}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white mb-4">
                  {exp.period}
                </p>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                  {exp.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base rounded-full border border-[#00FF7F] bg-[#00FF7F]/10 text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
