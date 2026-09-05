import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects";
import StatusPill from "../ui/status-pill";

const Projects = () => (
	<section id="projects" className="gutter flex scroll-mt-24 flex-col gap-10 pt-20 pb-10 lg:pt-24">
		<div className="flex items-end justify-between border-b border-cream/14 pb-5">
			<h2 className="display text-4xl sm:text-5xl lg:text-[3.5rem]">
				In development
			</h2>
			<span className="label text-smoke">
				{String(projects.length).padStart(2, "0")} projects
			</span>
		</div>
		<ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
			{projects.map((project) => (
				<li key={project.slug}>
					<Link
						href={`/projects/${project.slug}`}
						className="group flex flex-col gap-5 text-cream"
					>
						<div className="relative aspect-16/10 overflow-hidden rounded-md bg-soot">
							<Image
								src={project.card.src}
								alt={project.card.alt}
								fill
								sizes="(min-width: 768px) 50vw, 100vw"
								className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
								style={{ objectPosition: project.card.position ?? "center" }}
							/>
							<StatusPill status={project.status} className="absolute top-4 left-4" />
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-baseline justify-between gap-4">
								<h3 className="display text-3xl transition-colors duration-300 group-hover:text-gold sm:text-4xl">
									{project.title}
								</h3>
								<span className="label text-smoke">{project.kind}</span>
							</div>
							<p className="max-w-xl leading-relaxed text-smoke">
								{project.blurb}
							</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	</section>
);

export default Projects;
