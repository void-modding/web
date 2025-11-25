import Marquee from "react-fast-marquee";

const games = [
  {
    name: "cyberpunk 2077",
  },
  {
    name: "payday 2",
  },
  {
    name: "persona 5 royal",
  },
  {
    name: "satisfactory",
  },
  {
    name: "cities: skylines",
  },
  {
    name: "subnautica",
  },
  {
    name: "watch dogs",
  },
  {
    name: "detroit: become human",
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
              <div
                key={formattedName}
                className="relative inset-ring-2 inset-ring-surface-600/50 flex overflow-hidden text-nowrap rounded-xl px-12 py-8 font-bold text-xl/6 uppercase"
              >
                {game.name}
                <img
                  src={`/games/${formattedName}.png`}
                  alt={game.name}
                  className="-z-10 absolute top-0 left-0 object-cover brightness-17 saturate-75"
                />
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

export default GameScroller;
