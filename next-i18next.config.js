const path = require('path')

module.exports = {
	i18n: {
		locales: ['en', 'fr', 'es', 'ro', 'zh', 'ar'],
		defaultLocale: 'en',
		localePath: path.resolve('./public/locales'),
	},
}
