import MissionStatement from "../../components/about/mission-statement";

const page = () => {
	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Animated gradient background */}
			<div className="absolute inset-0 bg-linear-to-br from-background via-primary/5 to-secondary/10" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,27,68,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(232,89,53,0.12),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(232,167,35,0.08),transparent_70%)]" />

			<div className="relative">
				<MissionStatement />
			</div>
		</div>
	);
};

export default page;
