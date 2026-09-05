import Link from "next/link";

type Variant = "primary" | "secondary";

const styles: Record<Variant, string> = {
	primary:
		"bg-cream text-ash font-semibold hover:bg-gold hover:text-ash",
	secondary:
		"border border-cream/35 text-cream font-medium hover:border-gold hover:text-gold",
};

const ButtonLink = ({
	href,
	variant = "primary",
	children,
	className = "",
	external = false,
}: {
	href: string;
	variant?: Variant;
	children: React.ReactNode;
	className?: string;
	external?: boolean;
}) => {
	const classes = `inline-flex h-12 items-center justify-center rounded-full px-6 text-[15px] transition-colors duration-300 ${styles[variant]} ${className}`;

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={classes}
			>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
};

export default ButtonLink;
