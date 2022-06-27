import React from 'react'
import { IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import mapCommonStateToProps from 'rtk/common/state'
import mapCommonDispatchToProps from 'rtk/common/action'
import { connect } from 'react-redux'

const ErrorSnackbar = ({ children, ...props }) => {
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		props.setIsSnackbarOpen(false)
		props.setSnackbarMessage('')
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
			{children}
			<Snackbar
				open={props.common.isSnackbarOpen}
				autoHideDuration={6000}
				onClose={handleClose}
				message={props.common.snackbarMessage}
				action={action}
			/>
		</>
	)
}

export default connect(mapCommonStateToProps, mapCommonDispatchToProps())(ErrorSnackbar)
