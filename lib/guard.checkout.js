import Router from 'next/router'
import { useEffect, useState } from 'react'

const GuardCheckoutPage = (Component) => {
	const Auth = (props) => {
		const [isItemsAvailable, setIsItemsAvailable] = useState(props.cart.items)

		useEffect(() => {
			if (!isItemsAvailable.length) {
				Router.back()
			} else {
				setIsItemsAvailable(props.cart.items)
			}
		}, [])

		if (isItemsAvailable.length) {
			return <Component {...props} />
		} else {
			return null
		}
	}
	return Auth
}

export default GuardCheckoutPage
