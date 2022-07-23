/**
 * @NOTES:
 * 1. In development mode, we must to restart the server if we made any changes to it.
 */
const path = require('path')
const { i18n } = require('./next-i18next.config')

module.exports = {
	/**
	 * @REF:
	 * 1. List of locales by country: https://saimana.com/list-of-country-locale-code/
	 * 2. Go to i18nexus.com to manage the strings
	 * 3. Use cli command => i18nexus pull -k HgNHsDeXsZijo4z26ref7A
	 */
	i18n,

	eslint: {
		/**
		 * @NOTES:
		 * 1. This allows production builds to successfully complete even if your project has ESLint errors.
		 */
		ignoreDuringBuilds: true,
	},

	reactStrictMode: true,

	/**
	 * @NOTES:
	 * 1. Assign a special extention to all Pages js file. Any pages file without this extention will be redirected to default 404 page.
	 * 2. This is optional only.
	 */
	// pageExtensions: ['page.js'],

	env: {
		api_baseurl: process.env.API_BASEURL || 'http://localhost:8000',
		nodemailer_username: process.env.NODEMAILER_USERNAME,
		nodemailer_password: process.env.NODEMAILER_PASSWORD,
		stripe_publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
		internal_token: process.env.INTERNAL_TOKEN,
		apple: {
			client_id: process.env.APPLE_CLIENT_ID,
			redirect_url: process.env.APPLE_REDIRECT_URL,
		},
	},

	/**
	 * @NOTES:
	 * 1. This is setup to points image resources in cloudinary.
	 */
	/* 
		images: {
			domains: ['res.cloudinary.com'],
		}, 
	*/

	/**
	 * @NOTES:
	 * 1. Resolve relative paths to absolute paths.
	 * 2. Next JS automatically detect src as a route folder for all page files.
	 */
	webpack: (config) => {
		config.resolve.alias['src'] = path.join(__dirname, 'src')
		config.resolve.alias['rtk'] = path.join(__dirname, 'rtk')
		config.resolve.alias['lib'] = path.join(__dirname, 'lib')

		return config
	},

	/**
	 * @NOTES:
	 * 1. Redirect a specific page from a specific route.
	 * example: The example below, we assign  About Page in the home route. In this case, when user navigate Home Page he/she will be redirected to About Page.
	 * 2. This will be usefull if have a maintence and we redirect the users/visitors to maintenance page
	 */
	/* 
		async redirects() {
			return [
				{
					source: '/',
					destination: '/about',
					permanent: true,
				},
			]
		}, 
	*/
}
