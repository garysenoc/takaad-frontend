import cartActions from 'rtk/cart'
import checkoutActions from 'rtk/checkout'
import commonActions from 'rtk/common'

const { setIsLoading, setIsError, setErrorMessage } = commonActions.actions
const { setIsAgreed, setOderDetails } = checkoutActions.actions

const mapDispatchToProps = () => {
	return {
		...cartActions.actions,
		setIsLoading,
		setIsError,
		setErrorMessage,
		setIsAgreed,
		setOderDetails,
	}
}

export default mapDispatchToProps
