import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { Fragment, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import mapCartStateToProps from 'rtk/cart/state'
import mapCartDispatchToProps from 'rtk/cart/action'
import { renderPhoneBrandName } from 'src/utils/renderPhoneInformation'

const ViewCart = (props) => {
	const router = useRouter()
	const prices = props.cart.items.map((item) => item.price)
	const total = prices.length && prices.reduce((partialSum, a) => partialSum + a)

	useEffect(() => props.setCheckoutPrice(total), [])

	return (
		<>
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
				View Your Cart
			</Typography>

			{!props.cart.items.length ? (
				<Box
					sx={{
						my: 1,
						backgroundColor: '#003056',
						borderRadius: '20px',
						px: 2,
						py: 4,
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#fff',
							display: 'block',
							textAlign: 'center',
							fontSize: { xs: '18px', sm: '22px', md: '26px' },
						}}
					>
						Your cart is empty.
					</Typography>
				</Box>
			) : null}
			{props.cart.items.length ? (
				<Box>
					<Box
						sx={{
							my: 1,
							backgroundColor: '#003056',
							borderRadius: '20px',
							px: 2,
							py: 1,
						}}
					>
						<Grid container justifyContent="start" sx={{ borderBottom: '1px solid #fff' }}>
							<Grid item xs={4}>
								<Typography
									align="left"
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 600,
										color: '#fff',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
										p: '10px',
									}}
								>
									Product
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<Typography
									align="left"
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 600,
										color: '#fff',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
										p: '10px',
									}}
								>
									Details
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography
									align="left"
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 600,
										color: '#fff',
										fontSize: { xs: '14px', sm: '16px', md: '18px' },
										p: '10px',
									}}
								>
									Price
								</Typography>
							</Grid>
						</Grid>
						<Grid container justifyContent="start" sx={{ borderBottom: '1px solid #b8b8b8' }}>
							{props.cart.items.map((item, index) => {
								return (
									<Fragment key={index}>
										<Grid item xs={4}>
											<Typography
												align="left"
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													fontSize: { xs: '12px', sm: '14px', md: '16px' },
													p: '10px',
												}}
											>
												{item.product}
											</Typography>
										</Grid>
										<Grid item xs={4}>
											<Typography
												align="left"
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													fontSize: { xs: '12px', sm: '14px', md: '16px' },
													p: '10px',
												}}
											>
												<strong>IMEI Number: </strong>
												{item.details.imei}
												<br />
												<strong>Brand: </strong>
												{renderPhoneBrandName(item.details.brand)}
												<br />
												<strong>Model: </strong>
												{item.details.model}
												<br />
											</Typography>
										</Grid>
										<Grid item xs={3}>
											<Typography
												align="left"
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													fontSize: { xs: '12px', sm: '14px', md: '16px' },
													p: '10px',
												}}
											>
												{`${item.price}`}
											</Typography>
										</Grid>
										<Grid item xs={1}>
											<DeleteIcon
												onClick={() => props.clearItem(item.details.imei)}
												sx={{ color: '#ffffff', m: 1, '&:hover': { cursor: 'pointer' } }}
											/>
										</Grid>
									</Fragment>
								)
							})}
						</Grid>
						<Box textAlign="right">
							<Button
								color="inherit"
								sx={{
									mr: 2,
									mb: 1,
									mt: 2,
									fontFamily: 'Nunito Sans',
									fontWeight: 400,
									color: '#fff',
									backgroundColor: '#242424',
									textTransform: 'capitalize',
									fontSize: { xs: 14, md: 14, lg: 16 },
									'&:hover': {
										backgroundColor: '#212121',
									},
								}}
								onClick={() => props.clearItems()}
							>
								Clear Cart
							</Button>
						</Box>
					</Box>
					<Stack direction="row" mt={4}>
						<TextField
							placeholder="Coupon Code"
							inputProps={{
								sx: {
									backgroundColor: '#fff',
									textAlign: 'center',
									fontSize: { xs: '16px', sm: '18px', md: '20px' },
								},
							}}
							sx={{ width: '100%' }}
						></TextField>
						<Button
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 700,
								color: '#fff',
								backgroundColor: '#003056',
								borderRadius: '10px',
								textTransform: 'capitalize',
								fontSize: { xs: '14px', sm: '18px', lg: '20px' },
								lineHeight: { xs: '16px', sm: '18px', lg: '20px' },
								minWidth: { xs: '130px', sm: '210px', lg: '245px' },
								padding: { xs: '15px 15px', md: '15px 15px', lg: '20px 20px' },
								'&:hover': {
									backgroundColor: '#004d8a',
								},
								marginLeft: '10px',
							}}
							onClick={props.nextStep}
						>
							Apply Coupon
						</Button>
					</Stack>
					<Box sx={{ textAlign: 'right', marginTop: 5 }}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								display: 'block',
								fontSize: { xs: '16px', sm: '18px', md: '20px' },
							}}
						>
							<strong>Subtotal: </strong> {`${total}`}
						</Typography>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								display: 'block',
								fontSize: { xs: '16px', sm: '18px', md: '20px' },
							}}
						>
							<strong>Total: {`${total}`}</strong>
						</Typography>
						<Box my={2}>
							<Button
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 700,
									color: '#fff',
									backgroundColor: '#28cd7e',
									borderRadius: '40px',
									textTransform: 'capitalize',
									fontSize: { xs: '16px', md: '18px', lg: '24px' },
									minWidth: { xs: '180px', md: '210px', lg: '245px' },
									lineHeight: { xs: '18px', md: '18px', lg: '24px' },
									padding: { xs: '15px 15px', md: '15px 15px', lg: '20px 20px' },
									'&:hover': {
										backgroundColor: '#1ea665',
									},
								}}
								onClick={() => (router.pathname === '/imei-checker' ? props.nextStep() : router.push('/checkout'))}
							>
								Proceed to checkout
							</Button>
						</Box>
						{/* <Box>
							<Button
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 700,
									color: '#2d2f2f',
									backgroundColor: '#ffc439',
									borderRadius: '40px',
									textTransform: 'capitalize',
									fontSize: { xs: '16px', md: '18px', lg: '24px' },
									minWidth: { xs: '180px', md: '210px', lg: '245px' },
									lineHeight: { xs: '18px', md: '18px', lg: '24px' },
									padding: { xs: '15px 15px', md: '15px 15px', lg: '20px 20px' },
									'&:hover': {
										backgroundColor: '#d1a12e',
									},
								}}
								startIcon={
									<CardMedia
										component="img"
										image={`images/paypal.webp`}
										sx={{
											width: { xs: 70, sm: 90, md: 120 },
										}}
									/>
								}
							>
								Paypal Checkout
							</Button>
						</Box> */}
					</Box>
				</Box>
			) : null}
		</>
	)
}

export default connect(mapCartStateToProps, mapCartDispatchToProps())(ViewCart)
