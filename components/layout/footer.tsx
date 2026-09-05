import Link from "next/link";
import { navLinks } from "./nav-links";

const Footer = () => (
	<footer className="gutter flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
		<div className="flex items-center gap-3">
			<img
				src="/white_torch.png"
				alt=""
				aria-hidden
				className="h-6 w-auto"
			/>
			<span className="label text-smoke">
				&copy; {new Date().getFullYear()} Torchfire Studios &middot; Boise, ID
			</span>
		</div>
		<nav className="label flex flex-wrap gap-6 text-smoke">
			{navLinks.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className="transition-colors duration-300 hover:text-gold"
				>
					{link.label}
				</Link>
			))}
		</nav>
	</footer>
);

export default Footer;
