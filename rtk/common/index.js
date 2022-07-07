import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
	name: 'common',
	initialState: {
		isLoading: false,
		isSnackbarOpen: false,
		snackbarMessage: '',
		color: 'info',
	},
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setIsSnackbarOpen: (state, action) => {
			state.isSnackbarOpen = action.payload
		},
		setSnackbarMessage: (state, action) => {
			if (typeof action.payload === 'string') {
				state.snackbarMessage = action.payload
				state.color = 'info'
			} else if (typeof action.payload === 'object') {
				state.snackbarMessage = action.payload[0]
				state.color = action.payload[1]
			}
		},
	},
	extraReducers: {},
})

export default commonSlice
