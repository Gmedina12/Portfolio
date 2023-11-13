import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const RECIEVE_CONTACT_EMAIL = gql`
  mutation RecieveContactEmail($name: String!, $sender: String!, $subject: String!, $message: String!) {
    recieveContactEmail(name: $name, sender: $sender, subject: $subject, message: $message)
  }`;
export const SEND_CONFIRMATION_EMAIL = gql`
  mutation SendConfirmationEmail($sender: String!, $subject: String!) {
    sendConfirmationEmail(sender: $sender, subject: $subject)
  }`;

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [recieveContactEmail] = useMutation(RECIEVE_CONTACT_EMAIL);
  const [sendConfirmationEmail] = useMutation(SEND_CONFIRMATION_EMAIL);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await recieveContactEmail({ variables: { name, sender, subject, message } });
      await sendConfirmationEmail({ variables: { sender } });

      setName('');
      setSender('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre: <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Correo electrónico: <input type="email" value={sender} onChange={e => setSender(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Asunto: <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
         <p> Mensaje: </p><textarea value={message} onChange={e => setMessage(e.target.value)} required />
        </label>
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};
