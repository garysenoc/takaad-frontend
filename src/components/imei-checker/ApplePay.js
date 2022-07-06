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

const ApplePay = ({ paymentRequest, stripe, ...props }) => {
	const router = useRouter()

	const onClickHandler = (e) => {
		if (props.checker.isFinishedStep) {
			props.setIsSnackbarOpen(true)
			props.setSnackbarMessage('Order is already in progress.')
			e.preventDefault()
			return
		} else if (!props.checkout.isAgreed) {
			props.setIsSnackbarOpen(true)
			props.setSnackbarMessage('Please check the box for website terms and conditions to agree.')
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
						amount: props.cart.final_checkout_price,
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
				props.setSnackbarMessage(`Payment failed using ${capitalFirstLetterWord(e.walletName)}`)
				return
			}
		})
	}, [])

	const handleSetOrderDetails = () => {
		const order_details = {
			order_number: props.cart.items.map((item) => item.order_number),
			date: CurrentFormattedDate(),
			email: props.checkout.billing_details.email_address,
			payment_method: props.cart.selectedPayment === 'paypal' ? 'Paypal' : 'Credit/Debit Card',
			service: props.cart.items.map((item) => item.product),
			price: props.cart.items.map((item) => item.price),
			subtotal: props.cart.checkout_price,
			total: props.cart.checkout_price,
		}

		sessionStorage.setItem('order_details', JSON.stringify(order_details))
		props.clearOrders()
		props.finishedStep()
		props.setIsLoading(false)

		router.push('/place-order')
	}

	return <PaymentRequestButtonElement options={{ paymentRequest }} onClick={onClickHandler} />
}

export default connect(mapCartStateToProps, {
	...mapCartDispatchToProps(),
	...mapOrdersDispatchToProps(),
	...mapCheckerDispatchToProps(),
})(ApplePay)
