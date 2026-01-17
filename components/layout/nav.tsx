"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const nav = () => {
	const pathname = usePathname();
	const [isProjectsOpen, setIsProjectsOpen] = useState(false);

	const isActive = (path: string) => {
		if (path === "/") return pathname === "/";
		return pathname.startsWith(path);
	};

	return (
		<div className="md:flex hidden">
			<div className="font-(family-name:--font-castoro-titling) mt-8 lg:text-lg text-md">
				<ul className="flex lg:gap-10 gap-6 font-semibold">
					<li>
						<Link
							href="/"
							className={`hover:text-primary transition-colors duration-300 ${
								isActive("/") ? "text-primary" : ""
							}`}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`hover:text-primary transition-colors duration-300 ${
								isActive("/about") ? "text-primary" : ""
							}`}
						>
							About Us
						</Link>
					</li>
					<li
						className="relative group"
						onMouseEnter={() => setIsProjectsOpen(true)}
						onMouseLeave={() => setIsProjectsOpen(false)}
					>
						<button
							type="button"
							onClick={() => setIsProjectsOpen(!isProjectsOpen)}
							className={`hover:text-primary transition-colors duration-300 ${
								isActive("/projects") ? "text-primary" : ""
							}`}
						>
							Projects &#x25BE;
						</button>
						{/* Dropdown */}
						<div
							className={`absolute right-0 mt-2 w-48 rounded-md bg-background/50 backdrop-blur-sm shadow-lg shadow-black/40 transition-all duration-300 ${
								isProjectsOpen ? "opacity-100 visible" : "opacity-0 invisible"
							}`}
						>
							<Link
								href="/projects/soulbound"
								className="block px-4 py-2 hover:bg-foreground text-foreground hover:text-primary transition-colors duration-300 text-center text-sm rounded-t-md"
							>
								Soulbound
							</Link>
							<Link
								href="/projects/ethos"
								className="block px-4 py-2 hover:bg-foreground text-foreground hover:text-primary transition-colors duration-300 text-center text-sm rounded-b-md"
							>
								Ethos
							</Link>
						</div>
					</li>
					<li>
						<Link
							href="/contact"
							className={`hover:text-primary transition-colors duration-300 ${
								isActive("/contact") ? "text-primary" : ""
							}`}
						>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default nav;
