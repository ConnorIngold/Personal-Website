// button.tsx
import React from 'react'

export interface ButtonProps {
	type?: 'button' | 'submit'
	children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ type = 'button', children }) => {
	return (
		<button type={type} className={'btn'}>
			{children}
		</button>
	)
}

export default Button
