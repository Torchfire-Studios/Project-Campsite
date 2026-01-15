import ContactForm from "@/components/contact/contact-form";

export default function Contact() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[radial-gradient(circle_at_30%_20%,rgba(232,27,68,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(232,89,53,0.12),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(232,167,35,0.08),transparent_70%)]">
			<ContactForm />
		</div>
	);
}
