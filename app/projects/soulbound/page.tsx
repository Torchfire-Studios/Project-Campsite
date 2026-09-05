import type { Metadata } from "next";
import ProjectPage from "../../../components/projects/project-page";
import soulbound from "../../../components/projects/soulbound/data";

export const metadata: Metadata = {
	title: "Soulbound · Torchfire Studios",
	description: soulbound.tagline,
};

export default function Page() {
	return <ProjectPage project={soulbound} />;
}
