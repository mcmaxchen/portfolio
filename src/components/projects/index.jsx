import { useEffect, useReducer, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState();
  const [modal, dispatch] = useReducer(reducer, { display: false, src: "" });

  function reducer(state, action) {
    if (action.type === "show") {
      return {
        display: true,
        src: action.src,
      };
    }

    if (action.type === "hide") {
      return {
        display: false,
        src: "",
      };
    }
  }

  useEffect(() => {
    async function getProjects() {
      fetch("/json/projects.json").then(async (res) => {
        let data = await res.json();
        setProjects(data);
      });
    }

    getProjects();
  }, []);

  if (projects) {
    return (
      <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-14 justify-center h-screen">
        <h1 className="text-3xl font-bold">Projects</h1>

        <div className="flex snap-x snap-mandatory overflow-x-auto w-full gap-6 p-6 ">
          {projects.map((project) => {
            return (
              <div
                className="snap-center flex-shrink-0 flex flex-col items-center justify-around gap-4 px-4 py-2 border rounded-sm w-[90vw] sm:w-3/4 md:w-80 lg:w-96 h-[60vh]"
                key={project.name}
              >
                <h1 className="font-black text-xl">{project.name}</h1>
                <p className="underline">{project.type}</p>

                <div className="hidden md:flex flex-col items-center text-xs">
                  <img
                    src={project.image}
                    alt={project.name}
                    onClick={() =>
                      dispatch({
                        type: "show",
                        src: project.image,
                      })
                    }
                    className="h-24 sm:h-36"
                  />
                  <span>Cliquez pour agrandir l'image</span>
                </div>

                {modal.display ? (
                  <div
                    className="flex justify-center items-center absolute top-0 left-0 z-50 h-screen w-screen"
                    onClick={() => dispatch({ type: "hide" })}
                  >
                    <img src={modal.src} alt="" className="w-[90%] z-50" />
                  </div>
                ) : (
                  <></>
                )}

                <p className="font-light">{project.description}</p>
                <p>{project.technologies}</p>

                <a
                  className="border border-mauve p-4 rounded-md bg-gradient-to-t from-pink to-mauve"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the website
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
