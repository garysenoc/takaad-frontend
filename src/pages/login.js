import React, { useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container } from '@mui/material'
import LoginForm from '../components/login/LoginForm'
import OrderForm from '../components/login/OrderForm'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['login', 'common'])),
		},
	}
}

const Login = () => {
	const [isOrder, setIsOrder] = useState(false)
	const handlePageSwitch = () => setIsOrder((prev) => !prev)

	return (
		<>
			<Container
				sx={{
					height: '100vh',
					marginY: 5,
				}}
			>
				{isOrder ? (
					<OrderForm handlePageSwitch={handlePageSwitch} />
				) : (
					<LoginForm handlePageSwitch={handlePageSwitch} />
				)}
			</Container>
		</>
	)
}

export default Login
