import { createSlice } from '@reduxjs/toolkit'

export const checkerSlice = createSlice({
	name: 'checker',
	initialState: {
		imei: '',
		payload: null,
		status: null,
		selectedGlosarry: '',
		step: 0,
		isFinishedStep: false,
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
		setStep: (state, action) => {
			if (typeof action.payload === 'function') {
				state.step = action.payload(state.step)
			} else {
				state.step = action.payload
			}
		},
		resetStep: (state) => {
			state.step = 0
			state.isFinishedStep = false
			state.payload = null
		},
		finishedStep: (state) => {
			state.isFinishedStep = true
		},
	},
	extraReducers: {},
})

export default checkerSlice
