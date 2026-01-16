import { Twitter, Instagram, Linkedin, Youtube, Link } from "lucide-react";

const SocialMedia = () => {
	const iconClassname = "text-foreground transition-all hover:text-primary";

	return (
		<div className="fixed right-4 flex flex-col space-y-4 z-50 bg-background/40 p-2 rounded-md backdrop-blur-sm shadow-lg shadow-black/40">
			<a
				href="https://www.linkedin.com/company/torchfire-studios/"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:scale-110 transition-all duration-300"
			>
				<Linkedin className={iconClassname} size={32} strokeWidth={2} />
			</a>

			<a
				href="https://www.instagram.com/torchfirestudios/"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:scale-110 transition-all duration-300"
			>
				<Instagram className={iconClassname} size={32} strokeWidth={2} />
			</a>

			<a
				href="https://www.youtube.com/@torchfirestudios"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:scale-110 transition-all duration-300"
			>
				<Youtube className={iconClassname} size={32} strokeWidth={2} />
			</a>
		</div>
	);
};

export default SocialMedia;
