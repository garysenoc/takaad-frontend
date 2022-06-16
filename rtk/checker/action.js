import checkerActions from 'rtk/checker'
import cartActions from 'rtk/cart'
import commonActions from 'rtk/common'

const { setIsLoading, setIsError, setErrorMessage } = commonActions.actions
const { addItems } = cartActions.actions

const mapDispatchToProps = () => {
	return {
		...checkerActions.actions,
		addItems,
		setIsLoading,
		setIsError,
		setErrorMessage,
	}
}

export default mapDispatchToProps
