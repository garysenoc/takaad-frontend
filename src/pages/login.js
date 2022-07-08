import React, { useEffect, useState } from 'react'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import {
	Button,
	Checkbox,
	Container,
	FormControl,
	FormControlLabel,
	FormHelperText,
	RadioGroup,
	Stack,
	TextField,
	Typography,
	useFormControl,
} from '@mui/material'
import { connect } from 'react-redux'
import mapAuthStateToProps from 'rtk/auth/state'
import mapAuthDispatchToProps from 'rtk/auth/action'
import { useRouter } from 'next/router'
import Link from 'next/link'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['login', 'common'])),
		},
	}
}

function MyHelperText({ message }) {
	const { error } = useFormControl() || {}

	return <FormHelperText sx={{ paddingBottom: 2 }}>{error ? message : ''}</FormHelperText>
}

const Login = (props) => {
	const { t } = useTranslation()
	const [error, seterror] = useState(false)
	const [errorMessage, seterrorMessage] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()
	const handleUsernameChange = (event) => setUsername(event.target.value)
	const handlePasswordChange = (event) => setPassword(event.target.value)
	const handleLogin = async () => {
		if (username === '' || password === '') {
			seterror(true)
			seterrorMessage(t('login:error_0'))
			return
		}
		const response = await fetch(`${process.env.api_baseurl}/v1/auth/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				usermail: username,
				password,
			}),
		})
		if (response.status === 200) {
			const data = await response.json()
			props.setAuth({ username, ...data, isLoggedIn: true })
			seterror(false)
			seterrorMessage('')
			router.push('/')
		} else {
			seterror(true)
			seterrorMessage(t('login:error_1'))
		}
	}
	useEffect(() => {
		if (props.auth.token !== '') {
			router.push('/')
		}
	}, [router])

	return (
		<>
			<Navbar />
			<Container
				sx={{
					height: '100vh',
					marginY: 5,
				}}
			>
				<Stack sx={{ padding: 5, width: { xs: '100%', sm: '50%' } }} spacing={3} marginX="auto">
					<Typography variant="h3" fontWeight="bold" marginX="auto">
						{t('login:login_title')}
					</Typography>
					<FormControl error={error}>
						<Stack spacing={1}>
							<TextField
								required
								error={error && username === ''}
								id="email"
								label={t('login:input_field_0')}
								variant="outlined"
								onChange={handleUsernameChange}
							/>
							<TextField
								required
								error={error && password === ''}
								id="password"
								label={t('login:input_field_1')}
								variant="outlined"
								type="password"
								onChange={handlePasswordChange}
							/>
						</Stack>
						<MyHelperText message={errorMessage} />
					</FormControl>
					<RadioGroup>
						<FormControlLabel label={t('login:radio_0')} control={<Checkbox />} />
					</RadioGroup>
					<Button
						sx={{ backgroundColor: '#28cd7e' }}
						size="large"
						variant="contained"
						fullWidth={false}
						onClick={handleLogin}
					>
						{t('login:button_0')}
					</Button>
					<Typography align="center">
						{t('login:label_0')} <Link href="/register">{t('login:label_1')}</Link>
					</Typography>
				</Stack>
			</Container>
			<Footer />
		</>
	)
}

export default connect(mapAuthStateToProps, mapAuthDispatchToProps())(Login)
