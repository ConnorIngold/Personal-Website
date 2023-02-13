import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="py-6">
			<div className="container mx-auto px-4">
				<nav className="flex items-center">
					<Link href="/">
						<span className="px-4">Home</span>
					</Link>
					<Link href="/about">
						<span className="px-4">About</span>
					</Link>
					<Link href="/projects">
						<span className="px-4">Projects</span>
					</Link>
					<Link href="/contact">
						<span className="px-4">Contact</span>
					</Link>
				</nav>
				<p className="text-center mt-4">&copy; {new Date().getFullYear()} My Portfolio</p>
			</div>
		</footer>
	)
}

export default Footer
