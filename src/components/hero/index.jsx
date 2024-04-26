function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl gap-2 sm:gap-4 md:gap-6 p-2">
      <p>👋Hello, I'm Max</p>
      <p className="flex text-gray">full-stack developper</p>
      <p className="text-black">and this is my portfolio</p>

      <img src="/imgs/Photo.png" alt="Max" className="w-44" />
    </div>
  );
}

export default Hero;
