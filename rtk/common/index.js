import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
	name: 'common',
	initialState: {
		isLoading: false,
		isSnackbarOpen: false,
		snackbarMessage: '',
	},
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setIsSnackbarOpen: (state, action) => {
			state.isSnackbarOpen = action.payload
		},
		setSnackbarMessage: (state, action) => {
			state.snackbarMessage = action.payload
		},
	},
	extraReducers: {},
})

export default commonSlice
