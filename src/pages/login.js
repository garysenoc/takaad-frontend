import React, { useState } from 'react'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'
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
			<Navbar />
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
			<Footer />
		</>
	)
}

export default Login
