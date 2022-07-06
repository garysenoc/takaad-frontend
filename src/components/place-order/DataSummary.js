import React, { useState } from 'react'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Grid,
	styled,
	Tooltip,
	tooltipClasses,
	Typography,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import Link from 'next/link'
import HelpIcon from '@mui/icons-material/Help'
import { iPhoneOrderData } from 'src/components/place-order/data'
import { glosarryInfos } from 'src/components/glosarry/data'

const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
	[`& .${tooltipClasses.tooltip}`]: {
		minWidth: 400,
	},
})

const DataSummary = ({ order, order_metadata }) => {
	const [isOpen, setisOpen] = useState(true)

	const handleShowValueForTooltip = (label) => {
		const glosarry = glosarryInfos.filter((info) => info.label === label)

		if (glosarry[0]) {
			return glosarry[0].value
		} else {
			return 'There is no description for this field at the moment. Please check again later!'
		}
	}

	return (
		<Accordion
			expanded={isOpen}
			sx={{ backgroundColor: 'transparent', marginBottom: '15px' }}
			onChange={() => setisOpen((prev) => !prev)}
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
					{order_metadata.product}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box>
					{order.map((d, i) => {
						return (
							<Grid
								key={i}
								container
								sx={{
									borderBottom: i + 1 !== iPhoneOrderData.length ? '1px solid #c4c4c4' : 'unset',
									p: 1,
								}}
							>
								<Grid item xs={6}>
									<Typography
										sx={{
											fontFamily: 'Nunito Sans',
											fontWeight: 400,
											color: '#fff',
											display: 'block',
											fontSize: { xs: 12, sm: 14, md: 16 },
										}}
									>
										{d.label}
										<CustomWidthTooltip
											title={
												<>
													<Typography
														sx={{
															fontFamily: 'Nunito Sans',
															fontWeight: 400,
															color: '#fff',
															fontSize: { xs: 12, sm: 14, md: 16 },
														}}
													>
														{handleShowValueForTooltip(d.label)}
													</Typography>
													<Link href="/glosarry" passHref>
														<Typography
															sx={{
																fontFamily: 'Nunito Sans',
																fontWeight: 600,
																mt: 1,
																color: '#fcb100',
																fontSize: { xs: 12, sm: 14, md: 16 },
																'&:hover': {
																	cursor: 'pointer',
																},
															}}
															onClick={() => props.setSelectedGlosarry(d.label)}
														>
															{`Click to learn more about the "${d.label}" field`}
														</Typography>
													</Link>
												</>
											}
											placement="top"
										>
											<HelpIcon
												sx={{
													fontSize: { xs: 12, sm: 14, md: 16 },
													color: '#28cd7e',
													ml: 1,
													'&:hover': { cursor: 'pointer' },
												}}
											/>
										</CustomWidthTooltip>
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography
										sx={{
											fontFamily: 'Nunito Sans',
											fontWeight: 400,
											color: '#fff',
											display: 'block',
											fontSize: { xs: 12, sm: 14, md: 16 },
										}}
									>
										{d.value}
									</Typography>
								</Grid>
							</Grid>
						)
					})}
				</Box>
			</AccordionDetails>
		</Accordion>
	)
}

export default DataSummary
