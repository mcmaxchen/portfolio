import { useEffect, useState } from "react";

function Socials() {
  const [socials, setSocials] = useState();

  useEffect(() => {
    function getSocials() {
      fetch("/json/socials.json").then(async (socials) => {
        setSocials(await socials.json());
      });
    }

    getSocials();
  }, []);

  if (socials) {
    return socials.map((social) => {
      return (
        <a
          target="_blank"
          rel="noreferrer"
          href={social.link}
          key={social.image}
        >
          <img
            src={"/imgs/" + social.image}
            alt={social.image}
            className="w-6 lg:w-8"
          />
        </a>
      );
    });
  }
}

export default Socials;
