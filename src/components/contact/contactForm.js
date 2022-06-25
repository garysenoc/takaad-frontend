import React, { useState } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { Grid, Typography, Box, Button, InputBase, Snackbar, IconButton } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { TextareaAutosize } from '@mui/base'
import { useTranslation } from 'next-i18next'

import mapCommonStateToProps from 'rtk/common/state'
import mapCommonDispatchToProps from 'rtk/common/action'

const MessageTextField = styled(InputBase)({
	fontFamily: 'Nunito Sans',
	fontWeight: 400,
	color: '#a1adb2',
	borderColor: 'rgba(29,70,70,.5)',
	height: '45px',
	width: '100%',
	border: '1px solid #ddd',
	borderRadius: '5px',
	padding: '10px',
	'&:focus-within': {
		border: '2px solid #4080c0',
	},
})

const TextAreaField = styled(TextareaAutosize)({
	fontFamily: 'Nunito Sans!important',
	fontWeight: 400,
	color: '#a1adb2',
	borderColor: 'rgba(29,70,70,.5)',
	width: '100%',
	border: '1px solid #ddd',
	borderRadius: '5px',
	padding: '10px',
	outline: 'none!important',
	'&:focus': {
		border: '2px solid #4080c0',
	},
	'&::placeholder': {
		fontFamily: 'Nunito Sans!important',
		fontWeight: 400,
		fontSize: '15px',
		color: '#ddd',
	},
})

const SendButton = styled(Button)({
	fontSize: '18px',
	fontFamily: 'Nunito Sans',
	fontWeight: 400,
	lineHeight: 'normal',
	textTransform: 'capitalize',
	color: '#fff',
	backgroundColor: '#28cd7e',
	borderRadius: '40px',
	'&:hover': {
		backgroundColor: '#14a660',
	},
})

const ContactForm = (props) => {
	const [isLoading, setIsLoading] = useState(false)
	const [open, setOpen] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [successMessage, setSuccessMessage] = useState('')
	const { t } = useTranslation()

	const handleSubmit = async (e) => {
		e.preventDefault()

		setIsLoading(true)

		const requestPayload = {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: props.language.name,
				email: props.language.email,
				subject: props.language.subject,
				message: props.language.message,
			}),
		}

		const data = await fetch('/api/contact', requestPayload)
		const res = await data.json()

		if (data.ok) {
			setTimeout(() => Router.push('/', null, { shallow: true }), 3000)

			setIsLoading(false)

			props.resetEmailPayload({
				name: '',
				email: '',
				subject: '',
				message: '',
			})

			setSuccessMessage(res.message)

			setOpen(true)

			return
		}

		setIsLoading(false)

		setErrorMessage(res.message)

		setOpen(true)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
		resetMessages()
	}

	const resetMessages = () => {
		setErrorMessage('')
		setSuccessMessage('')
	}

	const action = (
		<React.Fragment>
			<Button color={errorMessage ? 'error' : 'success'} size="small" onClick={handleClose}>
				UNDO
			</Button>
			<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	)

	return (
		<>
			<Box sx={{ padding: { xs: '20px 15px', sm: '30px 20px', md: '40px 30px', lg: '50px 40px' } }}>
				<Box sx={{ marginBottom: { xs: '2rem', sm: '2rem', md: '2rem', lg: '3rem' } }}>
					<Typography
						variant="h2"
						sx={{
							fontFamily: 'Nunito Sans',
							fontWeight: 600,
							color: '#003056',
							fontSize: { xs: '22px', sm: '22px', md: '24px', lg: '27px' },
							lineHeight: { xs: '28px', md: '28px', md: '30px', lg: '34px' },
						}}
					>
						{t('contact:contactus_form_title')}
					</Typography>
				</Box>

				<Box>
					<Box>
						<Grid container justifyContent="center">
							<Grid item xs={12} sm={12} md={6}>
								<Box
									sx={{
										marginBottom: { xs: '25px', sm: '30px', md: '35px', lg: '50px' },
										paddingRight: { md: '25px' },
									}}
								>
									<MessageTextField
										variant="outlined"
										inputlabelprops={{
											shrink: true,
										}}
										placeholder={t('contact:field_name')}
										name="name"
										value={props.language.name}
										onChange={(e) => props.setEmailPayload([e.target.name, e.target.value])}
									/>
								</Box>
							</Grid>

							<Grid item xs={12} sm={12} md={6} lg={6}>
								<Box
									sx={{
										marginBottom: { xs: '25px', sm: '30px', md: '35px', lg: '50px' },
										paddingRight: { md: '25px' },
									}}
								>
									<MessageTextField
										inputlabelprops={{
											shrink: true,
										}}
										name="email"
										value={props.language.email}
										placeholder={t('contact:field_email')}
										onChange={(e) => props.setEmailPayload([e.target.name, e.target.value])}
									/>
								</Box>
							</Grid>

							{/* <Grid item xs={12} sm={12} md={6}>
								<Box
									sx={{
										marginBottom: { xs: '25px', sm: '30px', md: '35px', lg: '50px' },
										paddingRight: { md: '25px' },
									}}
								>
									<MessageTextField
										label="5 + 12 ="
										inputlabelprops={{
											shrink: true,
										}}
										placeholder="Enter the answer here"
									/>
								</Box>
							</Grid> */}

							<Grid item xs={12} sm={12} md={6} lg={12}>
								<Box
									sx={{
										marginBottom: { xs: '25px', sm: '30px', md: '35px', lg: '50px' },
										paddingRight: { md: '25px' },
									}}
								>
									<MessageTextField
										label="Subject"
										inputlabelprops={{
											shrink: true,
										}}
										name="subject"
										value={props.language.subject}
										placeholder={t('contact:field_subject')}
										onChange={(e) => props.setEmailPayload([e.target.name, e.target.value])}
									/>
								</Box>
							</Grid>

							<Grid item xs={12}>
								<Box
									sx={{
										marginBottom: { xs: '25px', sm: '30px', md: '35px', lg: '25px' },
										paddingRight: { md: '25px' },
									}}
								>
									<TextAreaField
										label="Message"
										inputlabelprops={{
											shrink: true,
										}}
										aria-label="minimum height"
										minRows={10}
										name="message"
										value={props.language.message}
										placeholder={t('contact:field_message')}
										onChange={(e) => props.setEmailPayload([e.target.name, e.target.value])}
									/>
								</Box>
							</Grid>
						</Grid>

						<Box
							sx={{
								textAlign: 'center',
							}}
						>
							<SendButton
								sx={{
									padding: { xs: '12px 20px', md: '12px 20px', lg: '14px 25px' },
									minWidth: { xs: '220px', sm: '220px', md: '220px' },
								}}
								onClick={handleSubmit}
							>
								{isLoading ? <CircularProgress size="1.3em" sx={{ color: '#fff' }} /> : t('common:btn_contact_us')}
							</SendButton>
						</Box>
					</Box>
				</Box>
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
					message={errorMessage || successMessage}
					action={action}
				/>
			</Box>
		</>
	)
}

export default connect(mapCommonStateToProps, mapCommonDispatchToProps())(ContactForm)
