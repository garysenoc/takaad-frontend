import { createSlice } from '@reduxjs/toolkit'

export const ordersSlice = createSlice({
	name: 'orders',
	initialState: {
		order_metadata: [],
		order_data: [],
	},
	reducers: {
		setMetadata: (state, action) => {
			action.payload.map((data) => state.order_metadata.push(data))
		},
		addOrderData: (state, action) => {
			state.order_data.push(action.payload)
		},
		clearOrders: (state) => {
			state.order_metadata = []
			state.order_data = []
		},
	},
	extraReducers: {},
})

export default ordersSlice
