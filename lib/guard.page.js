import Router from 'next/router'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import mapAuthStateToProps from 'rtk/auth/state'
import mapAuthDispatchToProps from 'rtk/auth/action'

const GuardPage = (Component) => {
	const Auth = (props) => {
		useEffect(() => {
			if (props.auth.token === '') {
				Router.push('/')
			}
		}, [])

		if (props.auth.token !== '') {
			return <Component {...props} />
		} else {
			return null
		}
	}
	return connect(mapAuthStateToProps, mapAuthDispatchToProps())(Auth)
}

export default GuardPage
