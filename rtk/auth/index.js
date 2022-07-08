import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		id: '',
		username: '',
		token: '',
		isLoggedIn: false,
	},
	reducers: {
		setAuth(state, action) {
			state.id = action.payload.id
			state.username = action.payload.username
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		logOut(state) {
			state.id = ''
			state.username = ''
			state.token = ''
			state.isLoggedIn = false
		},
	},
	extraReducers: {},
})

export default authSlice
