import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const cvButtonRef = useRef(null);
  const lastScrollY = useRef(0);

  // ✅ Entrance animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navbarRef.current, {
        opacity: 0,
        y: -80,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // ✅ CV Button animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (cvButtonRef.current) {
        gsap.to(cvButtonRef.current, {
          y: -5,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "power1.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // ✅ Scroll-triggered navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = navbarRef.current;

      if (!navbar) return;

      // Hide when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(navbar, {
          y: -100,
          opacity: 0.3,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // Show when scrolling up
        gsap.to(navbar, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll to sections
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-md px-8 lg:px-20 shadow-[0_0_20px_#00FF7F33] transition-all duration-500"
      >
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div
            onClick={() => handleScrollTo("home")}
            className="cursor-pointer text-gray-300 text-2xl font-extrabold tracking-wide hover:text-[#00FF7F] transition"
          >
            WA.Coder
          </div>

          {/* Menu icon */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="menubar flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`inline-block w-8 lg:w-10 h-0.5 bg-gray-300 transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`inline-block w-8 lg:w-10 h-0.5 bg-gray-300 transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed z-40 inset-0 bg-black text-gray-300 flex flex-col items-center justify-center text-5xl font-semibold gap-5 transition-transform duration-700 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {["home", "about", "projects", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleScrollTo(item)}
            className="hover:text-[#00FF7F] hover:scale-110 transition-transform duration-300 capitalize"
          >
            {item}
          </button>
        ))}

        <a
          ref={cvButtonRef}
          href="/wahab-resume-updated.pdf"
          download
          className="px-8 py-3 border-b-2 border-[#00FF7F] text-[#00FF7F] text-3xl tracking-wide rounded-md hover:bg-[#00FF7F] hover:text-black transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default Navbar;
