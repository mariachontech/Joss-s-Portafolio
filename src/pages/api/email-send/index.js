// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var Brevo = require("@getbrevo/brevo")

const defaultClient = Brevo.ApiClient.instance

export default async function handler(req, res) {
	const { name, email, message, subject } = req.body

	console.log(name, email, message, subject)

	// const apiKey = defaultClient.authentications["api-key"]
	const sendTo = [{ email: "jjtellezg@gmail.com" }]

	if (email !== "") {
		sendTo.push({ email })
	}

	const apiKey = defaultClient.authentications["api-key"]
	apiKey.apiKey = process.env.API_KEY_SENDINGBLUE

	const apiInstance = new Brevo.TransactionalEmailsApi()

	const sendSmtpEmail = new Brevo.SendSmtpEmail()

	sendSmtpEmail.subject = "Mensaje recibido, gracias..."
	sendSmtpEmail.htmlContent = `<html><body>
	<h2>El mensaje ha sido recibido correctamente, pronto me comunicare contigo, gracias...</h2>
	<p>Nombre: ${name}</p>
	<p>subjectc: ${subject}</p>
	<p>Email: ${email}</p>
	<p>Mensaje: ${message}</p>
	</body></html>`
	sendSmtpEmail.sender = {
		name: "José Juan Téllez Guzmán",
		email: "joss@mariachon.com ",
	}
	sendSmtpEmail.to = sendTo
	// sendSmtpEmail.cc = [{ email: 'example2@example2.com', name: 'Janice Doe' }]
	// sendSmtpEmail.bcc = [{ email: 'John Doe', name: 'example@example.com' }]
	// sendSmtpEmail.replyTo = { email: 'replyto@domain.com', name: 'John Doe' }

	// sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" }
	// sendSmtpEmail.templateId = 2
	// sendSmtpEmail.params = {
	// 	email,
	// 	name,
	// 	subject,
	// 	message,
	// }

	// setInterval(() => {
	//   res.send('ok')
	// }, 2000)

	apiInstance.sendTransacEmail(sendSmtpEmail).then(
		function (data) {
			return res.json({ success: "ok" })
		},
		function (error) {
			console.error(error)
			res.send(error)
		}
	)
}
