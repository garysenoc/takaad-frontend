import { PaymentRequestButtonElement } from '@stripe/react-stripe-js'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import mapCartStateToProps from 'rtk/cart/state'
import mapCartDispatchToProps from 'rtk/cart/action'
import mapOrdersDispatchToProps from 'rtk/orders/action'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import { CurrentFormattedDate } from 'src/utils/renderFormattedDate'
import { useRouter } from 'next/router'
import capitalFirstLetterWord from '../../utils/capitalFirstLetterWord'

const Wallet = ({ paymentRequest, stripe, ...props }) => {
	const router = useRouter()

	const onClickHandler = (e) => {
		let flag = false
		for (const [key, value] of Object.entries(props.checkout.billing_details)) {
			if (key !== 'line2' && !value) {
				flag = true
				props.setSnackbarMessage(['Please fill up the required details in Billing & Shipping form.', 'error'])
				props.setIsSnackbarOpen(true)
				props.setIsLoading(false)
				break
			}
		}

		if (!props.checkout.isAgreed) {
			e.preventDefault()
			props.setSnackbarMessage(['Please check the box for website terms and conditions to agree.', 'error'])
			props.setIsSnackbarOpen(true)
			props.setIsLoading(false)
			flag = true
		} else if (props.checker.isFinishedStep) {
			props.setIsSnackbarOpen(true)
			props.setSnackbarMessage('Order is already in progress.')
			flag = true
		}

		if (flag) {
			e.preventDefault()
			return
		}
	}

	useEffect(() => {
		paymentRequest.on('paymentmethod', async (e) => {
			try {
				const result = await fetch(`${process.env.api_baseurl}/v1/users/stripe/create-payment-intent`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: e.paymentMethod.id,
						amount: props.cart.total,
					}),
				}).then((r) => r.json())

				if (result.status !== 'succeeded') {
					const { error, paymentIntent } = await stripe.confirmCardPayment(
						result.client_secret,
						{
							payment_method: e.paymentMethod.id,
						},
						{
							handleActions: false,
						},
					)
					if (error) {
						e.complete('fail')
						throw error
					}
					if (paymentIntent.status === 'requires_action') {
						stripe.confirmCardPayment(result.client_secret)
					}
				}
				e.complete('success')
				handleSetOrderDetails()
			} catch (error) {
				props.setIsSnackbarOpen(true)
				props.setSnackbarMessage([`Payment failed using ${capitalFirstLetterWord(e.walletName)}`, 'error'])
				return
			}
		})
	}, [])

	const handleSetOrderDetails = () => {
		const order_details = {
			order_number: props.cart.items.map((item) => item.order_number),
			date: CurrentFormattedDate(),
			email: props.checkout.billing_details.email_address,
			payment_method: props.cart.selectedPayment,
			service: props.cart.items.map((item) => item.product),
			price: props.cart.items.map((item) => item.price),
			subtotal: props.cart.subtotal,
			discount: props.cart.discount,
			total: props.cart.total,
		}

		sessionStorage.setItem('order_details', JSON.stringify(order_details))
		props.clearOrders()
		props.finishedStep()
		props.setIsLoading(false)

		router.push('/place-order')
	}

	return (
		<PaymentRequestButtonElement
			options={{ paymentRequest, style: { paymentRequestButton: { theme: 'light' } } }}
			onClick={onClickHandler}
		/>
	)
}

export default connect(mapCartStateToProps, {
	...mapCartDispatchToProps(),
	...mapOrdersDispatchToProps(),
	...mapCheckerDispatchToProps(),
})(Wallet)
