import { createSlice } from '@reduxjs/toolkit'

export const ordersSlice = createSlice({
	name: 'orders',
	initialState: {
		order_data: [],
	},
	reducers: {
		setOrderData: (state, action) => {
			state.order_data.push(action.payload)
		},
	},
	extraReducers: {},
})

export default ordersSlice
