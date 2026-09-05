import { Pillar } from "./types";

const Pillars = ({ pillars }: { pillars: Pillar[] }) => (
	<section className="gutter">
		<div className="grid grid-cols-1 gap-10 border-b border-cream/14 py-20 md:grid-cols-3 lg:py-24">
			{pillars.map((pillar) => (
				<div key={pillar.label} className="flex flex-col gap-3.5">
					<span className="label text-gold">{pillar.label}</span>
					<h2 className="display text-3xl leading-[1.05] sm:text-[2.125rem]">
						{pillar.headline}
					</h2>
					<p className="leading-relaxed text-smoke">{pillar.body}</p>
				</div>
			))}
		</div>
	</section>
);

export default Pillars;
