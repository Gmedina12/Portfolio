import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}


function isValidName(name) {
  const nameRegex = /^[A-Za-z\s]{1,50}$/
  return nameRegex.test(name)
}


function isValidSubject(subject) {
  const subjectRegex = /^[A-Za-z0-9\s]{1,100}$/
  return subjectRegex.test(subject)
}

const RECIEVE_CONTACT_EMAIL = gql`
  mutation RecieveContactEmail($name: String!, $sender: String!, $subject: String!, $message: String!) {
    recieveContactEmail(name: $name, sender: $sender, subject: $subject, message: $message)
  }`;

const SEND_CONFIRMATION_EMAIL = gql`
  mutation SendConfirmationEmail($sender: String!, $subject: String!) {
    sendConfirmationEmail(sender: $sender, name: $name)
  }`;

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [sender, setSender] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [formValid, setFormValid] = useState(false)

  const validateForm = () => {
    const isNameValid = isValidName(name);
    const isEmailValid = isValidEmail(sender);
    const isSubjectValid = isValidSubject(subject)

    const isFormValid = isNameValid && isEmailValid && isSubjectValid;
    setFormValid(isFormValid);

    return isFormValid;
  };

  const [recieveContactEmail] = useMutation(RECIEVE_CONTACT_EMAIL);
  const [sendConfirmationEmail] = useMutation(SEND_CONFIRMATION_EMAIL);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      recieveContactEmail({ variables: { name, sender, subject, message } });
      sendConfirmationEmail({ variables: { sender, name } });
      setName('');
      setSender('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name *: <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      {!isValidName(name) && <p>Error: Invalid entry. Only Alphanumeric characters</p>}

      <div>
        <label>
          Email *: <input type="email" value={sender} onChange={(e) => setSender(e.target.value)} required />
        </label>
      </div>
      {!isValidEmail(sender) && <p>Error: Invalid email</p>}

      <div>
        <label>
          Subject *: <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>
      </div>
      {!isValidSubject(subject) && <p>Error: Invalid entry. Only Alphanumeric characters</p>}

      <div>
        <label>
          <p> Message *: </p>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
      </div>

      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
