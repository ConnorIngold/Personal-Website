import { useState, useEffect } from 'react'
import Gears from './Gears'

const UnderConstruction = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		// Check local storage to see if the modal has been displayed before
		const hasModalDisplayed = localStorage.getItem('modalDisplayed')
		if (hasModalDisplayed === 'false') {
			setIsModalOpen(true)
		}
	}, [])

	const closeModal = () => {
		setIsModalOpen(false)
		// Set a flag in local storage to indicate that the modal should not be shown again
		localStorage.setItem('modalDisplayed', 'true')
	}

	return isModalOpen ? (
		<div className="modal">
			<div className="modal-content">
				<span className="close-button" onClick={closeModal}>
					&times;
				</span>
				<h3 className="text-center">
					New Site Under <br />
					<div className="flex justify-center">
						<h3 className="text-siteGold">Con</h3>st<h3 className="text-siteGold">r</h3>uction
					</div>
				</h3>
				<Gears />
				<p>
					There is much missing content 👀 but otherwise the site is mostly done 💪 <br />
					I&apos;ve been working to launch site that is reflective of my skills and experience.
				</p>
				<small className="text-gray-700">Honestly I tend to procrastinate with side projects which something I&apos;m working on.</small>
				<br />
				<small className="text-gray-700">
					P.s I&apos;m also looking for a new role so if you&apos;re hiring please get in touch. <br /> P.s.s It&apos;s hard to procrastinate when you&apos;re getting paid 🤑
				</small>
			</div>
		</div>
	) : null
}

export default UnderConstruction
