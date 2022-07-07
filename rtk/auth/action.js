import authActions from 'rtk/auth'

const mapAuthDispatchToProps = () => {
	return {
		...authActions.actions,
	}
}

export default mapAuthDispatchToProps
