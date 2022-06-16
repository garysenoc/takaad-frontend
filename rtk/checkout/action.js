import checkoutActions from 'rtk/checkout'
import commonActions from 'rtk/common'
import cartActions from 'rtk/cart'
import ordersActions from 'rtk/orders'

const { setIsLoading, setIsError, setErrorMessage } = commonActions.actions
const { clearItems } = cartActions.actions
const { setOrderData } = ordersActions.actions

const mapDispatchToProps = () => {
	return {
		...checkoutActions.actions,
		setIsLoading,
		setIsError,
		setErrorMessage,
		clearItems,
		setOrderData,
	}
}

export default mapDispatchToProps
