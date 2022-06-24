import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		username: '',
		token: '',
	},
	reducers: {
		setAuth(state, action) {
			state.username = action.payload.username
			state.token = action.payload.token
		},
	},
	extraReducers: {},
})

export default authSlice
