import Header from '../components/header'
import Footer from '../components/footer'

// Font files can be colocated inside of `app`

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
