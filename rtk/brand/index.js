import { createSlice } from '@reduxjs/toolkit'

export const brandSlice = createSlice({
	name: 'cart',
	initialState: {
		id: '',
		infos: [],
		instructions: [],
		label: '',
		price: 0,
	},
	reducers: {
		setBrand: (state, action) => {
			state.id = action.payload.id
			state.infos = action.payload.infos
			state.instructions = action.payload.instructions
			state.label = action.payload.label
			state.price = action.payload.price
		},
		// clearItem: (state, action) => {
		// 	state.items = state.items.filter((item) => item.details.imei !== action.payload)
		// },
		// clearItems: (state) => {
		// 	state.items = []
		// },
		// setCheckoutPrice: (state, action) => {
		// 	state.subtotal = action.payload.subtotal
		// 	state.discount = action.payload.discount
		// 	state.total = action.payload.total
		// },
		// setSelectedPayment: (state, action) => {
		// 	state.selectedPayment = action.payload
		// },
		// setCoupon: (state, action) => {
		// 	state.coupon = action.payload
		// },
	},
	extraReducers: {},
})

export default brandSlice
