import { getDeviceBrand, getDeviceSeriesName } from './renderPhoneInformation'

export const basicIMEICheck = async (imei) => {
	try {
		let result, data
		result = await fetch(`${process.env.imei_baseurl}create?key=${process.env.imei_access_key}&service=11&imei=${imei}`)
		data = await result.json()
		if (result.ok && data.status === 'success') {
			if (typeof data.object === 'object') {
				return {
					...data,
					object: {
						brand: data.object.brand,
						model:
							data.object.brand.toLowerCase() === 'apple'
								? data.object.model
								: `${data.object.name} (${data.object.model})`,
					},
				}
			} else if (typeof data.object === 'string' && data.result !== '') {
				return {
					...data,
					object: {
						brand: getDeviceBrand(data.result),
						model: getDeviceSeriesName(data.result),
					},
				}
			}
		}
		result = await fetch(`${process.env.imei_baseurl}create?key=${process.env.imei_access_key}&service=5&imei=${imei}`)
		data = await result.json()
		if (result.ok && data.status === 'success') {
			if (typeof data.object === 'object') {
				const brand = getDeviceBrand(`${data.object.manufacturer} ${data.object.modelName} ${data.object.model}`)
				return {
					...data,
					object: {
						brand: brand,
						model: brand === 'Apple' ? data.object.modelName : `${data.object.model} (${data.object.modelName})`,
					},
				}
			} else if (typeof data.result === 'string' && data.result !== '') {
				return {
					...data,
					object: {
						brand: getDeviceBrand(data.result),
						model: getDeviceSeriesName(data.result),
					},
				}
			}
		}
		result = await fetch(`${process.env.imei_baseurl}create?key=${process.env.imei_access_key}&service=10&imei=${imei}`)
		data = await result.json()
		if (result.ok && data.status === 'success') {
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
