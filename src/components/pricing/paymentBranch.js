import { Box, Container, Typography, Button, Grid, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'

import { paymentIcons } from './data'

const CreateAccountButton = styled(Button)({
	fontSize: '18px',
	lineHeight: 'normal',
	fontFamily: 'Nunito Sans',
	fontWeight: 400,
	textTransform: 'capitalize',
	borderRadius: '50px',
	backgroundColor: '#28cd7e',
	color: '#fff',
	'&:hover': {
		backgroundColor: '#14a660',
	},
})

const PaymentBranch = () => {
	const { t } = useTranslation()

	return (
		<>
			<Box sx={{ marginTop: { xs: '40px', sm: '50px' }, paddingY: '20px' }}>
				<Container>
					<Box
						sx={{
							maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '1024px', textAlign: 'center' },
							margin: '0 auto',
						}}
					>
						<Box sx={{ marginBottom: '10px' }}>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 900,
									color: '#003056',
									fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
									lineHeight: { xs: '28px', sm: '40px', md: '40px', lg: '52px' },
								}}
							>
								{t('pricing:pricing_footnote1')}
							</Typography>
						</Box>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#003056',
								fontSize: { xs: '14px', sm: '18px', md: '18px', lg: '20px' },
							}}
						>
							{t('pricing:pricing_footnote2')}
						</Typography>
						<Box mt={3}>
							<CreateAccountButton
								sx={{
									minWidth: { xs: '130px', sm: '130px', md: '130px', lg: '140px' },
									padding: { xs: '12px 20px', sm: '12px 20px', md: '12px 20px', lg: '14px 25px' },
								}}
							>
								{t('common:btn_create_account')}
							</CreateAccountButton>
						</Box>
						<Box sx={{ paddingTop: { xs: '15px', sm: '30px', md: '50px', lg: '60px' } }}>
							<Grid container justifyContent="center" alignItems="center">
								{paymentIcons.map((payment, index) => (
									<Grid item key={index} xs={6} sm={3} sx={{ mt: { xs: '10px', sm: '0' } }}>
										<CardMedia
											component="img"
											image={`images/${payment.icon}`}
											sx={{
												maxWidth: { xs: '140px', sm: '140px', md: payment.width },
												verticalAlign: 'middle',
												mx: 'auto',
											}}
										/>
									</Grid>
								))}
							</Grid>
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	)
}

export default PaymentBranch
