import { createSlice } from '@reduxjs/toolkit'

export const checkerSlice = createSlice({
	name: 'checker',
	initialState: {
		imei: '',
		payload: null,
		status: null,
		selectedGlosarry: '',
	},
	reducers: {
		setImeiSerialNumber: (state, action) => {
			state.imei = action.payload
		},
		setPayload: (state, action) => {
			state.payload = action.payload
		},
		setIMEICheckRequestStatus: (state, action) => {
			state.status = action.payload
		},
		setSelectedGlosarry: (state, action) => {
			state.selectedGlosarry = action.payload
		},
	},
	extraReducers: {},
})

export default checkerSlice
