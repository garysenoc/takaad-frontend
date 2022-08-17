import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const NotFound = () => {
	const Router = useRouter()
	return (
		<>
			<Head>
				<title>404 | Masjid Donation Admin</title>
			</Head>
			<Box
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					flexGrow: 1,
					minHeight: '100%',
					height: '100vh',
				}}
			>
				<Typography align="center" color="textPrimary" variant="h1">
					404: Page Not Found
				</Typography>
				<NextLink href="" passHref>
					<Button
						onClick={() => Router.back(-1)}
						component="a"
						startIcon={<ArrowBackIcon fontSize="small" />}
						sx={{ mt: 3, backgroundColor: '#4080c0', '&:hover': { backgroundColor: '#1e60a1' } }}
						variant="contained"
					>
						Go back
					</Button>
				</NextLink>
			</Box>
		</>
	)
}

export default NotFound
