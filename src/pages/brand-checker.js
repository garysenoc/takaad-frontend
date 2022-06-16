import { Box, Container } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SelectBrand from 'src/components/brand-checker/selectBrand'
// import { DefaultLayout } from 'src/layout/default-layout'
import HomeHeader from 'src/components/home/homeHeader'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['brand-checker', 'common'])),
		},
	}
}

const BrandChecker = () => {
	return (
		<>
			<Navbar />
			<HomeHeader />
			<Box>
				<Container>
					<SelectBrand page="brand-checker" />
				</Container>
			</Box>
			<Footer />
		</>
	)
}

// BrandChecker.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default BrandChecker
