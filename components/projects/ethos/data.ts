import { Project } from "../types";

const ethos: Project = {
	slug: "ethos",
	title: "Ethos",
	status: "early-concept",
	// TODO: genre and a one-line description.
	kind: "[Genre]",
	tagline:
		"[One sentence on what Ethos is. Concept art and character studies are already taking shape.]",
	blurb:
		"[One sentence on what Ethos is. Concept art and character studies are already taking shape.]",
	hero: {
		src: "/ethos/EthosSpiritZone2_borderless.png",
		alt: "The Ethos spirit zone: an overgrown room with a glowing tree and lantern",
		position: "center 40%",
	},
	card: {
		src: "/ethos/EthosSpiritZone2_borderless.png",
		alt: "The Ethos spirit zone concept painting",
		position: "center 40%",
	},
	art: [
		{
			src: "/ethos/EthosSpiritZone2.png",
			title: "Spirit zone, colour variations",
			kind: "Environment",
			artist: "Kellsey Irby",
			wide: true,
		},
		{
			src: "/ethos/BadgerCharConSpirit.png",
			title: "Badger, spirit costume",
			kind: "Character",
			artist: "Jasmine Reyes",
		},
		{
			src: "/ethos/EthosDolphinArmor.png",
			title: "Dolphin armour, orthographics",
			kind: "Concept",
			artist: "Sarina Lloyd",
		},
		{
			src: "/ethos/EthosDolphinArmor2.png",
			title: "Dolphin armour, pose study",
			kind: "Sketch",
			artist: "Kellsey Irby",
		},
		{
			src: "/ethos/EthosArcadeColor.png",
			title: "Arcade, colour passes",
			kind: "Environment",
			artist: "Kellsey Irby",
			wide: true,
		},
		{
			src: "/ethos/Ethos Arcade.png",
			title: "Arcade, value studies",
			kind: "Environment",
			artist: "Kellsey Irby",
		},
		{
			src: "/ethos/ethos_pretty_corner.png",
			title: "Spirit zone, pretty corner sketches",
			kind: "Sketch",
			artist: "Kellsey Irby",
		},
		{
			src: "/ethos/BadgerHammer.png",
			title: "Badger's hammer",
			kind: "Concept",
			artist: "Kellsey Irby",
		},
		{
			src: "/ethos/ethosshadertest2.png",
			title: "Shader test, beanbag room",
			kind: "Shader",
			artist: "Sydney Reinert",
			wide: true,
		},
		{
			src: "/ethos/EthosTestRoom.png",
			title: "Test room, lighting",
			kind: "Shader",
			artist: "Sydney Reinert",
		},
		{
			src: "/ethos/EthosTestShader.png",
			title: "Shader test, grid room",
			kind: "Shader",
			artist: "Sydney Reinert",
		},
		{
			src: "/ethos/Beanbag_showcase.png",
			title: "Beanbag",
			kind: "Model",
			artist: "Sydney Reinert",
		},
		{
			src: "/ethos/Popcorn_Showcase.png",
			title: "Popcorn",
			kind: "Model",
			artist: "Sydney Reinert",
		},
		{
			src: "/ethos/Stool_Showcase.png",
			title: "Stool",
			kind: "Model",
			artist: "Sydney Reinert",
		},
	],
};

export default ethos;
