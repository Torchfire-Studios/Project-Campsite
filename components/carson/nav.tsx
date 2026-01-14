const nav = () => {
	return (
		<div>
			<div className="font-(family-name:--font-castoro-titling) flex gap-6 mt-10 text-lg">
				<ul className="flex gap-6 font-semibold">
					<li>
						<a
							href="#"
							className="hover:text-tertiary transition-colors duration-300 text-md"
						>
							About Us
						</a>
					</li>
					<li className="relative group">
						<a
							href="#"
							className="cursor-pointer hover:text-tertiary transition-colors duration-300 text-md"
						>
							Projects &#x25BE;
						</a>
						{/* Dropdown */}
						<div className="absolute right-0 mt-2 w-48 bg-foreground shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
							<a
								href="#"
								className="block px-4 py-2 hover:bg-stone-600 text-background hover:text-tertiary transition-colors duration-300 text-center text-xs rounded-t-md"
							>
								Project Soulbound
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-stone-600 text-background hover:text-tertiary transition-colors duration-300 text-center text-xs rounded-b-md"
							>
								Project Ethos
							</a>
						</div>
					</li>
					<li>
						<a
							href="#"
							className="hover:text-tertiary transition-colors duration-300 text-md"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default nav;
