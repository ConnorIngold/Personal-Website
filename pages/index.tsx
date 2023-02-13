import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Header from '../components/header'
import Footer from '../components/footer'

const Home: NextPage = () => {
	const [animationParent] = useAutoAnimate()

	return (
		<>
			<Head>
				<title>My Portfolio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<main className="container">
				<section ref={animationParent} className="text-center my-7 lg:my-14">
					<h1 className="text-title">Welcome to my portfolio!</h1>
					<p>
						I&apos;m a remote web developer based in London and Northampton <br /> with over 4 years of experience.{' '}
					</p>
				</section>
				<section id="banner">
					<Image loading="eager" src="/images/banner.webp" className="rounded-2xl border border-[#1A1918]" width={1784} height={728} alt="Banner" />
				</section>
				<section>
					<div className="flex">
						<h2 className="text-title">My Clients</h2>
						<Image src="/images/clients/candyKittens.png" className="rounded-2xl border border-[#1A1918]" width={236} height={132} alt="Banner" />
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Home
