import { useEffect, useState } from "react";
import Link from "next/link";

interface MobileNavProps {
	isVisible: boolean;
	onClose?: () => void;
}

const MobileNav = ({ isVisible, onClose }: MobileNavProps) => {
	const [isProjectsOpen, setIsProjectsOpen] = useState(false);

	const handleProjectsClick = () => {
		setIsProjectsOpen(true);
	};

	const handleBackClick = () => {
		setIsProjectsOpen(false);
	};

	useEffect(() => {
		if (!isVisible) {
			setIsProjectsOpen(false);
		}
	}, [isVisible]);

	return (
		<div
			className={`fixed inset-0 flex min-h-screen w-screen justify-center items-center backdrop-blur-xl bg-background/60 z-100 font-(family-name:--font-castoro-titling) text-center ${
				isVisible ? "block" : "hidden"
			}`}
		>
			<div className="relative">
				{!isProjectsOpen ? (
					<ul className="flex flex-col gap-10 text-center text-4xl font-semibold">
						<li>
							<Link
								href="/"
								className="hover:text-primary transition-colors duration-300"
								onClick={onClose}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="hover:text-primary transition-colors duration-300"
								onClick={onClose}
							>
								About Us
							</Link>
						</li>
						<li>
							<button
								type="button"
								className="hover:text-primary transition-colors duration-300 cursor-pointer"
								onClick={handleProjectsClick}
							>
								Projects &#x25BE;
							</button>
						</li>
						<li>
							<Link
								href="/contact"
								className="hover:text-primary transition-colors duration-300"
								onClick={onClose}
							>
								Contact Us
							</Link>
						</li>
					</ul>
				) : (
					<div className="flex flex-col gap-10">
						<button
							onClick={handleBackClick}
							className="text-3xl hover:text-primary transition-colors duration-300 hover:cursor-pointer"
						>
							&#x2190; Back
						</button>
						<ul className="flex flex-col gap-10 text-center text-4xl font-semibold">
							<li>
								<Link
									href="/projects/soulbound"
									className="hover:text-primary transition-colors duration-300"
									onClick={onClose}
								>
									Soulbound
								</Link>
							</li>
							<li>
								<Link
									href="/projects/ethos"
									className="hover:text-primary transition-colors duration-300"
									onClick={onClose}
								>
									Ethos
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default MobileNav;
