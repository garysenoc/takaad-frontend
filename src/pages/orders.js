import GuardPage from '../../lib/guard.page'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Container, Grid, Typography } from '@mui/material'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['login', 'common'])),
		},
	}
}

const Orders = GuardPage(() => {
	return (
		<>
			<Navbar />
			<Container
				sx={{
					height: '100vh',
					marginY: 5,
				}}
			>
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
				</Box>
			</Container>
			<Footer />
		</>
	)
})

export default Orders
