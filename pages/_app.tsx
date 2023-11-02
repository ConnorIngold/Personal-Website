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
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-8F35GEZP7K"></script>
				<script
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-8F35GEZP7K', {
						page_path: window.location.pathname,
					});
					`,
				}}
				/>
				{isHomePage && <link rel="stylesheet" href="../styles/logo-slider.css" />}
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
