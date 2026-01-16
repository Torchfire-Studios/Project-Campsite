"use client";

import { useEffect, useState } from "react";

interface ProjectInfo {
	title: string;
	description: string;
	imageUrl: string;
	primaryColor?: string;
}

const Hero = ({ project }: { project: ProjectInfo }) => {
	const [scrollY, setScrollY] = useState(0);

	if (!project.primaryColor) {
		project.primaryColor = "#e81b44"; // default color
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div>
			<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
				{/* Background images with parallax and crossfade */}
				<div
					className="absolute inset-0 z-0"
					style={{
						transform: `translateY(${scrollY * 0.4}px)`,
					}}
				>
					<img
						src={project.imageUrl}
						alt="Hero background"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/30" />
				</div>

				{/* Text content */}
				<div className="relative rounded-2xl bg-background/30 p-12 backdrop-blur-sm top-75 shadow-lg shadow-black/40 text-center">
					<h1 className="z-10 font-(family-name:--font-castoro) text-8xl inline-block text-foreground">
						{project.title}
					</h1>
					<hr
						className="mt-4 border-2"
						style={{ borderColor: `var(${project.primaryColor})` }}
					/>
				</div>
			</div>
			<div className="flex justify-center">
				{/* arrow pointing down as button to slide to content section */}
				<a href="#content" onClick={scrollToContent}>
					<div className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
						<style jsx>{`
							@keyframes gentle-bounce {
								0%,
								100% {
									transform: translateY(0);
								}
								50% {
									transform: translateY(-10px);
								}
							}
							.gentle-bounce {
								animation: gentle-bounce 2s ease-in-out infinite;
							}
						`}</style>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12 gentle-bounce"
							style={{ color: `var(${project.primaryColor})` }}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Hero;
