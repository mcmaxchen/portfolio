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
      <div className="h-screen flex flex-col xl:flex-row flex-wrap p-6 gap-6">
        {projects.map((project) => {
          return (
            <div
              className="flex flex-col items-center justify-around gap-4 px-4 py-2 border rounded-sm xl:h-[60vh]"
              key={project.name}
            >
              <h1 className="font-black text-xl">{project.name}</h1>
              <p className="underline">{project.type}</p>

              <img
                src={project.image}
                alt={project.name}
                onClick={() =>
                  dispatch({
                    type: "show",
                    src: project.image,
                  })
                }
                className="hidden md:block w-56"
              />

              <p className="font-light">{project.description}</p>
              <p>{project.technologies}</p>

              <a
                className="border p-4 rounded-md bg-white"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the website
              </a>

              {modal.display ? (
                <div
                  className="z-50"
                  onClick={() => dispatch({ type: "hide" })}
                >
                  <img src={modal.src} alt="" />
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
