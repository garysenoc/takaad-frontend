import * as React from 'react'
import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import {
	Box,
	Grid,
	Typography,
	Stack,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	CardMedia,
	FormGroup,
	Checkbox,
	Button,
	Divider,
} from '@mui/material'
import { useElements, useStripe } from '@stripe/react-stripe-js'

import mapCartStateToProps from 'rtk/cart/state'
import mapCartDispatchToProps from 'rtk/cart/action'
import CheckoutForm from './checkoutForm'
import CreditCardForm from './creditCardForm'
import { CurrentFormattedDate } from 'src/utils/renderFormattedDate'
import mapCheckerDispatchToProps from '../../../rtk/checker/action'
import Wallet from './Wallet'
import capitalFirstLetterWord from '../../utils/capitalFirstLetterWord'

const CheckoutInfo = (props) => {
	const router = useRouter()
	const stripe = useStripe()
	const elements = useElements()
	const [walletName, setwalletName] = useState('')
	const [paymentReq, setpaymentReq] = useState(null)

	const handlePayPalCreateOrders = async () => {
		props.setIsLoading(true)

		// if (!props.auth.isLoggedIn) {
		// 	props.setSnackbarMessage(['Please log in first.', 'error'])
		// 	props.setIsSnackbarOpen(true)
		// 	props.setIsLoading(false)
		// 	return router.push('/login')
		// }

		for (const [key, value] of Object.entries(props.checkout.billing_details)) {
			if (key !== 'line2' && !value) {
				props.setSnackbarMessage(['Please fill up the required details in Billing & Shipping form.', 'error'])
				props.setIsSnackbarOpen(true)
				props.setIsLoading(false)
				return null
			}
		}

		if (!props.checkout.isAgreed) {
			props.setSnackbarMessage(['Please check the box for website terms and conditions to agree.', 'error'])
			props.setIsSnackbarOpen(true)
			props.setIsLoading(false)
			return null
		}

		const requestOption = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				amount: props.cart.total,
			}),
		}

		try {
			const data = await fetch(`${process.env.api_baseurl}/v1/users/paypal/create-orders`, requestOption)
			const response = await data.json()

			if (!data.ok) {
				props.setSnackbarMessage(['Something went wrong!', 'error'])
				props.setIsSnackbarOpen(true)
				props.setIsLoading(false)
				return null
			}

			handleSetOrderDetails()
			props.clearOrders()
			props.finishedStep()
			props.setIsLoading(false)
			router.push(`${response.links[1].href}`)
		} catch (error) {
			props.setSnackbarMessage(['Payment failed using paypal.', 'error'])
			props.setIsSnackbarOpen(true)
			props.setIsLoading(false)
		}
	}

	useEffect(() => props.setSelectedPayment('PayPal'), [])

	const renderPaymentButton = () => {
		if (props.cart.selectedPayment === 'Credit Card') {
			return <CreditCardForm sx={{ color: '#fff !important' }} style={{ color: '#fff !important' }} />
		} else if (props.cart.selectedPayment === 'PayPal') {
			return (
				<Button
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#fff',
						backgroundColor: '#ffc439',
						textTransform: 'capitalize',
						width: '100%',
						fontSize: { xs: '18px', md: '18px', lg: '24px' },
						lineHeight: { xs: '18px', md: '18px', lg: '24px' },
						padding: 2,
						'&:hover': {
							backgroundColor: '#d1a12e',
						},
					}}
					onClick={handlePayPalCreateOrders}
				>
					{props.common.isLoading ? (
						'Processing...'
					) : (
						<CardMedia
							component="img"
							image={`/images/paypal.webp`}
							sx={{
								width: { xs: 70, sm: 90, md: 120 },
							}}
						/>
					)}
				</Button>
			)
		} else {
			return <Wallet paymentRequest={paymentReq} stripe={stripe} />
		}
	}

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
		// router.push('/place-order')
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
				amount: Math.floor(props.cart.total * 100),
			},
			requestPayerName: true,
			requestPayerEmail: true,
		})
		pr.canMakePayment().then((result) => {
			if (result) {
				const wallets = Object.entries(result)
				setwalletName(
					wallets
						.filter(([, value]) => value)
						.map(
							([key], idx, arr) =>
								capitalFirstLetterWord(key.replace(/([A-Z])/g, (letter) => ` ${letter}`)) +
								(idx < arr.length - 1 ? '/' : ''),
						)
						.join(''),
				)
				setpaymentReq(pr)
			}
		})
	}, [stripe, elements])

	return (
		<>
			<Box>
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
					Checkout
				</Typography>
				<Grid container justifyContent="center" spacing={2}>
					<Grid item xs={12} sm={12} md={6}>
						{/* <Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								display: 'block',
								marginBottom: '25px',
								textAlign: 'left',
								fontSize: { xs: '14px', sm: '16px', md: '18px' },
							}}
						>
							Returning customer?
							<Link style={{ color: 'red', textDecoration: 'none', cursor: 'pointer' }}> Click here to login</Link>
						</Typography> */}
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 600,
								color: '#003056',
								display: 'block',
								marginBottom: '25px',
								textAlign: 'left',
								fontSize: { xs: '20px', sm: '24', md: '28px' },
							}}
						>
							Billing &amp; Shipping
						</Typography>
						<CheckoutForm />
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Box sx={{ backgroundColor: '#231f20', padding: '20px', borderRadius: 2 }}>
							{props.cart.items.map((item, index) => {
								return (
									<Fragment key={index}>
										<Stack direction="row" justifyContent="space-between" mb={2}>
											<Typography
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 600,
													color: '#fff',
													display: 'block',
													textAlign: 'left',
													fontSize: { xs: '14px', sm: '16px', md: '18px' },
												}}
											>
												{item.product}
											</Typography>
											<Typography
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													display: 'block',
													textAlign: 'left',
													fontSize: { xs: '14px', sm: '16px', md: '18px' },
												}}
											>
												{`$${item.price}`}
											</Typography>
										</Stack>
										<Typography
											sx={{
												fontFamily: 'Nunito Sans',
												color: '#fff',
												display: 'block',
												textAlign: 'left',
												fontSize: { xs: '14px', sm: '16px', md: '18px' },
											}}
										>
											IMEI Number: {item.details.imei}
										</Typography>
										<Typography
											sx={{
												fontFamily: 'Nunito Sans',
												color: '#fff',
												display: 'block',
												textAlign: 'left',
												fontSize: { xs: '14px', sm: '16px', md: '18px' },
											}}
										>
											Brand: {item.details.brand}
										</Typography>
										<Typography
											sx={{
												fontFamily: 'Nunito Sans',
												color: '#fff',
												display: 'block',
												textAlign: 'left',
												fontSize: { xs: '14px', sm: '16px', md: '18px' },
											}}
										>
											Model: {item.details.model}
										</Typography>

										<Divider sx={{ border: '1px solid #ffffff' }} />
									</Fragment>
								)
							})}

							<Stack direction="row" justifyContent="space-between" mt={2}>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 600,
										color: '#fff',
										display: 'block',
										textAlign: 'left',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
									}}
								>
									Subtotal:
								</Typography>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										color: '#fff',
										display: 'block',
										textAlign: 'left',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
									}}
								>
									{`$${props.cart.subtotal}`}
								</Typography>
							</Stack>
							<Stack direction="row" justifyContent="space-between">
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 600,
										color: '#fff',
										display: 'block',
										textAlign: 'left',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
									}}
								>
									Discount:
								</Typography>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										color: '#fff',
										display: 'block',
										textAlign: 'left',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
									}}
								>
									{`$${props.cart.discount}`}
								</Typography>
							</Stack>
							<Stack direction="row" justifyContent="space-between" mb={2}>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 600,
										color: '#fff',
										display: 'block',
										textAlign: 'left',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
									}}
								>
									Total:
								</Typography>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										color: '#fff',
										display: 'block',
										textAlign: 'left',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
									}}
								>
									{`$${props.cart.total}`}
								</Typography>
							</Stack>
							<FormControl sx={{ width: '100%' }}>
								<RadioGroup
									aria-labelledby="demo-radio-buttons-group-label"
									name="radio-buttons-group"
									value={props.cart.selectedPayment}
									sx={{
										'&$checked': {
											color: '#fff',
										},
									}}
									onChange={(e) => props.setSelectedPayment(e.target.value)}
								>
									{/* <Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
										<FormControlLabel
											value="accountFunds"
											sx={{
												color: '#fff',
											}}
											control={<Radio sx={{ color: '#fff' }} />}
											label="Account Funds"
										/>
									</Box> */}
									{props.cart.selectedPayment === 'accountFunds' && (
										<Box sx={{ p: 1, backgroundColor: '#787878', borderRadius: 1 }}>
											<Typography
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													display: 'block',
													textAlign: 'left',
													fontSize: { xs: '14px', sm: '16px', md: '16px' },
												}}
											>
												Available balance: $3403.46
											</Typography>
										</Box>
									)}
									{paymentReq && (
										<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
											<FormControlLabel
												value={walletName}
												sx={{
													color: '#fff',
												}}
												control={
													<Radio
														sx={{
															color: '#fff',
															'&.Mui-checked': {
																color: '#fff',
															},
														}}
													/>
												}
												label={walletName}
											/>
										</Box>
									)}
									<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
										<FormControlLabel
											value="PayPal"
											sx={{
												color: '#fff',
											}}
											control={
												<Radio
													sx={{
														color: '#fff',
														'&.Mui-checked': {
															color: '#fff',
														},
													}}
												/>
											}
											label="Paypal"
										/>
									</Box>
									<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
										<FormControlLabel
											value="Credit Card"
											sx={{
												color: '#fff',
											}}
											control={
												<Radio
													sx={{
														color: '#fff',
														'&.Mui-checked': {
															color: '#fff',
														},
													}}
												/>
											}
											label="Credit Cards"
										/>
										<Stack direction="row">
											<CardMedia
												component="img"
												image={'/images/amex.svg'}
												sx={{
													width: '43px',
													height: '26px',
													marginRight: 1,
												}}
											/>
											<CardMedia
												component="img"
												image={'/images/discover.svg'}
												sx={{
													width: '43px',
													height: '26px',
													marginRight: 1,
												}}
											/>
											<CardMedia
												component="img"
												image={'/images/visa.svg'}
												sx={{
													width: '43px',
													height: '26px',
													marginRight: 1,
												}}
											/>
											<CardMedia
												component="img"
												image={'/images/mastercard.svg'}
												sx={{
													width: '43px',
													height: '26px',
													marginRight: 1,
												}}
											/>
										</Stack>
									</Box>
									{/* <Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
										<FormControlLabel
											value="applePay"
											sx={{
												color: '#fff',
											}}
											control={
												<Radio
													sx={{
														color: '#fff',
														'&.Mui-checked': {
															color: '#fff',
														},
													}}
												/>
											}
											label="Apple Pay"
										/>
										<CardMedia
											component="img"
											image={`/images/applepay.svg`}
											sx={{
												width: '43px',
												height: '26px',
												marginRight: 1,
											}}
										/>
									</Box> */}
								</RadioGroup>
							</FormControl>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 400,
									color: '#fff',
									display: 'block',
									textAlign: 'left',
									marginY: 2,
									fontSize: { xs: '14px', sm: '14px', md: '16px' },
								}}
							>
								Your personal data will be used to process your order, support your experience throughout this website,
								and for other purposes described in our privacy policy.
							</Typography>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											sx={{
												color: '#fff',
												'&.Mui-checked': {
													color: '#fff',
												},
											}}
											checked={props.checkout.isAgreed}
											onChange={() => props.setIsAgreed(!props.checkout.isAgreed)}
										/>
									}
									sx={{ color: '#fff' }}
									label="I have read and agree to the website terms and conditions *"
								/>
							</FormGroup>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 400,
									color: '#fff',
									display: 'block',
									textAlign: 'left',
									marginY: 1,
									fontSize: { xs: '14px', sm: '14px', md: '16px' },
								}}
							>
								Have a coupon? <strong>Click here to enter your code</strong>
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#fff',
									display: 'block',
									textAlign: 'right',
									marginTop: 2,
									fontSize: { xs: '14px', sm: '14px', md: '16px' },
								}}
							>
								Click here to check refund policy
							</Typography>
							<Box marginTop={2}>{renderPaymentButton()}</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default connect(mapCartStateToProps, { ...mapCartDispatchToProps(), ...mapCheckerDispatchToProps() })(
	CheckoutInfo,
)
