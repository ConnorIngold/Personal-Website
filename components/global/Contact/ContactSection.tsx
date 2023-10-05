import ContactForm, { FormData } from './ContactForm'

interface Props {
	title: string
}

const ContactSection = (props: Props) => {
	const handleFormSubmit = (formData: FormData) => {
		// handle form submission here, e.g. send the data to a server
	}

	return (
		<div className="flex flex-wrap gap-10 lg:flex-nowrap py-7">
			<div className="flex flex-col justify-between pr-5 border-black lg:border-r lg:w-2/3">
				<h4>Contact</h4>
				<h2 className="text-xl lg:leading-[110%] lg:text-[90px] uppercase">{props.title}</h2>
				<p>Let&apos;s get in touch and I&apos;ll create a new website for your business what will bring you more clients</p>
			</div>
			<div className="lg:w-1/3">
				<ContactForm onSubmit={handleFormSubmit} />
			</div>
		</div>
	)
}

export default ContactSection
