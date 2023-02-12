import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>My Portfolio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<main className="container">
				<section>
					<h1 className="text-title">Welcome to my portfolio!</h1>
				</section>
				<p>I&apos;m a remote web developer based in London and Northampton with over 4 years of experience. </p>
			</main>
			<Footer />
		</>
	)
}

export default Home
