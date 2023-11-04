import { transporter } from '../../Config/nodemailer.js';

export const recieveContactEmail = async (_, {name, sender, subject, message}) => {
    const mailOptions = {
        from: sender,
        to: 'gina.medina.1994@gmail.com',
        subject: subject,
        text: `Message from ${name}\n\n${message}`
    }
    try {
        await transporter.sendMail(mailOptions);
        
        return `Thanks for contact me ${name}!⭐`
        
      } catch (error) {
        console.error('Error al recibir el correo:', error);
        throw new Error('500 - Internal server error: ', error);
      }
    };
    
