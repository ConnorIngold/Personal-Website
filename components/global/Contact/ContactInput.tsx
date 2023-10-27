import { useState } from 'react'

interface Props {
	id: string
	label: string
	type: 'text' | 'email' | 'password'
}

const ContactInput = ({ id, label, type }: Props) => {
	const [isFocused, setIsFocused] = useState(false)
	const [inputValue, setInputValue] = useState('');


	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		if (inputValue.trim() === '') {
            setIsFocused(false);
        }
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		
		setInputValue(e.target.value);
		console.log("e.target.value", isFocused);
    }

	return (
		<div className="relative w-full mt-7">
			<label htmlFor={id} className={`absolute ${isFocused ? 'text-gray-600 text-sm -top-6' : 'text-xl -top-1 cursor-text'} transition-all duration-200`}>
				{label}
			</label>
			<input id={id} onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} className="w-full pb-1 bg-transparent border-b outline-none cursor-text" type={type} />
		</div>
	)
}

export default ContactInput
