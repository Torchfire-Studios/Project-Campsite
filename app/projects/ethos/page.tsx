import type { Metadata } from "next";
import ProjectPage from "../../../components/projects/project-page";
import ethos from "../../../components/projects/ethos/data";

export const metadata: Metadata = {
	title: "Ethos · Torchfire Studios",
	description: ethos.tagline,
};

export default function Page() {
	return <ProjectPage project={ethos} />;
}
