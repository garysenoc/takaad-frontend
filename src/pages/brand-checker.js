import { Box, Container } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SelectBrand from 'src/components/brand-checker/selectBrand'
// import { DefaultLayout } from 'src/layout/default-layout'
import HomeHeader from 'src/components/home/homeHeader'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['home', 'common'])),
		},
	}
}

const BrandChecker = () => {
	return (
		<>
			<HomeHeader />
			<Box>
				<Container>
					<SelectBrand page="brand-checker" />
				</Container>
			</Box>
		</>
	)
}

// BrandChecker.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default BrandChecker
