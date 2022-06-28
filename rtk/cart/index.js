import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		checkout_price: 0,
		selectedPayment: '',
	},
	reducers: {
		addItems: (state, action) => {
			state.items.push(action.payload)
		},
		clearItem: (state, action) => {
			state.items = state.items.filter((item) => item.details.imei !== action.payload)
		},
		clearItems: (state) => {
			state.items = []
		},
		setCheckoutPrice: (state, action) => {
			state.checkout_price = action.payload
		},
		setSelectedPayment: (state, action) => {
			state.selectedPayment = action.payload
		},
	},
	extraReducers: {},
})

export default cartSlice
