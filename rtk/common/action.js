import commonActions from 'rtk/common'

const mapCommonDispatchToProps = () => {
	return {
		...commonActions.actions,
	}
}

export default mapCommonDispatchToProps
