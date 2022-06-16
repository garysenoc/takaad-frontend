import * as React from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { Box, Container, Grid, Typography, Stack, InputBase, CardMedia, Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import { LoadingButton } from '@mui/lab'

const HomeHeader = (props) => {
	const router = useRouter()

	const handleOnClick = async () => {
		props.setIsLoading(true)

		if (!props.checker.imei) {
			props.setIsLoading(false)
			props.setErrorMessage('Please fill up the Enter IMEI/Serial Number.')
			props.setIsError(true)

			return null
		}

		try {
			const data = await fetch(
				`${process.env.imei_baseurl}create?key=${process.env.imei_access_key}&service=10&imei=${props.checker.imei}`,
			)

			const response = await data.json()

			if (response.status === 'failed') {
				props.setIMEICheckRequestStatus(response.status)
				props.setImeiSerialNumber('')
				props.setIsLoading(false)
				props.setErrorMessage('Please enter a valid IMEI/Serial Number.')
				props.setIsError(true)

				return null
			}

			props.setPayload(response)
			props.setIMEICheckRequestStatus(response.status)
			props.setIsLoading(false)
			router.push('/imei-checker')
		} catch (error) {
			props.setIsLoading(false)
			props.setErrorMessage('Please enter a valid IMEI/Serial Number.')
			props.setIsError(true)
		}
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		props.setIsError(false)
	}

	const action = (
		<React.Fragment>
			<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	)

	return (
		<>
			<Box sx={{ backgroundColor: '#003056', p: { xs: '20px 0', sm: '50px 0', md: '130px 0', lg: '150px 0' } }}>
				<Container sx={{ position: 'relative' }}>
					<CardMedia
						component="img"
						image="images/Group-48.png"
						sx={{
							position: 'absolute',
							display: { xs: 'none', md: 'block' },
							top: 30,
							width: { md: 240, lg: 270 },
						}}
					/>
					<Grid container justifyContent="center" sx={{ height: '100%' }} spacing={2}>
						<Grid
							item
							sm={12}
							md={6}
							display="flex"
							justifyContent="center"
							alignItems="center"
							sx={{ order: { xs: 1, sm: 1, md: 2 } }}
						>
							<Box textAlign="center" sx={{ width: '100%' }}>
								<Typography sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: 24, sm: 26, md: 28, lg: 34 } }}>
									{`Enter Your Device's 15-Digit IMEI Or Serial Number`}
								</Typography>
								<Typography
									sx={{ color: '#fff', fontWeight: 400, mt: 2, fontSize: { xs: 12, sm: 15, md: 14, lg: 16 } }}
								>
									All Devices supported, including Apple, iPhone, Huawei and Samsung.
								</Typography>
								<Stack direction="row" justifyContent="center" sx={{ width: '100%' }} mt={3}>
									<InputBase
										placeholder="Enter IMEI or Serial Number"
										sx={{
											width: { xs: '100%', sm: '60%', md: '100%' },
											color: '#fff',
											textAlign: 'center !important',
											py: 1,
											pl: 2,
											pr: 3,
											fontWeight: 400,
											border: '1px solid #81b0d5',
											borderRadius: 50,
											fontSize: { xs: 12, sm: 15, md: 14, lg: 16 },
										}}
										value={props.checker.imei}
										onChange={(e) => props.setImeiSerialNumber(e.target.value.replaceAll(/\s/g, ''))}
									/>
								</Stack>
								<Typography
									sx={{
										color: '#dedede',
										fontStyle: 'italic',
										fontWeight: 400,
										fontSize: { xs: 12, sm: 15, md: 14, lg: 16 },
									}}
								>
									Dial *#06# to get your phones IMEI number
								</Typography>
								<LoadingButton
									loading={props.common.isLoading}
									sx={{
										backgroundColor: '#28cd7e',
										color: '#fff',
										borderRadius: 50,
										mt: 3,
										textTransform: 'capitalize',
										height: 'auto',
										minWidth: { xs: 120, sm: 160, md: 150, lg: 190 },
										fontSize: { xs: 12, sm: 15, md: 15, lg: 18 },
										'&:hover': {
											backgroundColor: '#1ea665',
										},
									}}
									endIcon={
										<CardMedia
											component="img"
											image="images/smile.png"
											sx={{
												width: { xs: 12, sm: 15, md: 15, lg: 18 },
												ml: { xs: '-5px', sm: '-4px' },
												display: props.common.isLoading ? 'none' : 'unset',
											}}
										/>
									}
									onClick={handleOnClick}
								>
									Get Device Info
								</LoadingButton>
								<Snackbar
									open={props.common.isError}
									autoHideDuration={6000}
									onClose={handleClose}
									message={props.common.errorMessage}
									action={action}
								/>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	)
}

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(HomeHeader)
