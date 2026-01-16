import Hero from "../../../components/projects/project-hero";
import Content from "../../../components/projects/soulbound/content";

export default function Home() {
	return (
		<div>
			<Hero
				project={{
					title: "Soulbound",
					description: "Description of Soulbound",
					imageUrl: "/soulbound/soulbound.png",
					primaryColor: "--color-soulbound-primary",
				}}
			/>
			<Content />
		</div>
	);
}
