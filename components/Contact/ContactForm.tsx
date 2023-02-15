// contact form in footer name, email & message.
import React from 'react'
import { useState } from 'react'

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
		<form className="flex flex-wrap gap-5 text-left" onSubmit={handleSubmit}>
			<div className="w-full">
				<label htmlFor="name">Name:</label>
				<input className="w-full bg-transparent border-b" type="text" name="name" value={formData.name} onChange={handleChange} required />
			</div>

			<div className="w-full">
				<label htmlFor="email">Email:</label>
				<input className="w-full bg-transparent border-b" type="email" name="email" value={formData.email} onChange={handleChange} required />
			</div>

			<div className="w-full">
				<label htmlFor="message">Message:</label>
				<textarea className="w-full bg-transparent border-b min-h-[150px]" name="message" value={formData.message} onChange={handleChange} required></textarea>
			</div>

			<button className="px-4 pt-2 mt-5 text-white rounded btn bg-offBlack" type="submit">
				Submit
			</button>
		</form>
	)
}

export default ContactForm
