import brandActions from 'rtk/brand'

const mapDispatchToProps = () => {
	return {
		...brandActions.actions,
	}
}

export default mapDispatchToProps
