import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Studio = () => (
	<section className="gutter grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-30">
		<div className="flex flex-col gap-6 sm:gap-7">
			<span className="label text-gold">The studio</span>
			<h2 className="display text-balance text-4xl leading-[1.02] sm:text-5xl lg:text-[4rem]">
				A small group of creatives in Boise, making things we actually care
				about.
			</h2>
			<p className="max-w-lg text-lg leading-relaxed text-smoke">
				Games first. Podcasts, animation, and whatever else strikes our interest
				when it does. We&apos;re just getting started, and we&apos;d love for
				you to follow along.
			</p>
			<Link
				href="/about"
				className="inline-flex items-center gap-2.5 text-[15px] font-semibold transition-colors duration-300 hover:text-gold"
			>
				About the studio <ArrowRight size={18} aria-hidden />
			</Link>
		</div>
		<div className="flex h-80 items-center justify-center rounded-md border border-cream/8 bg-[radial-gradient(ellipse_at_50%_70%,rgba(232,89,53,0.22),rgba(23,20,18,0)_60%)] bg-soot lg:h-110">
			<img
				src="/torchflame_color.png"
				alt="The Torchfire flame"
				className="h-52 w-auto lg:h-75"
			/>
		</div>
	</section>
);

export default Studio;
