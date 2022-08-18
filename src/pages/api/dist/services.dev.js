'use strict'
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', { value: true })
exports['default'] = void 0
var _renderFormattedDate = require('../../../utils/renderFormattedDate')
var _nodemailer = _interopRequireDefault(require('nodemailer'))
var sendMail = function sendMail(req, res) {
	var _req$body = req.body,
		date = _req$body.date,
		discount = _req$body.discount,
		email = _req$body.email,
		first_name = _req$body.first_name,
		order_data = _req$body.order_data,
		payment_method = _req$body.payment_method,
		price = _req$body.price,
		service = _req$body.service,
		subtotal = _req$body.subtotal,
		total = _req$body.total,
		_id = _req$body._id
	var tableStyle = 'padding: 1rem; border: 1px solid black; border-collapse: collapse;'
	var servicePricing = new Map()
	service.map(function (serviceName, index) {
		var data = servicePricing.get(serviceName)
		servicePricing.set(serviceName, {
			name: serviceName,
			quantity: 1 + (data ? data.quantity : 0),
			price: price[index] + (data ? data.price : 0),
		})
	})
	var mailOptions = {
		from: process.env.nodemailer_username,
		to: ''.concat(email),
		subject: 'Taakad All in One Information',
		html: '\n\t\t<div style="margin: 0; padding: 0; box-sizing: border-box">\n\t\t\t<div\n\t\t\tstyle="\n\t\t\tbackground-color: rgba(8, 8, 8, 0.9);\n\t\t\tcolor: whitesmoke;\n\t\t\tpadding: 1.5rem;\n\t\t\tmargin-bottom: 10rem;\n\t\t\t">\n\t\t\t\t<h2>Your My IMEI Checker order is now complete</h2>\n\t  \t\t</div>\n\t\t\t<div>\n\t\t\t\t<div\n\t\t\t\tstyle="\n\t\t\t\t\tbackground-color: rgba(8, 8, 8, 0.9);\n\t\t\t\t\tcolor: whitesmoke;\n\t\t\t\t\tpadding: 1rem;\n\t\t\t\t\tfont-size: large;\n\t\t\t\t">\n\t\t\t\t\t<p>Thanks for shopping with us</p>\n\t\t\t\t</div>\t\n\t\t\t\t<div style="padding: 1.5rem 1.5rem 0rem 1.5rem">\n\t\t\t\t\t<p>Hi '
			.concat(
				first_name.split(/\s+/)[0],
				',</p>\n\t\t\t\t\t<p>We have finished processing your order.</p>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t\n\t\t\t\t\t',
			)
			.concat(
				service
					.map(function (serviceName, index) {
						return '<h3>'
							.concat(
								serviceName,
								' All in One Information</h3>\n\t\t\t\t\t\t\t\t<h4>Images</h4>\n\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\theight="100"\n\t\t\t\t\t\t\t\t\tstyle="border: 2px solid black"\n\t\t\t\t\t\t\t\t\tsrc="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315935"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t<table style="width: 100%; margin-top: 1rem">\n\t\t\t\t\t\t\t\t\t',
							)
							.concat(
								order_data[index]
									.map(function (keyVal) {
										return '<tr><td >'.concat(keyVal.label, '</td><td>').concat(keyVal.value, '</td></tr>')
									})
									.join(''),
								'\n\t\t\t\t\t\t\t\t</table>',
							)
					})
					.join('<br/>'),
				'\n\t\t\t\t\t<hr />\n\t\t\t\t\t<p>\n\t\t\t\t\t\tClick <a href="#">here</a> to learn more about each of your results.\n\t\t\t\t\t</p>\t\n\t\t\t\t\t<hr />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div style="padding: 0 1.5rem 1.5rem 1.5rem">\n\t\t\t\t<h3>[Order #',
			)
			.concat(_id, '](')
			.concat((0, _renderFormattedDate.FormattedDate)(new Date(date)), ')</h3>\n\t\t\t\t<table style="width: 100%; ')
			.concat(tableStyle, '">\n\t\t\t\t\t<tr style="')
			.concat(tableStyle, '">\n\t\t\t\t\t\t<td style="width: 70%; ')
			.concat(tableStyle, '">Product</td>\n\t\t\t\t\t\t<td style="width: 10%; ')
			.concat(tableStyle, '">Quantity</td>\n\t\t\t\t\t\t<td style="width: 20%; ')
			.concat(tableStyle, '">Price</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t')
			.concat(
				Array.from(servicePricing.values())
					.map(function (_ref) {
						var name = _ref.name,
							quantity = _ref.quantity,
							price = _ref.price
						return '<tr style="'
							.concat(tableStyle, '"><td style="')
							.concat(tableStyle, '">')
							.concat(name, ' All in One Information</td><td style="')
							.concat(tableStyle, '">')
							.concat(quantity, '</td><td style="')
							.concat(tableStyle, '">$')
							.concat(price, '</td></tr>')
					})
					.join(''),
				'\n\t\t\t\t\t<tr style="',
			)
			.concat(tableStyle, '"><td style="')
			.concat(tableStyle, '" colspan="2">Subtotal:</td><td style="')
			.concat(tableStyle, '">$')
			.concat(subtotal, '</td></tr>\n\t\t\t\t\t<tr style="')
			.concat(tableStyle, '"><td style="')
			.concat(tableStyle, '" colspan="2">Shipping:</td><td style="')
			.concat(tableStyle, '">Free Shipping</td></tr>\n\t\t\t\t\t<tr style="')
			.concat(tableStyle, '"><td style="')
			.concat(tableStyle, '" colspan="2">Payment method:</td><td style="')
			.concat(tableStyle, '">')
			.concat(payment_method, '</td></tr>\n\t\t\t\t\t<tr style="')
			.concat(tableStyle, '"><td style="')
			.concat(tableStyle, '" colspan="2">Total:</td><td style="')
			.concat(tableStyle, '">$')
			.concat(
				total,
				'</td></tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div style="padding: 1.5rem">\n\t\t\t\t<h4>Billing address</h4>\n\t\t\t\t<div\n\t\t\t\tstyle="\n\t\t\t\t  padding: 1rem;\n\t\t\t\t  border: 1px solid rgba(0, 0, 0, 0.5);\n\t\t\t\t  font-style: italic;\n\t\t\t\t">\n\t\t\t\t\t<div>bashar khalil</div>\n\t\t\t\t\t<div>1608 N 2nd St</div>\n\t\t\t\t\t<div>Philadelphia, PA 19122</div>\n\t\t\t\t\t<div>2159390130</div>\n\t\t\t\t\t<div>philliewireless@gmail.com</div>\n\t\t\t  </div>\n\t\t\t  <p style="margin-top: 2rem">Thanks for shopping with us.</p>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t',
			),
	}
	var transporter = _nodemailer['default'].createTransport({
		host: 'smtp.mailgun.org',
		port: 587,
		secure: false,
		auth: { user: process.env.nodemailer_username, pass: process.env.nodemailer_password },
	})
	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			res.status(400).json({ message: err.message })
		} else {
			res.status(200).json({ message: 'Your message was successfully sent!' })
		}
	})
}
var _default = sendMail
exports['default'] = _default
