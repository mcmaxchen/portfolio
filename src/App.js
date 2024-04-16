import Projects from "./components/projects";
import download from "./imgs/download.svg";
import Navbar from "./components/navbar";
import Max from "./imgs/Photo.png";

import Socials from "./components/socials";
import Contact from "./components/contact";
import Technos from "./components/technos";

import "./index.css";
import About from "./components/about";

function App() {
  return (
    <div className="p-3">
      <Navbar />

      <div className="">
        <h3>
          Hello, I am <span className="font-bold">CHEN Max</span> and I am...
        </h3>
        <h1>a web developer looking for an apprenticeship</h1>
      </div>

      <section id="about">
        <About />
      </section>

      <section id="technos" className="flex flex-col gap-6">
        <h1 className="font-bold text-3xl">Technologies</h1>
        <div className="flex flex-wrap gap-6">
          <Technos />
        </div>
      </section>

      <section id="projects" className="flex flex-col gap-6">
        <h1 className="font-bold text-3xl">My projects</h1>
        <Projects />
      </section>

      <section id="contact" className="flex flex-col gap-6">
        <h1 className="font-bold text-3xl">Contact me!</h1>
        <Contact />
      </section>

      <section id="socials" className="flex gap-4">
        <Socials />
      </section>
    </div>
  );
}

export default App;
