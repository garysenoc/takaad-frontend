const sendEmail = async (orderId, name, email, services, data) => {
	const requestPayload = {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: name,
			email: email,
			subject: 'All in One Information',
			message: [
				`Order ID: ${orderId}`,
				services.map(
					(service, index) =>
						`${service} All in One Information<br/>${data[index]
							.map((keyVal) => `${keyVal.label}: ${keyVal.value}`)
							.join('<br/>')}`,
				),
			].join('<br/><br/>'),
		}),
	}
	return await fetch('/api/services', requestPayload)
}

export default sendEmail
