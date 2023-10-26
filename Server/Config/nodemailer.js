import nodemailer from 'nodemailer'
import 'dotenv/config'

const { GMAIL, GMAIL_PASS: PASS } = process.env

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: GMAIL,
        pass: PASS
    }
})

transporter.verify()
    .then(() => console.log('nodemailer has been configured'))
    .catch((error) => console.log(error.message))