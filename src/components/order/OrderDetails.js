import { Box, Grid, Typography, Divider } from '@mui/material'
import { connect } from 'react-redux'

import mapCheckoutStateToProps from 'rtk/checkout/state'
import mapCheckoutDispatchToProps from 'rtk/checkout/action'
import { useTranslation } from 'next-i18next'

const OrderDetails = ({ order }) => {
	const { t } = useTranslation()
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
					<strong>{t('order:order-number')}</strong> {order.order_number.join(', ')}
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
					<strong>{t('order:date')}</strong> {order.date}
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
					<strong>{t('order:email')}</strong> {order.email}
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
					<strong>{t('order:payment-method')}</strong> {order.payment_method}
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
							{t('order:service')}
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
							{t('order:price')}
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
									{`${service}`} {t('order:all-in-one')}
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
							{t('order:subtotal')}: 
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
							{t('order:discount')}: 
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
							{t('order:total')}: 
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
		</>
	)
}

export default connect(mapCheckoutStateToProps, mapCheckoutDispatchToProps())(OrderDetails)
