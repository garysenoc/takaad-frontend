import { Fragment } from 'react'
import { Box, Container } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

// import { DefaultLayout } from 'src/layout/default-layout'
import TermsAndConditionsTitle from 'src/components/terms-and-conditions/title'
import { TermsAndConditionsData } from 'src/components/terms-and-conditions/data'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['terms-and-conditions', 'common'])),
		},
	}
}

const TermsAndConditions = () => {
	const { t } = useTranslation()

	const headers = ['At imeicheck.com', 'General Terms and Conditions', 'Refunds', 'Note']

	return (
		<>
			<Navbar />
			<TermsAndConditionsTitle />
			{TermsAndConditionsData.map((data, index) => {
				return (
					<Fragment key={index}>
						<Box sx={{ padding: { xs: '25px 0', sm: '25px 0', md: '25px 0', lg: '25px 0', xl: '25px 0' } }}>
							<Container>
								<h3>{t(`terms-and-conditions:terms_h${index + 1}`)}</h3>
								{data.title === headers[0] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`terms-and-conditions:terms_h1_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[1] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`terms-and-conditions:terms_h2_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[2] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`terms-and-conditions:terms_h3_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[3] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`terms-and-conditions:terms_h4_p${i + 1}`)}</p>
											</Fragment>
										)
									})}
							</Container>
						</Box>
					</Fragment>
				)
			})}
			<Footer />
		</>
	)
}

// TermsAndConditions.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default TermsAndConditions
