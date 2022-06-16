import { createSlice } from '@reduxjs/toolkit'

import { languages } from 'src/components/navbar/data'

export const languageSlice = createSlice({
	name: 'language',
	initialState: {
		activeLanguage: languages[0],
		name: '',
		email: '',
		subject: '',
		message: '',
	},
	reducers: {
		setActiveLanguage: (state, action) => {
			state.activeLanguage = action.payload
		},
		setEmailPayload: (state, action) => {
			state[action.payload[0]] = action.payload[1]
		},
		resetEmailPayload: (state, action) => {
			state.name = action.payload.name
			state.email = action.payload.email
			state.subject = action.payload.subject
			state.message = action.payload.message
		},
	},
	extraReducers: {},
})

export default languageSlice
