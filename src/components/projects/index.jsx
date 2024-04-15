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
    return projects.map((project) => {
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4 p-4 border rounded-md"
          key={project.name}
        >
          <h1 className=" font-bold text-xl">{project.name}</h1>
          <p className="underline">{project.type}</p>

          <p>{project.description}</p>
          <p>{project.technologies}</p>
        </a>
      );
    });
  }
}

export default Projects;
