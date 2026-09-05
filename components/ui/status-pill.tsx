import StatusDot, { ProjectStatus, statusLabel } from "./status-dot";

const StatusPill = ({
	status,
	className = "",
}: {
	status: ProjectStatus;
	className?: string;
}) => (
	<span
		className={`label inline-flex items-center gap-2 rounded-full bg-ash/80 px-3 py-2 text-cream backdrop-blur-sm ${className}`}
	>
		<StatusDot status={status} />
		{statusLabel[status]}
	</span>
);

export default StatusPill;
