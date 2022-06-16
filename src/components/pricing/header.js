import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const HeaderText = styled(Typography)({
	fontFamily: 'Nunito Sans',
	color: '#202223',
})

const Header = () => {
	const { t } = useTranslation()

	return (
		<>
			<Box sx={{ textAlign: 'center' }}>
				<HeaderText
					sx={{
						// fontWeight: 600,
						fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
					}}
				>
					<b>{t('pricing:pricing_title1')}</b> {t('pricing:pricing_title2')}
				</HeaderText>
				<HeaderText
					sx={{
						// fontWeight: 600,
						fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
					}}
				>
					{t('pricing:pricing_title3')}
				</HeaderText>
				<HeaderText
					sx={{
						fontWeight: 400,
						fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
						mt: 3,
					}}
				>
					{t('pricing:pricing_title4')} <b>{t('pricing:pricing_title5')}</b>
				</HeaderText>
			</Box>
		</>
	)
}

export default Header
