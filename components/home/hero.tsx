import Image from "next/image";
import ButtonLink from "../ui/button-link";
import soulbound from "../projects/soulbound/data";

const Hero = () => (
	<section className="relative flex min-h-svh items-end overflow-hidden bg-[#0f0d0c] pt-24">
		<Image
			src={soulbound.hero.src}
			alt={soulbound.hero.alt}
			fill
			priority
			sizes="100vw"
			className="object-cover"
			style={{ objectPosition: "center 35%" }}
		/>
		<div className="absolute inset-0 bg-linear-to-b from-ash/55 via-ash/5 via-35% to-ash" />
		<div className="gutter relative flex w-full flex-col gap-8 pb-14 lg:flex-row lg:items-end lg:justify-between lg:pb-22">
			<div className="flex max-w-3xl flex-col gap-6 sm:gap-7">
				<span className="label text-gold">
					Independent game studio &middot; Boise, Idaho
				</span>
				<h1 className="display text-balance text-[3.375rem] leading-[0.96] sm:text-7xl lg:text-[7.375rem]">
					Worlds worth <em className="italic">getting lost in.</em>
				</h1>
				<p className="max-w-xl text-lg leading-normal text-parchment sm:text-xl">
					We&apos;re a small team building our first games by hand. Right now
					that means <em>Soulbound</em>, a rogue-lite about tight combat and
					places that tell their own stories, and <em>Ethos</em>, still on the
					drawing board.
				</p>
				<div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
					<ButtonLink href="#projects">See what we&apos;re making</ButtonLink>
					<ButtonLink href="#follow" variant="secondary">
						Follow the build
					</ButtonLink>
				</div>
			</div>
			<span className="label hidden items-center gap-3 text-smoke lg:flex">
				<span aria-hidden className="inline-block size-2 rounded-full bg-primary" />
				Pictured: {soulbound.title}, in development
			</span>
		</div>
	</section>
);

export default Hero;
