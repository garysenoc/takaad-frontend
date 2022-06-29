import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, CircularProgress } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import HelpIcon from '@mui/icons-material/Help'
import { connect } from 'react-redux'

import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import { iPhoneOrderData } from 'src/components/place-order/data'
import { glosarryInfos } from 'src/components/glosarry/data'

const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
	[`& .${tooltipClasses.tooltip}`]: {
		minWidth: 400,
	},
})

const OrderData = (props) => {
	const order_data = props.orders.order_data

	const handleShowValueForTooltip = (label) => {
		const glosarry = glosarryInfos.filter((info) => info.label === label)

		if (glosarry[0]) {
			return glosarry[0].value
		} else {
			return 'There is no description for this field at the moment. Please check again later!'
		}
	}

	return (
		<>
			<Box sx={{ p: 1, backgroundColor: '#003056', borderRadius: 1 }}>
				{props.common.isLoading ? (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							// background: 'gray',
						}}
					>
						<CircularProgress disableShrink style={{ color: '#ffffff' }} />
						<h1 style={{ margin: 0, color: '#ffffff' }}>Loading Information...</h1>
					</div>
				) : (
					<>
						{order_data &&
							order_data.map((order, i) => {
								return (
									<Accordion key={i} sx={{ backgroundColor: 'transparent', marginBottom: '15px' }}>
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
												{props.orders.order_metadata[i].product}
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
							})}
					</>
				)}
			</Box>
		</>
	)
}

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(OrderData)
