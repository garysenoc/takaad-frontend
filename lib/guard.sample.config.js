import Router from 'next/router'
import { useEffect, useState } from 'react'

const GuardConfig = (Component) => {
	const Auth = (props) => {
		const [isSignedIn, setIsSignedIn] = useState(props.auth.token)

		useEffect(() => {
			if (!isSignedIn.length) {
				Router.push('/')
			} else {
				setIsSignedIn(props.auth.token)
			}
		}, [])

		if (isSignedIn.length) {
			return <Component {...props} />
		} else {
			return null
		}
	}
	return Auth
}

export default GuardConfig
