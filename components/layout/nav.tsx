"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { projectLinks } from "./nav-links";

const Nav = () => {
	const pathname = usePathname();
	const [isProjectsOpen, setIsProjectsOpen] = useState(false);

	const isActive = (path: string) => pathname.startsWith(path);
	const linkClass = (path: string) =>
		`transition-colors duration-300 hover:text-gold ${
			isActive(path) ? "text-cream" : "text-parchment"
		}`;

	return (
		<nav className="label hidden items-center gap-8 md:flex lg:gap-10">
			<div
				className="relative"
				onMouseEnter={() => setIsProjectsOpen(true)}
				onMouseLeave={() => setIsProjectsOpen(false)}
			>
				<button
					type="button"
					aria-haspopup="menu"
					aria-expanded={isProjectsOpen}
					onClick={() => setIsProjectsOpen(!isProjectsOpen)}
					className={`label flex items-center gap-1.5 hover:cursor-pointer ${linkClass("/projects")}`}
				>
					Projects
					<svg
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden
					>
						<path d="M6 9l6 6 6-6" />
					</svg>
				</button>
				<div
					role="menu"
					className={`absolute right-0 top-full pt-4 transition-all duration-300 ${
						isProjectsOpen ? "visible opacity-100" : "invisible opacity-0"
					}`}
				>
					<div className="flex w-44 flex-col overflow-hidden rounded-md border border-cream/14 bg-soot">
						{projectLinks.map((project) => (
							<Link
								key={project.href}
								role="menuitem"
								href={project.href}
								onClick={() => setIsProjectsOpen(false)}
								className={`px-4 py-3 transition-colors duration-300 hover:bg-cream/8 hover:text-gold ${
									isActive(project.href) ? "text-cream" : "text-parchment"
								}`}
							>
								{project.label}
							</Link>
						))}
					</div>
				</div>
			</div>
			<Link href="/about" className={linkClass("/about")}>
				Studio
			</Link>
			<Link href="/contact" className={linkClass("/contact")}>
				Contact
			</Link>
		</nav>
	);
};

export default Nav;
