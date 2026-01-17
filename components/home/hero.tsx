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
		<div className="relative min-h-screen flex items-end justify-center overflow-hidden">
			{/* Background carousel with parallax and crossfade */}
			<ImageCarousel
				items={showcaseProjects}
				interval={5000}
				showDots={true}
				enableParallax={true}
				className="absolute inset-0 z-0"
				dotsClassName="absolute lg:bottom-15 bottom-10 z-10 items-center gap-4 hidden sm:flex"
				onIndexChange={setCurrentImageIndex}
			/>

			{/* Text content */}

			<div className="relative lg:bottom-40 sm:bottom-30 bottom-20 rounded-2xl bg-background/30 p-12 backdrop-blur-sm shadow-lg shadow-black/40 text-center">
				<h1 className="z-10 font-(family-name:--font-castoro) lg:text-8xl sm:text-6xl text-4xl text-foreground inline-block">
					Torchfire Studios
				</h1>

				<hr className="mt-4 h-1 border-0 bg-linear-to-r from-primary via-secondary to-tertiary" />
			</div>

			<div className="absolute lg:bottom-15 sm:bottom-10 bottom-5 lg:right-10 right-5 z-10 flex items-center gap-4">
				{/* Explore link */}

				<Link
					href={showcaseProjects[currentImageIndex].link || "#"}
					className="px-6 py-3 border-2 border-primary bg-background/30 text-foreground hover:bg-primary hover:text-background font-semibold rounded-full transition-colors duration-300 sm:text-md text-sm"
				>
					{`Explore ${showcaseProjects[currentImageIndex].title}`}
				</Link>
			</div>

			<SocialMedia />
		</div>
	);
};

export default Hero;
