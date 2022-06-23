import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import {
	Button,
	Container,
	FormControl,
	FormHelperText,
	Stack,
	TextField,
	Typography,
	useFormControl,
} from '@mui/material'
import { connect } from 'react-redux'
import mapAuthStateToProps from 'rtk/auth/state'
import mapAuthDispatchToProps from 'rtk/auth/action'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import defaultConfig from '../../config/default.config'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['register', 'common'])),
		},
	}
}

function MyHelperText({ message }) {
	const { error } = useFormControl() || {}

	return <FormHelperText sx={{ paddingBottom: 2 }}>{error ? message : ''}</FormHelperText>
}

const Register = (props) => {
	const { t } = useTranslation()
	const router = useRouter()
	const [error, seterror] = useState(0)
	const [errorMessage, seterrorMessage] = useState('')
	const [email, setemail] = useState('')
	const [username, setusername] = useState('')
	const [fname, setfname] = useState('')
	const [lname, setlname] = useState('')
	const [password, setpassword] = useState('')
	const [repassword, setrepassword] = useState('')
	const handleEmail = (event) => setemail(event.target.value)
	const handleUsername = (event) => setusername(event.target.value)
	const handleFname = (event) => setfname(event.target.value)
	const handleLname = (event) => setlname(event.target.value)
	const handlePassword = (event) => setpassword(event.target.value)
	const handleRepassword = (event) => setrepassword(event.target.value)
	const handleRegister = async () => {
		if ([email, username, fname, lname, password, repassword].filter((value) => value === '').length !== 0) {
			seterror(1)
			seterrorMessage('Please fill up all required fields.')
			return
		}
		if (password !== repassword) {
			seterror(2)
			seterrorMessage('Password does not match.')
			return
		}
		const response = await fetch(`${defaultConfig.apiEndpoint}v1/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email_address: email,
				username: username,
				first_name: fname,
				last_name: lname,
				password: password,
			}),
		})
		if (response.status === 201) {
			const data = await response.json()
			props.setAuth({ username, token: data.token })
			seterror(0)
			seterrorMessage('')
			router.push('/')
		} else {
			seterror(3)
			seterrorMessage('This account is already registered.')
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
					paddingY: 5,
				}}
			>
				<Stack sx={{ padding: 5, width: { xs: '100%', sm: '50%' } }} spacing={3} marginX="auto">
					<Typography variant="h3" fontWeight="bold" marginX="auto">
						{t('register:title')}
					</Typography>
					<FormControl error={error} required>
						<Stack spacing={1}>
							<TextField
								required
								error={(error && email.length === 0) || error === 3}
								id="email"
								label={t('register:input_field_0')}
								variant="outlined"
								onChange={handleEmail}
							/>
							<TextField
								required
								error={error && username.length === 0}
								label={t('register:input_field_1')}
								variant="outlined"
								onChange={handleUsername}
							/>
							<TextField
								required
								error={error && fname.length === 0}
								label={t('register:input_field_2')}
								variant="outlined"
								onChange={handleFname}
							/>
							<TextField
								required
								error={error && lname.length === 0}
								label={t('register:input_field_3')}
								variant="outlined"
								onChange={handleLname}
							/>
							<TextField
								required
								id="password"
								error={(error && password.length === 0) || error === 2}
								label={t('register:input_field_4')}
								variant="outlined"
								type="password"
								onChange={handlePassword}
							/>
							<TextField
								required
								id="repassword"
								error={(error && repassword.length === 0) || error === 2}
								label={t('register:input_field_5')}
								variant="outlined"
								type="password"
								onChange={handleRepassword}
							/>
							<MyHelperText message={errorMessage} />
							<Button
								sx={{ backgroundColor: '#28cd7e' }}
								size="large"
								variant="contained"
								fullWidth={false}
								onClick={handleRegister}
							>
								{t('register:title')}
							</Button>
						</Stack>
					</FormControl>
					<Typography align="center">
						{t('register:label_0')} <Link href="/login">{t('register:label_1')}</Link>
					</Typography>
				</Stack>
			</Container>
			<Footer />
		</>
	)
}

export default connect(mapAuthStateToProps, mapAuthDispatchToProps())(Register)
