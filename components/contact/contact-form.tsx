"use client";

const ContactForm = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		alert("Message sent!");
	};

	return (
		<form
			className="w-xl mx-auto p-8 bg-black/40 backdrop-blur-sm rounded-xl px-12 py-12 shadow-md shadow-black/30"
			onSubmit={handleSubmit}
		>
			<h2 className="text-4xl font-bold mb-6 text-foreground">Contact Us</h2>
			<div className="mb-4">
				<label
					htmlFor="name"
					className="block text-foreground font-semibold mb-2"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all duration-300"
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-foreground font-semibold mb-2"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all duration-300"
					required
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="message"
					className="block text-foreground font-semibold mb-2"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={5}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all duration-300"
					required
				></textarea>
			</div>
			<button
				type="submit"
				className="border-2 border-primary hover:bg-primary text-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300 hover:cursor-pointer"
			>
				Send Message
			</button>
		</form>
	);
};

export default ContactForm;
