import { createSlice } from '@reduxjs/toolkit'

export const ordersSlice = createSlice({
	name: 'orders',
	initialState: {
		order_metadata: [],
		order_data: [],
	},
	reducers: {
		setMetadata: (state, action) => {
			state.order_metadata = [...action.payload]
		},
		addOrderData: (state, action) => {
			state.order_data.push(action.payload)
		},
		clearOrders: (state) => {
			state.order_data = []
		},
	},
	extraReducers: {},
})

export default ordersSlice
