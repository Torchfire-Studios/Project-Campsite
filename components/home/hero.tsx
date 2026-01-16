"use client";

import Link from "next/link";
import { useState } from "react";
import SocialMedia from "./social-media";
import ImageCarousel, { CarouselItem } from "../ui/image-carousel";

const Hero = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const showcaseProjects: CarouselItem[] = [
		{
			title: "Soulbound",
			imageUrl: "/soulbound/soulbound.png",
			link: "/projects/soulbound",
		},

		{
			title: "Ethos",
			imageUrl: "/ethos/EthosSpiritZone2_borderless.png",
			link: "/projects/ethos",
		},
	];

	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background carousel with parallax and crossfade */}
			<ImageCarousel
				items={showcaseProjects}
				interval={10000}
				showDots={true}
				enableParallax={true}
				className="absolute inset-0 z-0"
				onIndexChange={setCurrentImageIndex}
			/>

			{/* Text content */}

			<div className="relative top-75 rounded-2xl bg-background/30 p-12 backdrop-blur-sm shadow-lg shadow-black/40 text-center">
				<h1 className="z-10 font-(family-name:--font-castoro) text-8xl text-foreground inline-block">
					Torchfire Studios
				</h1>

				<hr className="mt-4 h-1 border-0 bg-linear-to-r from-primary via-secondary to-tertiary" />
			</div>

			<div className="absolute bottom-10 right-10 z-10 flex items-center gap-4">
				{/* Explore link */}

				<Link
					href={showcaseProjects[currentImageIndex].link || "#"}
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
