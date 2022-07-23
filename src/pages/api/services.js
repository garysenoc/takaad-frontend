import { FormattedDate } from '../../utils/renderFormattedDate'
import nodemailer from 'nodemailer'

const sendMail = (req, res) => {
	const { date, discount, email, first_name, order_data, price, service, subtotal, total, _id } = req.body

	const tableStyle = 'padding: 1rem; border: 1px solid black; border-collapse: collapse;'

	const servicePricing = new Map()
	service.map((serviceName, index) => {
		const data = servicePricing.get(serviceName)
		servicePricing.set(serviceName, {
			name: serviceName,
			quantity: 1 + (data ? data.quantity : 0),
			price: price[index] + (data ? data.price : 0),
		})
	})

	/**
	 * @NOTE:
	 * 1. For testing purposes, you can put your email to "to" field.
	 * 2. For testing bulk sending, you put list of email separated by comma(,) in the "to" field. (e.g. 'test1@email.com, test2@email.com, test3@email.com')
	 */
	const mailOptions = {
		from: process.env.nodemailer_username,
		to: `${email}`,
		subject: `Taakad All in One Information`,
		html: `
			<div style="background-color: black; color: white; padding: 5rem; padding-top: 2rem; padding-bottom: 2rem;">
				<h1>Thank you for shopping with us</h1>
			</div>
			<div style="padding: 2rem;">
				<p>Hi ${first_name.split(/\s+/)[0]},</p>
				<p>We have finished processing your order.</p>
				<hr/>
				${service
					.map(
						(serviceName, index) =>
							`<h3>${serviceName} All in One Information<h3/>
							<table>
								${order_data[index]
									.map(
										(keyVal) =>
											`<tr><td style="padding-right: 0.5rem;">${keyVal.label}</td><td>${keyVal.value}</td></tr>`,
									)
									.join('')}
							</table>`,
					)
					.join('<br/>')}
				<hr/>
				<h3>[Order ID: ${_id}] [${FormattedDate(new Date(date))}]</h3>
				<table style="width: 100%; ${tableStyle}">
					<tr style="${tableStyle}">
						<td style="${tableStyle}">Product</td>
						<td style="${tableStyle}">Quantity</td>
						<td style="${tableStyle}">Price</td>
					</tr>
					${Array.from(servicePricing.values())
						.map(
							({ name, quantity, price }) =>
								`<tr style="${tableStyle}"><td style="${tableStyle}">${name} All in One Information</td><td style="${tableStyle}">${quantity}</td><td style="${tableStyle}">$${price}</td></tr>`,
						)
						.join('')}
					<tr style="${tableStyle}"><td style="${tableStyle}" colspan="2">Subtotal</td><td style="${tableStyle}">$${subtotal}</td></tr>
					<tr style="${tableStyle}"><td style="${tableStyle}" colspan="2">Discount</td><td style="${tableStyle}">$${discount}</td></tr>
					<tr style="${tableStyle}"><td style="${tableStyle}" colspan="2">Total</td><td style="${tableStyle}">$${total}</td></tr>
				</table>
			</div>
		`,
	}

	let transporter = nodemailer.createTransport({
		host: 'smtp.mailgun.org',
		port: 587,
		secure: false,
		auth: {
			user: process.env.nodemailer_username,
			pass: process.env.nodemailer_password,
		},
	})

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			// console.error(err)
			res.status(400).json({
				message: 'Something went wrong!',
			})
		} else {
			// console.log('Message sent: %s', info.messageId)

			res.status(200).json({
				message: 'Your message was successfully sent!',
			})
		}
	})
}

export default sendMail
