import { FormattedDate } from '../../utils/renderFormattedDate'
import nodemailer from 'nodemailer'

const sendMail = (req, res) => {
	const { date, discount, email, first_name, order_data, payment_method, price, service, subtotal, total, _id } =
		req.body

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
	 * 3. Image and shipping are static as of the moment
	 **/
	const mailOptions = {
		from: process.env.nodemailer_username,
		to: `${email}`,
		subject: `Taakad All in One Information`,
		html: `
		<div style="margin: 0; padding: 0; box-sizing: border-box">
			<div
			style="
			background-color: rgba(8, 8, 8, 0.9);
			color: whitesmoke;
			padding: 1.5rem;
			margin-bottom: 10rem;
			">
				<h2>Your My IMEI Checker order is now complete</h2>
	  		</div>
			<div>
				<div
				style="
					background-color: rgba(8, 8, 8, 0.9);
					color: whitesmoke;
					padding: 1rem;
					font-size: large;
				">
					<p>Thanks for shopping with us</p>
				</div>	
				<div style="padding: 1.5rem 1.5rem 0rem 1.5rem">
					<p>Hi ${first_name.split(/\s+/)[0]},</p>
					<p>We have finished processing your order.</p>
					<hr/>
					
					${service
						.map(
							(serviceName, index) =>
								`<h3>${serviceName} All in One Information</h3>
								<h4>Images</h4>
								<img
									height="100"
									style="border: 2px solid black"
									src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315935"
								/>
								<table style="width: 100%; margin-top: 1rem">
									${order_data[index].map((keyVal) => `<tr><td >${keyVal.label}</td><td>${keyVal.value}</td></tr>`).join('')}
								</table>`,
						)
						.join('<br/>')}
					<hr />
					<p>
						Click <a href="#">here</a> to learn more about each of your results.
					</p>	
					<hr />
				</div>
			</div>
			<div style="padding: 0 1.5rem 1.5rem 1.5rem">
				<h3>[Order #${_id}](${FormattedDate(new Date(date))})</h3>
				<table style="width: 100%; ${tableStyle}">
					<tr style="${tableStyle}">
						<td style="width: 70%; ${tableStyle}">Product</td>
						<td style="width: 10%; ${tableStyle}">Quantity</td>
						<td style="width: 20%; ${tableStyle}">Price</td>
					</tr>
					${Array.from(servicePricing.values())
						.map(
							({ name, quantity, price }) =>
								`<tr style="${tableStyle}"><td style="${tableStyle}">${name} All in One Information</td><td style="${tableStyle}">${quantity}</td><td style="${tableStyle}">$${price}</td></tr>`,
						)
						.join('')}
					<tr style="${tableStyle}"><td style="${tableStyle}" colspan="2">Subtotal:</td><td style="${tableStyle}">$${subtotal}</td></tr>
					<tr style="${tableStyle}"><td style="${tableStyle}" colspan="2">Shipping:</td><td style="${tableStyle}">Free Shipping</td></tr>
					<tr style="${tableStyle}"><td style="${tableStyle}" colspan="2">Payment method:</td><td style="${tableStyle}">${payment_method}</td></tr>
					<tr style="${tableStyle}"><td style="${tableStyle}" colspan="2">Total:</td><td style="${tableStyle}">$${total}</td></tr>
				</table>
			</div>
			<div style="padding: 1.5rem">
				<h4>Billing address</h4>
				<div
				style="
				  padding: 1rem;
				  border: 1px solid rgba(0, 0, 0, 0.5);
				  font-style: italic;
				">
					<div>bashar khalil</div>
					<div>1608 N 2nd St</div>
					<div>Philadelphia, PA 19122</div>
					<div>2159390130</div>
					<div>philliewireless@gmail.com</div>
			  </div>
			  <p style="margin-top: 2rem">Thanks for shopping with us.</p>

			</div>
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
				message: err.message,
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
