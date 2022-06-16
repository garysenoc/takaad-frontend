import { Fragment } from 'react'
import { Box, Container } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

// import { DefaultLayout } from 'src/layout/default-layout'
import PrivacyPolicyTitle from 'src/components/privacy-policy/title'
import { PrivacyPolicyData } from 'src/components/privacy-policy/data'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['privacy-policy', 'common'])),
		},
	}
}

const PrivacyPolicy = () => {
	const { t } = useTranslation()

	const headers = [
		'At imeicheck.com',
		'Free Checks Privacy Policy / Data Collection',
		'Paid Checks Privacy Policy / Data Collection',
		'Google reCAPTCHA Privacy Policy',
		'Data Collected',
		'User of the Data',
		'Sharing of Data',
		'Cookies Policy',
		'What are cookies?',
		'How imei.com uses cookies',
		'Opt-out, Communication Preferences',
		'Security',
		'About Children',
		'Changes to the Privacy Policy',
	]

	return (
		<>
			<Navbar />
			<PrivacyPolicyTitle />
			{PrivacyPolicyData.map((data, index) => {
				return (
					<Fragment key={index}>
						<Box sx={{ padding: { xs: '25px 0', sm: '25px 0', md: '25px 0', lg: '25px 0', xl: '25px 0' } }}>
							<Container>
								<h3>{t(`privacy-policy:privacy_h${index + 1}`)}</h3>
								{data.title === headers[0] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h1_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[1] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h2_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[2] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h3_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[3] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h4_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[4] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h5_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[5] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h6_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[6] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h7_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[7] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h8_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[8] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h9_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[9] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h10_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[10] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h11_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[11] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h12_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[12] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h13_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[13] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h14_p${i + 1}`)}</p>
											</Fragment>
										)
									})}

								{data.title === headers[14] &&
									data.paragraph.map((p, i) => {
										return (
											<Fragment key={i}>
												<p>{t(`privacy-policy:privacy_h15_p${i + 1}`)}</p>
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

// PrivacyPolicy.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default PrivacyPolicy
