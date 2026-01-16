"use client";

import Link from "next/link";
import Nav from "./nav";
import { useState } from "react";

const header = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="absolute w-full">
			<div className="fixed top-0 w-full flex justify-between py-4 px-6 flex-col z-20">
				<div className="absolute inset-0 bg-linear-to-b from-background via-background/60 via-80% to-transparent -z-10 h-35" />
				<div className="flex justify-between">
					<h1 className="font-(family-name:--font-castoro) text-4xl text-foreground hover:text-primary items-center flex">
						<Link
							href="/"
							className="flex items-center gap-3"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<div className="relative w-15 h-15">
								<img
									src="/white_torch.png"
									alt="Torchfire Studios"
									width={50}
									height={50}
									className="absolute inset-0"
								/>
								<img
									src="/justtorchflame.png"
									alt="Torchfire Studios"
									width={50}
									height={50}
									className="absolute inset-0 transition-all duration-500 ease-out"
									style={{
										clipPath: isHovered
											? "inset(0% 0% 0% 0%)"
											: "inset(100% 0% 0% 0%)",
									}}
								/>
							</div>
							<div className="transition-colors duration-700 ease-out mt-6">
								Torchfire Studios
							</div>
						</Link>
					</h1>
					<Nav />
				</div>
			</div>
		</div>
	);
};

export default header;
