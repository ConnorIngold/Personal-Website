import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="py-6">
			<div className="container">
				<nav className="flex flex-wrap items-center justify-center sm:justify-between py-6 border-t lg:flex-nowrap">
					<div className="w-1/5 border-t hidden lg:block"></div>
					<Link className='hidden sm:block' href="/">
						<span className="px-4 transition-all hover:text-gold ease">Home</span>
					</Link>
					<Link className='hidden sm:block' href="/about">
						<span className="px-4 hover:text-grey hover:text-gold ease">About</span>
					</Link>
					<div className="flex flex-col justify-center gap-2">
						<h4 className="text-center capitalize font-Syne">Connor Ingold</h4>
						<div className="flex justify-center" id="socials">
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
						<Link href="/termsandconditions" className="text-center text-grey">
							<small className="text-gray-500 underline">Terms & conditions</small>
						</Link>
					</div>
					<Link className='hidden sm:block' href="/projects">
						<span className="px-4 hover:text-gold ease">Projects</span>
					</Link>
					<Link className='hidden sm:block' href="/contact">
						<span className="px-4 hover:text-gold ease">Contact</span>
					</Link>
					<div className="w-1/5 border-t  hidden lg:block"></div>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
