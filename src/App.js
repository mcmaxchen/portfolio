import Projects from "./components/projects";
import Socials from "./components/socials";
import Contact from "./components/contact";
import Technos from "./components/technos";
import About from "./components/about";

import "./index.css";
import Hero from "./components/hero";

function App() {
  return (
    <div className="flex flex-col h-screen snap-y snap-mandatory overflow-y-auto">
      <section className="snap-start bg-gradient-to-b from-teal-800 via-teal-400 to-purple text-white">
        <Hero />
      </section>

      <section
        id="about"
        className="flex justify-center snap-start bg-gradient-to-b from-purple via-mauve to-pink text-black"
      >
        <About />
      </section>

      <section
        id="projects"
        className="snap-start bg-gradient-to-b from-pink text-black"
      >
        <Projects />
      </section>

      <section id="technos" className="flex flex-col snap-start">
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
