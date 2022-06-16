import { connect } from 'react-redux'
import { Box, Container, Typography, Grid } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// import { DefaultLayout } from 'src/layout/default-layout'
import GlosarryList from 'src/components/glosarry/glosarryList'
import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import { glosarryInfos } from 'src/components/glosarry/data'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export const getServerSideProps = async (ctx) => {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['common'])),
		},
	}
}

const Glosarry = (props) => {
	const handleShowValueForTooltip = (label) => {
		const glosarry = glosarryInfos.filter((info) => info.label === label)

		if (glosarry[0]) {
			return glosarry[0]
		}
	}

	const activeGlosarry = handleShowValueForTooltip(props.checker.selectedGlosarry)

	return (
		<>
			<Navbar />
			<Box my={4}>
				<Container>
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
						Understanding Your Result
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 600,
							color: '#003056',
							display: 'block',
							my: 1,
							textAlign: 'left',
							fontSize: { xs: 16, sm: 22, md: 24 },
						}}
					>
						{`What is the ${props.checker.selectedGlosarry}?`}
					</Typography>
					{activeGlosarry.table ? (
						activeGlosarry.table.map((table, index) => (
							<Grid key={index} container spacing={2} mt={index !== 0 && 1}>
								<Grid item xs={6}>
									<Typography
										sx={{
											fontFamily: 'Nunito Sans',
											fontWeight: 400,
											color: '#003056',
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
											color: '#003056',
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
								color: '#003056',
								display: 'block',
								textAlign: 'left',
								ml: 1,
								fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
							}}
						>
							{activeGlosarry.list
								? activeGlosarry.list.map((list, index) => (
										<Box key={index} mt={1}>
											<Typography
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 400,
													color: '#003056',
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
															color: '#003056',
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
																		color: '#003056',
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
								: activeGlosarry.value}
						</Typography>
					)}
					<Box sx={{ backgroundColor: '#003056', p: 1, borderRadius: 2, mt: 3 }}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								fontWeight: 400,
								color: '#fff',
								display: 'block',
								textAlign: 'left',
								ml: 1,
								my: 2,
								fontSize: { xs: 14, sm: 18, md: 18, lg: 20 },
							}}
						>
							Here you can view the other definitions for every field that can be returned by our device checks:
						</Typography>
						<GlosarryList />
					</Box>
				</Container>
			</Box>
			<Footer />
		</>
	)
}

// Glosarry.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(Glosarry)
