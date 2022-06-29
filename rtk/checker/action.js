import checkerActions from 'rtk/checker'
import cartActions from 'rtk/cart'
import commonActions from 'rtk/common'

const { setIsLoading, setIsSnackbarOpen, setSnackbarMessage } = commonActions.actions
const { addItems } = cartActions.actions

const mapCheckerDispatchToProps = () => {
	return {
		...checkerActions.actions,
		addItems,
		setIsLoading,
		setIsSnackbarOpen,
		setSnackbarMessage,
	}
}

export default mapCheckerDispatchToProps
