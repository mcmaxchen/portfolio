import { useEffect, useState } from "react";

function Technos() {
  const [technos, setTechnos] = useState();

  useEffect(() => {
    function getTechnos() {
      fetch("/json/technos.json").then(async (result) =>
        setTechnos(await result.json())
      );
    }

    getTechnos();
  });

  if (technos) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-9 p-4">
        <h3 className="text-xl font-medium">Some technologies I use :</h3>
        <div className="flex flex-wrap gap-6">
          {technos.map((techno) => {
            return (
              <div key={techno.name}>
                <h2>{techno.name}</h2>
                <img
                  src={techno.image}
                  alt={techno.name}
                  className="w-16 md:w-24 lg:w-28"
                />
              </div>
            );
          })}
        </div>

        <h3 className="text-xl font-medium">More in my full Resume</h3>
        <a
          href="/imgs/CV.pdf"
          download="CV_CHEN_Max.pdf"
          className="rounded-md px-6 py-3 flex gap-2 bg-polynesianblue text-white hover:scale-105 hover:shadow-2xl hover:text-teal-400 duration-500"
        >
          <img src="/imgs/download.svg" alt="download" className="w-6" />
          Download
        </a>
      </div>
    );
  }
}

export default Technos;
