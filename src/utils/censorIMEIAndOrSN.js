export default function censorIMEIAndOrSN({ label, value }) {
	let tempLabel = label.toLowerCase()
	if (
		tempLabel === 'imei' ||
		tempLabel.includes('imei') ||
		tempLabel === 'sn' ||
		tempLabel === 'serial number' ||
		tempLabel.match(/serial\s*number/)?.length > 1
	) {
		return { label, value: '*'.repeat(value.slice(0, -4).length) + value.slice(-4) }
	} else {
		return { label, value }
	}
}
