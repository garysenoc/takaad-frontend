import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { Button } from '@mui/material'

import mapCartStateToProps from 'rtk/cart/state'
import mapCartDispatchToProps from 'rtk/cart/action'
import mapOrdersDispatchToProps from 'rtk/orders/action'
import { CurrentFormattedDate } from 'src/utils/renderFormattedDate'
import mapCheckerDispatchToProps from '../../../rtk/checker/action'

const CreditCardForm = (props) => {
	const router = useRouter()
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (event) => {
		event.preventDefault()

		props.setIsLoading(true)

		// if (!props.auth.isLoggedIn) {
		// 	props.setSnackbarMessage('Please log in first.')
		// 	props.setIsSnackbarOpen(true)
		// 	props.setIsLoading(false)
		// 	return router.push('/login')
		// }

		for (const [key, value] of Object.entries(props.checkout.billing_details)) {
			if (key !== 'line2' && !value) {
				props.setSnackbarMessage('Please fill up the required details in Billing & Shipping form.')
				props.setIsSnackbarOpen(true)
				props.setIsLoading(false)
				return null
			}
		}

		if (!props.checkout.isAgreed) {
			props.setSnackbarMessage('Please check the box for website terms and conditions to agree.')
			props.setIsSnackbarOpen(true)
			props.setIsLoading(false)
			return null
		}

		let billing_details = {
			name: `${props.checkout.billing_details.first_name} ${props.checkout.billing_details.last_name}`,
			email: props.checkout.billing_details.email_address,
			address: {
				country: props.checkout.billing_details.country,
				city: props.checkout.billing_details.city,
				line1: `${props.checkout.billing_details.line1} ${props.checkout.billing_details.line2}`,
				state: props.checkout.billing_details.state,
				postal_code: props.checkout.billing_details.zipcode,
			},
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
			billing_details,
		})

		if (error) {
			props.setIsSnackbarOpen(true)
			props.setSnackbarMessage('Payment failed using credit card.')
			props.setIsLoading(false)
			return null
		}

		let paymentIntentPayload = {
			id: paymentMethod.id,
			amount: props.cart.final_checkout_price,
		}

		const paymentIntentRequestOption = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(paymentIntentPayload),
		}

		try {
			const paymentIntentData = await fetch(
				`${process.env.api_baseurl}/v1/users/stripe/create-payment-intent`,
				paymentIntentRequestOption,
			)

			const paymentIntentResponse = await paymentIntentData.json()

			if (paymentIntentResponse.status === 'succeeded') {
				handleSetOrderDetails()
			}

			// console.log(paymentIntentResponse)
		} catch (error) {
			props.setIsLoading(false)
			props.setSnackbarMessage('Payment failed using credit card.')
			props.setIsSnackbarOpen(true)
		}
	}

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

	return (
		<form onSubmit={handleSubmit} style={{ width: '100%', color: ' #fff', marginTop: 20 }}>
			<CardElement
				options={{
					iconStyle: 'solid',
					style: {
						base: {
							color: '#fff',
							'::placeholder': {
								color: '#fff',
							},
						},
					},
					hidePostalCode: true,
				}}
			/>
			<Button
				sx={{
					fontFamily: 'Nunito Sans',
					fontWeight: 400,
					color: '#fff',
					backgroundColor: '#28cd7e',
					textTransform: 'capitalize',
					marginTop: '10px',
					width: '100%',
					fontSize: { xs: '18px', md: '18px', lg: '24px' },
					lineHeight: { xs: '18px', md: '18px', lg: '24px' },
					padding: 2,
					'&:hover': {
						backgroundColor: '#14a660',
					},
				}}
				type="submit"
				disabled={props.checker.isFinishedStep || !stripe || !elements}
			>
				{props.common.isLoading ? 'Processing...' : 'Place Order'}
			</Button>
		</form>
	)
}

export default connect(mapCartStateToProps, {
	...mapCartDispatchToProps(),
	...mapOrdersDispatchToProps(),
	...mapCheckerDispatchToProps(),
})(CreditCardForm)
