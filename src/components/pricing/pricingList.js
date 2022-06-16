import { Box, Typography, Grid, CardMedia, Stack, Button, Link, List, ListItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import { useTranslation } from 'next-i18next'

import { services } from './data'
import { Fragment, useState } from 'react'

const LoginButton = styled(Button)({
	fontSize: '18px',
	lineHeight: 'normal',
	fontFamily: 'Nunito Sans',
	fontWeight: 400,
	textTransform: 'capitalize',
	borderRadius: '50px',
	backgroundColor: '#0b3e69',
	color: '#fff',
	'&:hover': {
		backgroundColor: '#105d9e',
	},
})

const PricingList = () => {
	const { t } = useTranslation()
	const [genericActive, setGenericActive] = useState('')
	const [appleActive, setAppleActive] = useState('')

	return (
		<>
			<Grid container justifyContent="center" my={3} spacing={2}>
				{/* GENERIC */}
				<Grid item xs={12} sm={12} md={4}>
					<Box
						sx={{
							transition: 'all 300ms ease-in-out 0s',
							margin: { xs: '10px 0', sm: '10px 0', md: '0 2px', lg: '0 10px' },
							'&:hover': { boxShadow: '0 0 14px rgb(0 0 0 / 8%)', borderRadius: '15px' },
						}}
					>
						<Box
							sx={{
								textAlign: 'center',
								border: '1px solid #e3e3e3',
								borderBottom: '0',
								borderRadius: '15px 15px 0 0',
								position: 'relative',
								padding: { xs: '20px 15px', sm: '30px 15px', md: '50px 20px' },
							}}
						>
							<CardMedia
								component="img"
								image={`images/${services.generic.icon}`}
								sx={{
									maxWidth: { xs: '40px', sm: '54.39px', md: '54.39px' },
									verticalAlign: 'middle',
									mx: 'auto',
								}}
							/>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#003056',
									margin: '0',
									textTransform: 'uppercase',
									paddingTop: { xs: '10px', sm: '15px', md: '15px', lg: '20px' },
									fontSize: { xs: '20px', sm: '24px', md: '24px', lg: '30px' },
									lineHeight: { xs: '25px', sm: '30px', md: '30px', lg: '38px' },
								}}
							>
								{services.generic.firstTitle}
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#003056',
									margin: '0',
									textTransform: 'uppercase',
									fontSize: { xs: '20px', sm: '24px', md: '24px', lg: '30px' },
									lineHeight: { xs: '25px', sm: '30px', md: '30px', lg: '38px' },
								}}
							>
								{services.generic.secondTitle}
							</Typography>
						</Box>
						<Box>
							{services.generic.serviceList.map((service, index) => (
								<Fragment key={index}>
									<Stack
										direction="row"
										sx={{ borderRadius: 0, border: '1px solid #e3e3e3' }}
										onClick={() => setGenericActive(genericActive === service.title ? '' : service.title)}
									>
										<Box sx={{ width: { xs: '90%', sm: '90%', md: '80%' }, '&:hover': { cursor: 'pointer' } }}>
											<Box sx={{ alignItems: 'center', verticalAlign: 'middle', display: 'inline-flex' }}>
												{genericActive === service.title ? (
													<IndeterminateCheckBoxIcon
														sx={{
															color: '#28cd7e',
															marginLeft: '10px',
															fontSize: { xs: '18px', sm: '20px', md: '20px' },
														}}
													/>
												) : (
													<AddCircleIcon
														sx={{
															color: '#4080c0',
															marginLeft: '10px',
															fontSize: { xs: '18px', sm: '20px', md: '20px' },
														}}
													/>
												)}
												<Typography
													sx={{
														fontFamily: 'Nunito Sans',
														fontWeight: 600,
														color: '#202223',
														padding: '20px 10px 20px',
														fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '15px' },
														lineHeight: { xs: '18px', sm: '18px', md: '18px' },
													}}
												>
													{service.title}
												</Typography>
											</Box>
										</Box>
										<Box
											sx={{
												borderLeft: '1px solid',
												borderColor: '#e3e3e3',
											}}
										>
											<Typography
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 600,
													color: '#4080c0',
													paddingY: 'auto',
													fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '15px' },
													padding: { xs: '16px 16px', sm: '20px 20px', md: '20px 20px' },
												}}
											>
												${service.price}
											</Typography>
										</Box>
									</Stack>
									<Box mt={2} display={genericActive === service.title ? '' : 'none'}>
										{service.infos.map((info, index) => (
											<List key={index}>
												<ListItem>
													<Typography
														sx={{ color: '#003056', fontSize: { md: '15px' }, fontWeight: 400, marginTop: '-10px' }}
													>
														<span style={{ fontWeight: 900 }}>{info.label}:</span> {info.description}
													</Typography>
												</ListItem>
											</List>
										))}
									</Box>
								</Fragment>
							))}
							<Box
								sx={{
									borderWidth: '0 1px 1px',
									borderStyle: 'none solid solid',
									borderColor: 'transparent #e3e3e3 #e3e3e3',
									textAlign: 'center',
									borderRadius: '0 0 10px 10px',
									padding: { xs: '25px 10px', sm: '25px 10px', md: '35px 10px' },
								}}
							>
								<LoginButton
									sx={{
										minWidth: { xs: '220px', sm: '220px' },
										padding: { xs: '12px 20px', sm: '12px 20px', md: '12px 20px', lg: '14px 25px' },
									}}
								>
									{t('common:btn_login_to_see_more')}
								</LoginButton>
							</Box>
						</Box>
					</Box>
				</Grid>

				{/* APPLE */}
				<Grid item xs={12} sm={12} md={4}>
					<Box
						sx={{
							margin: { xs: '10px 0', sm: '10px 0', md: '0 2px', lg: '0 10px' },
							transition: 'all 300ms ease-in-out 0s',
							'&:hover': { boxShadow: '0 0 14px rgb(0 0 0 / 8%)', borderRadius: '15px' },
						}}
					>
						<Box
							sx={{
								textAlign: 'center',
								border: '1px solid #e3e3e3',
								borderBottom: '0',
								borderRadius: '15px 15px 0 0',
								position: 'relative',
								padding: { xs: '20px 15px', sm: '30px 15px', md: '50px 20px' },
							}}
						>
							<CardMedia
								component="img"
								image={`images/${services.apple.icon}`}
								sx={{
									verticalAlign: 'middle',
									marginX: 'auto',
									maxWidth: { xs: '40px', sm: '54.39px', md: '54.39px' },
								}}
							/>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#003056',
									margin: '0',
									textTransform: 'uppercase',
									paddingTop: { xs: '10px', sm: '15px', md: '15px', lg: '20px' },
									fontSize: { xs: '20px', sm: '24px', md: '24px', lg: '30px' },
									lineHeight: { xs: '25px', sm: '30px', md: '30px', lg: '38px' },
								}}
							>
								{t('pricing:pricing_apple_firstTitle')}
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#003056',
									margin: '0',
									textTransform: 'uppercase',
									fontSize: { xs: '20px', sm: '24px', md: '24px', lg: '30px' },
									lineHeight: { xs: '25px', sm: '30px', md: '30px', lg: '38px' },
								}}
							>
								{t('pricing:pricing_apple_secondTitle')}
							</Typography>
						</Box>
						<Box>
							{services.apple.serviceList.map((service, index) => (
								<Fragment key={index}>
									<Stack
										direction="row"
										sx={{ borderRadius: 0, border: '1px solid #e3e3e3' }}
										onClick={() => setAppleActive(appleActive === service.title ? '' : service.title)}
									>
										<Box sx={{ width: { xs: '90%', sm: '90%', md: '80%' }, '&:hover': { cursor: 'pointer' } }}>
											<Box sx={{ alignItems: 'center', verticalAlign: 'middle', display: 'inline-flex' }}>
												{appleActive === service.title ? (
													<IndeterminateCheckBoxIcon
														sx={{
															color: '#28cd7e',
															marginLeft: '10px',
															fontSize: { xs: '18px', sm: '20px', md: '20px' },
														}}
													/>
												) : (
													<AddCircleIcon
														sx={{
															color: '#4080c0',
															marginLeft: '10px',
															fontSize: { xs: '18px', sm: '20px', md: '20px' },
														}}
													/>
												)}
												<Typography
													sx={{
														fontFamily: 'Nunito Sans',
														fontWeight: 600,
														color: '#202223',
														padding: '20px 10px 20px',
														fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '15px' },
														lineHeight: { xs: '18px', sm: '18px', md: '18px' },
													}}
												>
													{service.title}
												</Typography>
											</Box>
										</Box>
										<Box
											sx={{
												borderLeft: '1px solid',
												borderColor: '#e3e3e3',
											}}
										>
											<Typography
												sx={{
													fontFamily: 'Nunito Sans',
													fontWeight: 600,
													color: '#4080c0',
													fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '15px' },
													padding: { xs: '16px 16px', sm: '20px 20px', md: '20px 20px' },
												}}
											>
												${service.price}
											</Typography>
										</Box>
									</Stack>
									<Box mt={2} display={appleActive === service.title ? '' : 'none'}>
										{service.infos.map((info, index) => (
											<List key={index}>
												<ListItem>
													<Typography
														sx={{ color: '#003056', fontSize: { md: '15px' }, fontWeight: 400, marginTop: '-10px' }}
													>
														<span style={{ fontWeight: 900 }}>{info.label}:</span> {info.description}
													</Typography>
												</ListItem>
											</List>
										))}
									</Box>
								</Fragment>
							))}
							<Box
								sx={{
									borderWidth: '0 1px 1px',
									borderStyle: 'none solid solid',
									borderColor: 'transparent #e3e3e3 #e3e3e3',
									textAlign: 'center',
									borderRadius: '0 0 10px 10px',
									padding: { xs: '25px 10px', sm: '25px 10px', md: '35px 10px' },
								}}
							>
								<LoginButton
									sx={{
										minWidth: { xs: '220px', sm: '220px' },
										padding: { xs: '12px 20px', sm: '12px 20px', md: '12px 20px', lg: '14px 25px' },
									}}
								>
									{t('common:btn_login_to_see_more')}
								</LoginButton>
							</Box>
						</Box>
					</Box>
				</Grid>

				{/* UNLOCK */}
				<Grid item xs={12} sm={12} md={4}>
					<Box
						sx={{
							transition: 'all 300ms ease-in-out 0s',
							'&:hover': { boxShadow: '0 0 14px rgb(0 0 0 / 8%)', borderRadius: '15px' },
							margin: { xs: '10px 0', sm: '10px 0', md: '0 2px', lg: '0 10px' },
						}}
					>
						<Box
							sx={{
								textAlign: 'center',
								border: '1px solid #e3e3e3',
								borderBottom: '0',
								borderRadius: '15px 15px 0 0',
								position: 'relative',
								padding: { xs: '20px 15px', sm: '30px 15px', md: '50px 20px' },
							}}
						>
							<CardMedia
								component="img"
								image={`images/${services.unlock.icon}`}
								sx={{
									verticalAlign: 'middle',
									marginX: 'auto',
									maxWidth: { xs: '65px', sm: '86px', md: '86px' },
								}}
							/>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#003056',
									m: '0',
									textTransform: 'uppercase',
									paddingTop: { xs: '10px', sm: '15px', md: '15px', lg: '20px' },
									fontSize: { xs: '20px', sm: '24px', md: '24px', lg: '30px' },
									lineHeight: { xs: '25px', sm: '30px', md: '30px', lg: '38px' },
								}}
							>
								{t('pricing:pricing_unlock_firtsTitle')}
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#003056',
									margin: '0',
									textTransform: 'uppercase',
									fontSize: { xs: '20px', sm: '24px', md: '24px', lg: '30px' },
									lineHeight: { xs: '25px', sm: '30px', md: '30px', lg: '38px' },
								}}
							>
								{t('pricing:pricing_unlock_secondTitle')}
							</Typography>
						</Box>
						<Box>
							<Box sx={{ position: 'relative' }}>
								<Box sx={{ position: 'absolute', left: 0, right: 0, bottom: { xs: '1px', sm: '5px', md: '20px' } }}>
									<Link sx={{ color: '#e1a416', fontSize: '14px' }}>
										<CardMedia
											component="img"
											image={`images/warning.svg`}
											sx={{
												maxWidth: '21.27px',
												verticalAlign: 'middle',
												marginX: 'auto',
											}}
										/>
									</Link>
								</Box>
							</Box>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 600,
									color: '#EA2027',
									textAlign: 'center',
									fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
								}}
							>
								{t('pricing:pricing_unlock_firstWarningText')}
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Nunito Sans',
									fontWeight: 400,
									color: '#007bff',
									paddingX: '15px',
									marginTop: '20px',
									textAlign: 'center',
									fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
								}}
							>
								{t('pricing:pricing_unlock_secondWarningText')}
							</Typography>
							<Box
								sx={{
									borderWidth: '0 1px 1px',
									borderStyle: 'none solid solid',
									borderColor: 'transparent #e3e3e3 #e3e3e3',
									textAlign: 'center',
									borderRadius: '0 0 10px 10px',
									padding: { xs: '25px 10px', sm: '25px 10px', md: '35px 10px' },
								}}
							>
								<LoginButton
									sx={{
										minWidth: { xs: '220px', sm: '220px' },
										padding: { xs: '12px 20px', sm: '12px 20px', md: '12px 20px', lg: '14px 25px' },
									}}
								>
									{t('common:btn_login_to_see_more')}
								</LoginButton>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	)
}

export default PricingList
