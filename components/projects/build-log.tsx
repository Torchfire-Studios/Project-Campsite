import { ArrowRight } from "lucide-react";
import { LogEntry } from "./types";

const BuildLog = ({ log }: { log: LogEntry[] }) => (
	<section className="gutter">
		<div className="grid grid-cols-1 gap-10 border-t border-cream/14 py-20 lg:grid-cols-3 lg:gap-16 lg:py-24">
			<div className="flex flex-col gap-3">
				<span className="label text-gold">Build log</span>
				<h2 className="display text-4xl sm:text-5xl lg:text-[3.5rem]">
					What we&apos;re on right now
				</h2>
				<p className="mt-2 max-w-xs leading-normal text-smoke">
					Short, honest notes. A new one whenever there&apos;s something worth
					showing.
				</p>
			</div>
			<ol className="flex flex-col border-b border-cream/14 lg:col-span-2">
				{log.map((entry) => (
					<li
						key={entry.title}
						className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-t border-cream/14 py-6 sm:grid-cols-[8.75rem_1fr_auto]"
					>
						<span className="label text-dust sm:col-start-1">{entry.date}</span>
						<div className="col-span-2 flex flex-col gap-1.5 sm:col-span-1 sm:col-start-2">
							<h3 className="display text-[1.75rem] leading-[1.1]">
								{entry.title}
							</h3>
							<p className="text-[15px] text-smoke">{entry.body}</p>
						</div>
						<ArrowRight
							size={20}
							aria-hidden
							className="col-start-2 row-start-1 self-center text-smoke sm:col-start-3"
						/>
					</li>
				))}
			</ol>
		</div>
	</section>
);

export default BuildLog;
