import Header from './Header'
import Footer from './Footer'

// Font files can be colocated inside of `app`

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
