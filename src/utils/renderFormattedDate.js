export const CurrentFormattedDate = () => {
	const _date = new Date()
	const month = _date.getUTCMonth()
	const month_text = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'November',
		'December',
	]
	const date = _date.getUTCDate() < 9 ? `0${_date.getUTCDate()}` : _date.getUTCDate()
	const year = _date.getUTCFullYear()

	return `${month_text[month]} ${date}, ${year}`
}
