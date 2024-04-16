import Projects from "./components/projects";
import download from "./imgs/download.svg";
import Navbar from "./components/navbar";
import Max from "./imgs/Photo.png";

import Socials from "./components/socials";
import Contact from "./components/contact";
import Technos from "./components/technos";

import "./index.css";

function App() {
  return (
    <div className="flex justify-center px-5 py-4 md:py-18 md:px-12">
      <div className="flex flex-col w-[80%] p-5 lg:p-8 lg:w-[72%]">
        <Navbar />

        <div className="flex flex-col gap-2 py-8 gap-6 md:gap-12">
          <div className="flex gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl lg:text-6xl">CHEN Max</h1>
              <h4 className="text-2xl lg:text-4xl">Web developer</h4>

              <p className="text-xs font-light italic">Paris, Ile-de-France</p>

              <p>
                Currently in a formation at Web@academie, Epitech, I am looking
                for an apprenticeship (starting in September 2024 - 14 months).
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-10 lg:gap-24 text-xs sm:text-sm md:text-md lg:text-lg">
            <section className="flex flex-col gap-6" id="about">
              <h1 className="font-bold text-3xl">About me</h1>

              <p>
                Inspiring of becoming a web developer full-stack, I began my
                path as soon as 2020 at "Université d'Orléans", before shifting
                to a formation at ENI "Ecole Informatique". For the first time,
                I had to be autonomous and self-teach coding. It was a great
                experience.
              </p>

              <p>
                Eventually I ended up by joining Epitech - Web@cademie where I
                am further improving my dev skills to eventually land a job in a
                full-stack position.
              </p>

              <div className="flex flex-col items-center gap-6">
                <img className="h-[20vw] w-auto" src={Max} alt="Max" />

                <a
                  className="flex align-items hover:text-secondary border rounded-lg gap-2 p-6"
                  href="./imgs/CV.pdf"
                  download="CHEN_Max.pdf"
                >
                  <img
                    src={download}
                    alt="download"
                    className="w-4 md:w-5 lg:w-7"
                  />
                  Full resume
                </a>
              </div>
            </section>

            <section id="technos" className="flex flex-col gap-6">
              <h1 className="font-bold text-3xl">Technologies I like to use</h1>
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
        </div>
      </div>
    </div>
  );
}

export default App;
