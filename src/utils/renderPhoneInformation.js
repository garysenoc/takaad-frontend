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
