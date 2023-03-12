import { useState } from 'react'

interface Props {
	id: string
	label: string
	type: 'text' | 'email' | 'password'
}

const ContactInput = ({ id, label, type }: Props) => {
	const [isFocused, setIsFocused] = useState(false)

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setIsFocused(false)
	}

	return (
		<div className="relative w-full mt-7">
			<label htmlFor={id} className={`absolute ${isFocused ? 'text-gray-600 text-sm -top-6' : 'text-xl -top-1 cursor-text'} transition-all duration-200`}>
				{label}
			</label>
			<input id={id} onFocus={handleFocus} onBlur={handleBlur} className="w-full pb-1 bg-transparent border-b outline-none cursor-text" type={type} />
		</div>
	)
}

export default ContactInput
