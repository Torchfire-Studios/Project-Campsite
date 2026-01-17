import { Menu } from "lucide-react";
import MobileNav from "./mobile-nav";
import { useEffect, useState } from "react";

const HamburgerNav = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		setIsVisible(!isVisible);
	};

	const handleClose = () => {
		setIsVisible(false);
	};

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

	return (
		<div className="md:hidden flex justify-end">
			<Menu
				size={40}
				className="text-foreground hover:text-primary mt-4 hover:cursor-pointer transition-colors duration-300 z-150"
				onClick={handleClick}
			/>
			<MobileNav isVisible={isVisible} onClose={handleClose} />
		</div>
	);
};

export default HamburgerNav;
