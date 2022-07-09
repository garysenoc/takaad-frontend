import { Container, Grid, Typography, Box, Button, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'

const TitleText = styled(Typography)({
	fontFamily: 'Nunito Sans',
	fontWeight: 400,
	color: '#003056',
	marginBottom: '10px',
})

const DescriptionText = styled(Typography)({
	fontFamily: 'Nunito Sans',
	fontWeight: 400,
	color: '#545454',
})

const CreateButton = styled(Button)({
	fontSize: '18px',
	fontFamily: 'Nunito Sans',
	fontWeight: 400,
	lineHeight: 'normal',
	borderRadius: '50px',
	backgroundColor: '#2bce80',
	color: '#fff',
	textTransform: 'capitalize',
	'&:hover': {
		backgroundColor: '#14a660',
	},
})

const FifthSection = () => {
	const { t } = useTranslation()

	return (
		<>
			<Box sx={{ padding: { xs: '40px 0', sm: '50px 0', md: '50px 0', lg: '80px 0' }, backgroundColor: '#eff5f5' }}>
				<Container>
					<Grid container justifyContent="center">
						<Grid item xs={12} sm={12} md={7}>
							<Box
								sx={{
									marginLeft: { xs: '0', sm: '0', md: '-80px', lg: '-220px' },
									marginBottom: { xs: '-50px', sm: '-50px', md: '-50px', lg: '-80px' },
								}}
							>
								<CardMedia
									component="img"
									image="/images/desk-mob-img.webp"
									sx={{
										width: '100%',
									}}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} sm={12} md={5}>
							<Box
								sx={{
									textAlign: { xs: 'center', sm: 'center', md: 'start' },
									paddingTop: { xs: '25px', sm: '25px', md: '25px', lg: '45px' },
								}}
							>
								<TitleText
									sx={{
										fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
										lineHeight: { xs: '28px', sm: '40px', md: '40px', lg: '52px' },
									}}
								>
									{t('home:offer_header')}
								</TitleText>
								<DescriptionText
									sx={{
										fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '20px' },
										lineHeight: { xs: '26px', sm: '28px', md: '28px', lg: '36px' },
										pt: { xs: '0', sm: '0', md: '0', lg: '10px' },
										pb: { xs: '2rem', sm: '2rem', md: '1rem' },
									}}
								>
									{t('home:offer_body')}
								</DescriptionText>
								<CreateButton
									sx={{
										p: { xs: '12px 20px', sm: '12px 20px', md: '12px 20px', lg: '14px 25px' },
										minWidth: { xs: '130px', sm: '130px', md: '130px', lg: '140px' },
									}}
									href="/register"
								>
									{t('common:btn_create_account')}
								</CreateButton>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	)
}

export default FifthSection
