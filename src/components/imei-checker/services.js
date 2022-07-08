import { Box, Button, Grid, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ExpandMore } from '@mui/icons-material'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import HelpIcon from '@mui/icons-material/Help'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import {
	renderPhoneExampleData,
	renderPhoneBrandName,
	renderBrandPricePerCheck,
} from 'src/utils/renderPhoneInformation'
import { glosarryInfos } from 'src/components/glosarry/data'

const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
	[`& .${tooltipClasses.tooltip}`]: {
		minWidth: 400,
	},
})

const Services = (props) => {
	const router = useRouter()
	const { payload } = props.checker

	const handleAddToCart = () => {
		const items = props.cart.items

		const isItemAdded = items.length && items.filter((item) => item.details.imei === payload.imei).length > 0

		if (!isItemAdded) {
			const new_payload = {
				order_number: payload.orderId,
				product: renderPhoneBrandName(payload.result),
				details: {
					imei: payload.imei,
					brand: payload.object.brand,
					model: payload.object.model,
				},
				price: renderBrandPricePerCheck(payload.result),
			}

			props.addItems(new_payload)
		}

		if (router.pathname === '/imei-checker') {
			props.nextStep()
		} else {
			router.push('/cart')
		}
	}

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
			<Box>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 900,
						color: '#003056',
						display: 'block',
						marginBottom: '25px',
						textAlign: 'center',
						fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
						lineHeight: { xs: '28px', sm: '40px', md: '40px', lg: '52px' },
					}}
				>
					Services
				</Typography>
				<Typography
					sx={{
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#003056',
						display: 'block',
						marginBottom: '10px',
						fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '22px' },
					}}
				>
					Select {renderPhoneBrandName(payload.result)} services you wish to run:
				</Typography>
				<Box>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#003056',
							display: 'block',
							fontSize: { xs: '14px', sm: '16px', md: '18px' },
						}}
					>
						<strong>IMEI Number: </strong> {payload.imei}
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#003056',
							display: 'block',
							fontSize: { xs: '14px', sm: '16px', md: '18px' },
						}}
					>
						<strong>Brand: </strong> {payload.object.brand}
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 400,
							color: '#003056',
							display: 'block',
							fontSize: { xs: '14px', sm: '16px', md: '18px' },
						}}
					>
						<strong>Model: </strong> {payload.object.model}
					</Typography>
				</Box>
				<Stack direction="row" justifyContent="space-between" sx={{ borderBottom: 'dashed #003056 2px', marginTop: 1 }}>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 600,
							color: '#003056',
							display: 'inline-block',
							fontSize: { xs: '18px', sm: '22px', md: '24px', lg: '27px' },
						}}
					>
						All information on this device
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 600,
							color: '#003056',
							display: 'inline-block',
							fontSize: { xs: '16px', sm: '22px', md: '24px', lg: '27px' },
						}}
					>
						{`$${renderBrandPricePerCheck(payload.result)}`}
					</Typography>
				</Stack>
				<Accordion sx={{ backgroundColor: '#003056', my: 1, borderRadius: '20px' }}>
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
						{Object.entries(renderPhoneExampleData(payload.result)).map((node, index) => {
							return (
								<Fragment key={index}>
									<Grid
										container
										justifyContent="center"
										sx={{
											borderBottom:
												index + 1 !== Object.entries(renderPhoneExampleData(payload.result)).length
													? '1px solid #fff'
													: 'unset',
										}}
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
												{node[0]}
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
																{handleShowValueForTooltip(node[0])}
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
																	onClick={() => props.setSelectedGlosarry(node[0])}
																>
																	{`Click to learn more about the "${node[0]}" field`}
																</Typography>
															</Link>
														</>
													}
													placement="top"
												>
													<HelpIcon
														sx={{
															color: '#28cd7e',
															ml: 1,
															fontSize: { xs: 12, sm: 14, md: 16 },
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
												{node[1]}
											</Typography>
										</Grid>
									</Grid>
								</Fragment>
							)
						})}
					</AccordionDetails>
				</Accordion>
				<Stack direction="row" justifyContent="space-between" sx={{ marginTop: 2, alignItems: 'center' }}>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 600,
							color: '#003056',
							display: 'inline-block',
							fontSize: { xs: '16px', sm: '22px', md: '24px', lg: '27px' },
						}}
					>
						Total: {`$${renderBrandPricePerCheck(payload.result)}`}
					</Typography>
					<Button
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 700,
							color: '#fff',
							backgroundColor: '#28cd7e',
							borderRadius: '40px',
							textTransform: 'capitalize',
							fontSize: { xs: '18px', md: '18px', lg: '24px' },
							minWidth: { xs: '170px', md: '210px', lg: '245px' },
							lineHeight: { xs: '18px', md: '18px', lg: '24px' },
							padding: { xs: '15px 15px', md: '15px 15px', lg: '20px 20px' },
							'&:hover': {
								backgroundColor: '#1ea665',
							},
						}}
						onClick={handleAddToCart}
					>
						Add To Cart
					</Button>
				</Stack>
				<Button
					color="inherit"
					sx={{
						mt: 2,
						mr: 1,
						fontFamily: 'Nunito Sans',
						fontWeight: 400,
						color: '#fff',
						backgroundColor: '#242424',
						textTransform: 'capitalize',
						fontSize: { xs: 16, md: 16, lg: 18 },
						'&:hover': {
							backgroundColor: '#212121',
						},
					}}
					startIcon={<ArrowBackIcon />}
					onClick={() => router.push('/')}
				>
					Back to Home
				</Button>
			</Box>
		</>
	)
}

Services.propTypes = {
	nextStep: PropTypes.func.isRequired,
	checker: PropTypes.object.isRequired,
}

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(Services)
