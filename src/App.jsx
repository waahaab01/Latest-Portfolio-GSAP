import React from "react";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/ExperienceJourney";

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
