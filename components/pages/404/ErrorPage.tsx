import Link from 'next/link'
import Button from '../../global/Button'
import Footer from '../../global/Footer'

const ErrorPage: React.FC = () => {
	return (
		<main>
			<section className="text-center h-[70vh] flex flex-col justify-center gap-4">
				<h1 className="lg:text-[64px]">Oops! Something went wrong!</h1>
				<p>An error has occurred, please return to the main page</p>
				<Link href="/">
					<Button>Go to main page</Button>
				</Link>
			</section>
			<Footer />
		</main>
	)
}

export default ErrorPage
