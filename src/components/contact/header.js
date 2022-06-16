import { Typography, Box } from '@mui/material'
import { useTranslation } from 'next-i18next'

const Header = () => {
	const { t } = useTranslation()

	return (
		<>
			<Box sx={{ textAlign: 'center', marginBottom: { xs: '5px', sm: '10px', md: '10px' } }}>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#003056',
						marginBottom: '1.5rem',
						fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
						lineHeight: { sm: '28px', sm: '40px', md: '40px', lg: '52px' },
					}}
				>
					{t('contact:contactus_header')}
				</Typography>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						color: '#EA2027',
						lineHeight: '1.52',
						fontWeight: 600,
						fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
					}}
				>
					{t('contact:contactus_ps')}
				</Typography>
			</Box>
		</>
	)
}

export default Header
