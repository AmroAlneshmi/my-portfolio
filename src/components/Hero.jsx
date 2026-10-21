import myImage from "../assets/amr.webp";

function Hero() {
  const corners = [
    "-left-1 -top-1",
    "-right-1 -top-1",
    "-left-1 -bottom-1",
    "-right-1 -bottom-1",
  ];

  const frameVars = {
    "--box": "min(60vw, 50vh, 28rem)",
    "--cy": "45%",
  };

  const clip =
    "inset(calc(var(--cy) - var(--box) / 2) calc(50% - var(--box) / 2) calc(100% - var(--cy) - var(--box) / 2) calc(50% - var(--box) / 2))";

  return (
    <div className="font-badeen w-full h-full overflow-hidden bg-[#00002e]">
      <div
        className="relative flex flex-col w-full min-h-screen"
        style={frameVars}
      >
        <img
          src={myImage}
          alt="Amr"
          fetchPriority="high"
          decoding="async"
          width="1704"
          height="923"
          className="absolute inset-0 w-full h-full object-cover z-0 blur-xs"
        />

        <img
          src={myImage}
          alt=""
          aria-hidden="true"
          decoding="async"
          width="1704"
          height="923"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ clipPath: clip }}
        />

        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square border-2 border-white/70"
          style={{ width: "var(--box)", top: "var(--cy)" }}
        >
          {corners.map((pos) => (
            <span key={pos} className={`absolute ${pos} h-2 w-2 bg-white`} />
          ))}
        </div>

        <div className="relative flex flex-col justify-between z-10 p-6 sm:p-10 min-h-screen text-[#f7ede2]">
          <h1 className="text-start text-[clamp(3.5rem,15vw,9rem)] leading-none translate-y-[80%]">
            عـــمــرو
          </h1>
          <h1 className="text-end text-[clamp(3.5rem,15vw,9rem)] leading-none">
            النـشـمـي
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;