import { getDeviceBrand, getDeviceSeriesName } from './renderPhoneInformation'

export const basicIMEICheck = async (imei) => {
	try {
		const result = await fetch(
			`${process.env.imei_baseurl}create?key=${process.env.imei_access_key}&service=11&imei=${imei}`,
		)
		const data = await result.json()
		if (result.ok && data.status === 'success' && (data.object !== false || data.result !== '')) {
			if (data.object !== false) {
				return {
					...data,
					object: {
						brand: data.object.brand,
						model:
							data.object.brand.toLowerCase() === 'samsung'
								? `${data.object.name} ${data.object.model}`
								: data.object.model,
					},
				}
			} else if (data.result !== '') {
				return {
					...data,
					object: {
						brand: getDeviceBrand(data.result),
						model: getDeviceSeriesName(data.result),
					},
				}
			}
		} else {
			const result = await fetch(
				`${process.env.imei_baseurl}create?key=${process.env.imei_access_key}&service=10&imei=${imei}`,
			)
			const data = await result.json()
			return {
				...data,
				object: {
					brand: getDeviceBrand(data.result),
					model: data.result,
				},
			}
		}
	} catch (error) {
		return { status: 'failed' }
	}
}
