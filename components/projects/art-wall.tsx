import Image from "next/image";
import { ArtPiece } from "./types";

const ArtWall = ({ art }: { art: ArtPiece[] }) => (
	<section className="gutter flex flex-col gap-10 py-20 lg:py-24">
		<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div className="flex flex-col gap-3">
				<span className="label text-gold">From the sketchbook</span>
				<h2 className="display text-4xl sm:text-5xl lg:text-[3.5rem]">
					Work in progress, shown on purpose
				</h2>
			</div>
			<p className="max-w-sm leading-normal text-smoke">
				Concept sketches, colour passes, and early renders, with the artist
				credited on every piece.
			</p>
		</div>
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{art.map((piece) => (
				<li
					key={piece.src}
					className={`flex flex-col gap-3 ${piece.wide ? "sm:col-span-2" : ""}`}
				>
					<div
						className={`relative overflow-hidden rounded-md bg-soot ${
							piece.wide ? "aspect-video" : "aspect-4/3"
						}`}
					>
						<Image
							src={piece.src}
							alt={`${piece.title}. ${piece.kind} by ${piece.artist}.`}
							fill
							sizes={
								piece.wide
									? "(min-width: 1024px) 60vw, 100vw"
									: "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
							}
							className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
						/>
					</div>
					<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
						<span className="text-[15px] font-medium">{piece.title}</span>
						<span className="label text-dust">
							{piece.kind} &middot; {piece.artist}
						</span>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default ArtWall;
