import Layout from '../components/global/Layout'
import ContactSection from '../components/global/Contact/ContactSection'
import TitleIconBlocks from '../components/global/TitleIconBlocks/TitleIconBlocks'
import { services } from './../public/data/services'

const Contact = () => {
	return (
		<Layout>
			<div className="container">
				<ContactSection title="Let’s bring your business to the next level" />
				<div className="w-full border-b"></div>
				<TitleIconBlocks services={services} heading="What I Do" sectionClassName="my-7 lg:my-16" />
			</div>
		</Layout>
	)
}

export default Contact
