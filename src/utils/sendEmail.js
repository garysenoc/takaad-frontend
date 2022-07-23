const sendEmail = async (order) => {
	const requestPayload = {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(order),
	}
	return await fetch('/api/services', requestPayload)
}

export default sendEmail
