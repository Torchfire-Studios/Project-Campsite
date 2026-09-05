export type ProjectStatus = "in-development" | "early-concept";

export const statusLabel: Record<ProjectStatus, string> = {
	"in-development": "In development",
	"early-concept": "Early concept",
};

const statusColor: Record<ProjectStatus, string> = {
	"in-development": "bg-soulbound-primary",
	"early-concept": "bg-gold",
};

const StatusDot = ({ status }: { status: ProjectStatus }) => (
	<span
		aria-hidden
		className={`inline-block size-1.5 rounded-full ${statusColor[status]}`}
	/>
);

export default StatusDot;
