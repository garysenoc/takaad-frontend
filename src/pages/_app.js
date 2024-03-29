import * as React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { appWithTranslation } from 'next-i18next'

// import { DefaultLayout } from 'src/layout/default-layout'
import store, { persistor } from 'rtk/store'
import theme from 'src/styles/theme'
import createEmotionCache from 'src/utils/createEmotionCache'
import 'src/styles/style.css'
import SnackbarMessage from '../components/SnackbarMessage'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const MyApp = (props) => {
	const stripePromise = loadStripe(process.env.stripe_publishable_key)
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	// const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Online mobile IMEI checker</title>
				<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />
			</Head>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<Elements stripe={stripePromise}>
							{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
							<CssBaseline />
							{/* {getLayout(<Component {...pageProps} />)} */}
							<SnackbarMessage>
								<Navbar />
								<Component {...pageProps} />
								<Footer />
							</SnackbarMessage>
						</Elements>
					</PersistGate>
				</Provider>
			</ThemeProvider>
		</CacheProvider>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
}

export default appWithTranslation(MyApp)
