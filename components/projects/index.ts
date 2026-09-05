import soulbound from "./soulbound/data";
import ethos from "./ethos/data";
import { Project } from "./types";

export const projects: Project[] = [soulbound, ethos];

export const getProject = (slug: string) =>
	projects.find((project) => project.slug === slug);
