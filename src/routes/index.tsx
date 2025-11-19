import { createFileRoute } from "@tanstack/react-router";
import { DownloadIcon, GithubIcon } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="h-screen overflow-y-auto scroll-smooth bg-[#0f1115] text-white font-sans">
			<header className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 bg-[#0f1115]/90 backdrop-blur border-b border-white/5">
				<div className="flex items-center gap-2">
					<img src="/logo512.png" alt="Void Mod Manager" className="h-10" />
					<span className="text-sm opacity-80">Void Mod Manager</span>
				</div>
				<nav>
					<a
						href="https://github.com/void-modding/web"
						className="text-sm opacity-80 hover:opacity-100 transition"
					>
						Documentation
					</a>
					{/*We need to add the docs page, github has a wiki we could use that*/}
				</nav>
			</header>

			<main className="flex flex-col items-center text-center mt-10 px-4">
				<img src="/logo512.png" alt="Logo" className="h-50" />
				<h1 className="text-4xl font-bold mb-2">
					The new <span className="text-cyan-400">home</span> of Modding
				</h1>
				<p className="opacity-70 max-w-md mb-6">
					Welcome to the new home of Modding for any game, fully Open-Sourced.
				</p>

				<div className="flex gap-4 mb-20">
					<a
						href="/download"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md font-medium transition inline-flex items-center gap-2"
					>
						<DownloadIcon size={20} />
						Download
					</a>
					<a
						href="https://github.com/void-modding/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#1a1d23] hover:bg-[#22262d] px-6 py-2 rounded-md font-medium transition border border-white/10 inline-flex items-center gap-2"
					>
						<GithubIcon size={20} />
						Source Code
					</a>
				</div>
				<section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mt-20">
					<div className="max-w-lg text-left">
						<h2 className="text-3xl font-semibold mb-2">
							Find what you need,
							<br />
							<span className="text-cyan-400">whenever you need</span>
						</h2>
						<p className="opacity-70 text-sm">
							Search through thousands of mods spanning across hundreds of games
							instantly. Filter by category, popularity and more.
						</p>
					</div>

					<div>
						<img src="Placeholder.png"></img>
						{/* I guess we adding an image here */}
					</div>
				</section>

				<section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mt-20">
					<div>
						<img src="Placeholder.png"></img>
						{/* I guess we adding an image here */}
					</div>

					<div className="max-w-lg text-left">
						<h2 className="text-3xl font-semibold mb-2">
							Automaticlly installs
							<br />
							<span className="text-cyan-400">for you</span>
						</h2>
						<p className="opacity-70 text-sm">
							Automaticly installs mods for you with a single click. No more
							manual installs, no more broken mods.
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}
