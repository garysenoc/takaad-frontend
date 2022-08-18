import ordersActions from 'rtk/orders'

const mapOrdersDispatchToProps = () => {
	return {
		...ordersActions.actions,
	}
}

export default mapOrdersDispatchToProps
