import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState();

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
                src={"/imgs/" + project.name + ".png"}
                alt={project.name}
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
