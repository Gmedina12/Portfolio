import React from 'react'
import { ContactForm } from '../../components/ContactForm/ContactForm.jsx'

export const ContactPage = () => {
    return [
        <div>
            <div>
                <h2>Get in touch</h2>
            </div>
            <ContactForm />
            <br></br>
            <div>
                <a href='https://drive.google.com/file/d/1Muxe7VsQ24OrXjqu2U4Q-OXEvxaWvO5L/view?usp=drive_link'>
                    <button>Download CV - EN 📥</button>
                </a>
            </div>
            <br></br>
            <div>
                <a href='https://drive.google.com/file/d/1I278jvSv03UI3oqEqJo8xsi7aBbvGjqg/view?usp=drive_link'>
                    <button>Descargar CV - ES 📥</button>
                </a>
            </div>
        </div>
    ]
}