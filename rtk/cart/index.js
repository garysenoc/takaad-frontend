import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		subtotal: 0,
		discount: 0,
		total: 0,
		selectedPayment: '',
		coupon: null,
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
			state.subtotal = action.payload.subtotal
			state.discount = action.payload.discount
			state.total = action.payload.total
		},
		setSelectedPayment: (state, action) => {
			state.selectedPayment = action.payload
		},
		setCoupon: (state, action) => {
			state.coupon = action.payload
		},
		clearCoupon: (state) => {
			state.coupon = null
		},
	},
	extraReducers: {},
})

export default cartSlice
