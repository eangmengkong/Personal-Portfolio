import Hero from "./Hero";
import About from "../pages/About";
import { Project } from "../pages/Project";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Resume />
      <Contact />
    </>
  );
};
