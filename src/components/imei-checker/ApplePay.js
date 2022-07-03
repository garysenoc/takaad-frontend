import { PaymentRequestButtonElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import mapCartStateToProps from 'rtk/cart/state'
import mapCartDispatchToProps from 'rtk/cart/action'
import mapOrdersDispatchToProps from 'rtk/orders/action'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import { CurrentFormattedDate } from 'src/utils/renderFormattedDate'
import { useRouter } from 'next/router'

const ApplePay = (props) => {
	const router = useRouter()
	const stripe = useStripe()
	const elements = useElements()
	const [paymentRequest, setPaymentRequest] = useState(null)

	const onClickHandler = (e) => {
		if (props.checker.isFinishedStep) {
			props.setIsSnackbarOpen(true)
			props.setSnackbarMessage('Order is already in progress')
			e.preventDefault()
			return
		}
	}

	useEffect(() => {
		if (!stripe || !elements) {
			return
		}

		const pr = stripe.paymentRequest({
			country: 'US',
			currency: 'usd',
			total: {
				label: 'All device information',
				amount: Math.floor(props.cart.checkout_price * 100),
			},
			requestPayerName: true,
			requestPayerEmail: true,
		})
		// Check the availability of the Payment Request API.
		pr.canMakePayment().then((result) => {
			if (result) {
				setPaymentRequest(pr)
			}
		})
		pr.on('paymentmethod', async (e) => {
			try {
				const result = await fetch(`${process.env.api_baseurl}/v1/users/stripe/create-payment-intent`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: e.paymentMethod.id,
						amount: props.cart.checkout_price,
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
				props.setSnackbarMessage(
					`Payment failed using ${e.walletName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}`,
				)
				return
			}
		})
	}, [stripe, elements])

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

	return <>{paymentRequest && <PaymentRequestButtonElement options={{ paymentRequest }} onClick={onClickHandler} />}</>
}

export default connect(mapCartStateToProps, {
	...mapCartDispatchToProps(),
	...mapOrdersDispatchToProps(),
	...mapCheckerDispatchToProps(),
})(ApplePay)
