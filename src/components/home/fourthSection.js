import { Container, Grid, Typography, Box, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'

import { checkServices } from './data'

const IconBox = styled(Box)({
	borderRadius: '50%',
	margin: '0 auto',
	position: 'relative',
	background: 'linear-gradient(to bottom,#28cd7e 0%,rgba(255,255,255,0.88) 60%,rgba(255,255,255,0.8) 100%)',
	marginBottom: '10px',
})

const IconCardMedia = styled(CardMedia)({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
})

const CheckText = styled(Typography)({
	fontFamily: 'Nunito Sans',
	color: '#202223',
	mb: '0.5rem',
})

const FourthSection = () => {
	const { t } = useTranslation()

	return (
		<>
			<Box>
				<Box sx={{ textAlign: 'center', padding: { xs: '10px 0', sm: '20px 0', md: '30px 0', lg: '40px 0' } }}>
					<Container
						sx={{
							width: { xs: '100%' },
							maxWidth: { sm: '720px', md: '960px', lg: '1230px' },
							paddingY: { xs: '15px' },
							marginY: { xs: 'auto' },
						}}
					>
						<Box sx={{ margin: '0 auto', maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '1024px' } }}>
							<Box>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 900,
										color: '#003056',
										display: 'inline-block',
										maxWidth: '585px',
										marginBottom: '25px',
										fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
										lineHeight: { xs: '28px', sm: '40px', md: '40px', lg: '52px' },
									}}
								>
									{t('home:service_header')}
								</Typography>
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										color: '#202223',
										display: 'inline-block',
										margin: { xs: '0' },
										fontSize: { xs: '14px', sm: '18px', md: '18px', lg: '20px' },
									}}
								>
									{t('home:service_body')}
								</Typography>
							</Box>
						</Box>
						<Box sx={{ marginTop: '15px', padding: { xs: '0', sm: '0', md: '0', lg: '0 30px' } }}>
							<Grid container justifyContent="center">
								{checkServices.map((check, index) => (
									<Grid key={index} item xs={12} sm={6} md={3} px={2}>
										<Box sx={{ padding: { xs: '10px 0', sm: '20px 0', md: '30px 0' } }}>
											<IconBox
												sx={{
													width: { xs: '120px', sm: '130px', md: '150px', lg: '170px' },
													height: { xs: '120px', sm: '130px', md: '150px', lg: '170px' },
												}}
											>
												<IconCardMedia
													component="img"
													image={`/images/${check.icon}`}
													sx={{
														width: { xs: 100, sm: 110, md: 130, lg: 150 },
													}}
												/>
											</IconBox>
											<Box sx={{ marginBottom: { xs: '5px', sm: '10px', md: '10px' } }}>
												<CheckText
													sx={{
														fontWeight: 900,
														fontSize: { xs: '18px', sm: '20px', md: '20px' },
														lineHeight: { xs: '20px', sm: '28px', md: '28px' },
													}}
												>
													{t(`home:service_header_${index + 1}`)}
												</CheckText>
												<CheckText
													sx={{
														fontWeight: 400,
														fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
													}}
												>
													{t(`home:service_body_${index + 1}`)}
												</CheckText>
											</Box>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>
					</Container>
				</Box>
			</Box>
		</>
	)
}

export default FourthSection
