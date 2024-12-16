'use client'
import  { useState, useEffect } from "react";
export const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "about", "contact"];
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <div className=" flex justify-center items-center fixed top-3 w-full z-50">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
    <a
          href="#hero"
          className={`nav-item ${activeSection === "hero" ? "bg-white text-gray-900" : ""}`}
        >Home</a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900" : ""}`}
        >Projects</a>
        <a
          href="#about"
          className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900" : ""}`}
        >About</a>
        <a
          href="#contact"
          className={`nav-item ${activeSection === "contact" ? "bg-white text-gray-900" : ""}`}
        >Contact</a>
    </nav>
  </div>
  );
};
