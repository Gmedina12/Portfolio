import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import style from './ContactForm.module.css'


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}


function isValidName(name) {
  const nameRegex = /^[A-Za-z\s]{1,50}$/
  return nameRegex.test(name)
}


function isValidSubject(subject) {
  const subjectRegex = /^[A-Za-z0-9\s]{1,50}$/
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
    <div className={style.containerForm }>
    <form onSubmit={handleSubmit}>

      <div className={style.group }>
        <label>
          Name *: <input type="text" value={name} placeholder='Your name' onChange={(e) => setName(e.target.value)} required
    onInvalid={(e) => e.target.setCustomValidity('Name is required. Only alphanumeric characters')}
    onInput={(e) => e.target.setCustomValidity('')}/>
        </label>
      </div>
      {!isValidName(name) && <p>{Error.message}</p>}

      <div className={style.group }>
        <label>
          Email *: <input type="email" value={sender} placeholder='An email that you have access to' onChange={(e) => setSender(e.target.value)} required
    onInvalid={(e) => e.target.setCustomValidity('Invalid email. Please include an @ in the entered email.')}
    onInput={(e) => e.target.setCustomValidity('')}/>
        </label>
      </div>
      {!isValidEmail(sender) && <p>{Error.message}</p>}

      <div className={style.group }>
        <label>
          Subject *: <input type="text" value={subject} placeholder='Contact reason' onChange={(e) => setSubject(e.target.value)} required
    onInvalid={(e) => e.target.setCustomValidity("Enter a subject; I'd like to know what we're going to talk about")}
    onInput={(e) => e.target.setCustomValidity('')} />
        </label>
      </div>
      {!isValidSubject(subject) && <p>{Error.message}</p>}

      <div>
        <label>
          <p> Message: </p> <br/>
          <ReactQuill 
            value={message} 
            onChange={(value) => setMessage(value)} 
            modules={quillModules} 
            formats={quillFormats}
            required
    onInvalid={(e) => e.target.setCustomValidity('Oh! A message is needed to start a conversation')}
    onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>
      </div>

      <br/>

      <div className={style.containerSubmitBut}>
        <button type="submit" className={style.submitButton}>
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
};

const quillFormats = [
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link'
];