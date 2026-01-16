"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

const MissionStatement = () => {
	const [isHovered, setIsHovered] = useState(false);

	const pathname = usePathname();

	const isActive = (path: string) => {
		if (path === "/") return pathname === "/";
		return pathname.startsWith(path);
	};

	return (
		<div className="flex flex-row gap-3 items-center justify-center min-h-screen">
			<div
				className="relative z-10 text-white font-bold bg-black/40 backdrop-blur-sm rounded-xl px-12 py-12 w-225 grid grid-cols-2 gap-4 shadow-md shadow-black/30"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="relative flex justify-center items-center min-h-50">
					<img
						src="/white_torch.png"
						alt="Torchfire Studios"
						width={250}
						height={250}
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
					<img
						src="/justtorchflame.png"
						alt="Torchfire Studios"
						width={250}
						height={250}
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
						style={{
							clipPath: isHovered
								? "inset(0% 0% 0% 0%)"
								: "inset(100% 0% 0% 0%)",
						}}
					/>
				</div>
				<div>
					<div
						className={`text-5xl row-span-2 flex flex-col font-(family-name:--font-castoro-titling) transition-colors duration-700 ease-out ${
							isHovered ? "text-primary" : ""
						}`}
					>
						About Us
					</div>
					<div className="text-lg row-span-1 row-end-4 font-(family-name:--font-castoro) mt-4">
						<span className="text-primary">Torchfire Studios</span> is a group
						of creatives based out of Boise, ID working on projects we actually
						care about.
						<br /> <br />
						We've got a team with all kinds of different skills and backgrounds
						- making <span className="text-tertiary">games</span>,{" "}
						<span className="text-tertiary">podcasts</span>,{" "}
						<span className="text-tertiary">animations</span>, and whatever else
						strikes our interest.
						<br /> <br />
						Right now we're focused on our first major project,{" "}
						<Link
							href="/projects/soulbound"
							className="text-secondary underline hover:text-primary transition-colors duration-300"
							target="_blank"
						>
							<i>Soulbound</i>
						</Link>{" "}
						- a Rogue-Lite we're building around compelling visuals, tight
						gameplay, and environmental storytelling.
						<br /> <br />
						We're just getting started, and we'd love for you to follow along.
					</div>
				</div>
			</div>
			<div className=""></div>
		</div>
	);
};

export default MissionStatement;
