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
      <div className="flex flex-wrap gap-3">
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
    );
  }
}

export default Technos;
