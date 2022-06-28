import checkoutActions from 'rtk/checkout'
import commonActions from 'rtk/common'
import cartActions from 'rtk/cart'
import ordersActions from 'rtk/orders'

const { setIsLoading, setIsSnackbarOpen, setSnackbarMessage } = commonActions.actions
const { clearItems } = cartActions.actions
const { setMetadata, addOrderData, clearOrders } = ordersActions.actions

const mapDispatchToProps = () => {
	return {
		...checkoutActions.actions,
		setIsLoading,
		setIsSnackbarOpen,
		setSnackbarMessage,
		clearItems,
		setMetadata,
		addOrderData,
		clearOrders,
	}
}

export default mapDispatchToProps
