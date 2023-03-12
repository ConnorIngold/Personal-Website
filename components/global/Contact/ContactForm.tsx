// contact form in footer name, email & message.
import React from 'react'
import { useState } from 'react'
import ContactInput from './ContactInput'

interface ContactFormProps {
	onSubmit: (formData: FormData) => void
}

export interface FormData {
	name: string
	email: string
	message: string
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	})

	const [isFocused, setIsFocused] = useState(false)

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setIsFocused(false)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		onSubmit(formData)
		setFormData({ name: '', email: '', message: '' })
	}

	return (
		<form className="flex flex-wrap text-left gap -8" onSubmit={handleSubmit}>
			<ContactInput id="name" label="Your Name" type="text" />
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

			<button className="px-4 pt-2 mt-5 text-white rounded btn bg-offBlack" type="submit">
				Submit
			</button>
		</form>
	)
}

export default ContactForm
