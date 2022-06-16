import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
	name: 'common',
	initialState: {
		isLoading: false,
		isError: false,
		errorMessage: '',
	},
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload
		},
		setIsError: (state, action) => {
			state.isError = action.payload
		},
		setErrorMessage: (state, action) => {
			state.errorMessage = action.payload
		},
	},
	extraReducers: {},
})

export default commonSlice
