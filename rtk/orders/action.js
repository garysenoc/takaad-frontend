import ordersActions from 'rtk/orders'

const mapDispatchToProps = () => {
	return {
		...ordersActions.actions,
	}
}

export default mapDispatchToProps
