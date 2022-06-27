import cartActions from 'rtk/cart'
import checkoutActions from 'rtk/checkout'
import commonActions from 'rtk/common'

const { setIsLoading, setIsSnackbarOpen, setSnackbarMessage } = commonActions.actions
const { setIsAgreed, setOderDetails } = checkoutActions.actions

const mapDispatchToProps = () => {
	return {
		...cartActions.actions,
		setIsLoading,
		setIsSnackbarOpen,
		setSnackbarMessage,
		setIsAgreed,
		setOderDetails,
	}
}

export default mapDispatchToProps
