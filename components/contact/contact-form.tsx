"use client";

const ContactForm = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		alert(
			"Hey! I don't work just yet. Please find us on LinkedIn: https://www.linkedin.com/company/torchfire-studios/",
		);
	};

	return (
		<form
			className="sm:w-xl w-full mx-auto bg-black/40 backdrop-blur-sm rounded-xl px-6 py-8 sm:px-12 sm:py-12 shadow-md shadow-black/30"
			onSubmit={handleSubmit}
		>
			<h2 className="sm:text-4xl text-2xl font-bold mb-6 text-foreground">
				Contact Us
			</h2>
			<div className="mb-4">
				<label
					htmlFor="name"
					className="block text-foreground font-semibold mb-2 text-sm sm:text-base"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all duration-300 text-sm sm:text-base"
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-foreground font-semibold mb-2 text-sm sm:text-base"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all duration-300 text-sm sm:text-base"
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="message"
					className="block text-foreground font-semibold mb-2 text-sm sm:text-base"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={3}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all duration-300 text-sm sm:text-base sm:rows-5"
					required
				></textarea>
			</div>
			<button
				type="submit"
				className="border-2 border-primary hover:bg-primary text-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300 hover:cursor-pointer text-sm sm:text-base"
			>
				Send Message
			</button>
		</form>
	);
};

export default ContactForm;
