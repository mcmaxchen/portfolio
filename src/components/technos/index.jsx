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
    return technos.map((techno) => {
      return (
        <div key={techno.name}>
          <h2>{techno.name}</h2>
          <img
            src={techno.image}
            alt={techno.name}
            className="w-12 md:w-18 lg:w-24"
          />
        </div>
      );
    });
  }
}

export default Technos;
