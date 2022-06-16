import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import { Container, Grid, Typography, Box } from '@mui/material'
import { checkingInfos } from './data'

const CheckValueText = styled(Typography)({
	fontFamily: 'Nunito Sans',
	fontWeight: 900,
	color: '#003056',
})

const CheckLabelText = styled(Typography)({
	fontFamily: 'Nunito Sans',
	fontWeight: 400,
	color: '#717475',
})

const ThirdSection = () => {
	const { t } = useTranslation()

	return (
		<>
			<Box>
				<Box sx={{ paddingY: { xs: '20px 0', sm: '20px 0', md: '30px 0', lg: '40px 0' } }}>
					<Container>
						<Box
							sx={{
								border: '1px solid #cfcfcf',
								borderRadius: '26px',
								textAlign: 'center',
								position: 'relative',
								padding: { xs: '10px', sm: '10px', md: '30px 10px', lg: '40px 10px' },
							}}
						>
							<Grid container justifyContent="center">
								{checkingInfos.map((check, index) => (
									<Grid
										key={index}
										item
										xs={6}
										sm={6}
										md={3}
										sx={{
											borderRight: {
												xs: index === 0 || index === 2 ? '1px solid #cfcfcf' : 'unset',
												md: '1px solid #cfcfcf',
											},
											padding: '5px 0',
											margin: { xs: '10px 0', sm: '10px 0' },
										}}
									>
										<CheckValueText
											sx={{
												fontSize: { xs: '18px', sm: '26px', md: '30px', lg: '36px' },
												lineHeight: { xs: '30px', sm: '36px', md: '36px', lg: '42px' },
											}}
										>
											{check.value === 0 ? '---' : check.value}
										</CheckValueText>
										<CheckLabelText
											sx={{
												fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
											}}
										>
											{t(`home:checked_title_${index + 1}`)}
										</CheckLabelText>
									</Grid>
								))}
							</Grid>
							<CheckValueText
								sx={{
									position: 'absolute',
									right: 12,
									bottom: 0,
									fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
								}}
							>
								*Based on sources
							</CheckValueText>
						</Box>
					</Container>
				</Box>
			</Box>
		</>
	)
}

export default ThirdSection
