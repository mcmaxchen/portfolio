import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

function Contact() {
  const [status, setStatus] = useState();
  const [socials, setSocials] = useState();

  useEffect(() => {
    function getSocials() {
      fetch("/json/socials.json").then(async (socials) => {
        setSocials(await socials.json());
      });
    }

    getSocials();
  }, []);

  async function sendEmail(e) {
    e.preventDefault();

    const user_email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.init({
      publicKey: process.env.REACT_APP_PUBLIC_KEY,
    });

    setStatus("Sending...");

    const send = await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      {
        from_name: user_email,
        subject: "portfolio",
        message: message,
      }
    );

    if (send.text === "OK") {
      setStatus("Message sent!");
      setTimeout(() => setStatus(), 3000);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <h1 className="text-3xl font-black">Let's get in touch!</h1>
      <form
        onSubmit={(e) => sendEmail(e)}
        className="flex flex-col gap-6 p-4 w-screen sm:w-[476px] md:w-[600px]"
      >
        <input
          className="p-4 rounded-md border"
          type="text"
          id="email"
          placeholder="What's your email?"
        />

        <textarea
          className="p-4 rounded-md border"
          placeholder="Send me a message!"
          id="message"
          rows="7"
        />

        <span id="status">{status}</span>

        <button className="rounded-md py-3 px-6 w-fit transition duration-500 transform hover:-translate-y-3 hover:text-white hover:shadow-2xl bg-vistablue">
          Send
        </button>
      </form>

      {socials ? (
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-2xl font-medium">My social networks</h3>

          <div className="flex gap-4">
            {socials.map((social) => {
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
                    className="w-16 hover:invert duration-700"
                  />
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Contact;
