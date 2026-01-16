import Nav from "./nav";

const header = () => {
	return (
		<div className="absolute w-full">
			<div className="sticky top-0 w-full flex justify-between py-4 px-6 flex-col z-20">
				<div className="absolute inset-0 bg-linear-to-b from-background via-background/60 via-80% to-transparent -z-10 h-35" />
				<div className="flex justify-between">
					<h1 className="font-(family-name:--font-anta) font-bold text-2xl text-primary">
						<a href="#" className="flex items-center gap-3">
							<img
								src="/torchlogocolor.png"
								alt="Torchfire Studios"
								width={120}
							/>
						</a>
					</h1>
					<Nav />
				</div>
			</div>
		</div>
	);
};

export default header;
