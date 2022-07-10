import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box, Container, Stack, Typography, Grid } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import { Carousel } from 'react-responsive-carousel'
import CircleIcon from '@mui/icons-material/Circle'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import BrandInformation from './brandInformation'
import { brands } from './data'
import { useTranslation } from 'next-i18next'
import { connect } from 'react-redux'
import mapBrandStateToProps from 'rtk/brand/state'
import mapBrandDispatchToProps from 'rtk/brand/action'

const SelectBrand = (props) => {
	const page = props.page
	const router = useRouter()
	const { t } = useTranslation()
	const [activeBrand, setActiveBrand] = useState(page === 'brand-checker' ? brands[0] : '')

	const handleChange = (brand) => {
		props.setBrand(brand)
		if (page === 'home') {
			router.push('brand-checker')
		} else {
			// props.setBrand(brand)
			setActiveBrand(brand)
		}
	}

	return (
		<>
			<Box>
				<Container>
					<Box textAlign="center" sx={{ display: page === 'brand-checker' ? 'none' : 'block' }}>
						<Typography
							sx={{
								fontWeight: 900,
								color: '#003056',
								fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
								lineHeight: { xs: '28px', sm: '40px', md: '40px', lg: '52px' },
							}}
						>
							{t('home:secondSection_text_1')}
						</Typography>
						<Typography
							sx={{
								mt: 2,
								color: '#202223',
								fontWeight: 600,
								fontSize: { xs: '14px', sm: '18px', md: '18px', lg: '20px' },
							}}
						>
							{t('home:secondSection_text_2')}
						</Typography>
						{/* tab to desktop large */}
						<Box mt={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
							<Carousel
								showArrows={false}
								showStatus={false}
								showThumbs={false}
								autoPlay
								infiniteLoop
								interval={3000}
								renderIndicator={(onClickHandler, isSelected, index, label) => {
									const defStyle = { marginLeft: 10, color: '#8bdaf2', cursor: 'pointer' }
									const style = isSelected ? { ...defStyle, color: '#4080c0' } : { ...defStyle }
									return (
										<CircleIcon
											style={style}
											onClick={onClickHandler}
											onKeyDown={onClickHandler}
											value={index}
											key={index}
											role="button"
											tabIndex={0}
											aria-label={`${label} ${index + 1}`}
											sx={{ fontSize: '15px', outline: 'none' }}
										/>
									)
								}}
							>
								<Box sx={{ height: { sm: 270, md: 330, lg: 350 } }}>
									<Grid container justifyContent="start" sx={{ px: { xs: 2, sm: 6, md: 10 } }}>
										{brands.map((brand, index) => (
											<Fragment key={index}>
												{index < 12 && (
													<Grid item sm={3} my={1}>
														<Typography
															key={brand}
															sx={{
																backgroundColor: '#003056',
																mx: { xs: 0.5, sm: 1 },
																borderRadius: 1,
																color: '#fff',
																fontWeight: 900,
																textAlign: 'center',
																p: { xs: 1, sm: 2, md: 3 },
																fontSize: { xs: 12, sm: 18, md: 20, lg: 22 },
																'&:hover': {
																	cursor: 'pointer',
																	backgroundColor: '#004d8a',
																},
															}}
															onClick={() => handleChange(brand)}
														>
															{brand.label}
														</Typography>
													</Grid>
												)}
											</Fragment>
										))}
									</Grid>
								</Box>
								<Box sx={{ height: { sm: 270, md: 330, lg: 350 } }}>
									<Grid container justifyContent="start" sx={{ px: { xs: 2, sm: 6, md: 10 } }}>
										{brands.map((brand, index) => (
											<Fragment key={index}>
												{index > 11 && index < 24 && (
													<Grid item sm={3} my={1}>
														<Typography
															key={brand}
															sx={{
																backgroundColor: '#003056',
																mx: { xs: 0.5, sm: 1 },
																borderRadius: 1,
																color: '#fff',
																fontWeight: 900,
																textAlign: 'center',
																p: { xs: 1, sm: 2, md: 3 },
																fontSize: { xs: 12, sm: 18, md: 20, lg: 22 },
																'&:hover': {
																	cursor: 'pointer',
																	backgroundColor: '#004d8a',
																},
															}}
															onClick={() => handleChange(brand)}
														>
															{brand.label}
														</Typography>
													</Grid>
												)}
											</Fragment>
										))}
									</Grid>
								</Box>
								{/* <Box sx={{ height: { sm: 270, md: 330, lg: 350 } }}>
									<Grid container justifyContent="center" sx={{ px: { xs: 2, sm: 6, md: 10 } }}>
										{brands.map((brand, index) => (
											<Fragment key={index}>
												{index > 23 && index < 28 && (
													<Grid item sm={3} my={1}>
														<Typography
															key={brand}
															sx={{
																backgroundColor: '#003056',
																mx: { xs: 0.5, sm: 1 },
																borderRadius: 1,
																color: '#fff',
																fontWeight: 900,
																textAlign: 'center',
																p: { xs: 1, sm: 2, md: 3 },
																fontSize: { xs: 12, sm: 18, md: 20, lg: 22 },
																'&:hover': {
																	cursor: 'pointer',
																	backgroundColor: '#004d8a',
																},
															}}
															onClick={() => handleChange(brand)}
														>
															{brand.label}
														</Typography>
													</Grid>
												)}
											</Fragment>
										))}
									</Grid>
								</Box> */}
							</Carousel>
						</Box>
						{/* mobile carousel */}
						<Box mt={1} sx={{ display: { xs: 'block', sm: 'none' } }}>
							<Carousel
								showArrows={false}
								showStatus={false}
								showThumbs={false}
								autoPlay
								infiniteLoop
								interval={3000}
								renderIndicator={(onClickHandler, isSelected, index, label) => {
									const defStyle = { marginLeft: 10, color: '#8bdaf2', cursor: 'pointer' }
									const style = isSelected ? { ...defStyle, color: '#4080c0' } : { ...defStyle }
									return (
										<CircleIcon
											style={style}
											onClick={onClickHandler}
											onKeyDown={onClickHandler}
											value={index}
											key={index}
											role="button"
											tabIndex={0}
											aria-label={`${label} ${index + 1}`}
											sx={{ fontSize: 12, outline: 'none' }}
										/>
									)
								}}
							>
								<Box sx={{ height: 190 }}>
									<Grid container justifyContent="start" sx={{ px: { xs: 2, sm: 6, md: 10 } }}>
										{brands.map((brand, index) => (
											<Fragment key={index}>
												{index < 9 && (
													<Grid item xs={4} my={1}>
														<Typography
															key={brand}
															sx={{
																backgroundColor: '#003056',
																mx: { xs: 0.5, sm: 1 },
																borderRadius: 1,
																color: '#fff',
																fontWeight: 900,
																textAlign: 'center',
																p: { xs: 1, sm: 2, md: 3 },
																fontSize: { xs: 12, sm: 18, md: 20, lg: 22 },
																'&:hover': {
																	cursor: 'pointer',
																	backgroundColor: '#004d8a',
																},
															}}
															onClick={() => handleChange(brand)}
														>
															{brand.label}
														</Typography>
													</Grid>
												)}
											</Fragment>
										))}
									</Grid>
								</Box>
								<Box sx={{ height: 190 }}>
									<Grid container justifyContent="start" sx={{ px: { xs: 2, sm: 6, md: 10 } }}>
										{brands.map((brand, index) => (
											<Fragment key={index}>
												{index > 8 && index < 18 && (
													<Grid item xs={4} my={1}>
														<Typography
															key={brand}
															sx={{
																backgroundColor: '#003056',
																mx: { xs: 0.5, sm: 1 },
																borderRadius: 1,
																color: '#fff',
																fontWeight: 900,
																textAlign: 'center',
																p: { xs: 1, sm: 2, md: 3 },
																fontSize: { xs: 12, sm: 18, md: 20, lg: 22 },
																'&:hover': {
																	cursor: 'pointer',
																	backgroundColor: '#004d8a',
																},
															}}
															onClick={() => handleChange(brand)}
														>
															{brand.label}
														</Typography>
													</Grid>
												)}
											</Fragment>
										))}
									</Grid>
								</Box>
								{/* <Box sx={{ height: 190 }}>
									<Grid container justifyContent="center" sx={{ px: { xs: 2, sm: 6, md: 10 } }}>
										{brands.map((brand, index) => (
											<Fragment key={index}>
												{index > 17 && index < 27 && (
													<Grid item xs={4} my={1}>
														<Typography
															key={brand}
															sx={{
																backgroundColor: '#003056',
																mx: { xs: 0.5, sm: 1 },
																borderRadius: 1,
																color: '#fff',
																fontWeight: 900,
																textAlign: 'center',
																p: { xs: 1, sm: 2, md: 3 },
																fontSize: { xs: 12, sm: 18, md: 20, lg: 22 },
																'&:hover': {
																	cursor: 'pointer',
																	backgroundColor: '#004d8a',
																},
															}}
															onClick={() => handleChange(brand)}
														>
															{brand.label}
														</Typography>
													</Grid>
												)}
											</Fragment>
										))}
									</Grid>
								</Box> */}
								{/* <Box sx={{ height: 190 }}>
									<Grid container justifyContent="center" sx={{ px: { xs: 2, sm: 6, md: 10 } }}>
										{brands.map((brand, index) => (
											<Fragment key={index}>
												{index > 26 && (
													<Grid item xs={4} my={1}>
														<Typography
															key={brand}
															sx={{
																backgroundColor: '#003056',
																mx: { xs: 0.5, sm: 1 },
																borderRadius: 1,
																color: '#fff',
																fontWeight: 900,
																textAlign: 'center',
																p: { xs: 1, sm: 2, md: 3 },
																fontSize: { xs: 12, sm: 18, md: 20, lg: 22 },
																'&:hover': {
																	cursor: 'pointer',
																	backgroundColor: '#004d8a',
																},
															}}
															onClick={() => handleChange(brand)}
														>
															{brand.label}
														</Typography>
													</Grid>
												)}
											</Fragment>
										))}
									</Grid>
								</Box> */}
							</Carousel>
						</Box>
						<Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: { xs: 3, sm: 5, md: 7 } }}>
							<Typography
								sx={{
									color: '#003056',
									fontWeight: 900,
									width: { xs: '100%', sm: '50%' },
									textAlign: 'right',
									fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
								}}
							>
								{t('home:secondSection_text_3')}
							</Typography>
							<Box sx={{ height: 50, borderRight: '1px solid #9e9d9d', mx: 2 }}></Box>
							<Link href="/contact" passHref>
								<Typography
									sx={{
										color: '#003056',
										fontWeight: 600,
										fontSize: { xs: 14, sm: 18, md: 20, lg: 22 },
										width: { xs: '100%', sm: '50%' },
										display: 'flex',
										alignItems: 'center',
										'&:hover': {
											cursor: 'pointer',
										},
									}}
								>
									<EmailIcon sx={{ mr: 1, color: '#28cd7e' }} /> support@taakad.com
								</Typography>
							</Link>
						</Stack>
					</Box>
				</Container>
			</Box>
			{page === 'brand-checker' && <BrandInformation brand={activeBrand} />}
		</>
	)
}

SelectBrand.propTypes = {
	page: PropTypes.string.isRequired,
}

export default connect(mapBrandStateToProps, mapBrandDispatchToProps())(SelectBrand)
