import { createFileRoute } from "@tanstack/react-router";
import { DownloadIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth bg-[#0f1115] font-sans text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between border-white/5 border-b bg-[#0f1115]/90 px-8 py-6 backdrop-blur">
        <div className="flex items-center gap-2">
          <img src="/logo512.png" alt="Void Mod Manager" className="h-10" />
          <span className="text-sm opacity-80">Void Mod Manager</span>
        </div>
        <nav>
          <a
            href="https://github.com/void-modding/web"
            className="text-sm opacity-80 transition hover:opacity-100"
          >
            Documentation
          </a>
          {/*We need to add the docs page, github has a wiki we could use that*/}
        </nav>
      </header>

      <main className="flex flex-col items-center gap-16 py-16 text-center">
        <div className="flex flex-col items-center gap-6">
          <img src="/logo512.png" alt="Logo" className="h-50" />
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-bold text-5xl">
              The new <span className="text-cyan-400">home</span> of Modding
            </h1>
            <p className="mb-6 max-w-md opacity-70">
              Welcome to the new home of Modding for any game, fully
              Open-Sourced.
            </p>
          </div>
        </div>

        <div className="mb-20 flex gap-4">
          <Button variant="primary" size="lg" asChild>
            <a href="/download" target="_blank" rel="noopener noreferrer">
              <DownloadIcon />
              Download
            </a>
          </Button>
          <Button size="lg" asChild>
            <a
              href="https://github.com/void-modding/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Source Code
            </a>
          </Button>
        </div>
        <section className="mt-20 flex w-full max-w-5xl flex-col items-center justify-between md:flex-row">
          <div className="max-w-lg text-left">
            <h2 className="mb-2 font-semibold text-3xl">
              Find what you need,
              <br />
              <span className="text-cyan-400">whenever you need</span>
            </h2>
            <p className="text-sm opacity-70">
              Search through thousands of mods spanning across hundreds of games
              instantly. Filter by category, popularity and more.
            </p>
          </div>

          <div>
            <img src="Placeholder.png"></img>
            {/* I guess we adding an image here */}
          </div>
        </section>

        <section className="mt-20 flex w-full max-w-5xl flex-col items-center justify-between md:flex-row">
          <div>
            <img src="Placeholder.png"></img>
            {/* I guess we adding an image here */}
          </div>

          <div className="max-w-lg text-left">
            <h2 className="mb-2 font-semibold text-3xl">
              Automaticlly installs
              <br />
              <span className="text-cyan-400">for you</span>
            </h2>
            <p className="text-sm opacity-70">
              Automaticly installs mods for you with a single click. No more
              manual installs, no more broken mods.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
