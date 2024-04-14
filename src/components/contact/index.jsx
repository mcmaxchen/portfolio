import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState();

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
    <form onSubmit={(e) => sendEmail(e)} className="flex flex-col gap-6">
      <input
        className="p-4 rounded-md"
        type="text"
        id="email"
        placeholder="What's your email?"
      />

      <textarea
        className="p-4 rounded-md"
        placeholder="Send me a message!"
        id="message"
        rows="7"
      />

      <span id="status">{status}</span>

      <button className="border rounded-md py-3 px-6 w-fit hover:text-secondary">
        Send
      </button>
    </form>
  );
}

export default Contact;
