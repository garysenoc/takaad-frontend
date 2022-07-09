import { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Container, Grid, Typography, Box, Button, CardMedia, List, ListItem } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import CircleIcon from '@mui/icons-material/Circle'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useTranslation } from 'next-i18next'

import { carouselCheck } from './data'

const Header = () => {
	const { t } = useTranslation()
	const [playBtnColor, setPlayBtnColor] = useState('#4080c0')

	return (
		<>
			<Container sx={{ paddingTop: { xs: '100px', md: '130px' }, maxWidth: { lg: '1225px' } }}>
				<Grid container justifyContent="center" alignItems="center">
					<Grid item xs={12} md={6} lg={7} sx={{ order: { md: 1, xs: 2 } }}>
						<Box sx={{ textAlign: { xs: 'center', md: 'start' }, marginTop: { xs: '70px' } }}>
							<Box sx={{ marginBottom: '10px' }}>
								<Typography
									sx={{
										color: '#003056',
										display: 'block',
										fontFamily: 'Nunito Sans',
										fontWeight: 900,
										margin: { lg: '0 0 8px' },
										fontSize: { xs: '28px', sm: '40px', md: '46px', lg: '64px' },
										lineHeight: { xs: '36px', sm: '48px', md: '54px', lg: '72px' },
									}}
								>
									{t('home:btn_imei_check')}
								</Typography>
							</Box>
							<Box sx={{ margin: { xs: '0 auto', md: '0' }, maxWidth: { xs: '475px', md: '100%' } }}>
								<Typography
									sx={{
										color: '#202223',
										display: 'block',
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										marginBottom: '1rem',
										fontSize: { xs: '18px', md: '18px', lg: '22px' },
									}}
								>
									{t('home:header_imei_body')}
								</Typography>
							</Box>
							<Box sx={{ display: 'inline-block', pt: { md: '10px', lg: '20px' } }}>
								<ul style={{ display: 'block', listStyle: 'none', padding: '0', margin: '0' }}>
									<li style={{ display: 'inline-block', margin: '10px 5px' }}>
										<Button
											sx={{
												fontFamily: 'Nunito Sans',
												fontWeight: 700,
												color: '#fff',
												backgroundColor: '#4080c0',
												borderRadius: '40px',
												textTransform: 'capitalize',
												fontSize: { xs: '18px', md: '18px', lg: '24px' },
												minWidth: { xs: '210px', md: '210px', lg: '245px' },
												lineHeight: { xs: '18px', md: '18px', lg: '24px' },
												padding: { xs: '15px 15px 18px', md: '15px 15px 18px', lg: '20px 20px 24px' },
												'&:hover': {
													backgroundColor: '#1e60a1',
												},
											}}
										>
											{t('home:btn_imei_check')}
										</Button>
									</li>
									<Typography
										sx={{
											fontWeight: '500',
											fontSize: { sm: '20px', md: '20px', lg: '24px' },
											display: { xs: 'none', sm: 'inline-block' },
										}}
									>
										{t('common:_or')}
									</Typography>
									<li
										style={{
											display: 'inline-block',
											margin: '10px 5px',
										}}
									>
										<Button
											sx={{
												fontFamily: 'Nunito Sans',
												fontWeight: 700,
												textTransform: 'capitalize',
												color: '#fff',
												backgroundColor: '#fd9644',
												borderRadius: '40px',
												fontSize: { xs: '18px', md: '18px', lg: '24px' },
												minWidth: { xs: '210px', md: '210px', lg: '245px' },
												lineHeight: { xs: '18px', md: '18px', lg: '24px' },
												padding: { xs: '15px 15px 18px', md: '15px 15px 18px', lg: '20px 20px 24px' },
												'&:hover': {
													backgroundColor: '#fc7a12',
												},
											}}
											onClick={() => Router.push('/pricing')}
										>
											{t('home:btn_pricing_list')}
										</Button>
									</li>
									<li
										style={{
											display: 'block',
											margin: '10px 0px',
											textAlign: 'center',
										}}
									>
										<Link href="https://www.youtube.com/watch?v=Lkgoyq6YZko&ab_channel=IMEICheck" passHref>
											<a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
												<Button
													sx={{
														fontSize: '18px',
														fontFamily: 'Nunito Sans',
														fontWeight: 400,
														lineHeight: 'normal',
														textTransform: 'capitalize',
														color: '#000',
														backgroundColor: '#fff',
														borderRadius: '40px',
														boxShadow: '0 2px 10px 2px rgb(0 0 0 / 10%)',
														padding: { xs: '12px 20px', md: '12px 20px', lg: '14px 25px' },
														minWidth: { xs: '130px', md: '130px', lg: '140px' },
														'&:hover': {
															backgroundColor: '#4080c0',
															color: '#fff',
														},
													}}
													onMouseEnter={() => setPlayBtnColor('#fff')}
													onMouseLeave={() => setPlayBtnColor('#4080c0')}
												>
													<PlayCircleIcon
														fontSize="medium"
														sx={{
															color: playBtnColor,
															marginRight: '10px',
														}}
													/>
													{t('home:btn_watch_video')}
												</Button>
											</a>
										</Link>
									</li>
								</ul>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={5} sx={{ order: { md: 2, xs: 1 } }}>
						<Box
							sx={{
								maxWidth: '485px',
								position: 'relative',
								textAlign: 'center',
								display: 'block',
								margin: { xs: '0 auto' },
							}}
						>
							<CardMedia
								component="img"
								image="/images/bushes-img.svg"
								sx={{
									position: 'absolute',
									bottom: '0',
									maxWidth: '100%',
									verticalAlign: 'middle',
									top: { xs: '-60px', md: '-60px', lg: '-80px' },
									right: { xs: '0', md: '0', lg: '-125px' },
								}}
							/>
							<Box
								sx={{
									position: 'relative',
									zIndex: 6,
									maxWidth: '245px',
									marginLeft: 'auto',
									display: 'block',
									marginRight: { xs: 'auto', md: 'auto', lg: '0' },
								}}
							>
								<Box
									sx={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
										width: '230px',
										height: '100%',
									}}
								>
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
										{carouselCheck.map((check, index) => (
											<List key={index} sx={{ height: '550px' }}>
												<ListItem sx={{ display: 'flex', justifyContent: 'flex-end', mt: '5px' }}>
													<Typography sx={{ color: '#003056', fontSize: { md: '14px' }, fontWeight: 600 }}>
														${check.price}
													</Typography>
												</ListItem>
												<ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
													<Typography
														sx={{
															// color: '#ff7c60',
															color: '#fd9644',
															fontSize: '20px',
															fontWeight: 900,
															textAlign: 'center',
															marginTop: '-10px',
															marginBottom: '10px',
															lineHeight: '23px',
														}}
													>
														{check.title}
													</Typography>
												</ListItem>
												{check.infos.map((info, index) => (
													<ListItem key={index}>
														<Typography
															sx={{ color: '#003056', fontSize: '12px', fontWeight: 400, marginTop: '-10px' }}
														>
															<span style={{ fontWeight: 900 }}>{info.label}:</span> {info.description}
														</Typography>
													</ListItem>
												))}
											</List>
										))}
									</Carousel>
								</Box>
								<CardMedia
									component="img"
									image="/images/mob-img.webp"
									sx={{
										maxWidth: '100%',
										verticalAlign: 'middle',
									}}
								/>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Header
