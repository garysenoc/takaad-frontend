import { Box, Grid, Typography, Divider, Stack } from '@mui/material'
import { connect } from 'react-redux'
import Image from 'next/image'

import mapOrdersStateToProps from '../../../rtk/orders/state'

const OrderDetails = ({ orders: { order_number }, order, common: { isLoading } }) => {
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
					<strong>Order Number:</strong> {order.order_number.join(', ')}
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
					<strong>Date:</strong> {order.date}
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
					<strong>Email:</strong> {order.email}
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
					<strong>Payment Method:</strong> {order.payment_method}
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
							{order.service.map((service, i) => (
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
							{order.price.map((price, i) => (
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
							{order.subtotal}
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
							{order.discount}
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
							{order.total}
						</Typography>
					</Grid>
				</Grid>
			</Box>

			{!isLoading && order_number !== '' && (
				<Stack direction="row" justifyContent="center" padding={5}>
					<Image
						loader={({ src, width }) =>
							`https://api.qrserver.com/v1/create-qr-code/?size=${width}x${width}&data=${`${process.env.host}/order/${src}`}`
						}
						src={order_number}
						width={256}
						height={256}
						alt="qr"
					/>
				</Stack>
			)}
		</>
	)
}

export default connect(mapOrdersStateToProps)(OrderDetails)
