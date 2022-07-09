import GuardPage from '../../lib/guard.page'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { FormattedDate } from '../utils/renderFormattedDate'
import { useRouter } from 'next/router'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['login', 'common'])),
		},
	}
}

const Orders = GuardPage((props) => {
	const router = useRouter()
	const [orders, setOrders] = useState([])

	useEffect(async () => {
		const data = await fetch(`${process.env.api_baseurl}/v1/order/user/${props.auth.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (data.ok) {
			const orders = (await data.json()).map((order) => {
				const { date, ...rest } = order
				return { date: FormattedDate(new Date(date)), ...rest }
			})
			setOrders(orders)
		}
	}, [])

	return (
		<>
			<Navbar />
			<Container my={4} sx={{ height: '100vh' }}>
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
					Order History
				</Typography>
				{orders.length === 0 ? (
					<Typography variant="h4" fontWeight={800} color="GrayText" align="center">
						No order history yet!
					</Typography>
				) : (
					<Stack direction="row" flexWrap="wrap" spacing={1}>
						{orders.map((order, idx) => (
							<Paper key={idx} variant="outlined" sx={{ borderRadius: 2, width: 250 }}>
								<Stack
									direction="column"
									sx={{
										padding: 2,
										backgroundColor: '#003056',
										color: 'white',
										borderTopLeftRadius: 'inherit',
										borderTopRightRadius: 'inherit',
									}}
								>
									<Typography variant="h5" fontWeight={700}>
										{order.payment_method}
									</Typography>
									<Typography variant="subtitle2" sx={{ wordBreak: 'break-all' }}>
										{order.email}
									</Typography>
									<Typography variant="subtitle2">{order.date}</Typography>
								</Stack>
								<Stack direction="column" spacing={1} sx={{ padding: 3, paddingY: 1 }}>
									<Grid container sx={{ width: '100%' }}>
										<Grid container item direction="row" spacing={2} justifyContent="space-between">
											<Grid item>
												<Typography variant="subtitle2" fontWeight={600}>
													Subtotal
												</Typography>
											</Grid>
											<Grid item>
												<Typography variant="subtitle2">{order.subtotal}</Typography>
											</Grid>
										</Grid>
										<Grid container item direction="row" spacing={2} justifyContent="space-between">
											<Grid item>
												<Typography variant="subtitle2" fontWeight={600}>
													Discount
												</Typography>
											</Grid>
											<Grid item>
												<Typography variant="subtitle2">{order.discount}</Typography>
											</Grid>
										</Grid>
										<Grid container item direction="row" spacing={2} justifyContent="space-between">
											<Grid item>
												<Typography variant="subtitle2" fontWeight={600}>
													Total
												</Typography>
											</Grid>
											<Grid item>
												<Typography variant="subtitle2">{order.total}</Typography>
											</Grid>
										</Grid>
									</Grid>
									<Divider />
									<Typography
										align="right"
										variant="subtitle2"
										color="blue"
										sx={{ cursor: 'pointer' }}
										onClick={() => router.push({ pathname: '/order', query: { order: JSON.stringify(order) } })}
									>
										View
									</Typography>
								</Stack>
							</Paper>
						))}
					</Stack>
				)}
			</Container>
			<Footer />
		</>
	)
})

export default Orders
