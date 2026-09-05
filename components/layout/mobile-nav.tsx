import Link from "next/link";
import { projectLinks } from "./nav-links";

interface MobileNavProps {
	isVisible: boolean;
	onClose?: () => void;
}

const MobileNav = ({ isVisible, onClose }: MobileNavProps) => {
	return (
		<div
			className={`fixed inset-0 z-100 flex-col justify-end bg-ash/95 backdrop-blur-xl ${
				isVisible ? "flex" : "hidden"
			}`}
		>
			<nav className="gutter flex flex-col gap-8 pb-16">
				<div className="flex flex-col gap-3">
					<span className="label text-gold">Projects</span>
					<ul className="flex flex-col gap-3">
						{projectLinks.map((project) => (
							<li key={project.href}>
								<Link
									href={project.href}
									onClick={onClose}
									className="display text-5xl transition-colors duration-300 hover:text-gold"
								>
									{project.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<ul className="flex flex-col gap-3 border-t border-cream/14 pt-8">
					<li>
						<Link
							href="/about"
							onClick={onClose}
							className="display text-5xl transition-colors duration-300 hover:text-gold"
						>
							Studio
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							onClick={onClose}
							className="display text-5xl transition-colors duration-300 hover:text-gold"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNav;
