"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const nav = () => {
	const pathname = usePathname();

	const isActive = (path: string) => {
		if (path === "/") return pathname === "/";
		return pathname.startsWith(path);
	};

	return (
		<div>
			<div className="font-(family-name:--font-castoro-titling) flex gap-6 mt-8 text-lg">
				<ul className="flex gap-10 font-semibold">
					<li>
						<Link
							href="/"
							className={`hover:text-primary transition-colors duration-300 text-md ${
								isActive("/") ? "text-primary" : ""
							}`}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`hover:text-primary transition-colors duration-300 text-md ${
								isActive("/about") ? "text-primary" : ""
							}`}
						>
							About Us
						</Link>
					</li>
					<li className="relative group">
						<div
							className={`cursor-default hover:text-primary transition-colors duration-300 text-md ${
								isActive("/projects") ? "text-primary" : ""
							}`}
						>
							Projects &#x25BE;
						</div>
						{/* Dropdown */}
						<div className="absolute right-0 mt-2 w-48 rounded-md bg-background/50 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg shadow-black/40">
							<Link
								href="/projects/soulbound"
								className="block px-4 py-2 hover:bg-foreground text-foreground hover:text-primary transition-colors duration-300 text-center text-sm rounded-t-md"
							>
								Soulbound
							</Link>
							<Link
								href="/projects/ethos"
								className="block px-4 py-2 hover:bg-foreground  text-foreground hover:text-primary transition-colors duration-300 text-center text-sm rounded-b-md"
							>
								Ethos
							</Link>
						</div>
					</li>
					<li>
						<Link
							href="/contact"
							className={`hover:text-primary transition-colors duration-300 text-md ${
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
