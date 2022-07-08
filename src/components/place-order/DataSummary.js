import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import DataRow from './DataRow'

const DataSummary = ({ order, order_metadata }) => {
	const [open, setOpen] = useState(true)

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
					{`${order_metadata.product} All in One Information`}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box>
					{order.map((d, i) => (
						<DataRow key={i} data={d} index={i} />
					))}
				</Box>
			</AccordionDetails>
		</Accordion>
	)
}

export default DataSummary
