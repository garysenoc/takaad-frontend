import { useState } from 'react'
import { Box, Container, Typography, Card, CardContent, IconButton, Collapse } from '@mui/material'
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

// import { DefaultLayout } from 'src/layout/default-layout'
import { questions } from 'src/components/faq/data'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

const ExpandMore = styled((props) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}))

export async function getServerSideProps(ctx) {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['faq', 'common'])),
		},
	}
}

const Faq = () => {
	const { t } = useTranslation()
	const [activeQuestion, setActiveQuestion] = useState(0)

	return (
		<>
			<Navbar />
			<Box sx={{ padding: { xs: '40px 0', sm: '50px 0', md: '50px 0', lg: '80px 0' } }}>
				<Container>
					<Box sx={{ textAlign: 'center', marginBottom: { xs: '5px', sm: '10px', md: '10px' } }}>
						<Typography
							sx={{
								fontFamily: 'Nunito Sans',
								color: '#003056',
								fontWeight: 400,
								fontSize: { xs: '24px', sm: '32px', md: '32px', lg: '44px' },
								lineHeight: { xs: '28px', sm: '40px', md: '40px', lg: '52px' },
							}}
						>
							{t('faq:faq_header_1')}&nbsp;
							<span style={{ fontWeight: 900 }}>{t('faq:faq_header_2')}</span>
						</Typography>
					</Box>
					<Box mt={5}>
						{questions.map((question, index) => (
							<Card key={index}>
								<CardContent
									sx={{ backgroundColor: 'rgba(0,0,0,.03)', cursor: 'pointer' }}
									onClick={() => setActiveQuestion(activeQuestion === question.id ? 0 : question.id)}
								>
									<Typography
										sx={{
											fontFamily: 'Nunito Sans',
											color: '#4080c0',
											fontWeight: 400,
											fontSize: { xs: '16px', sm: '18px', md: '20px' },
										}}
									>
										{t(`faq:faq_q${index + 1}`)}
										<ExpandMore
											expand={activeQuestion === question.id}
											aria-expanded={activeQuestion === question.id}
											aria-label="show more"
										>
											<ExpandMoreIcon sx={{ color: '#4080c0' }} />
										</ExpandMore>
									</Typography>
								</CardContent>
								<Collapse in={activeQuestion === question.id} timeout="auto" unmountOnExit>
									<CardContent>
										<Typography
											sx={{
												fontFamily: 'Nunito Sans',
												color: '#202223',
												fontWeight: 400,
												fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' },
											}}
										>
											{t(`faq:faq_a${index + 1}`)}
										</Typography>
									</CardContent>
								</Collapse>
							</Card>
						))}
					</Box>
				</Container>
			</Box>
			<Footer />
		</>
	)
}

// Faq.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Faq
