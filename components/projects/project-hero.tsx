import Image from "next/image";
import StatusDot, { statusLabel } from "../ui/status-dot";
import { Project } from "./types";

const ProjectHero = ({ project }: { project: Project }) => {
	const meta = [project.kind, project.platforms].filter(Boolean);

	return (
		<section className="relative flex min-h-[80svh] items-end overflow-hidden bg-[#0f0d0c] pt-24">
			<Image
				src={project.hero.src}
				alt={project.hero.alt}
				fill
				priority
				sizes="100vw"
				className="object-cover"
				style={{ objectPosition: project.hero.position ?? "center" }}
			/>
			<div className="absolute inset-0 bg-linear-to-b from-ash/50 via-transparent via-40% to-ash" />
			<div className="gutter relative flex w-full flex-col gap-6 pb-16 lg:flex-row lg:items-end lg:justify-between lg:pb-20">
				<div className="flex flex-col gap-5">
					<div className="label flex flex-wrap items-center gap-x-3 gap-y-2 text-parchment">
						<span className="inline-flex items-center gap-2 text-cream">
							<StatusDot status={project.status} />
							{statusLabel[project.status]}
						</span>
						{meta.map((item) => (
							<span key={item} className="inline-flex items-center gap-3">
								<span className="text-dust">/</span>
								{item}
							</span>
						))}
					</div>
					<h1 className="display text-6xl leading-[0.9] sm:text-8xl lg:text-[9rem]">
						{project.title}
					</h1>
				</div>
				<p className="max-w-sm text-lg leading-normal text-parchment lg:pb-3">
					{project.tagline}
				</p>
			</div>
		</section>
	);
};

export default ProjectHero;
