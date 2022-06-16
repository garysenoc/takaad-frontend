import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const PrivacyPolicyTitle = () => {
	const { t } = useTranslation()

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '20vh',
					fontSize: { xs: '8vw', sm: '5vw', md: '5vw', lg: '2vw', xl: '2vw' },
					background: '#003056',
					color: '#fff',
					margin: 'unset',
					padding: 'unset',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="p">{t('privacy-policy:privacy_title')}</Typography>
			</Box>
		</>
	)
}

export default PrivacyPolicyTitle
