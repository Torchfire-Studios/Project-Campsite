import type { Metadata } from "next";
import MissionStatement from "../../components/about/mission-statement";
import FollowStrip from "../../components/ui/follow-strip";

export const metadata: Metadata = {
	title: "Studio · Torchfire Studios",
};

export default function Page() {
	return (
		<main>
			<MissionStatement />
			<FollowStrip />
		</main>
	);
}
