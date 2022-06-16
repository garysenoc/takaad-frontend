import Router from 'next/router'
import { useEffect, useState } from 'react'

const GuardImeiCheckerPage = (Component) => {
	const Auth = (props) => {
		const [hasPayload, setHasPayload] = useState(props.checker.payload)

		useEffect(() => {
			if (!hasPayload) {
				Router.push('/')
			} else {
				setHasPayload(props.checker.payload)
			}
		}, [])

		if (hasPayload) {
			return <Component {...props} />
		} else {
			return null
		}
	}
	return Auth
}

export default GuardImeiCheckerPage
