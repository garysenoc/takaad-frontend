import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		username: '',
		token: '',
		isLoggedIn: false,
	},
	reducers: {
		setAuth(state, action) {
			state.username = action.payload.username
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		logOut(state) {
			state.username = ''
			state.token = ''
			state.isLoggedIn = false
		},
	},
	extraReducers: {},
})

export default authSlice
