import censorExceptLastN from './censorExceptLastN'

export default function censorIMEIAndOrSN({ label, value }) {
	let tempLabel = label.toLowerCase()
	if (
		tempLabel === 'imei' ||
		tempLabel.includes('imei') ||
		tempLabel === 'meid' ||
		tempLabel.includes('meid') ||
		tempLabel === 'sn' ||
		tempLabel === 'serial number' ||
		tempLabel.match(/serial\s*number/)?.length > 1
	) {
		return { label, value: censorExceptLastN(value, 3) }
	} else {
		return { label, value }
	}
}
