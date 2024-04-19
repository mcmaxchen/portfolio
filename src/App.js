import Projects from "./components/projects";
import Socials from "./components/socials";
import Contact from "./components/contact";
import Technos from "./components/technos";
import About from "./components/about";

import "./index.css";
import Hero from "./components/hero";

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-auto">
      <section className="snap-start bg-gradient-to-b from-teal-800 via-teal-400 to-beige text-white">
        <Hero />
      </section>

      <section
        id="about"
        className="snap-start bg-gradient-to-b from-beige from-90% to-battleshipgray text-black"
      >
        <About />
      </section>

      <section
        id="projects"
        className="snap-start bg-battleshipgray text-black"
      >
        <Projects />
      </section>

      <section id="technos" className="snap-start">
        <Technos />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <section id="socials" className="snap-start">
        <Socials />
      </section>
    </div>
  );
}

export default App;
