import checkoutActions from 'rtk/checkout'
import commonActions from 'rtk/common'
import cartActions from 'rtk/cart'
import ordersActions from 'rtk/orders'

const { setIsLoading, setIsSnackbarOpen, setSnackbarMessage } = commonActions.actions
const { clearItems } = cartActions.actions
const { setOrderData } = ordersActions.actions

const mapDispatchToProps = () => {
	return {
		...checkoutActions.actions,
		setIsLoading,
		setIsSnackbarOpen,
		setSnackbarMessage,
		clearItems,
		setOrderData,
	}
}

export default mapDispatchToProps
