import { Fragment, useState } from 'react'
import Link from 'next/link'
import {
	Box,
	IconButton,
	List,
	ListItem,
	Button,
	Typography,
	Drawer,
	CardMedia,
	Menu,
	MenuItem,
	Badge,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const LinkLabel = styled(Typography)({
	color: '#003056',
	display: 'block',
	fontFamily: 'Nunito Sans',
	fontWeight: 600,
	fontSize: 16,
})

const CartBadge = styled(Badge)({
	'& .MuiBadge-badge': {
		color: '#fff',
		backgroundColor: '#28cd7e',
	},
})

export default function SideBar({
	links,
	pathname,
	anchorElUser,
	handleOpenUserMenu,
	handleCloseUserMenu,
	languages,
	activeLanguage,
}) {
	const [openSidebar, setOpenSidebar] = useState(false)

	const toggleSidebar = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}

		setOpenSidebar(open)
	}

	return (
		<>
			<Button
				startIcon={
					<CardMedia
						component="img"
						image={`/images/${activeLanguage.icon}`}
						sx={{
							width: 25,
							borderRadius: 50,
						}}
					/>
				}
				endIcon={<KeyboardArrowDownIcon sx={{ color: '#000' }} />}
				onClick={handleOpenUserMenu}
			>
				<LinkLabel>{activeLanguage.label}</LinkLabel>
			</Button>
			<Menu
				sx={{ mt: { sm: 6, md: 5 } }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={() => handleCloseUserMenu(activeLanguage)}
			>
				{languages.map((language, index) => (
					<MenuItem
						key={index}
						onClick={() => handleCloseUserMenu(language)}
						sx={{ display: activeLanguage.label === language.label && 'none' }}
					>
						<CardMedia
							component="img"
							image={`/images/${language.icon}`}
							sx={{
								marginRight: '10px',
								width: '25px',
								borderRadius: '50px',
							}}
						/>
						<LinkLabel textAlign="center">{language.label}</LinkLabel>
					</MenuItem>
				))}
			</Menu>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				color="inherit"
				onClick={toggleSidebar(true)}
				sx={{ marginRight: { xs: -2 } }}
			>
				{openSidebar ? (
					<CloseIcon sx={{ color: '#003056', fontSize: { xs: '35px', sm: '40px' } }} />
				) : (
					<MenuIcon sx={{ color: '#003056', fontSize: { xs: '35px', sm: '40px' } }} />
				)}
			</IconButton>
			<Drawer anchor="left" open={openSidebar} onClose={toggleSidebar(false)} BackdropProps={{ invisible: true }}>
				<Box
					sx={{ width: { xs: '60vw', sm: '40vw' } }}
					role="presentation"
					onClick={toggleSidebar(false)}
					onKeyDown={toggleSidebar(false)}
				>
					<List sx={{ justifyContent: 'center', alignContent: 'center' }}>
						{links.map((link, index) => (
							<Fragment key={index}>
								<ListItem>
									<Link href={link.to} passHref>
										<Button
											sx={{
												mx: 'auto',
												'&:hover': {
													color: '#28cd7e',
												},
											}}
										>
											<LinkLabel
												sx={{
													color: pathname === link.to ? '#28cd7e' : '#003056',
												}}
											>
												{link.label}
											</LinkLabel>
										</Button>
									</Link>
								</ListItem>
							</Fragment>
						))}
						<Fragment>
							<ListItem>
								<Button
									sx={{
										mx: 'auto',
									}}
								>
									<CartBadge badgeContent={1}>
										<ShoppingCartIcon sx={{ color: '#003056', '&:hover': { cursor: 'pointer', color: '#004d8a' } }} />
									</CartBadge>
								</Button>
							</ListItem>
						</Fragment>
						<Fragment>
							<ListItem>
								<Button
									sx={{
										mx: 'auto',
										backgroundColor: '#003056',
										color: '#fff',
										borderRadius: 10,
										textTransform: 'capitalize',
										minWidth: { xs: '80%', sm: '70%' },
										py: 1,
										'&:hover': {
											backgroundColor: '#004d8a',
										},
									}}
								>
									<LinkLabel
										sx={{
											color: '#fff',
										}}
									>
										Login
									</LinkLabel>
								</Button>
							</ListItem>
						</Fragment>
						<Fragment>
							<ListItem>
								<Button
									sx={{
										mx: 'auto',
										backgroundColor: '#28cd7e',
										color: '#fff',
										borderRadius: 10,
										textTransform: 'capitalize',
										minWidth: { xs: '80%', sm: '70%' },
										py: 1,
										'&:hover': {
											backgroundColor: '#1ea665',
										},
									}}
								>
									<LinkLabel
										sx={{
											color: '#fff',
										}}
									>
										Wholesale
									</LinkLabel>
								</Button>
							</ListItem>
						</Fragment>
					</List>
				</Box>
			</Drawer>
		</>
	)
}
