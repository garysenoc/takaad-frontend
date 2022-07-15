import { Box, Container } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// import { DefaultLayout } from 'src/layout/default-layout'
import Header from 'src/components/pricing/header'
import PricingList from 'src/components/pricing/pricingList'
import PaymentBranch from 'src/components/pricing/paymentBranch'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['pricing', 'common'])),
		},
	}
}

const Pricing = () => {
	return (
		<>
			<Box sx={{ padding: { xs: '40px 0', sm: '50px 0', md: '70px 0', lg: '90px 0' } }}>
				<Container>
					<Box>
						<Header />
						<PricingList />
						<PaymentBranch />
					</Box>
				</Container>
			</Box>
		</>
	)
}

// Pricing.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Pricing
