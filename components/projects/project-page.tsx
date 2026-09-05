import ButtonLink from "../ui/button-link";
import FollowStrip from "../ui/follow-strip";
import ArtWall from "./art-wall";
import BuildLog from "./build-log";
import Pillars from "./pillars";
import ProjectHero from "./project-hero";
import { Project } from "./types";

const ProjectPage = ({ project }: { project: Project }) => (
	<main>
		<ProjectHero project={project} />
		{project.pillars && <Pillars pillars={project.pillars} />}
		<ArtWall art={project.art} />
		{project.log && <BuildLog log={project.log} />}
		<FollowStrip
			title={`Follow ${project.title}`}
			blurb="We post progress as it happens. No launch date yet, and we'll say so when there is."
			extra={<ButtonLink href="/">All projects</ButtonLink>}
		/>
	</main>
);

export default ProjectPage;
