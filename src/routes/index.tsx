import { createFileRoute } from "@tanstack/react-router";
import { animate, createTimeline, random, stagger } from "animejs";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const textRef = useRef<HTMLDivElement | null>(null);
	const _glowRef = useRef<HTMLDivElement | null>(null);
	const _blobsRef = useRef<HTMLDivElement | null>(null);
	const logoRef = useRef(null);

	useEffect(() => {
		if (!textRef.current) return;
		const letters = Array.from(
			textRef.current.querySelectorAll(".coming-letter"),
		);

		const tl = createTimeline({
			playbackEase: "inOutExpo",
			autoplay: true,
		});

		tl.add(".coming-glow", {
			opacity: [0, 1],
			scale: [0.6, 1.05],
			duration: 1600,
		})
			.add(
				".blob",
				{
					x: 0,
					y: 0,
					translateX: () => random(-40, 40),
					translateY: () => random(-40, 40),
					scale: [0, 1],
					delay: stagger(120),
					duration: 1400,
				},
				"-=1200",
			)
			.add(
				letters,
				{
					translateY: [80, 0],
					rotateX: [-90, 0],
					opacity: [0, 1],
					scale: [0.85, 1],
					delay: stagger(70),
					duration: 900,
				},
				"-=900",
			)
			.add(
				".subtext",
				{
					opacity: [0, 1],
					translateY: [20, 0],
					duration: 800,
					ease: "outQuad",
				},
				"-=400",
			);

		const shimmer = animate(letters, {
			backgroundPositionX: ["0%", "200%"],
			duration: 6000,
			ease: "linear",
			loop: true,
			delay: stagger(90),
		});

		const floatBlobs = animate(".blob", {
			translateX: () => random(-420, 420),
			translateY: () => random(-420, 420),
			alternate: true,
			ease: "inOutSine",
			duration: 6000,
			opacity: [0.25, 0.45],
			loop: true,
		});

		const glowBreath = animate(".coming-glow", {
			scale: [1.02, 0.98],
			opacity: [0.85, 1],
			alternate: true,
			ease: "inOutSine",
			duration: 2000,
			loop: true,
		});

		tl.then(() => {
			shimmer.play();
			floatBlobs.play();
			glowBreath.play();
		});

		return () => {
			tl.pause();
			shimmer.pause();
			floatBlobs.pause();
			glowBreath.pause();
		};
	});

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
				<img ref={logoRef} src="/logo512.png" alt="Logo" className="h-50" />
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
						<img src="download.png" alt="Download" className="h-5 w-5" />
						Download
					</a>
					<a
						href="https://github.com/void-modding/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#1a1d23] hover:bg-[#22262d] px-6 py-2 rounded-md font-medium transition border border-white/10 inline-flex items-center gap-2"
					>
						<img src="github.png" alt="GitHub" className="h-5 w-5" />
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
