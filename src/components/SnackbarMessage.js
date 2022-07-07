import React from 'react'
import { Alert, Snackbar } from '@mui/material'

import mapCommonStateToProps from 'rtk/common/state'
import mapCommonDispatchToProps from 'rtk/common/action'
import { connect } from 'react-redux'

const SnackbarMessage = ({ children, ...props }) => {
	const handleClose = (_, reason) => {
		if (reason === 'clickaway') {
			return
		}

		props.setIsSnackbarOpen(false)
		props.setSnackbarMessage(['', 'info'])
	}

	return (
		<>
			{children}
			<Snackbar open={props.common.isSnackbarOpen} autoHideDuration={10000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={props.common.color}>
					{props.common.snackbarMessage}
				</Alert>
			</Snackbar>
		</>
	)
}

export default connect(mapCommonStateToProps, mapCommonDispatchToProps())(SnackbarMessage)