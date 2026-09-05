import { Menu, X } from "lucide-react";
import MobileNav from "./mobile-nav";
import { useEffect, useState } from "react";

const HamburgerNav = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsVisible(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		document.body.style.overflow = isVisible ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isVisible]);

	return (
		<div className="flex justify-end md:hidden">
			<button
				type="button"
				aria-label={isVisible ? "Close menu" : "Open menu"}
				aria-expanded={isVisible}
				onClick={() => setIsVisible(!isVisible)}
				className="relative z-150 flex size-11 items-center justify-center text-cream transition-colors duration-300 hover:cursor-pointer hover:text-gold"
			>
				{isVisible ? <X size={28} /> : <Menu size={28} />}
			</button>
			<MobileNav isVisible={isVisible} onClose={() => setIsVisible(false)} />
		</div>
	);
};

export default HamburgerNav;
