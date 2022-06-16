const nodemailer = require('nodemailer')

const sendMail = (req, res) => {
	const { name, subject, email, message } = req.body

	/**
	 * @TODO
	 * 1. Add regex, to check email validity(optional)
	 */
	if (!name || !email || !subject || !message) {
		return res.status(400).json({
			message: 'Fill all empty fields',
		})
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

	/**
	 * @NOTE:
	 * 1. For testing purposes, you can put your email to "to" field.
	 * 2. For testing bulk sending, you put list of email separated by comma(,) in the "to" field. (e.g. 'test1@email.com, test2@email.com, test3@email.com')
	 */
	const mailOptions = {
		from: process.env.nodemailer_username,
		// to: 'portfolio-inbox.5004bb@burnermail.io',
		to: `${email}`,
		subject: `${name} - ${subject}`,
		text: `${message} | Sent from: ${email}`,
		html: `<div>${message}</div><p>Sent from:
        ${email}</p>`,
	}

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
