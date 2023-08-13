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
				<meta name="robots" content="noindex,nofollow" />
				{isHomePage && <link rel="stylesheet" href="../styles/logo-slider.css" />}
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
