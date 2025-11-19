import { createFileRoute } from "@tanstack/react-router";
import { animate, createTimeline, random, stagger } from "animejs";
import { GithubIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const textRef = useRef<HTMLDivElement | null>(null);
	const glowRef = useRef<HTMLDivElement | null>(null);
	const blobsRef = useRef<HTMLDivElement | null>(null);

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

	const COMING_SOON = "COMING SOON";
	return (
		<div className="coming-wrapper">
			<div ref={glowRef} className="coming-glow"></div>
			<div ref={blobsRef} className="blobs-layer">
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className={`blob blob-${i}`}></div>
				))}
			</div>

			<div ref={textRef} className="coming-text">
				{COMING_SOON.split("").map((char, i) => {
					if (char === "")
						return (
							<span key={`space-${i}`} className="coming-space">
								&nbsp;
							</span>
						);
					return (
						<span key={i} className="coming-letter interactive-letter">
							{char}
						</span>
					);
				})}
			</div>
			<div className="subtext">
				<span className="subtext-pill">Launching soon</span>
				<a
					type="button"
					href="https://github.com/void-modding"
					target="_blank"
					className="subtext-pill accent"
					rel="noopener"
				>
					<GithubIcon />
					Stay Tuned
				</a>
			</div>
		</div>
	);
}
