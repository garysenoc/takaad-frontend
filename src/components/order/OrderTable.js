import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import DataRow from '../place-order/DataRow'
import censorIMEIAndOrSN from '../../utils/censorIMEIAndOrSN'

const OrderTable = ({ order, product }) => {
	const [open, setOpen] = useState(true)
	const excludedData = new Set([
		'Telephone Technical Support',
		'Repairs and Service Coverage',
		'AppleCare Eligible',
		'Valid Purchase Date',
		'Registered Device',
		'Replaced Device',
		'Loaner Device',
	])

	return (
		<Accordion
			expanded={open}
			sx={{ backgroundColor: 'transparent', marginBottom: '15px' }}
			onChange={() => setOpen((prev) => !prev)}
		>
			<AccordionSummary
				expandIcon={<ExpandMore sx={{ color: '#fff' }} />}
				aria-controls="accordion-content"
				id="accordion"
			>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#fff',
						display: 'block',
						fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
					}}
				>
					{`${product} All in One Information`}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box>
					{order
						.filter((d) => !excludedData.has(d.label))
						.map((d, i) => (
							<DataRow key={i} data={censorIMEIAndOrSN(d)} index={i} />
						))}
				</Box>
			</AccordionDetails>
		</Accordion>
	)
}

export default OrderTable
