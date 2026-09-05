"use client";

const fieldClass =
	"w-full rounded-md border border-cream/20 bg-soot px-4 py-3 text-cream transition-colors duration-300 placeholder:text-dust focus:border-gold focus:outline-none";

const ContactForm = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		alert(
			"Hey! I don't work just yet. Please find us on LinkedIn: https://www.linkedin.com/company/torchfire-studios/",
		);
	};

	return (
		<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="label text-smoke">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					autoComplete="name"
					className={fieldClass}
					required
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="label text-smoke">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					autoComplete="email"
					className={fieldClass}
					required
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="message" className="label text-smoke">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					rows={5}
					className={fieldClass}
					required
				></textarea>
			</div>
			<button
				type="submit"
				className="mt-2 inline-flex h-12 items-center justify-center self-start rounded-full bg-cream px-6 text-[15px] font-semibold text-ash transition-colors duration-300 hover:cursor-pointer hover:bg-gold"
			>
				Send message
			</button>
		</form>
	);
};

export default ContactForm;
