"use client";

import { useEffect, useState } from "react";

const Hero = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="relative min-h-screen flex items-center justify-start overflow-hidden">
			{/* Background image with parallax */}
			<div
				className="absolute inset-0 z-0"
				style={{
					transform: `translateY(${scrollY * 0.25}px)`,
				}}
			>
				<img
					src="/soulbound.png"
					alt="Hero background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/30" />
			</div>

			{/* Text content */}
			<div className="relative rounded-r-2xl bg-background/50 p-16 backdrop-blur-sm top-75">
				<h1 className="z-10 font-(family-name:--font-castoro) text-8xl text-primary inline-block">
					bonbon
				</h1>
			</div>
		</div>
	);
};

export default Hero;
