import { Project } from "../types";

const soulbound: Project = {
	slug: "soulbound",
	title: "Soulbound",
	status: "in-development",
	kind: "Rogue-lite",
	platforms: "Platforms TBD",
	tagline:
		"A rogue-lite built around compelling visuals, tight gameplay, and environments that tell their own stories.",
	blurb:
		"Compelling visuals, tight gameplay, and environments that tell the story for us. Our first major project.",
	hero: {
		src: "/soulbound/soulbound.png",
		alt: "Lans stands at the centre of a stained-glass arena among flooded ruins",
		position: "center 30%",
	},
	card: {
		src: "/soulbound/render 1.png",
		alt: "The arena ruins, rendered in engine",
	},
	// TODO: replace the placeholder body copy before this ships.
	pillars: [
		{
			label: "01 · Visuals",
			headline: "Painted worlds you can walk into.",
			body: "[One or two sentences on the art direction: the stained-glass floors, the ruins, the hand-painted look.]",
		},
		{
			label: "02 · Gameplay",
			headline: "Tight runs. Every death teaches.",
			body: "[One or two sentences on what a run feels like and what carries over between runs.]",
		},
		{
			label: "03 · Environmental storytelling",
			headline: "The ruins remember.",
			body: "[One or two sentences on how the world tells its story without cutscenes.]",
		},
	],
	art: [
		{
			src: "/soulbound/Flooded Ruins Color Passes.png",
			title: "Flooded Ruins, colour passes",
			kind: "Environment",
			artist: "Adriel Clafin",
			wide: true,
		},
		{
			src: "/soulbound/lans Design Flat Colors.png",
			title: "Lans, flat colours",
			kind: "Character",
			artist: "Adriel Clafin",
		},
		{
			src: "/soulbound/Lans Design Concept.png",
			title: "Lans, costume studies",
			kind: "Sketch",
			artist: "Adriel Clafin",
		},
		{
			src: "/soulbound/knights 1.png",
			title: "Knights: mace, princess, horned plate",
			kind: "Sketch",
			artist: "Adriel Clafin",
		},
		{
			src: "/soulbound/render 3.png",
			title: "Arena, in engine",
			kind: "Render",
			artist: "Adriel Clafin",
		},
		{
			src: "/soulbound/compiled colors.png",
			title: "Lighting and colour studies",
			kind: "Environment",
			artist: "Adriel Clafin",
			wide: true,
		},
		{
			src: "/soulbound/Lans Doodle.png",
			title: "Lans, colour doodles",
			kind: "Sketch",
			artist: "Adriel Clafin",
		},
		{
			src: "/soulbound/Lans Masks.png",
			title: "Lans, mask studies",
			kind: "Character",
			artist: "Adriel Clafin",
		},
		{
			src: "/soulbound/Light Fixtures Concepts.png",
			title: "Wall sconces",
			kind: "Concept",
			artist: "Adriel Clafin",
		},
		{
			src: "/soulbound/render 2.png",
			title: "Torch bearer, in engine",
			kind: "Render",
			artist: "Adriel Clafin",
		},
	],
	// TODO: real dates and one line each before this ships.
	log: [
		{
			date: "[Date]",
			title: "Colour passes on the Flooded Ruins",
			body: "[One line on what changed and why.]",
		},
		{
			date: "[Date]",
			title: "Meet Lans",
			body: "[One line introducing the character and the design process.]",
		},
		{
			date: "[Date]",
			title: "First arena, in engine",
			body: "[One line on the first playable space.]",
		},
	],
};

export default soulbound;
