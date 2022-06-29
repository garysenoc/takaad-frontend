import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Box, Button, Container, Step, StepLabel, Stepper, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import GuardImeiCheckerPage from 'lib/guard-imei-checker'
import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
// import { DefaultLayout } from 'src/layout/default-layout'
import Services from 'src/components/imei-checker/services'
import ViewCart from 'src/components/imei-checker/viewCart'
import CheckoutInfo from 'src/components/imei-checker/checkoutInfo'
import Navbar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export const getServerSideProps = async (ctx) => {
	return {
		props: {
			...(await serverSideTranslations(ctx.locale, ['common'])),
		},
	}
}

const ImeiChecker = GuardImeiCheckerPage((props) => {
	const [skipped, setSkipped] = useState(new Set())
	const steps = ['Services', 'Cart', 'Checkout']

	const isStepSkipped = (step) => {
		return skipped.has(step)
	}

	const handleNext = () => {
		let newSkipped = skipped

		if (isStepSkipped(props.checker.step)) {
			newSkipped = new Set(newSkipped.values())
			newSkipped.delete(props.checker.step)
		}

		props.setStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped(newSkipped)
	}

	const handleBack = () => {
		props.setStep((prevActiveStep) => prevActiveStep - 1)
	}

	return (
		<>
			<Navbar />
			<Box
				sx={{
					minHeight: { xs: '71vh', sm: '76vh', md: '74vh', lg: '76vh', xl: '87vh' },
					padding: { xs: '40px 0', sm: '50px 0', md: '80px 0' },
				}}
			>
				<Container>
					<Box sx={{ width: '100%' }}>
						<Stepper activeStep={props.checker.step}>
							{steps.map((label, index) => {
								const stepProps = {}
								const labelProps = {}
								if (isStepSkipped(index)) {
									stepProps.completed = false
								}
								return (
									<Step key={label} {...stepProps}>
										<StepLabel {...labelProps}>
											<Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{label}</Typography>
										</StepLabel>
										<Typography sx={{ fontSize: 12, display: { xs: 'block', sm: 'none' } }}>{label}</Typography>
									</Step>
								)
							})}
						</Stepper>
						<Fragment>
							{props.checker.step === 0 && (
								<Box mt={5}>
									<Services nextStep={handleNext} />
								</Box>
							)}
							{props.checker.step === 1 && (
								<Box mt={5}>
									<ViewCart nextStep={handleNext} />
								</Box>
							)}
							{props.checker.step === 2 && (
								<Box mt={5}>
									<CheckoutInfo nextStep={handleNext} />
								</Box>
							)}
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Button
									color="inherit"
									disabled={props.checker.step === 0}
									onClick={handleBack}
									sx={{
										mr: 1,
										fontFamily: 'Nunito Sans',
										fontWeight: 400,
										color: '#fff',
										backgroundColor: '#242424',
										textTransform: 'capitalize',
										fontSize: { xs: 16, md: 16, lg: 18 },
										'&:hover': {
											backgroundColor: '#212121',
										},
										display: props.checker.step === 0 ? 'none' : '',
									}}
									startIcon={<ArrowBackIcon />}
								>
									Back
								</Button>
							</Box>
						</Fragment>
					</Box>
				</Container>
			</Box>
			<Footer />
		</>
	)
})

// ImeiChecker.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(ImeiChecker)
