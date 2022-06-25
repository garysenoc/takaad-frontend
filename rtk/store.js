import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import storage from 'src/utils/createWebStorage'
import reducers from 'rtk/reducers'
// import SetTransform from './transform'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'language', 'cart', 'checkout', 'orders'],
	// blacklist: ['auth', 'common'],
	// transforms: [SetTransform],
}

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(...middleware))
	}

	return applyMiddleware(...middleware)
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, bindMiddleware([thunk]))

export const persistor = persistStore(store)

export default store

/**
 * @Notes:
 * blacklist => slices that are not being persisted
 * whitelist => slices that are being persisted
 */
