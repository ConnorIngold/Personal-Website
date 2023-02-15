import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from './layout'
import Clients from '../components/Clients'
import MyServices from '../components/MyServices'
import MyProjects from '../components/MyProjects'
import MyStart from '../components/MyStart'
import ContactSection from '../components/Contact/ContactSection'

const Home: NextPage = () => {
	return (
		<Layout>
			<main className="container">
				<section className="text-center my-7 lg:my-14">
					<h1 className="text-black text-title">Welcome to my portfolio!</h1>
					<p>
						I&apos;m a remote web developer based in London and Northampton <br /> with over 4 years of experience.{' '}
					</p>
				</section>
				<section id="banner">
					<Image loading="eager" src="/images/Connor_BG.webp" className="rounded-2xl border border-[#1A1918]" width={1784} height={728} alt="Banner" />
				</section>
				<Clients />
				<MyServices />
				<MyProjects />
				<MyStart />
				<ContactSection />
			</main>
		</Layout>
	)
}

export default Home
