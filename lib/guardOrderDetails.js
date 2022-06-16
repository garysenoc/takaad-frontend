import Router from 'next/router'
import { useEffect, useState } from 'react'

const GuardOrderDetails = (Component) => {
	const Auth = (props) => {
		const [isPaymentCompleted, setIsPaymentCompleted] = useState(sessionStorage.getItem('order_details'))

		useEffect(() => {
			if (!isPaymentCompleted) {
				Router.push('/')
			} else {
				setIsPaymentCompleted(sessionStorage.getItem('order_details'))
			}
		}, [])

		if (isPaymentCompleted) {
			return <Component {...props} />
		} else {
			return null
		}
	}
	return Auth
}

export default GuardOrderDetails
