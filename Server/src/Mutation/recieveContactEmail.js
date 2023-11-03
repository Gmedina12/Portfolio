import { transporter } from '../../Config/nodemailer.js';
// import {sendConfirmationEmail} from './sendConfirmationEmail.js'
// import 'dotenv/config'

export const recieveContactEmail = async (_, {sender, subject, message}) => {
    const mailOptions = {
        from: sender,
        to: 'gina.medina.1994@gmail.com',
        subject: subject,
        text: `Message from ${sender}\n\n${message}`
    }
    try {
        await transporter.sendMail(mailOptions);
        
        // sendConfirmationEmail();
        return `Thanks for contact me!⭐ ${sender} ${subject}${message}`
        
      } catch (error) {
        console.error('Error al recibir el correo:', error);
        throw new Error('500 - Internal server error: ', error);
      }
    };
    
