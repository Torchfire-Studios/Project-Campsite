"use client";

import Link from "next/link";
import { useState } from "react";

const MissionStatement = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section className="gutter grid grid-cols-1 items-center gap-12 pt-32 pb-20 lg:min-h-svh lg:grid-cols-2 lg:gap-16 lg:py-32">
			<div
				className="order-last flex h-80 items-center justify-center rounded-md border border-cream/8 bg-soot lg:order-first lg:h-130"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="relative h-56 lg:h-96">
					<img
						src="/white_torch.png"
						alt="Torchfire Studios"
						className="h-full w-auto"
					/>
					<img
						src="/justtorchflame.png"
						alt=""
						aria-hidden
						className="absolute inset-0 h-full w-auto transition-all duration-500 ease-out"
						style={{
							clipPath: isHovered
								? "inset(0% 0% 0% 0%)"
								: "inset(100% 0% 0% 0%)",
						}}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-6 sm:gap-7">
				<span className="label text-gold">The studio</span>
				<h1 className="display text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-[4.5rem]">
					A small group of creatives in Boise, making things we actually care
					about.
				</h1>
				<div className="flex max-w-lg flex-col gap-5 text-lg leading-relaxed text-smoke">
					<p>
						Torchfire Studios is a team with all kinds of different skills and
						backgrounds. We make games first, with podcasts, animation, and
						whatever else strikes our interest along the way.
					</p>
					<p>
						Right now we&apos;re focused on our first major project,{" "}
						<Link
							href="/projects/soulbound"
							className="text-cream underline decoration-cream/30 underline-offset-4 transition-colors duration-300 hover:text-gold hover:decoration-gold"
						>
							<em>Soulbound</em>
						</Link>
						, a rogue-lite we&apos;re building around compelling visuals, tight
						gameplay, and environmental storytelling.
					</p>
					<p>
						We&apos;re just getting started, and we&apos;d love for you to
						follow along.
					</p>
				</div>
			</div>
		</section>
	);
};

export default MissionStatement;
