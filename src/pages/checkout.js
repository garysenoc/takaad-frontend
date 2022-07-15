import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { connect } from 'react-redux'
import { Container, Box } from '@mui/material'

// import { DefaultLayout } from 'src/layout/default-layout'
import CheckoutInfo from 'src/components/imei-checker/checkoutInfo'
import GuardCheckoutPage from 'lib/guard.checkout'
import mapCheckoutStateToProps from 'rtk/checkout/state'
import mapCheckoutDispatchToProps from 'rtk/checkout/action'

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
			<Box my={4}>
				<Container>
					<CheckoutInfo />
				</Container>
			</Box>
		</>
	)
})

// Checkout.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default connect(mapCheckoutStateToProps, mapCheckoutDispatchToProps())(Checkout)
