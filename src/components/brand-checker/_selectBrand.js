import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import BrandInformation from './brandInformation'
import { brands } from './data'

const SelectBrand = ({ page }) => {
	const router = useRouter()
	const [activeBrand, setActiveBrand] = useState(page === 'brand-checker' ? brands[0] : '')

	const handleChange = (event) => {
		if (page === 'home') {
			router.push('brand-checker')
		} else {
			setActiveBrand(event.target.value)
		}
	}

	return (
		<>
			<Box textAlign="center">
				<FormControl sx={{ width: '100%' }}>
					<InputLabel
						id="demo-simple-select-label"
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#202223',
							textAlign: 'center',
							fontSize: { xs: '16px', sm: '20px', md: '22px' },
							backgroundColor: '#fff',
						}}
					>
						Select Brand
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={activeBrand}
						label="Brand"
						onChange={handleChange}
						sx={{
							backgroundColor: '#fff',
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#202223',
							textAlign: 'center',
							fontSize: { xs: '16px', sm: '20px', md: '22px' },
							backgroundColor: '#fff',
						}}
					>
						{brands.map((brand, index) => (
							<MenuItem
								key={index}
								value={brand}
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 400,
									color: '#202223',
									textAlign: 'center',
									fontSize: { xs: '16px', sm: '20px', md: '22px' },
									backgroundColor: '#fff',
								}}
							>
								{brand.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			{page === 'brand-checker' && <BrandInformation brand={activeBrand} />}
		</>
	)
}

export default SelectBrand
