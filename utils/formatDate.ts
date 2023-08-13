export const formatDate = (dateString: string): string => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
	return new Date(dateString).toLocaleDateString(undefined, options)
}
