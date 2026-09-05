import type { Metadata } from "next";
import ContactForm from "../../components/contact/contact-form";
import { socialLinks } from "../../components/ui/social-links";

export const metadata: Metadata = {
	title: "Contact · Torchfire Studios",
};

export default function Contact() {
	return (
		<main className="gutter grid min-h-svh grid-cols-1 items-start gap-12 pt-32 pb-20 lg:grid-cols-2 lg:gap-16 lg:py-40">
			<div className="flex flex-col gap-6 sm:gap-7">
				<span className="label text-gold">Contact</span>
				<h1 className="display text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-[4.5rem]">
					Say hello.
				</h1>
				<p className="max-w-md text-lg leading-relaxed text-smoke">
					Press, collaborations, or just to tell us what you think. We read
					everything.
				</p>
				<ul className="label flex flex-wrap gap-6 text-smoke">
					{socialLinks.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors duration-300 hover:text-gold"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="w-full max-w-xl lg:justify-self-end">
				<ContactForm />
			</div>
		</main>
	);
}
