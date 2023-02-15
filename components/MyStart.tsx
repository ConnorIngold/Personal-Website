// MyStart.tsx
import React from 'react'

const MyStart: React.FC = () => {
	return (
		<section className="py-3 border-black lg:py-7 border-y">
			<div className="flex flex-col items-center justify-center w-full h-full text-center">
				<h4 className="text-center">My Start</h4>
				<h2 className="my-2 text-4xl title">My journey in web development started with a coding bootcamp in London back in early 2018. </h2>
				<p className="text-2xl">
					Despite the challenges of finding work as a self-employed developer, I persevered and eventually landed a gig with a small start-up media agency where I created the
					front-end code for a major UK university.
				</p>
			</div>
		</section>
	)
}

export default MyStart
