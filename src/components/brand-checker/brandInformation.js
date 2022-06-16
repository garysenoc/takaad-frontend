import { ExpandMore } from '@mui/icons-material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Box, Typography, Stack, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { connect } from 'react-redux'

import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import { glosarryInfos } from 'src/components/glosarry/data'

const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
	[`& .${tooltipClasses.tooltip}`]: {
		minWidth: 400,
	},
})

const BrandInformation = (props) => {
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
			<Box my={5} sx={{ textAlign: 'center' }}>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 900,
						color: '#003056',
						display: 'inline-block',
						marginBottom: '25px',
						fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
					}}
				>
					What Information Will You Receive?
				</Typography>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#003056',
						display: 'inline-block',
						marginBottom: '25px',
						fontSize: { xs: '22px', sm: '22px', md: '24px', lg: '27px' },
					}}
				>
					Preview an example of our services below
				</Typography>
				<Box
					sx={{
						backgroundColor: '#003056',
						padding: { xs: 2, sm: 3, md: 5 },
						borderRadius: '20px',
						textAlign: 'left',
					}}
				>
					<Stack direction="row" justifyContent="space-between" sx={{ borderBottom: 'dashed #fff 2px' }}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 600,
								color: '#fff',
								display: 'inline-block',
								fontSize: { xs: '18px', sm: '22px', md: '24px', lg: '27px' },
							}}
						>
							{`${props.brand.label} Info`}
						</Typography>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 600,
								color: '#fff',
								display: 'inline-block',
								fontSize: { xs: '18px', sm: '22px', md: '24px', lg: '27px' },
							}}
						>
							{`$${props.brand.price.toFixed(2)}`}
						</Typography>
					</Stack>
					<Accordion mt={2} sx={{ backgroundColor: 'transparent' }}>
						<AccordionSummary
							expandIcon={<ExpandMore sx={{ color: '#fff' }} />}
							aria-controls="accordion-content"
							id="accordion"
						>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#fff',
									display: 'block',
									fontSize: { xs: '16px', sm: '18px', md: '22px' },
								}}
							>
								Example of what information to expect with this service
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#fff',
									display: 'block',
									marginTop: '20px',
									fontSize: { xs: '16px', sm: '18px', md: '20px' },
								}}
							>
								Example Data:
							</Typography>
							<Box>
								{props.brand.infos.map((info, index) => (
									<Grid
										key={index}
										container
										justifyContent="center"
										sx={{ borderBottom: index + 1 !== props.brand.infos.length && '1px solid #fff' }}
									>
										<Grid item xs={6}>
											<Typography
												align="left"
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													fontSize: { xs: '12px', sm: '16px', md: '18px' },
													p: '10px',
												}}
											>
												{`${info.label}:`}
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
																{handleShowValueForTooltip(info.label)}
															</Typography>
															<Link href="/glosarry" passHref>
																<Typography
																	sx={{
																		fontFamily: 'Nunito Sans',
																		fontWeight: 600,
																		color: '#fcb100',
																		mt: 1,
																		fontSize: { xs: 12, sm: 14, md: 16 },
																		'&:hover': {
																			cursor: 'pointer',
																		},
																	}}
																	onClick={() => props.setSelectedGlosarry(info.label)}
																>
																	{`Click to learn more about the "${info.label}" field`}
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
												align="left"
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													fontSize: { xs: '12px', sm: '16px', md: '18px' },
													p: '10px',
												}}
											>
												{info.value}
											</Typography>
										</Grid>
									</Grid>
								))}
							</Box>
						</AccordionDetails>
					</Accordion>
				</Box>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 900,
						color: '#003056',
						display: 'inline-block',
						marginY: '25px',
						fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
					}}
				>
					Find your device's IMEI or serial number
				</Typography>
				<Box
					sx={{ backgroundColor: '#003056', padding: { xs: 2, sm: 3, md: 5 }, borderRadius: '20px', textAlign: 'left' }}
				>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 600,
							color: '#fff',
							display: 'inline-block',
							fontSize: { xs: '22px', sm: '22px', md: '24px', lg: '27px' },
						}}
					>
						{`Find the IMEI on your ${props.brand.label} device's`}
					</Typography>
					<Box sx={{ paddingLeft: { xs: 0, sm: 2, md: 3 }, marginTop: 1 }}>
						{props.brand.instructions.map((instruc, index) => (
							<Typography
								key={index}
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 400,
									color: '#fff',
									display: 'block',
									fontSize: { xs: '14px', sm: '18px', md: '20px' },
								}}
							>
								{`${index + 1}. ${instruc.label}`}
							</Typography>
						))}
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(BrandInformation)
