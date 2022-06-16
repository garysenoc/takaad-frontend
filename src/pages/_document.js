import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'

import theme from 'src/styles/theme'
import createEmotionCache from 'src/utils/createEmotionCache'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content={theme.palette.primary.main} />
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					{/* <meta
						httpEquiv="X-UA-Compatible"
						content="IE=edge; script-src 'nonce-xyz123'; style-src 'nonce-xyz123'; img-src 'nonce-xyz123' data: *.paypal.com www.paypalobjects.com"
					/> */}
					<meta name="robots" content="noindex" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;900&display=swap"
						rel="stylesheet"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" />
					{this.props.emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* <script
						src="https://www.paypal.com/sdk/js?client-id=AVjWrJxBXbMNrtfESk2IR_lq8RWHv0Md7u6uK-EhAOD79dWXyn6VrfHvZOiCsupgE33RvON1HsXB8nS3"
						data-csp-nonce="xyz-123"
					/> */}
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage

	const cache = createEmotionCache()

	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />
				},
		})

	const initialProps = await Document.getInitialProps(ctx)

	const emotionStyles = extractCriticalToChunks(initialProps.html)
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	))

	return {
		...initialProps,
		emotionStyleTags,
	}
}
