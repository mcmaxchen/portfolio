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
      <div className="flex flex-col justify-center items-center gap-2 h-screen">
        <h1 className="text-3xl font-bold">Experience</h1>

        <h3 className="text-xl font-medium">A few projects I worked on :</h3>
        <p className="lg:hidden">Swipe &#x2192;</p>

        <div className="flex snap-x snap-mandatory overflow-x-auto w-full gap-6 p-6 lg:justify-center">
          {projects.map((project) => {
            return (
              <div
                className="snap-center flex-shrink-0 flex flex-col items-center justify-around gap-4 px-4 py-2 border rounded-sm w-[90vw] sm:w-96 h-[72vh]"
                key={project.name}
              >
                <h1 className="font-black text-xl">{project.name}</h1>
                <p className="underline">{project.type}</p>

                <div className="hidden md:flex flex-col items-center text-xs">
                  {project.image ? (
                    <>
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
                      <span>Click to see the full image</span>
                    </>
                  ) : (
                    <>
                      <video className="h-24 sm:h-36" controls>
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </>
                  )}
                </div>

                {modal.display ? (
                  <div
                    className="flex justify-center items-center absolute top-0 left-0 z-50 h-screen w-screen bg-black"
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
