import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// import { DefaultLayout } from 'src/layout/default-layout'
import HomeHeader from 'src/components/home/homeHeader'
import SecondSection from 'src/components/home/secondSection'
import ThirdSection from 'src/components/home/thirdSection'
import FourthSection from 'src/components/home/fourthSection'
import FifthSection from 'src/components/home/fifthSection'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['home', 'contact', 'common'])),
		},
	}
}

const Index = () => {
	return (
		<>
			<HomeHeader />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
		</>
	)
}

// Index.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Index
