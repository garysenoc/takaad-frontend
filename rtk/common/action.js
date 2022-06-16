import commonActions from 'rtk/common'

const mapDispatchToProps = () => {
	return {
		...commonActions.actions,
	}
}

export default mapDispatchToProps
