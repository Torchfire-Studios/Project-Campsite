import Content from "../../../components/projects/ethos/content";
import Hero from "../../../components/projects/project-hero";

export default function Home() {
	return (
		<div>
			<Hero
				project={{
					title: "Ethos",
					description: "Description of Ethos",
					imageUrl: "/ethossnapshot_trimmed.png",
					primaryColor: "--color-ethos-primary",
				}}
			/>
			<Content />
		</div>
	);
}
