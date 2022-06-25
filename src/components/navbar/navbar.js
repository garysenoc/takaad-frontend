import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { connect } from 'react-redux'
import { AppBar, Box, Badge, Typography, Container, Button, CardMedia, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useTranslation } from 'next-i18next'

import { links, languages } from './data.js'
import mapLanguageStateToProps from 'rtk/language/state'
import mapLanguageDispatchToProps from 'rtk/language/action'
import mapAuthDispatchToProps from 'rtk/auth/action'
import SideBar from './sidebar.js'

const LinkLabel = styled(Typography)({
	display: 'block',
	fontWeight: 600,
})

const CartBadge = styled(Badge)({
	'& .MuiBadge-badge': {
		color: '#fff',
		backgroundColor: '#28cd7e',
	},
})

const Navbar = (props) => {
	const { t } = useTranslation()
	const router = useRouter()
	const [anchorElUser, setAnchorElUser] = useState(null)

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = (language) => {
		setAnchorElUser(null)
		props.setActiveLanguage(language)
	}

	const handleLogOut = () => {
		props.logOut()
		router.push('/')
	}

	useEffect(() => {
		router.push(router.asPath, router.asPath, { locale: props.language.activeLanguage.locale })
	}, [props.language.activeLanguage])

	return (
		<AppBar position="static">
			<Container maxWidth={false} sx={{ marginY: 1 }}>
				<Stack direction="row" justifyContent="space-between">
					<Box>
						<Link href="/" passHref>
							<CardMedia
								component="img"
								image="images/taakad-logo-300x164-1.png"
								sx={{ cursor: 'pointer', width: { xs: 100, sm: 120, md: 150 } }}
							/>
						</Link>
					</Box>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{links.map((link, index) => (
							<Link key={index} href={link.to} passHref>
								<Button
									sx={{
										mx: { md: 1, lg: 3 },
										'&:hover': {
											backgroundColor: link.label === 'Wholesale' ? '#14a660' : 'unset!important',
										},
									}}
									disableRipple={true}
								>
									<LinkLabel
										sx={{
											color: router.pathname === link.to ? '#28cd7e' : '#003056',
											fontSize: { md: 15, lg: 17 },
											'&:hover': {
												color: '#28cd7e',
											},
										}}
									>
										{link.language
											? props.language.activeLanguage.label
											: link.label === 'Home'
											? t('common:menu_home')
											: link.label === 'IMEI Checker'
											? t('common:menu_imei')
											: link.label === 'Pricing'
											? t('common:menu_pricing')
											: link.label === 'FAQ'
											? t('common:menu_faq')
											: link.label === 'Contact'
											? t('common:menu_contact')
											: link.label === 'Wholesale'
											? t('common:btn_client_area')
											: ''}
									</LinkLabel>
								</Button>
							</Link>
						))}
					</Box>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
						<Box>
							<Button
								sx={{
									mr: 2,
								}}
								startIcon={
									<CardMedia
										component="img"
										image={`images/${props.language.activeLanguage.icon}`}
										sx={{
											width: 25,
											borderRadius: 50,
										}}
									/>
								}
								disableRipple={true}
								endIcon={<KeyboardArrowDownIcon sx={{ color: '#000' }} />}
								onClick={handleOpenUserMenu}
							>
								<LinkLabel
									sx={{
										fontSize: { md: 15, lg: 17 },
									}}
								>
									{props.language.activeLanguage.label}
								</LinkLabel>
							</Button>
						</Box>
						<CartBadge badgeContent={`${props.cart.items.length}`} onClick={() => router.push('/cart')}>
							<ShoppingCartIcon sx={{ color: '#003056', '&:hover': { cursor: 'pointer', color: '#004d8a' } }} />
						</CartBadge>
						<Box sx={{ border: '1px solid #dedede', mx: 2, height: 50 }}></Box>
						{props.auth.token === '' ? (
							<Button
								sx={{
									backgroundColor: '#003056',
									color: '#fff',
									borderRadius: 10,
									textTransform: 'capitalize',
									minWidth: { md: 100, lg: 120 },
									fontSize: { md: 15, lg: 18 },
									'&:hover': {
										backgroundColor: '#004d8a',
									},
									mr: { md: 1, lg: 2 },
								}}
								href="/login"
							>
								Login
							</Button>
						) : (
							<Button
								sx={{
									backgroundColor: '#003056',
									color: '#fff',
									borderRadius: 10,
									textTransform: 'capitalize',
									minWidth: { md: 100, lg: 120 },
									fontSize: { md: 15, lg: 18 },
									'&:hover': {
										backgroundColor: '#004d8a',
									},
									mr: { md: 1, lg: 2 },
								}}
								onClick={handleLogOut}
							>
								Logout
							</Button>
						)}
						<Button
							sx={{
								backgroundColor: '#28cd7e',
								color: '#fff',
								borderRadius: 10,
								textTransform: 'capitalize',
								minWidth: { md: 100, lg: 120 },
								fontSize: { md: 15, lg: 18 },
								'&:hover': {
									backgroundColor: '#14a660',
								},
							}}
						>
							Wholesale
						</Button>
					</Box>
					<Box sx={{ display: { xs: 'block', md: 'none' } }}>
						<SideBar
							links={links}
							pathname={router.pathname}
							anchorElUser={anchorElUser}
							handleOpenUserMenu={handleOpenUserMenu}
							handleCloseUserMenu={handleCloseUserMenu}
							languages={languages}
							activeLanguage={props.language.activeLanguage}
						/>
					</Box>
				</Stack>
			</Container>
		</AppBar>
	)
}

export default connect(mapLanguageStateToProps, { ...mapLanguageDispatchToProps(), ...mapAuthDispatchToProps() })(
	Navbar,
)
