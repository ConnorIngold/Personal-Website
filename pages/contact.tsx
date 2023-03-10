import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Layout from '../components/Layout'
import ContactSection from '../components/Contact/ContactSection'
import MyServices from '../components/MyServices'
import MyServicesMobile from '../components/MyServicesMobile'

const Contact: React.FC = () => {
	const isMobile = useMediaQuery({
		query: '(max-width: 1024px)',
	})

	return (
		<Layout>
			<div className="container">
				<ContactSection title="Let’s bring your business to the next level" />
				<div className="w-full border-b"></div>
				{isMobile ? <MyServicesMobile /> : <MyServices />}
			</div>
		</Layout>
	)
}

export default Contact
