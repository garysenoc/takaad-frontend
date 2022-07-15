import { Container, Grid, Box } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// import { DefaultLayout } from 'src/layout/default-layout'
import Header from 'src/components/contact/header'
import SocialContactList from 'src/components/contact/socialContactList'
import ContactForm from 'src/components/contact/contactForm'
import { socialContacts } from 'src/components/contact/data'

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['contact', 'common'])),
		},
	}
}

const Contact = () => {
	return (
		<>
			<Box sx={{ padding: { xs: '50px 0', sm: '50px 0', md: '50px 0', lg: '80px 0' } }}>
				<Container>
					<Header />
					<Box
						sx={{
							border: '1px solid #e2e2e2',
							borderRadius: '15px',
							overflow: 'hidden',
							marginTop: { xs: '25px', sm: '40px', md: '40px', lg: '50px' },
						}}
					>
						<Grid container justifyContent="center">
							<Grid item xs={12} sm={12} md={5}>
								<SocialContactList socialContacts={socialContacts} />
							</Grid>
							<Grid item xs={12} sm={12} md={7}>
								<ContactForm />
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</>
	)
}

// Contact.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Contact
