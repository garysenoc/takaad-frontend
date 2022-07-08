import * as React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container, Box, Grid, Typography } from '@mui/material'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import mapCheckoutStateToProps from 'rtk/checkout/state'
import mapCheckoutDispatchToProps from 'rtk/checkout/action'
import { renderBrand } from 'src/utils/renderPhoneInformation'
import OrderDetails from 'src/components/place-order/order-details'
import OrderData from 'src/components/place-order/order-data'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'
import GuardOrderDetails from 'lib/guardOrderDetails'
import mapCheckerDispatchToProps from '../../rtk/checker/action'

export const getServerSideProps = async (context) => {
	if (context.query.token) {
		const data = await fetch(`${process.env.api_baseurl}/v1/users/paypal/capture-orders?token=${context.query.token}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!data.ok) {
			props.setSnackbarMessage(['Something went wrong, please contact the administrator.', 'error'])
			props.setIsSnackbarOpen(true)
			return { props: {} }
		}

		const response = await data.json()
		// console.log(response)

		return {
			props: {
				...(await serverSideTranslations(context.locale, ['common'])),
				response,
			},
		}
	} else {
		return {
			props: {
				...(await serverSideTranslations(context.locale, ['common'])),
			},
		}
	}
}

const PlaceOrder = GuardOrderDetails((props) => {
	useEffect(() => {
		props.response?.id && props.setOderCheckout(props.response)
		props.checker.isFinishedStep && props.resetStep()
		handleAddOrderData()
	}, [])

	const handleAddOrderData = async () => {
		if (props.cart.items.length === 0) {
			return
		}

		props.setIsLoading(true)
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.internal_token,
			},
		}

		try {
			const endpoints = []

			for (let i = 0; i < props.cart.items.length; i++) {
				endpoints.push(
					fetch(
						`${process.env.api_baseurl}/v1/imei/service?imei=${props.cart.items[i].details.imei}&brand=${renderBrand(
							props.cart.items[i].product,
						)}`,
						options,
					),
				)
			}

			props.setMetadata(props.cart.items)

			const results = await Promise.all(endpoints)
			const data = []
			const flag = false
			for (let i = 0; i < results.length; i++) {
				if (!results[i].ok) {
					flag = true
					break
				}
				const item = await results[i].json()
				data.push(item.data)
				props.addOrderData(item.data)
			}

			if (!flag) {
				const order = {
					...(props.auth.id !== '' ? { user_id: props.auth.id } : {}),
					date: new Date(),
					discount: props.cart.discount,
					email: props.checkout.billing_details.email_address,
					order_number: props.cart.items.map((item) => item.order_number),
					payment_method: props.cart.selectedPayment,
					price: props.cart.items.map((item) => item.price),
					service: props.cart.items.map((item) => item.product),
					subtotal: props.cart.subtotal,
					total: props.cart.total,
					order_data: data,
				}
				const chores = [
					fetch(`${process.env.api_baseurl}/v1/order`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(order),
					}).catch(() => {
						props.setIsSnackbarOpen(true)
						props.setSnackbarMessage('Something went wrong in recording the order.')
					}),
					handleSendEmail(props.cart.items, data),
				]
				await Promise.allSettled(chores)
				props.clearItems()
				props.setIsLoading(false)
				props.setSnackbarMessage(['Order completed!', 'success'])
				props.setIsSnackbarOpen(true)
			} else {
				throw new Error()
			}
		} catch (error) {
			if (error) {
				props.setSnackbarMessage(['Something went wrong, please contact the administrator.', 'error'])
				props.setIsSnackbarOpen(true)
			}
		}
	}

	const handleSendEmail = async (metadata, data) => {
		const requestPayload = {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: `${props.checkout.billing_details.first_name} ${props.checkout.billing_details.last_name}`,
				email: props.checkout.billing_details.email_address,
				subject: 'All in One Information',
				message: metadata
					.map(
						(item, index) =>
							`${item.product}<br/>${data[index].map((keyVal) => `${keyVal.label}: ${keyVal.value}`).join('<br/>')}`,
					)
					.join('<br/><br/>'),
			}),
		}

		try {
			await fetch('/api/services', requestPayload)
		} catch (error) {
			props.setIsSnackbarOpen(true)
			props.setSnackbarMessage('Something went wrong in sending the email.')
		}
	}

	return (
		<>
			<Navbar />
			<Box my={4} sx={{ minHeight: '73vh' }}>
				<Container>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 900,
							color: '#003056',
							display: 'block',
							marginBottom: '25px',
							textAlign: 'center',
							fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
							lineHeight: { xs: '28px', sm: '40px', md: '40px', lg: '52px' },
						}}
					>
						Order Checkout
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#fff',
							backgroundColor: '#28cd7e',
							display: 'block',
							textAlign: 'center',
							p: 1,
							mb: 1,
							borderRadius: 2,
							fontSize: { xs: 14, sm: 18, md: 20, lg: 22 },
						}}
					>
						Thank you {props.checkout.billing_details.first_name}! Your order has been received.
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<OrderData />
						</Grid>
						<Grid item xs={12}>
							<OrderDetails />
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Footer />
		</>
	)
})

// PlaceOrder.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default connect(mapCheckoutStateToProps, {
	...mapCheckoutDispatchToProps(),
	...mapCheckerDispatchToProps(),
})(PlaceOrder)
