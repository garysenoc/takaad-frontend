import { combineReducers } from 'redux'

import authSlice from 'rtk/auth'
import languageSlice from 'rtk/language'
import commonSlice from 'rtk/common'
import checkerSlice from 'rtk/checker'
import cartSlice from 'rtk/cart'
import checkoutSlice from 'rtk/checkout'
import ordersSlice from 'rtk/orders'

const reducers = combineReducers({
	auth: authSlice.reducer,
	common: commonSlice.reducer,
	checker: checkerSlice.reducer,
	cart: cartSlice.reducer,
	checkout: checkoutSlice.reducer,
	language: languageSlice.reducer,
	orders: ordersSlice.reducer,
})

export default reducers
