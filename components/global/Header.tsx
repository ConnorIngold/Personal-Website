import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

const links = [
	{ path: '/about', label: 'About Me' },
	{ path: '/services', label: 'Services' },
	{ path: '/projects', label: 'My Projects' },
	{ path: '/contact', label: 'Contact' },
]

function NavIcon({ toggle, open }: { toggle: () => void; open: boolean }) {
	return (
		<>
			{/* Icon 1 */}
			<div id="nav-icon" className={`${open && 'open'} lg:hidden`} onClick={toggle}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</>
	)
}

const Header = () => {
	const router = useRouter()
	const currentPath = router.pathname

	const [open, setOpen] = useState(false)

	function toggle() {
		setOpen(prevOpen => !prevOpen)
	}

	return (
		<header className="">
			<div className="container mx-auto">
				<div className="flex items-center justify-between py-3 border-b border-black">
					<Link href="/">
						<span className="font-bold text-[32px] font-Syne">Connor Ingold</span>
					</Link>

					<nav className="hidden lg:flex items-center justify-center lg:relative lg:bg-transparent lg:w-auto lg:flex-row | fixed bg-white w-full flex-col bottom-0 left-0 h-full">
						<ul className="flex">
							{links.map(link => (
								<li key={link.path}>
									<Link href={link.path} className={`list-none px-2 text-[64px] lg:text-[18px] transition-all duration-300 ease pb-1 uppercase ${currentPath === link.path && 'text-gold'}`}>
										{link.label}
										<span className="slider"></span>
									</Link>
								</li>
							))}
						</ul>
						<span className="mx-2 -mt-1 text-2xl">|</span>
						<div className="flex" id="socials">
							<Link
								href="https://www.linkedin.com/in/connor-ingold-a39a27100/"
								className="flex items-center justify-center p-1 mx-2 text-center border border-black rounded-full border-black hover:border-[#baa086] group h-7 w-7"
								aria-label='LinkedIn'
							>
								<svg className="w-full" width="14" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										className="transition-colors duration-200 fill-current group-hover:fill-gold"
										d="M1.95833 0.5625C1.48868 0.5625 1.03826 0.749069 0.706165 1.08117C0.374069 1.41326 0.1875 1.86368 0.1875 2.33333C0.1875 2.80299 0.374069 3.25341 0.706165 3.5855C1.03826 3.9176 1.48868 4.10417 1.95833 4.10417C2.42799 4.10417 2.87841 3.9176 3.2105 3.5855C3.5426 3.25341 3.72917 2.80299 3.72917 2.33333C3.72917 1.86368 3.5426 1.41326 3.2105 1.08117C2.87841 0.749069 2.42799 0.5625 1.95833 0.5625ZM0.291667 5.5625C0.26404 5.5625 0.237545 5.57347 0.21801 5.59301C0.198475 5.61254 0.1875 5.63904 0.1875 5.66667V16.5C0.1875 16.5575 0.234167 16.6042 0.291667 16.6042H3.625C3.65263 16.6042 3.67912 16.5932 3.69866 16.5737C3.71819 16.5541 3.72917 16.5276 3.72917 16.5V5.66667C3.72917 5.63904 3.71819 5.61254 3.69866 5.59301C3.67912 5.57347 3.65263 5.5625 3.625 5.5625H0.291667ZM5.70833 5.5625C5.68071 5.5625 5.65421 5.57347 5.63468 5.59301C5.61514 5.61254 5.60417 5.63904 5.60417 5.66667V16.5C5.60417 16.5575 5.65083 16.6042 5.70833 16.6042H9.04167C9.06929 16.6042 9.09579 16.5932 9.11532 16.5737C9.13486 16.5541 9.14583 16.5276 9.14583 16.5V10.6667C9.14583 10.2523 9.31045 9.85484 9.60348 9.56181C9.8965 9.26879 10.2939 9.10417 10.7083 9.10417C11.1227 9.10417 11.5202 9.26879 11.8132 9.56181C12.1062 9.85484 12.2708 10.2523 12.2708 10.6667V16.5C12.2708 16.5575 12.3175 16.6042 12.375 16.6042H15.7083C15.736 16.6042 15.7625 16.5932 15.782 16.5737C15.8015 16.5541 15.8125 16.5276 15.8125 16.5V9.31667C15.8125 7.29417 14.0542 5.7125 12.0417 5.895C11.419 5.95168 10.8091 6.10578 10.2342 6.35167L9.14583 6.81833V5.66667C9.14583 5.63904 9.13486 5.61254 9.11532 5.59301C9.09579 5.57347 9.06929 5.5625 9.04167 5.5625H5.70833Z"
										fill="#1A1918"
									/>
								</svg>
							</Link>
							<Link
								href="https://github.com/ConnorIngold"
								className="flex items-center justify-center p-1 mx-2 text-xs border border-black rounded-full hover:border-[#baa086] group h-7 w-7 full"
								aria-label='Github'
							>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										className="transition-colors duration-200 fill-current group-hover:fill-gold"
										d="M12 0.292969C13.1016 0.292969 14.1641 0.433594 15.1875 0.714844C16.2109 0.996094 17.1641 1.40234 18.0469 1.93359C18.9297 2.46484 19.7383 3.08984 20.4727 3.80859C21.207 4.52734 21.8359 5.33594 22.3594 6.23438C22.8828 7.13281 23.2852 8.08984 23.5664 9.10547C23.8477 10.1211 23.9922 11.1836 24 12.293C24 13.582 23.8047 14.8242 23.4141 16.0195C23.0234 17.2148 22.4648 18.3125 21.7383 19.3125C21.0117 20.3125 20.1484 21.1875 19.1484 21.9375C18.1484 22.6875 17.0313 23.2695 15.7969 23.6836C15.7734 23.6914 15.7383 23.6953 15.6914 23.6953C15.6445 23.6953 15.6094 23.6992 15.5859 23.707C15.3984 23.707 15.25 23.6523 15.1406 23.543C15.0313 23.4336 14.9766 23.2891 14.9766 23.1094V21.4688C14.9766 20.9297 14.9805 20.3789 14.9883 19.8164C14.9883 19.418 14.9297 19.0156 14.8125 18.6094C14.6953 18.2031 14.4844 17.8633 14.1797 17.5898C15.0859 17.4883 15.8789 17.3047 16.5586 17.0391C17.2383 16.7734 17.8086 16.3984 18.2695 15.9141C18.7305 15.4297 19.0742 14.8438 19.3008 14.1562C19.5273 13.4687 19.6445 12.6406 19.6523 11.6719C19.6523 11.0625 19.5508 10.4883 19.3477 9.94922C19.1445 9.41016 18.8359 8.91016 18.4219 8.44922C18.5078 8.23047 18.5703 8.00391 18.6094 7.76953C18.6484 7.53516 18.668 7.30078 18.668 7.06641C18.668 6.76172 18.6367 6.46094 18.5742 6.16406C18.5117 5.86719 18.4219 5.57031 18.3047 5.27344C18.2656 5.25781 18.2227 5.25 18.1758 5.25C18.1289 5.25 18.0859 5.25 18.0469 5.25C17.7969 5.25 17.5352 5.28906 17.2617 5.36719C16.9883 5.44531 16.7187 5.54687 16.4531 5.67188C16.1875 5.79688 15.9258 5.93359 15.668 6.08203C15.4102 6.23047 15.1875 6.37109 15 6.50391C14.0234 6.23047 13.0234 6.09375 12 6.09375C10.9766 6.09375 9.97656 6.23047 9 6.50391C8.80469 6.37109 8.58203 6.23047 8.33203 6.08203C8.08203 5.93359 7.82422 5.80078 7.55859 5.68359C7.29297 5.56641 7.01953 5.46484 6.73828 5.37891C6.45703 5.29297 6.19531 5.25 5.95312 5.25H5.82422C5.77734 5.25 5.73437 5.25781 5.69531 5.27344C5.58594 5.5625 5.5 5.85547 5.4375 6.15234C5.375 6.44922 5.33984 6.75391 5.33203 7.06641C5.33203 7.30078 5.35156 7.53516 5.39062 7.76953C5.42969 8.00391 5.49219 8.23047 5.57812 8.44922C5.16406 8.90234 4.85547 9.39844 4.65234 9.9375C4.44922 10.4766 4.34766 11.0547 4.34766 11.6719C4.34766 12.625 4.46094 13.4492 4.6875 14.1445C4.91406 14.8398 5.25781 15.4258 5.71875 15.9023C6.17969 16.3789 6.75 16.7578 7.42969 17.0391C8.10938 17.3203 8.90234 17.5078 9.80859 17.6016C9.58203 17.8047 9.41016 18.0469 9.29297 18.3281C9.17578 18.6094 9.09375 18.9023 9.04688 19.207C8.83594 19.3086 8.61328 19.3867 8.37891 19.4414C8.14453 19.4961 7.91016 19.5234 7.67578 19.5234C7.17578 19.5234 6.76172 19.4062 6.43359 19.1719C6.10547 18.9375 5.8125 18.6172 5.55469 18.2109C5.46094 18.0625 5.34766 17.9141 5.21484 17.7656C5.08203 17.6172 4.9375 17.4844 4.78125 17.3672C4.625 17.25 4.45703 17.1562 4.27734 17.0859C4.09766 17.0156 3.91016 16.9766 3.71484 16.9688H3.57422C3.51172 16.9688 3.45312 16.9805 3.39844 17.0039C3.34375 17.0273 3.28906 17.0508 3.23438 17.0742C3.17969 17.0977 3.15625 17.1367 3.16406 17.1914C3.16406 17.2852 3.21875 17.375 3.32812 17.4609C3.4375 17.5469 3.52734 17.6172 3.59766 17.6719L3.63281 17.6953C3.80469 17.8281 3.95312 17.9531 4.07812 18.0703C4.20313 18.1875 4.32031 18.3164 4.42969 18.457C4.53906 18.5977 4.62891 18.7461 4.69922 18.9023C4.76953 19.0586 4.85938 19.2422 4.96875 19.4531C5.23437 20.0625 5.60547 20.5039 6.08203 20.7773C6.55859 21.0508 7.13281 21.1914 7.80469 21.1992C8.00781 21.1992 8.21094 21.1875 8.41406 21.1641C8.61719 21.1406 8.82031 21.1055 9.02344 21.0586V23.0977C9.02344 23.2852 8.96875 23.4336 8.85938 23.543C8.75 23.6523 8.59766 23.707 8.40234 23.707H8.30859C8.26953 23.707 8.23438 23.6992 8.20312 23.6836C6.97656 23.2852 5.85938 22.7109 4.85156 21.9609C3.84375 21.2109 2.98047 20.332 2.26172 19.3242C1.54297 18.3164 0.988281 17.2148 0.597656 16.0195C0.207031 14.8242 0.0078125 13.582 0 12.293C0 11.1914 0.140625 10.1289 0.421875 9.10547C0.703125 8.08203 1.10938 7.12891 1.64062 6.24609C2.17187 5.36328 2.79688 4.55469 3.51562 3.82031C4.23437 3.08594 5.04297 2.45703 5.94141 1.93359C6.83984 1.41016 7.79688 1.00781 8.8125 0.726562C9.82812 0.445312 10.8906 0.300781 12 0.292969Z"
										fill="#1A1918"
									/>
								</svg>
							</Link>
							{/* <Link href="/youtube" className="flex items-center justify-center p-1 mx-2 text-xs border border-black rounded-full h-7 w-7 full">
								<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										className="transition-colors duration-200 fill-current hover:fill-[#FF0000]"
										d="M20.9656 3.54373C20.8795 3.19809 20.7108 2.87851 20.474 2.61236C20.2373 2.34622 19.9395 2.14145 19.6063 2.0156C16.4 0.778103 11.2812 0.787478 11 0.787478C10.7188 0.787478 5.6 0.778103 2.39375 2.0156C2.06051 2.14145 1.76275 2.34622 1.52599 2.61236C1.28923 2.87851 1.12054 3.19809 1.03438 3.54373C0.790625 4.47185 0.5 6.1781 0.5 8.99998C0.5 11.8219 0.790625 13.5281 1.03438 14.4562C1.12054 14.8019 1.28923 15.1214 1.52599 15.3876C1.76275 15.6537 2.06051 15.8585 2.39375 15.9844C5.46875 17.175 10.2875 17.2125 10.9344 17.2125H11.0656C11.7125 17.2125 16.5313 17.175 19.6063 15.9844C19.9395 15.8585 20.2373 15.6537 20.474 15.3876C20.7108 15.1214 20.8795 14.8019 20.9656 14.4562C21.2094 13.5281 21.5 11.8219 21.5 8.99998C21.5 6.1781 21.2094 4.47185 20.9656 3.54373ZM14.2062 9.30935L9.70625 12.3094C9.64657 12.3533 9.57409 12.3763 9.5 12.375C9.4379 12.3727 9.37707 12.3567 9.32187 12.3281C9.26195 12.2969 9.21184 12.2498 9.17708 12.1919C9.14233 12.1339 9.12431 12.0675 9.125 12V5.99998C9.12431 5.93244 9.14233 5.86602 9.17708 5.8081C9.21184 5.75018 9.26195 5.70302 9.32187 5.67185C9.38166 5.63996 9.44897 5.62486 9.51665 5.62816C9.58433 5.63146 9.64985 5.65304 9.70625 5.6906L14.2062 8.6906C14.2585 8.72354 14.3016 8.76919 14.3315 8.82329C14.3614 8.87739 14.377 8.93818 14.377 8.99998C14.377 9.06177 14.3614 9.12256 14.3315 9.17667C14.3016 9.23077 14.2585 9.27642 14.2062 9.30935Z"
										fill="#1A1918"
									/>
								</svg>
							</Link>
							<Link href="/github" className="flex items-center justify-center p-1 mx-2 text-xs border border-black rounded-full h-7 w-7 full">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M9.99999 6.87579C8.27968 6.87579 6.87577 8.2797 6.87577 10C6.87577 11.7203 8.27968 13.1242 9.99999 13.1242C11.7203 13.1242 13.1242 11.7203 13.1242 10C13.1242 8.2797 11.7203 6.87579 9.99999 6.87579ZM19.3703 10C19.3703 8.70626 19.382 7.42423 19.3094 6.13283C19.2367 4.63283 18.8945 3.30158 17.7976 2.2047C16.6984 1.10548 15.3695 0.765639 13.8695 0.692982C12.5758 0.620326 11.2937 0.632045 10.0023 0.632045C8.70858 0.632045 7.42655 0.620326 6.13515 0.692982C4.63515 0.765639 3.3039 1.10783 2.20702 2.2047C1.1078 3.30392 0.767958 4.63283 0.695302 6.13283C0.622645 7.42658 0.634364 8.70861 0.634364 10C0.634364 11.2914 0.622645 12.5758 0.695302 13.8672C0.767958 15.3672 1.11015 16.6985 2.20702 17.7953C3.30624 18.8945 4.63515 19.2344 6.13515 19.307C7.4289 19.3797 8.71093 19.368 10.0023 19.368C11.2961 19.368 12.5781 19.3797 13.8695 19.307C15.3695 19.2344 16.7008 18.8922 17.7976 17.7953C18.8969 16.6961 19.2367 15.3672 19.3094 13.8672C19.3844 12.5758 19.3703 11.2938 19.3703 10ZM9.99999 14.807C7.33983 14.807 5.19296 12.6602 5.19296 10C5.19296 7.33986 7.33983 5.19298 9.99999 5.19298C12.6601 5.19298 14.807 7.33986 14.807 10C14.807 12.6602 12.6601 14.807 9.99999 14.807ZM15.0039 6.11876C14.3828 6.11876 13.8812 5.6172 13.8812 4.99611C13.8812 4.37501 14.3828 3.87345 15.0039 3.87345C15.625 3.87345 16.1266 4.37501 16.1266 4.99611C16.1267 5.14359 16.0978 5.28966 16.0415 5.42595C15.9851 5.56224 15.9024 5.68607 15.7981 5.79036C15.6939 5.89464 15.57 5.97733 15.4337 6.03368C15.2974 6.09004 15.1514 6.11895 15.0039 6.11876Z"
										fill="#1A1918"
									/>
								</svg>
							</Link> */}
						</div>
					</nav>
					<NavIcon toggle={toggle} open={open} />

					<nav
						id="mobileNav"
						className={`${open ? 'flex animate-fade-in' : 'hidden'} flex-col lg:hidden items-center justify-center | fixed bg-[#fdfbf5] w-full bottom-0 left-0 h-full z-10 gap-4`}
					>
						<ul className="flex flex-col items-center justify-center gap-4">
							{links.map(link => (
								<li key={link.path}>
									<Link href={link.path} className={`list-none px-2 text-xl uppercase font-Roboto-Mono ${currentPath === link.path && 'text-gold'}`}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
						<div className="flex" id="socials">
							<Link
								href="https://www.linkedin.com/in/connor-ingold-a39a27100/"
								className="flex items-center justify-center p-1 mx-2 text-center border border-black rounded-full border-black hover:border-[#baa086] group h-7 w-7"
							>
								<svg className="w-full" width="14" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										className="transition-colors duration-200 fill-current group-hover:fill-gold"
										d="M1.95833 0.5625C1.48868 0.5625 1.03826 0.749069 0.706165 1.08117C0.374069 1.41326 0.1875 1.86368 0.1875 2.33333C0.1875 2.80299 0.374069 3.25341 0.706165 3.5855C1.03826 3.9176 1.48868 4.10417 1.95833 4.10417C2.42799 4.10417 2.87841 3.9176 3.2105 3.5855C3.5426 3.25341 3.72917 2.80299 3.72917 2.33333C3.72917 1.86368 3.5426 1.41326 3.2105 1.08117C2.87841 0.749069 2.42799 0.5625 1.95833 0.5625ZM0.291667 5.5625C0.26404 5.5625 0.237545 5.57347 0.21801 5.59301C0.198475 5.61254 0.1875 5.63904 0.1875 5.66667V16.5C0.1875 16.5575 0.234167 16.6042 0.291667 16.6042H3.625C3.65263 16.6042 3.67912 16.5932 3.69866 16.5737C3.71819 16.5541 3.72917 16.5276 3.72917 16.5V5.66667C3.72917 5.63904 3.71819 5.61254 3.69866 5.59301C3.67912 5.57347 3.65263 5.5625 3.625 5.5625H0.291667ZM5.70833 5.5625C5.68071 5.5625 5.65421 5.57347 5.63468 5.59301C5.61514 5.61254 5.60417 5.63904 5.60417 5.66667V16.5C5.60417 16.5575 5.65083 16.6042 5.70833 16.6042H9.04167C9.06929 16.6042 9.09579 16.5932 9.11532 16.5737C9.13486 16.5541 9.14583 16.5276 9.14583 16.5V10.6667C9.14583 10.2523 9.31045 9.85484 9.60348 9.56181C9.8965 9.26879 10.2939 9.10417 10.7083 9.10417C11.1227 9.10417 11.5202 9.26879 11.8132 9.56181C12.1062 9.85484 12.2708 10.2523 12.2708 10.6667V16.5C12.2708 16.5575 12.3175 16.6042 12.375 16.6042H15.7083C15.736 16.6042 15.7625 16.5932 15.782 16.5737C15.8015 16.5541 15.8125 16.5276 15.8125 16.5V9.31667C15.8125 7.29417 14.0542 5.7125 12.0417 5.895C11.419 5.95168 10.8091 6.10578 10.2342 6.35167L9.14583 6.81833V5.66667C9.14583 5.63904 9.13486 5.61254 9.11532 5.59301C9.09579 5.57347 9.06929 5.5625 9.04167 5.5625H5.70833Z"
										fill="#1A1918"
									/>
								</svg>
							</Link>
							<Link
								href="https://github.com/ConnorIngold"
								className="flex items-center justify-center p-1 mx-2 text-xs border border-black rounded-full hover:border-[#baa086] group h-7 w-7 full"
							>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										className="transition-colors duration-200 fill-current group-hover:fill-gold"
										d="M12 0.292969C13.1016 0.292969 14.1641 0.433594 15.1875 0.714844C16.2109 0.996094 17.1641 1.40234 18.0469 1.93359C18.9297 2.46484 19.7383 3.08984 20.4727 3.80859C21.207 4.52734 21.8359 5.33594 22.3594 6.23438C22.8828 7.13281 23.2852 8.08984 23.5664 9.10547C23.8477 10.1211 23.9922 11.1836 24 12.293C24 13.582 23.8047 14.8242 23.4141 16.0195C23.0234 17.2148 22.4648 18.3125 21.7383 19.3125C21.0117 20.3125 20.1484 21.1875 19.1484 21.9375C18.1484 22.6875 17.0313 23.2695 15.7969 23.6836C15.7734 23.6914 15.7383 23.6953 15.6914 23.6953C15.6445 23.6953 15.6094 23.6992 15.5859 23.707C15.3984 23.707 15.25 23.6523 15.1406 23.543C15.0313 23.4336 14.9766 23.2891 14.9766 23.1094V21.4688C14.9766 20.9297 14.9805 20.3789 14.9883 19.8164C14.9883 19.418 14.9297 19.0156 14.8125 18.6094C14.6953 18.2031 14.4844 17.8633 14.1797 17.5898C15.0859 17.4883 15.8789 17.3047 16.5586 17.0391C17.2383 16.7734 17.8086 16.3984 18.2695 15.9141C18.7305 15.4297 19.0742 14.8438 19.3008 14.1562C19.5273 13.4687 19.6445 12.6406 19.6523 11.6719C19.6523 11.0625 19.5508 10.4883 19.3477 9.94922C19.1445 9.41016 18.8359 8.91016 18.4219 8.44922C18.5078 8.23047 18.5703 8.00391 18.6094 7.76953C18.6484 7.53516 18.668 7.30078 18.668 7.06641C18.668 6.76172 18.6367 6.46094 18.5742 6.16406C18.5117 5.86719 18.4219 5.57031 18.3047 5.27344C18.2656 5.25781 18.2227 5.25 18.1758 5.25C18.1289 5.25 18.0859 5.25 18.0469 5.25C17.7969 5.25 17.5352 5.28906 17.2617 5.36719C16.9883 5.44531 16.7187 5.54687 16.4531 5.67188C16.1875 5.79688 15.9258 5.93359 15.668 6.08203C15.4102 6.23047 15.1875 6.37109 15 6.50391C14.0234 6.23047 13.0234 6.09375 12 6.09375C10.9766 6.09375 9.97656 6.23047 9 6.50391C8.80469 6.37109 8.58203 6.23047 8.33203 6.08203C8.08203 5.93359 7.82422 5.80078 7.55859 5.68359C7.29297 5.56641 7.01953 5.46484 6.73828 5.37891C6.45703 5.29297 6.19531 5.25 5.95312 5.25H5.82422C5.77734 5.25 5.73437 5.25781 5.69531 5.27344C5.58594 5.5625 5.5 5.85547 5.4375 6.15234C5.375 6.44922 5.33984 6.75391 5.33203 7.06641C5.33203 7.30078 5.35156 7.53516 5.39062 7.76953C5.42969 8.00391 5.49219 8.23047 5.57812 8.44922C5.16406 8.90234 4.85547 9.39844 4.65234 9.9375C4.44922 10.4766 4.34766 11.0547 4.34766 11.6719C4.34766 12.625 4.46094 13.4492 4.6875 14.1445C4.91406 14.8398 5.25781 15.4258 5.71875 15.9023C6.17969 16.3789 6.75 16.7578 7.42969 17.0391C8.10938 17.3203 8.90234 17.5078 9.80859 17.6016C9.58203 17.8047 9.41016 18.0469 9.29297 18.3281C9.17578 18.6094 9.09375 18.9023 9.04688 19.207C8.83594 19.3086 8.61328 19.3867 8.37891 19.4414C8.14453 19.4961 7.91016 19.5234 7.67578 19.5234C7.17578 19.5234 6.76172 19.4062 6.43359 19.1719C6.10547 18.9375 5.8125 18.6172 5.55469 18.2109C5.46094 18.0625 5.34766 17.9141 5.21484 17.7656C5.08203 17.6172 4.9375 17.4844 4.78125 17.3672C4.625 17.25 4.45703 17.1562 4.27734 17.0859C4.09766 17.0156 3.91016 16.9766 3.71484 16.9688H3.57422C3.51172 16.9688 3.45312 16.9805 3.39844 17.0039C3.34375 17.0273 3.28906 17.0508 3.23438 17.0742C3.17969 17.0977 3.15625 17.1367 3.16406 17.1914C3.16406 17.2852 3.21875 17.375 3.32812 17.4609C3.4375 17.5469 3.52734 17.6172 3.59766 17.6719L3.63281 17.6953C3.80469 17.8281 3.95312 17.9531 4.07812 18.0703C4.20313 18.1875 4.32031 18.3164 4.42969 18.457C4.53906 18.5977 4.62891 18.7461 4.69922 18.9023C4.76953 19.0586 4.85938 19.2422 4.96875 19.4531C5.23437 20.0625 5.60547 20.5039 6.08203 20.7773C6.55859 21.0508 7.13281 21.1914 7.80469 21.1992C8.00781 21.1992 8.21094 21.1875 8.41406 21.1641C8.61719 21.1406 8.82031 21.1055 9.02344 21.0586V23.0977C9.02344 23.2852 8.96875 23.4336 8.85938 23.543C8.75 23.6523 8.59766 23.707 8.40234 23.707H8.30859C8.26953 23.707 8.23438 23.6992 8.20312 23.6836C6.97656 23.2852 5.85938 22.7109 4.85156 21.9609C3.84375 21.2109 2.98047 20.332 2.26172 19.3242C1.54297 18.3164 0.988281 17.2148 0.597656 16.0195C0.207031 14.8242 0.0078125 13.582 0 12.293C0 11.1914 0.140625 10.1289 0.421875 9.10547C0.703125 8.08203 1.10938 7.12891 1.64062 6.24609C2.17187 5.36328 2.79688 4.55469 3.51562 3.82031C4.23437 3.08594 5.04297 2.45703 5.94141 1.93359C6.83984 1.41016 7.79688 1.00781 8.8125 0.726562C9.82812 0.445312 10.8906 0.300781 12 0.292969Z"
										fill="#1A1918"
									/>
								</svg>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
