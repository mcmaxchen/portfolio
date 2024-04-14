function ScrollButton({ name }) {
  return (
    <button
      className="md:py-2 md:px-6 rounded-md hover:text-secondary"
      onClick={() => {
        const elementPosition = document.querySelector("#" + name).offsetTop;
        window.scrollTo({ top: elementPosition - 50, behavior: "smooth" });
      }}
    >
      <p className="capitalize">{name}</p>
    </button>
  );
}

export default ScrollButton;
