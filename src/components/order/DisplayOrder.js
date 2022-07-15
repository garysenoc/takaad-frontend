import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import OrderTable from './OrderTable'
import OrderDetails from './OrderDetails'
import { connect } from 'react-redux'
import sendEmail from '../../utils/sendEmail'
import mapCommonDispatchToProps from '../../../rtk/common/action'

const DisplayOrder = ({ orderData, ...props }) => {
	const handleSendEmail = async () => {
		try {
			await sendEmail(
				orderData._id,
				`${orderData.first_name} ${orderData.last_name}`,
				orderData.email,
				orderData.service,
				orderData.order_data,
			)
			props.setIsSnackbarOpen(true)
			props.setSnackbarMessage(['Sent to email successfully.', 'success'])
		} catch (error) {
			props.setIsSnackbarOpen(true)
			props.setSnackbarMessage(['Something went wrong in sending the email.', 'error'])
		}
	}

	return (
		<>
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
						Order
					</Typography>
					{!orderData ? (
						<Typography variant="h4" fontWeight={800} color="GrayText" align="center">
							Order does not exist!
						</Typography>
					) : (
						<Stack direction="column" spacing={5}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Box sx={{ p: 1, backgroundColor: '#003056', borderRadius: 1 }}>
										{orderData.order_data &&
											orderData.order_data.map((order, i) => {
												return <OrderTable key={i} order={order} product={orderData.service[i]} />
											})}
									</Box>
								</Grid>
								<Grid item xs={12}>
									<OrderDetails order={orderData} />
								</Grid>
							</Grid>
							<Button
								sx={{
									backgroundColor: '#28cd7e',
									color: '#fff',
									borderRadius: 3,
									textTransform: 'capitalize',
									minWidth: { md: 100, lg: 120 },
									fontSize: { md: 15, lg: 18 },
									'&:hover': {
										backgroundColor: '#14a660',
									},
									width: 'fit-content',
									alignSelf: 'center',
									paddingX: 3,
								}}
								onClick={handleSendEmail}
							>
								Resend
							</Button>
						</Stack>
					)}
				</Container>
			</Box>
		</>
	)
}

export default connect(null, mapCommonDispatchToProps())(DisplayOrder)
