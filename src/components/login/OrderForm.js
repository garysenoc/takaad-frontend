import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import {
	Button,
	FormControl,
	FormHelperText,
	Link as MUILink,
	Stack,
	TextField,
	Typography,
	useFormControl,
} from '@mui/material'
import { connect } from 'react-redux'
import mapCommonDispatchToProps from 'rtk/common/action'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

function MyHelperText({ message }) {
	const { error } = useFormControl() || {}
	return <FormHelperText sx={{ paddingBottom: 2 }}>{error ? message : ''}</FormHelperText>
}

const LoginForm = ({ handlePageSwitch }) => {
	const router = useRouter()
	const { t } = useTranslation()
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [orderID, setUserID] = useState('')
	const handleUserIDChange = (event) => setUserID(event.target.value)

	const handleGetOrderInfo = async () => {
		try {
			const result = await fetch(`${process.env.api_baseurl}/v1/order/${orderID}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			})
			const data = await result.json()
			if (result.ok) {
				router.push({ pathname: `/order`, query: { order: JSON.stringify(data) } })
			} else {
				throw data
			}
		} catch (error) {
			setError(true)
			setErrorMessage('Invalid order id.')
		}
	}

	return (
		<Stack sx={{ padding: 5, width: { xs: '100%', sm: '50%' } }} spacing={3} marginX="auto">
			<Typography variant="h3" fontWeight="bold" marginX="auto">
				Order ID
			</Typography>
			<FormControl error={error}>
				<Stack spacing={1}>
					<Stack direction="column">
						<TextField
							required
							error={error}
							id="email"
							label={'Order ID'}
							variant="outlined"
							onChange={handleUserIDChange}
						/>
						<MyHelperText message={errorMessage} />
					</Stack>
					<Button
						disabled={orderID === ''}
						sx={{ backgroundColor: '#28cd7e' }}
						size="large"
						variant="contained"
						fullWidth={false}
						onClick={handleGetOrderInfo}
					>
						Get Order Info
					</Button>
				</Stack>
			</FormControl>
			<Typography align="center">
				{t('login:label_0')} <Link href="/register">{t('login:label_1')}</Link> or{' '}
				<MUILink sx={{ cursor: 'pointer' }} onClick={handlePageSwitch}>
					Log In
				</MUILink>
			</Typography>
		</Stack>
	)
}

export default connect(null, mapCommonDispatchToProps())(LoginForm)
