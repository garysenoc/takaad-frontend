import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import OrderTable from '../OrderTable'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import OrderDetails from './OrderDetails'

const DisplayOrder = ({ order, order_data, service }) => {
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
						Order
					</Typography>
					{!order ? (
						<Typography variant="h4" fontWeight={800} color="GrayText" align="center">
							Order does not exist!
						</Typography>
					) : (
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Box sx={{ p: 1, backgroundColor: '#003056', borderRadius: 1 }}>
									{order_data &&
										order_data.map((order, i) => {
											return <OrderTable key={i} order={order} product={service[i]} />
										})}
								</Box>
							</Grid>
							<Grid item xs={12}>
								<OrderDetails order={order} />
							</Grid>
						</Grid>
					)}
				</Container>
			</Box>
			<Footer />
		</>
	)
}

export default DisplayOrder
