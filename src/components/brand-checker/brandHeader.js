import { Box, Typography } from '@mui/material'

const BrandHeader = () => {
	return (
		<>
			<Box sx={{ textAlign: 'center' }}>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#003056',
						display: 'inline-block',
						marginBottom: '25px',
						fontSize: { xs: '22px', sm: '22px', md: '24px', lg: '27px' },
						lineHeight: { xs: '28px', md: '28px', md: '30px', lg: '34px' },
					}}
				>
					Need Help? Select Your Brand To Find Your Device's IMEI Number
				</Typography>
			</Box>
		</>
	)
}

export default BrandHeader
