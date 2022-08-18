import { useRouter } from 'next/dist/client/router'

import { Box, Button, InputBase, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const SerialNumber = ({ nextStep }) => {
	const router = useRouter()
	const { t } = useTranslation()
	const handleClick = () => {
		if (nextStep) {
			nextStep()
		} else {
			router.push('imei-checker')
		}
	}
	return (
		<>
			<Box sx={{ textAlign: 'center' }}>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 900,
						color: '#003056',
						display: 'inline-block',
						maxWidth: '650px',
						marginBottom: '25px',
						fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
						lineHeight: { xs: '28px', sm: '40px', md: '40px', lg: '52px' },
					}}
				>
					{t('imei-checker:enter-imei')} 
				</Typography>
				<InputBase
					placeholder={t('imei-checker:your-imei')} 
					variant="outlined"
					inputlabelprops={{
						shrink: true,
					}}
					sx={{
						width: '100%',
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#a1adb2',
						backgroundColor: '#fff',
						borderColor: 'rgba(29,70,70,.5)',
						height: '60px',
						width: '100%',
						border: '1px solid #ddd',
						borderRadius: '5px',
						fontSize: '18px',
						padding: '10px',
						'&:focus-within': {
							border: '2px solid #4080c0',
						},
					}}
				/>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#202223',
						display: 'inline-block',
						marginTop: '10px',
						fontSize: { xs: '14px', sm: '18px', md: '18px', lg: '20px' },
						fontStyle: 'italic',
					}}
				>
					{t('imei-checker:imei-instruction')} 
					
				</Typography>
				<Box mt={2}>
					<Button
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 700,
							color: '#fff',
							backgroundColor: '#28cd7e',
							borderRadius: '40px',
							textTransform: 'capitalize',
							fontSize: { xs: '18px', md: '18px', lg: '24px' },
							minWidth: { xs: '210px', md: '210px', lg: '245px' },
							lineHeight: { xs: '18px', md: '18px', lg: '24px' },
							padding: { xs: '15px 15px', md: '15px 15px', lg: '20px 20px' },
							'&:hover': {
								backgroundColor: '#1ea665',
							},
						}}
						onClick={handleClick}
					>
						{t('imei-checker:device-info')} 
					</Button>
				</Box>
			</Box>
		</>
	)
}

export default SerialNumber
