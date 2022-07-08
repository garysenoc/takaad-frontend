import { Box, Grid, Typography, Divider } from '@mui/material'
import { connect } from 'react-redux'

import mapCheckoutStateToProps from 'rtk/checkout/state'
import mapCheckoutDispatchToProps from 'rtk/checkout/action'

const OrderDetails = () => {
	const order_details = JSON.parse(sessionStorage.getItem('order_details'))

	return (
		<>
			<Box>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#003056',
						display: 'block',
						fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
					}}
				>
					<strong>Order Number:</strong> {order_details.order_number.join(', ')}
				</Typography>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#003056',
						display: 'block',
						fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
					}}
				>
					<strong>Date:</strong> {order_details.date}
				</Typography>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#003056',
						display: 'block',
						fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
					}}
				>
					<strong>Email:</strong> {order_details.email}
				</Typography>

				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#003056',
						display: 'block',
						fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
					}}
				>
					<strong>Payment Method:</strong> {order_details.payment_method}
				</Typography>
			</Box>

			<Box my={1}>
				<Grid container>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 600,
								color: '#003056',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							Service
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 600,
								color: '#003056',
								textAlign: 'right',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							Price
						</Typography>
					</Grid>
				</Grid>
			</Box>

			<Box>
				<Grid container>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							{order_details.service.map((service, i) => (
								<span key={i}>
									{`${service} All in One Information`}
									<br />
								</span>
							))}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								textAlign: 'right',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							{order_details.price.map((price, i) => (
								<span key={i}>
									{price}
									<br />
								</span>
							))}
						</Typography>
					</Grid>
				</Grid>

				<Divider sx={{ border: '1px solid #DDD', margin: '15px 0 30px 0' }} />

				<Grid container>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 600,
								color: '#003056',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							Subtotal:
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								textAlign: 'right',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							{order_details.subtotal}
						</Typography>
					</Grid>
				</Grid>

				<Grid container>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 600,
								color: '#003056',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							Discount:
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								textAlign: 'right',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							{order_details.discount}
						</Typography>
					</Grid>
				</Grid>

				<Grid container>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 600,
								color: '#003056',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							Total:
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								textAlign: 'right',
								display: 'block',
								fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
							}}
						>
							{order_details.total}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default connect(mapCheckoutStateToProps, mapCheckoutDispatchToProps())(OrderDetails)
