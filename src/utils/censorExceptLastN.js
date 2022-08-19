export default function censorExceptLastN(str, exceptLastNDigits) {
	return '*'.repeat(str.slice(0, -exceptLastNDigits).length) + str.slice(-exceptLastNDigits)
}
