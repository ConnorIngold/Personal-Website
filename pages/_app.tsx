import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/logo-slider.css'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const isHomePage = router.pathname === '/' // Change this to the actual home page path

	return (
		<>
			<Head>
				<meta name="description" content="Expert web developer specializing in Shopify solutions, crafting dynamic user experiences with Vue.js and React. Let's elevate your online presence." />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Connor Ingold - Web Developer & Shopify Expert" />
				<meta property="og:description" content="Discover cutting-edge Shopify solutions and bespoke web development services by Connor Ingold. Elevate your online presence with a proven industry expert." />
				<meta property="og:image" content="http://connoringold.com//_next/image?url=%2Fimages%2FConnor_BG.webp"/>
				<meta property="og:url" content="http://connoringold.com" />


				{isHomePage && <link rel="stylesheet" href="../styles/logo-slider.css" />}
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
