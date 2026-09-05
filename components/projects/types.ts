import { ProjectStatus } from "../ui/status-dot";

export type ArtKind =
	| "Concept"
	| "Sketch"
	| "Environment"
	| "Character"
	| "Render"
	| "Model"
	| "Shader";

export interface ArtPiece {
	src: string;
	title: string;
	kind: ArtKind;
	artist: string;
	/** Spans two columns of the art wall on large screens. */
	wide?: boolean;
}

export interface Pillar {
	label: string;
	headline: string;
	body: string;
}

export interface LogEntry {
	date: string;
	title: string;
	body: string;
}

export interface Project {
	slug: string;
	title: string;
	status: ProjectStatus;
	/** Short descriptor shown beside the title, e.g. the genre. */
	kind: string;
	platforms?: string;
	tagline: string;
	/** One or two sentences for the home page card. */
	blurb: string;
	hero: { src: string; alt: string; position?: string };
	card: { src: string; alt: string; position?: string };
	pillars?: Pillar[];
	art: ArtPiece[];
	log?: LogEntry[];
}
