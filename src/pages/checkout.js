import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { connect } from 'react-redux'
import { Container, Box } from '@mui/material'

// import { DefaultLayout } from 'src/layout/default-layout'
import CheckoutInfo from 'src/components/imei-checker/checkoutInfo'
import GuardCheckoutPage from 'lib/guard.checkout'
import mapCheckoutStateToProps from 'rtk/checkout/state'
import mapCheckoutDispatchToProps from 'rtk/checkout/action'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export const getServerSideProps = async (ctx) => {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['common'])),
		},
	}
}

const Checkout = GuardCheckoutPage(() => {
	return (
		<>
			<Navbar />
			<Box my={4}>
				<Container>
					<CheckoutInfo />
				</Container>
			</Box>
			<Footer />
		</>
	)
})

// Checkout.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default connect(mapCheckoutStateToProps, mapCheckoutDispatchToProps())(Checkout)
