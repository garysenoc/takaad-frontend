import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// import { DefaultLayout } from 'src/layout/default-layout'
import AboutTitle from 'src/components/about/title'

export async function getServerSideProps(context) {
	return {
		props: {
			...(await serverSideTranslations(context.locale, ['about', 'common'])),
		},
	}
}

const About = () => {
	return (
		<>
			<AboutTitle />
		</>
	)
}

// About.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default About
