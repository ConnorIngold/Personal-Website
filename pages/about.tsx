import Layout from '../components/global/Layout'
import AboutMeOverview from '../components/AboutMeOverview'
import MySkills from '../components/MySkills'
import ImageText from '../components/pages/about/ImageText'
import ImageTextV2 from '../components/pages/about/ImageTextV2'
// import MyStart
import MyStart from '../components/MyStart'
import ContactSection from '../components/global/Contact/ContactSection'

const about = () => {
	return (
		<Layout>
			<div className="container">
				<AboutMeOverview />
				<MySkills />
				<ImageText />
				<MyStart />
				<h2 className="py-5 text-center lg:py-10">WHO I AM NOW?</h2>
				<ImageTextV2></ImageTextV2>
				<ContactSection title="Let's bring your business to the next level" />
			</div>
		</Layout>
	)
}

export default about
