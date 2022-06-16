import authActions from 'rtk/auth'

const mapDispatchToProps = () => {
	return {
		...authActions.actions,
	}
}

export default mapDispatchToProps
