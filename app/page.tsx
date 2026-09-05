import Hero from "../components/home/hero";
import Projects from "../components/home/projects";
import Studio from "../components/home/studio";
import FollowStrip from "../components/ui/follow-strip";

export default function Home() {
	return (
		<main>
			<Hero />
			<Projects />
			<Studio />
			<div id="follow" className="scroll-mt-24">
				<FollowStrip />
			</div>
		</main>
	);
}
