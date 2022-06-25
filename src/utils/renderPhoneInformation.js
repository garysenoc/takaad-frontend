import { iphone, ipad, macbooks, airpods, watch, samsung } from 'src/components/imei-checker/data'
import {
	iPhoneOrderData,
	macbookOrderData,
	iPadsOrderData,
	airPodsOrderData,
	appleWatchOrderData,
	samsungOrderData,
} from 'src/components/place-order/data'

export const renderPhoneExampleData = (str) => {
	const _str = str.toLowerCase().replaceAll(' ', '')

	switch (true) {
		case _str.indexOf('iphone') !== -1: {
			return iphone
		}

		case _str.indexOf('ipad') !== -1: {
			return ipad
		}

		case _str.indexOf('macbook') !== -1: {
			return macbooks
		}

		case _str.indexOf('airpod') !== -1: {
			return airpods
		}

		case _str.indexOf('watch') !== -1: {
			return watch
		}

		case _str.indexOf('galaxy') !== -1: {
			return samsung
		}

		default: {
			return null
		}
	}
}

export const renderPhoneBrandName = (str) => {
	const _str = str.toLowerCase().replaceAll(' ', '')

	switch (true) {
		case _str.indexOf('iphone') !== -1: {
			return 'Apple iPhone'
		}

		case _str.indexOf('ipad') !== -1: {
			return 'Apple iPad'
		}

		case _str.indexOf('macbook') !== -1: {
			return 'Apple MackBook'
		}

		case _str.indexOf('airpod') !== -1: {
			return 'Apple AirPods'
		}

		case _str.indexOf('watch') !== -1: {
			return 'Apple Watch'
		}

		case _str.indexOf('galaxy') !== -1: {
			return 'Samsung Galaxy'
		}

		default: {
			return null
		}
	}
}

export const renderBrandPricePerCheck = (str) => {
	const _str = str.toLowerCase().replaceAll(' ', '')

	switch (true) {
		case _str.indexOf('iphone') !== -1: {
			return 5.33
		}

		case _str.indexOf('ipad') !== -1: {
			return 5.33
		}

		case _str.indexOf('macbook') !== -1: {
			return 5.33
		}

		case _str.indexOf('airpod') !== -1: {
			return 5.33
		}

		case _str.indexOf('watch') !== -1: {
			return 5.33
		}

		case _str.indexOf('galaxy') !== -1: {
			return 5.33
		}

		default: {
			return null
		}
	}
}

export const renderOrderData = (str) => {
	const _str = str.toLowerCase().replaceAll(' ', '')

	switch (true) {
		case _str.indexOf('iphone') !== -1: {
			return iPhoneOrderData
		}

		case _str.indexOf('ipad') !== -1: {
			return iPadsOrderData
		}

		case _str.indexOf('macbook') !== -1: {
			return macbookOrderData
		}

		case _str.indexOf('airpod') !== -1: {
			return airPodsOrderData
		}

		case _str.indexOf('watch') !== -1: {
			return appleWatchOrderData
		}

		case _str.indexOf('galaxy') !== -1: {
			return samsungOrderData
		}

		default: {
			return null
		}
	}
}

export const renderBrand = (str) => {
	const _str = str.toLowerCase().replaceAll(' ', '')

	switch (true) {
		case _str.indexOf('iphone') !== -1: {
			return 'iphone'
		}

		case _str.indexOf('ipad') !== -1: {
			return 'ipad'
		}

		case _str.indexOf('macbook') !== -1: {
			return 'macbook'
		}

		case _str.indexOf('airpod') !== -1: {
			return 'airpod'
		}

		case _str.indexOf('watch') !== -1: {
			return 'watch'
		}

		case _str.indexOf('galaxy') !== -1: {
			return 'samsung'
		}

		default: {
			return null
		}
	}
}

export const getDeviceBrand = (str) => {
	const _str = str.toLowerCase().replaceAll(' ', '')

	if (
		_str.indexOf('apple') !== -1 ||
		_str.indexOf('iphone') !== -1 ||
		_str.indexOf('ipad') !== -1 ||
		_str.indexOf('macbook') !== -1 ||
		_str.indexOf('airpod') !== -1 ||
		(_str.indexOf('watch') !== -1 && _str.indexOf('apple') !== -1)
	) {
		return 'Apple'
	} else if (_str.indexOf('samsung') !== -1 || _str.indexOf('galaxy') !== -1) {
		return 'Samsung'
	}
	return null
}

export const getDeviceSeriesName = (str) => {
	const _str = str.toLowerCase().replaceAll(' ', '')

	if (_str.indexOf('iphone') !== -1) return 'iPhone'
	else if (_str.indexOf('ipad') !== -1) return 'iPad'
	else if (_str.indexOf('macbook') !== -1) return 'MacBook'
	else if (_str.indexOf('airpod') !== -1) return 'AirPods'
	else if (_str.indexOf('watch') !== -1 && _str.indexOf('apple') !== -1) return 'Apple Watch'
	else if (_str.indexOf('galaxy') !== -1 && _str.indexOf('samsung') !== -1) return 'Samsung Galaxy'
	else if (_str.indexOf('watch') !== -1) return 'Watch'
	else if (_str.indexOf('galaxy') !== -1) return 'Galaxy'
	return null
}
