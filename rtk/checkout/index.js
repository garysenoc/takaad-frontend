import { createSlice } from '@reduxjs/toolkit'

export const checkoutSlice = createSlice({
	name: 'checkout',
	initialState: {
		billing_details: {
			first_name: '',
			last_name: '',
			country: '',
			line1: '',
			line2: '',
			city: '',
			state: '',
			zipcode: '',
			phone_number: '',
			email_address: '',
		},
		order_checkout: [],
		isAgreed: false,
		order_details: [],
	},
	reducers: {
		setBillingDetails: (state, action) => {
			state.billing_details[action.payload.field] = action.payload.value
		},
		setOderCheckout: (state, action) => {
			state.order_checkout.push(action.payload)
		},
		setIsAgreed: (state, action) => {
			state.isAgreed = action.payload
		},
		setOderDetails: (state, action) => {
			state.order_details.push(action.payload)
		},
		resetOrderDetails: (state, action) => {
			state.order_details = []
		},
	},
	extraReducers: {},
})

export default checkoutSlice
