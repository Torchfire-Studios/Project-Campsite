import ButtonLink from "./button-link";
import { socialLinks } from "./social-links";

const FollowStrip = ({
	title = "Follow the build",
	blurb = "Sketches, renders, and honest progress notes as we go.",
	extra,
}: {
	title?: string;
	blurb?: string;
	extra?: React.ReactNode;
}) => (
	<section className="gutter">
		<div className="flex flex-col gap-6 border-y border-cream/14 py-12 md:flex-row md:items-center md:justify-between">
			<div className="flex flex-col gap-2">
				<h2 className="display text-3xl sm:text-4xl">{title}</h2>
				<p className="text-smoke">{blurb}</p>
			</div>
			<div className="flex flex-wrap items-center gap-3">
				{socialLinks.map((link) => (
					<ButtonLink
						key={link.href}
						href={link.href}
						variant="secondary"
						external
					>
						{link.label}
					</ButtonLink>
				))}
				{extra}
			</div>
		</div>
	</section>
);

export default FollowStrip;
