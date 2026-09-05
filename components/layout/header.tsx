"use client";

import Link from "next/link";
import Nav from "./nav";
import { useState } from "react";
import HamburgerNav from "./hamburger-nav";

const Header = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<header className="fixed top-0 z-20 w-full">
			<div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-ash/90 via-ash/50 to-transparent" />
			<div className="gutter flex h-20 items-center justify-between sm:h-22">
				<Link
					href="/"
					className="flex items-center gap-3 text-cream transition-colors duration-300 hover:text-gold"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className="relative size-11 sm:size-12">
						<img
							src="/white_torch.png"
							alt="Torchfire Studios"
							className="absolute inset-0 h-full w-auto"
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
					<span className="display text-2xl sm:text-3xl">
						Torchfire Studios
					</span>
				</Link>
				<Nav />
				<HamburgerNav />
			</div>
		</header>
	);
};

export default Header;
