function ScrollButton({ name }) {
  return (
    <button
      className="flex align-center gap-3 md:py-2 md:px-6 rounded-md hover:text-secondary"
      onClick={() => {
        const element = document.querySelector("#" + name);
        element?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <img src={"/imgs/" + name + ".svg"} alt="name" className="w-6" />
      <p className="capitalize">{name}</p>
    </button>
  );
}

export default ScrollButton;
