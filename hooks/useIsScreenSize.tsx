import { useState, useEffect } from 'react'

export function useIsScreenSize(screenWidth: number): boolean {
	const [isScreenSize, setIsScreenSize] = useState(false)

	useEffect(() => {
		const handleResize = () => setIsScreenSize(window.innerWidth < screenWidth)
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [screenWidth])

	return isScreenSize
}
