import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import DataRow from '../place-order/DataRow'
import { useTranslation } from 'next-i18next'


const OrderTable = ({ order, product }) => {
	const [open, setOpen] = useState(true)
	const { t } = useTranslation()

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
					{`${product}`} {t('order:all-in-one')}
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

export default OrderTable
