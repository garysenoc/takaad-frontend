import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import { glosarryInfos } from 'src/components/glosarry/data'

const GlosarryList = () => {
	return (
		<>
			<Box>
				{glosarryInfos.map((info, index) => (
					<Accordion key={index} sx={{ backgroundColor: '#231f20' }}>
						<AccordionSummary expandIcon={<ExpandMore sx={{ color: '#fff' }} />}>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 400,
									color: '#fff',
									display: 'block',
									textAlign: 'left',
									fontSize: { xs: 14, sm: 18, md: 18, lg: 20 },
								}}
							>
								{info.label}
							</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{ borderTop: '1px solid #fff' }}>
							{info.table ? (
								info.table.map((table, index) => (
									<Grid key={index} container spacing={2} mt={index !== 0 && 1}>
										<Grid item xs={6}>
											<Typography
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													display: 'block',
													textAlign: 'left',
													fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
												}}
											>
												{table.title}
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#fff',
													display: 'block',
													textAlign: 'left',
													fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
												}}
											>
												{table.description}
											</Typography>
										</Grid>
									</Grid>
								))
							) : (
								<Typography
									sx={{
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										color: '#fff',
										display: 'block',
										textAlign: 'left',
										ml: 1,
										fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
									}}
								>
									{info.list
										? info.list.map((list, index) => (
												<Box key={index} mt={1}>
													<Typography
														sx={{
															fontFamily: 'Nunito Sans',
															fontWeight: 400,
															color: '#fff',
															display: 'block',
															textAlign: 'left',
															fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
														}}
													>
														{list.title || ''}
													</Typography>
													{list.value &&
														list.value.map((value, index) => (
															<Typography
																key={index}
																sx={{
																	fontFamily: 'Nunito Sans',
																	fontWeight: 400,
																	color: '#fff',
																	display: 'block',
																	textAlign: 'left',
																	ml: 1,
																	fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
																}}
															>
																● {value.text}
																{value.data &&
																	value.data.map((data, index) => (
																		<Typography
																			key={index}
																			sx={{
																				fontFamily: 'Nunito Sans',
																				fontWeight: 400,
																				color: '#fff',
																				display: 'block',
																				textAlign: 'left',
																				ml: 2,
																				fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
																			}}
																		>
																			○ {data.text}
																		</Typography>
																	))}
															</Typography>
														))}
												</Box>
										  ))
										: info.value}
								</Typography>
							)}
						</AccordionDetails>
					</Accordion>
				))}
			</Box>
		</>
	)
}

export default GlosarryList
