import nodemailer from "nodemailer";

async function email(to, subject, body) {
	let transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: process.env.SMTP_SECURE,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	await transporter.sendMail({
		from: process.env.SMTP_USER,
		to: to,
		subject: subject,
		html: body,
	});
}

export default email;