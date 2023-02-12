interface TooltipProps {
	message: string
	children: React.ReactNode
}

export default function Tooltip({ message, children }: TooltipProps) {
	const backgroundColor = message === 'LinkedIn' ? 'bg-[#0072b1]' : 'bg-gradient-to-r from-[#f09433] to-[#e6683c] bg-gradient-to-r-secondary from-red-500 to-pink-500'

	return (
		<div className="group relative flex">
			{children}
			<span className={`absolute top-10 scale-0 transition-all rounded p-2 text-xs group-hover:scale-100 text-white ${backgroundColor}`}>{message}</span>
		</div>
	)
}
