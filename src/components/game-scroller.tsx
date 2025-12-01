import Marquee from "react-fast-marquee";

const games = [
  {
    name: "cyberpunk 2077",
    comingSoon: true,
  },
  {
    name: "persona 5 royal",
  },
  {
    name: "cities: skylines",
    comingSoon: true,
  },
  {
    name: "payday 2",
  },
  {
    name: "subnautica",
    comingSoon: true,
  },
  {
    name: "watch dogs",
    comingSoon: true,
  },
  {
    name: "satisfactory",
  },
  {
    name: "detroit: become human",
    comingSoon: true,
  },
  {
    name: "bloons td 6",
  },
];

const GameScroller = () => {
  return (
    <section className="flex w-full overflow-hidden border-surface-800 border-y-2 bg-surface-950">
      <Marquee speed={25}>
        <div className="flex w-full animate-marquee gap-4 px-2 py-3">
          {...games.map((game) => {
            const formattedName = game.name
              .toLowerCase()
              .replace(/[^a-zA-Z0-9]+/g, "-");

            return (
              <div key={formattedName} className="relative">
                <div
                  className={`relative inset-ring-2 inset-ring-surface-600/50 flex overflow-hidden text-nowrap rounded-xl px-12 py-8 font-bold text-xl/6 uppercase ${game.comingSoon ? "opacity-50" : ""}`}
                >
                  <span className={game.comingSoon ? "opacity-0" : ""}>
                    {game.name}
                  </span>
                  <img
                    src={`/games/${formattedName}.png`}
                    alt={game.name}
                    className="-z-10 absolute top-0 left-0 h-full object-cover brightness-35 saturate-75"
                  />
                </div>
                {game.comingSoon ? (
                  <span className="absolute top-0 right-0 z-10 flex h-full w-full items-center justify-center font-bold text-xl uppercase">
                    coming soon
                  </span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

export default GameScroller;
