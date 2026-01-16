"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SocialMedia from "./social-media";

const Hero = () => {
	const [scrollY, setScrollY] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Version that contains background image links & title
	const showcaseProjects = [
		{
			title: "Soulbound",
			imageUrl: "/soulbound.png",
			link: "/projects/soulbound",
		},
		{
			title: "Ethos",
			imageUrl: "/ethossnapshot_trimmed.png",
			link: "/projects/ethos",
		},
	];

	const CROSSFADE_INTERVAL = 10000; // 10 seconds between transitions

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (showcaseProjects.length <= 1) return;

		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % showcaseProjects.length
			);
		}, CROSSFADE_INTERVAL);

		return () => clearInterval(interval);
	}, [showcaseProjects.length, currentImageIndex]);

	const handleImageChange = (index: number) => {
		setCurrentImageIndex(index);
	};

	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background images with parallax and crossfade */}
			<div
				className="absolute inset-0 z-0"
				style={{
					transform: `translateY(${scrollY * 0.4}px)`,
				}}
			>
				{showcaseProjects.map((project, index) => (
					<img
						key={project.imageUrl}
						src={project.imageUrl}
						alt={`Hero background ${index + 1}`}
						className="absolute inset-0 w-full h-full object-cover transition-opacity duration-3000"
						style={{
							opacity: index === currentImageIndex ? 1 : 0,
						}}
					/>
				))}
				<div className="absolute inset-0 bg-black/30" />
			</div>

			{/* Text content */}
			<div className="relative rounded-2xl bg-background/30 p-12 backdrop-blur-sm top-75 shadow-lg shadow-black/40 text-center">
				<h1 className="z-10 font-(family-name:--font-castoro) text-8xl text-primary inline-block">
					Torchfire Studios
				</h1>
				<hr className="text-primary mt-4 border-2" />
			</div>

			<div className="absolute bottom-15 z-10 flex items-center gap-4">
				{/* Image navigation buttons */}
				<div className="flex gap-2">
					{showcaseProjects.map((_, index) => (
						<button
							key={index}
							onClick={() => handleImageChange(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentImageIndex
									? "bg-primary scale-125"
									: "bg-foreground hover:bg-foreground/80 hover:cursor-pointer"
							}`}
							aria-label={`View background ${index + 1}`}
						/>
					))}
				</div>
			</div>

			<div className="absolute bottom-10 right-10 z-10 flex items-center gap-4">
				{/* Explore link */}
				<Link
					href={showcaseProjects[currentImageIndex].link}
					className="px-6 py-3 border-2 border-primary bg-background/30 text-foreground hover:bg-primary hover:text-background font-semibold rounded-full transition-colors duration-300"
				>
					{`Explore ${showcaseProjects[currentImageIndex].title}`}
				</Link>
			</div>

			<SocialMedia />
		</div>
	);
};

export default Hero;
