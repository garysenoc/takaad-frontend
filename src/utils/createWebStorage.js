import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
	return {
		getItem() {
			return Promise.resolve(null)
		},
		setItem(_key, value) {
			return Promise.resolve(value)
		},
		removeItem() {
			return Promise.resolve()
		},
	}
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default storage

/**
 * This snippets solves the issue: "redux-persist failed to create sync storage. falling back to noop storage.
 * Reference: https://github.com/vercel/next.js/discussions/15687#discussioncomment-45319
 */
