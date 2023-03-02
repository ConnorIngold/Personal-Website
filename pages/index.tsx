import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import Clients from '../components/Clients'
import ClientsMobile from '../components/ClientsMobile'
import MyServices from '../components/MyServices'
import MyServicesMobile from '../components/MyServicesMobile'

import MyProjects from '../components/MyProjects'
import MyStart from '../components/MyStart'
import ContactSection from '../components/Contact/ContactSection'

const Home: NextPage = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1024)
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<Layout>
			<main className="container">
				<section className="text-center my-7 lg:my-14">
					<h1 className="mb-5 text-black text-title">Welcome to my portfolio!</h1>
					<p>
						I&apos;m a remote web developer based in London and Northampton <br /> with over 4 years of experience.{' '}
					</p>
				</section>
				<section id="banner">
					<Image loading="eager" src="/images/Connor_BG.webp" className="rounded-2xl border border-[#1A1918]" width={1784} height={728} alt="Banner" />
				</section>
				{isMobile ? <ClientsMobile /> : <Clients />}
				{isMobile ? <MyServicesMobile /> : <MyServices />}
				<MyProjects />
				<MyStart />
				<ContactSection />
			</main>
		</Layout>
	)
}

export default Home
