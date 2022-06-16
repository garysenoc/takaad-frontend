import { Box } from '@mui/material'

import SelectBrand from 'src/components/brand-checker/selectBrand'

const SecondSection = () => {
	return (
		<>
			<Box sx={{ my: { xs: 2, sm: 3, md: 4 } }}>
				<SelectBrand page="home" />
			</Box>
		</>
	)
}

export default SecondSection
