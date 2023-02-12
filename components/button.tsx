// button.tsx
import React from 'react'

export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 *
	 * @default false
	 * */
	primary?: boolean
	/**
	 * What background color to use
	 *
	 * @default 'red'
	 * */
	backgroundColor?: string
	/**
	 * How large should the button be?
	 *
	 * @default 'medium'
	 * */
	size?: 'small' | 'medium' | 'large'
	/**
	 * Button contents
	 *
	 * @default 'Click me'
	 * */
	label: string
	/**
	 * Optional click handler
	 * */
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ primary = false, backgroundColor, size = 'medium', label, ...props }) => {
	const mode = primary ? 'btn--primary' : 'btn--secondary'
	return (
		<button type="button" className={['btn', `btn--${size}`, mode].join(' ')} style={{ backgroundColor }} {...props}>
			{label}
		</button>
	)
}

export default Button
