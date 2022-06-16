import crypto from 'crypto'
import CryptoJS from 'crypto-js'
import { createTransform } from 'redux-persist'

if (typeof window !== 'undefined') {
	localStorage.removeItem('persist:root')
}

const anonymous = () => `${crypto.randomBytes(128).toString('hex')}`

const SetTransform = createTransform(
	(inboundState) => {
		return CryptoJS.AES.encrypt(JSON.stringify(inboundState), anonymous()).toString()
	},
	(outboundState) => {
		const str = CryptoJS.AES.decrypt(outboundState, anonymous()).toString(CryptoJS.enc.Utf8)

		if (!str) {
			return null
		}

		return JSON.parse(str)
	},
	// { whitelist: ['common'] },
)

export default SetTransform
