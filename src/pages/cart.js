import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Container } from '@mui/material'

// import { DefaultLayout } from 'src/layout/default-layout'
import ViewCart from 'src/components/imei-checker/viewCart'

export const getServerSideProps = async (ctx) => {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['common'])),
		},
	}
}

const Cart = () => {
	return (
		<>
			<Box sx={{ minHeight: { xs: '66.9vh', sm: '72vh', md: '70.2vh', lg: '72.6vh', xl: '84.7vh' }, my: 2 }}>
				<Container>
					<ViewCart />
				</Container>
			</Box>
		</>
	)
}

// Cart.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Cart
