"use client";

import { useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import SocialIcons from "./components/SocialIcons";
import ThemePicker from "./components/ThemePicker";

export default function Home() {
  const [theme, setTheme] = useState("pink");

  return (
    <div
      id="app"
      className={`h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth theme-${theme}`}
    >
      <Navbar />
      <SocialIcons />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-start">
        <Experience />
      </section>
      <div className="fixed bottom-4 right-4">
        <ThemePicker setTheme={setTheme} />
      </div>
    </div>
  );
}