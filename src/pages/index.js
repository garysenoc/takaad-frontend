import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// import { DefaultLayout } from 'src/layout/default-layout'
import HomeHeader from 'src/components/home/homeHeader'
import SecondSection from 'src/components/home/secondSection'
import ThirdSection from 'src/components/home/thirdSection'
import FourthSection from 'src/components/home/fourthSection'
import FifthSection from 'src/components/home/fifthSection'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

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
			<Navbar />
			<HomeHeader />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<Footer />
		</>
	)
}

// Index.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Index
