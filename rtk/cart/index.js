import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		checkout_price: 0,
		final_checkout_price: 0,
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
			state.checkout_price = action.payload
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
		setFinalCheckoutPrice: (state, action) => {
			state.final_checkout_price = action.payload
		},
	},
	extraReducers: {},
})

export default cartSlice
