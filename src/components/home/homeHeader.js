import * as React from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { Box, Container, Grid, Typography, Stack, InputBase, CardMedia } from '@mui/material'

import mapCheckerStateToProps from 'rtk/checker/state'
import mapCheckerDispatchToProps from 'rtk/checker/action'
import { LoadingButton } from '@mui/lab'
import { basicIMEICheck } from '../../utils/apiCallCollection'
import { useTranslation } from 'next-i18next'

const HomeHeader = (props) => {
	const router = useRouter()
	const { t } = useTranslation()

	const handleOnClick = async () => {
		props.setIsLoading(true)
		props.resetStep()

		if (!props.checker.imei) {
			props.setIsLoading(false)
			props.setSnackbarMessage('Please fill up the Enter IMEI/Serial Number.')
			props.setIsSnackbarOpen(true)

			return null
		}

		try {
			const data = await basicIMEICheck(props.checker.imei)

			if (data.status === 'failed') {
				props.setIMEICheckRequestStatus(data.status)
				props.setImeiSerialNumber('')
				props.setIsLoading(false)
				props.setSnackbarMessage('Please enter a valid IMEI/Serial Number.')
				props.setIsSnackbarOpen(true)

				return null
			}

			props.setPayload(data)
			props.setIMEICheckRequestStatus(data.status)
			props.setIsLoading(false)
			router.push('/imei-checker')
		} catch (error) {
			props.setIsLoading(false)
			props.setSnackbarMessage('Please enter a valid IMEI/Serial Number.')
			props.setIsSnackbarOpen(true)
		}
	}

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
									{t('home:firstSection_text_1')}
								</Typography>
								<Typography
									sx={{ color: '#fff', fontWeight: 400, mt: 2, fontSize: { xs: 12, sm: 15, md: 14, lg: 16 } }}
								>
									{t('home:firstSection_text_2')}
								</Typography>
								<Stack direction="row" justifyContent="center" sx={{ width: '100%' }} mt={3}>
									<InputBase
										placeholder={t('home:firstSection_field_1')}
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
									{t('home:firstSection_text_3')}
								</Typography>
								<LoadingButton
									loading={props.common.isLoading}
									sx={{
										backgroundColor: '#28cd7e',
										color: '#fff',
										borderRadius: 50,
										paddingX: 2,
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
									{t('home:firstSection_button_1')}
								</LoadingButton>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	)
}

export default connect(mapCheckerStateToProps, mapCheckerDispatchToProps())(HomeHeader)
