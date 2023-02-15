import Image from 'next/image'

const MyServices = () => {
	return (
		<section className="my-7 lg:my-14">
			<div className="flex gap-10">
				<div className="w-1/3 border-r border-black">
					<h4>My Services</h4>
				</div>
				<div className="flex flex-wrap w-2/3 gap-10 pl-10 border-black">
					<div className="flex gap-10">
						<div className="flex w-1/2 gap-8">
							<svg width="86" height="87" viewBox="0 0 86 87" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
								<rect x="10.5" y="11.125" width="75" height="75" stroke="#1A1918" />
							</svg>

							<div className="flex-col">
								<h5>Custom Web Apps Building</h5>
								<p>Some text about this service goes here but for now it’s just a placeholder here</p>
							</div>
						</div>
						<div className="flex w-1/2 gap-8 pl-5 border-l border-black">
							<svg width="91" height="84" viewBox="0 0 91 84" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
								<path d="M7.36379 83.25L48.5 12L89.6362 83.25H7.36379Z" stroke="#1A1918" />
							</svg>

							<div className="flex-col">
								<h5>Custom Web Apps Building</h5>
								<p>Some text about this service goes here but for now it’s just a placeholder here</p>
							</div>
						</div>
					</div>
					<div className="w-full border-b border-black"></div>
					<div className="flex gap-10">
						<div className="flex w-1/2 gap-8">
							<svg width="88" height="91" viewBox="0 0 88 91" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
								<rect x="8.5" y="11.5" width="79" height="79" rx="39.5" stroke="#1A1918" />
							</svg>
							<div className="flex-col">
								<h5>Custom Web Apps Building</h5>
								<p>Some text about this service goes here but for now it’s just a placeholder here</p>
							</div>
						</div>
						<div className="flex w-1/2 gap-8 pl-5 border-l border-black">
							<svg width="83" height="89" viewBox="0 0 83 89" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" y="1.125" width="75" height="75" stroke="#1A1918" />
								<path d="M14.792 30.0387L48.5 10.5774L82.208 30.0387V68.9613L48.5 88.4226L14.792 68.9613V30.0387Z" stroke="#1A1918" />
							</svg>
							<div className="flex-col">
								<h5>Custom Web Apps Building</h5>
								<p>Some text about this service goes here but for now it’s just a placeholder here</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MyServices
