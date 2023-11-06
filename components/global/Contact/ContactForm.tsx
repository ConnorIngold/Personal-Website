// contact form in footer name, email & message.
import React from 'react'
import { useState } from 'react'
import ContactInput from './ContactInput'


export interface FormData {
	name: string
	email: string
	message: string
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	})

	const [isFocused, setIsFocused] = useState(false)

	const [isLoading, setIsLoading] = useState(false)

	const [errorMsg, setErrors] = useState<string>('')
	const [successMsg, setSuccess] = useState<string>('')

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		if (formData.message.trim() === '') {
			setIsFocused(false);
	}
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsLoading(true)
		const eventFormData = {
			name: event.currentTarget.fullName.value,
			email: event.currentTarget.email.value,
			message: event.currentTarget.message.value,
		}

		if (!eventFormData.name || !eventFormData.email || !eventFormData.message) {
			return
		}
				// submit the form data to the server
		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(eventFormData),
		})
		.then(response => {
			if (!response.ok) {
				// The response contains an error status
				return response.json().then(data => {
					throw new Error(data.message || 'Something went wrong.');
				});
			}
			return response.json();
		})
		.then(data => {
			setIsLoading(false)
			setSuccess(data.message)
			    // Push an event to GTM's dataLayer
				window.dataLayer.push({
					event: 'successful_form_submission',
					'formData': {
						'name': eventFormData.name, // Example form field
						'email': eventFormData.email // Example form field
						// Add other form fields as necessary
					  }
					// Include any additional parameters you want to send to GA4
				  });
		})
		.catch(error => {
			// Handle the error response
			setIsLoading(false)
			setErrors(error.message)			
			console.error('Error:', error)
		})

	}

	return (
		<form className="flex flex-wrap text-left gap -8" onSubmit={handleSubmit}>
			<ContactInput id="fullName" label="Your Name" type="text" />
			<ContactInput id="email" label="Email:" type="email" />

			<div className="relative w-full mt-7">
				<label htmlFor="message" className={`absolute ${isFocused ? 'text-gray-600 text-sm -top-6' : 'text-xl -top-1'} transition-all duration-200`}>
					Message:
				</label>
				<textarea
					className="w-full bg-transparent border-b min-h-[150px] resize-none outline-none"
					name="message"
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={formData.message}
					onChange={handleChange}
					draggable="false"
					required
				></textarea>
			</div>

			{/* fancy loading spinner with tailwind */}
			{isLoading && (
				<div className="flex items-center justify-center w-full h-12 px-4 mt-5 text-white bg-black rounded">
					<svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
					</svg>
					Submitting...
				</div>
			)}

			{/* fancy error message with tailwind */}
			{errorMsg && (
				<div className="flex items-center justify-center w-full h-12 px-4 mt-5 text-white bg-red-500 rounded">
					{errorMsg}
				</div>
			)}

			{/* fancy success message with tailwind */}
			{successMsg && (
				<div className="flex items-center justify-center w-full h-12 px-4 mt-5 text-white bg-green-500 rounded">
					{successMsg}
				</div>
			)}

			<button className="px-4 pt-2 mt-5 text-white rounded btn bg-offBlack" type="submit">
				Submit
			</button>
		</form>
	)
}

export default ContactForm
