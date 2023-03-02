const AboutMeOverview = () => {
	return (
		<section id="about-me" className="flex border-b">
			<div className="w-3/4">
				<div className="py-5 lg:py-10">
					<h1>About Me</h1>
					<p>
						I&apos;m a well versed and passionate JS and Shopify Dev, <br /> Looking to create long lasting relationships with people. <br /> And I mean that!
					</p>
				</div>
			</div>
			<div className="w-1/4 border-l">
				<div className="flex-col justify-between max-w-[80%] mx-auto py-2 lg:py-4 h-full flex gap-5">
					<h5>
						<span className="text-black opacity-50">Location:</span>
						<br />
						London & Northampton
					</h5>
					<h5>
						<span className="text-black opacity-50">Age:</span>
						<br />
						{/* code for my age I was on the 30/06/1998 taking into consideration the month and day */}
						{new Date().getFullYear() - 1998 - (new Date().getMonth() < 5 || (new Date().getMonth() === 5 && new Date().getDate() < 30) ? 1 : 0)} years
						{/* if it's my birthday say happy birthday me: */}
						{new Date().getMonth() === 5 && new Date().getDate() === 30 ? <p className="text-sm">(It&apos;s my Birthday is today btw!)</p> : ''}
					</h5>
					<h5>
						<span className="text-black opacity-50">Languages:</span>
						<br />
						English: Native <br /> <span className="text-black opacity-50">(My mother&apos;s tongue)</span> <br /> Japanese: Beginner <br />{' '}
						<span className="text-black opacity-50">(Going to Tokyo so it&apos;s needed)</span>
					</h5>
				</div>
			</div>
		</section>
	)
}

export default AboutMeOverview
